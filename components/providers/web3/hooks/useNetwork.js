import {useEffect} from 'react'
import useSWR from "swr";
const NETWORK_NAMES = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache Network"
}

const targetNetwork = NETWORK_NAMES[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID];

export const networkHandler = (web3, provider) => () => {
  const {data, mutate, ...rest} = useSWR(() => web3 ? "web3/network" : null, async () => {
    return NETWORK_NAMES[await web3.eth.getChainId()];
  })

  useEffect(() => {
    provider && provider.on('chainChanged', (chainId) => {
      return mutate(NETWORK_NAMES[parseInt(chainId, 16)])
    })
  }, [])

  return {
      data,
      mutate,
      targetNetwork,
      isSupported: data === targetNetwork,
      ...rest
  }
}