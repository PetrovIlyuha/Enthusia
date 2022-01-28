import React from "react";
import { useWalletInfo } from "@components/hooks/web3";
import { motion } from "framer-motion";

const WalletInfo = () => {
  const { account, network } = useWalletInfo();
  return (
    <section className="w-8/12 mx-auto text-white bg-indigo-600 rounded-lg shadow-lg mb-10">
      <div className="p-12">
        <h1 className="text-2xl">Hello, {account.data}</h1>
        <h2 className="subtitle mb-5 text-xl">
          Ready to roll to gain new insights?!
        </h2>
        <div className="flex justify-between items-center">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              >
                Learn how to purchase
              </a>
            </div>
          </div>
          {network.hasInitialResponse && network.data ? (
            <div>
              {!network.isSupported && (
                <div className="bg-red-400 p-4 rounded-lg shadow-lg text-yellow-200">
                  <div className="font-medium">
                    We&apos;ve detected wrong Network
                  </div>
                  <div className="font-bold">
                    Consider connecting to: {` `}
                    <span className="text-2xl">{network.targetNetwork}</span>
                  </div>
                </div>
              )}
              <div>
                <span className="mr-2">Currently on </span>
                <strong className="text-2xl">{network.data}</strong>
              </div>
            </div>
          ) : (
            <div>
              <motion.a
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.08, duration: 0.1 },
                }}
                href="https://metamask.io/download"
                rel="noopener noreferer"
                target="_blank"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-400 hover:bg-green-700"
              >
                Install MetaMask
              </motion.a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletInfo;
