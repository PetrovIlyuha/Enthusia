export const useAccount = web3 => () => {
  return {
    account: web3 ? 'test Account' : null,
  };
};
