const { createContext, useContext } = require('react');

const Web3Context = createContext(null);

const Web3Provider = ({ children }) => {
  return (
    <Web3Context.Provider value={{ test: 'Web3' }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => {
  return useContext(Web3Context);
};

export default Web3Provider;
