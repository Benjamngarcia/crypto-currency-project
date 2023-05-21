import React from 'react'
import { MarketCoins } from '../interfaces/market_coins';
import { CryptoTableItem } from './CryptoTableItem';

type CryptoTableProps = {
  coinsInfo: MarketCoins[];
};

export function CryptoTable(props: CryptoTableProps) {
  const { coinsInfo } = props

  return (
    <section>
      {coinsInfo?.map(coin => (
        <CryptoTableItem coinInfo={coin} key={coin.id}/>
      ))}
    </section>
  )
}
