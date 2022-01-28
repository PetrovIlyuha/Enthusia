import useSWR from "swr";

const ethPriceURL =
  "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";

const fetcher = async (ethPriceUrl) => {
  const res = await fetch(ethPriceUrl);
  const data = await res.json();
  return data.market_data.current_price.usd || null;
};

export const useEthPrice = () => {
  const swrRes = useSWR(ethPriceURL, fetcher, {
    refreshInterval: 3000,
  });
  return swrRes;
};
