import React, {useState, useEffect} from 'react';
import {useEthPrice} from "@components/hooks/useEthPrice";

const EthCurrentPrices = () => {
  const {data: ethCurrentPrice} = useEthPrice();
  const [lastPrice, setLastPrice] = useState(null)
  const [changeInPriceDetected, setChangeInPriceDetected] = useState(false);

  useEffect(() => {
    if (ethCurrentPrice !== lastPrice) {
      setLastPrice(ethCurrentPrice)
      setChangeInPriceDetected(true)
      setTimeout(() => {
        setChangeInPriceDetected(false);
      }, 600)
    } else {
      setLastPrice(ethCurrentPrice);
    }
  }, [ethCurrentPrice])

  console.log({lastPrice, changeInPriceDetected})
  return (
      <div className='max-w-3xl mx-auto flex justify-center'>
        <div className='grid grid-cols-2 space-x-10 my-3'>
          <div className='flex flex-1 items-stretch text-center'>
            <div
                className={`${changeInPriceDetected && 'shadow-lg bg-red-400 text-white'} p-10 border drop-shadow rounded-md hover:shadow-lg transform transition-all duration-500`}>
              <div>
                <span className='text-2xl font-bold'>ETH = {lastPrice}$</span>
              </div>
              <p className='text-xl text-gray-500'>Current eth Price</p>
            </div>
          </div>
          <div className='flex flex-1 items-stretch text-center'>
            <div className={`${changeInPriceDetected && "shadow-lg bg-red-400 text-white"} p-10 border drop-shadow rounded-md hover:shadow-lg transform transition-all duration-500`}>
              <div>
                <span className='text-2xl font-bold'>{(20 / ethCurrentPrice).toFixed(4)} Eth = 20 $</span>
              </div>
              <p className='text-xl text-gray-500'>Price per course</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EthCurrentPrices;
