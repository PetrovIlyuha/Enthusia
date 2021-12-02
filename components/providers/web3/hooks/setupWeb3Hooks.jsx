import {accountsHandler as createUseAccounts} from './useAccount';
import {networkHandler as createUseNetwork} from './useNetwork'


const setupWeb3Hooks = (...deps) => {
  return {
    useAccount: createUseAccounts(...deps),
    useNetwork: createUseNetwork(...deps)
  };
};

export default setupWeb3Hooks;
