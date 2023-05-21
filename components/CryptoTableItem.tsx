import React from 'react'
import { MarketCoins } from '../interfaces/market_coins';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

type CryptoItemProps = {
  coinInfo: MarketCoins;
};

export function CryptoTableItem(props: CryptoItemProps) {
  const { coinInfo } = props

  return (
    <a
    href={`/crypto/${coinInfo.id}`} 
    className='flex rounded-lg border-gray-200 border-2 mb-4 p-2 
    justify-between items-center duration-200 hover:bg-gray-200 hover:cursor-pointer'>
      <div className='w-1/5'>
        <img src={coinInfo.image} alt="Image for crypto" className='h-10' />
      </div>
      <div className='flex flex-col w-1/5'>
        <p>{(coinInfo.symbol).toUpperCase()}</p>
        <p className='text-xs truncate'>{(coinInfo.name).toUpperCase()}</p>
      </div>
      <div className='w-1/5'>
        <p className=''>${coinInfo.current_price}</p>
      </div>
      <div
        className='w-1/5 flex justify-between'
      >
        <p className={` ${coinInfo.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>{coinInfo.price_change_percentage_24h}</p>
        {coinInfo.price_change_percentage_24h > 0 ? (
          <div className='rounded-full text-white bg-green-600'>
            <IconChevronUp />
          </div>
        ) : (
          <div className='rounded-full text-white bg-red-600'>
            <IconChevronDown />
          </div>
        )}
      </div>
    </a>
  )
}
