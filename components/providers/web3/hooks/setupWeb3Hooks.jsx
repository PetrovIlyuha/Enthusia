import { useAccount } from './useAccount';

const DEFAULT_HOOKS = {
  useAccount: () => ({account: null}),
};

const setupWeb3Hooks = web3 => {
  if (!web3) {
    return DEFAULT_HOOKS;
  }
  return {
    useAccount: useAccount(web3),
  };
};

export default setupWeb3Hooks;
