import React from "react";
import Breadcrumbs from "../common/Breadcrumbs";
import EthCurrentPrices from "../web3/EthCurrentPrices";
import WalletInfo from "../web3/WalletInfo";

const MarketHeader = () => {
  return (
    <>
      <WalletInfo />
      <EthCurrentPrices />
      <Breadcrumbs />
    </>
  );
};

export default MarketHeader;
