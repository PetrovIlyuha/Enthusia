import { motion } from 'framer-motion';

import { useWeb3Context } from '@components/providers/web3';

const ConnectButton = () => {
  const { metamaskIsReady, loading, connect } = useWeb3Context();
  return loading ? null : metamaskIsReady ? (
    <motion.span
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.08, duration: 0.1 } }}
      onClick={connect}
      className='ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
      Connect Wallet
    </motion.span>
  ) : (
    <motion.a
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.08, duration: 0.1 } }}
      href='https://metamask.io/download'
      rel='noopener noreferer'
      target='_blank'
      className='ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
      Install MetaMask
    </motion.a>
  );
};

export default ConnectButton;
