import {useHooks} from '../../providers/web3'

const enhanceHook = (swr) => {
  return {
    ...swr,
    hasInitialResponse: swr.data || swr.error
  }
}
export const useAccount = () => {
  return {account: enhanceHook(useHooks(hooks => hooks.useAccount)())};
}

export const useNetwork = () => {
  return {network: enhanceHook(useHooks(hooks => hooks.useNetwork)())};
}
