import detectEthereumProvider from '@metamask/detect-provider';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Web3 from 'web3';

const Web3Context = createContext(null);

const Web3Provider = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isInitialized: false,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({ provider, web3, contract: null, isInitialized: true });
      } else {
        setWeb3Api(api => ({ ...api, isInitialized: true }));
        console.error('You need to install Metamask Chrome Extension.');
      }
    };
    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      loading: !web3Api.isInitialized,
      metamaskIsReady: web3Api.isInitialized && web3Api.web3,
      connect: web3Api.provider
        ? async () => {
            try {
              await web3Api.provider.request({ method: 'eth_requestAccounts' });
            } catch (error) {
              location.reload();
            }
          }
        : () => {
            console.error("Can't establish connection to MetaMask.");
          },
    };
  }, [web3Api]);
  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
};

export const useWeb3Context = () => {
  return useContext(Web3Context);
};

export default Web3Provider;
