import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CoinDetailsInter } from '../../interfaces/coin_details'
import { getDetailsOneCoin } from '../../api/cryptoDetails'
import usePagination from '../../hooks/usePagination'
import { Chart } from '../../components/Chart'

export default function CoinDetails() {
  const [coinDetails, setCoinDetails] = useState<CoinDetailsInter>()
  // console.log("🚀 ~ file: [coin].tsx:8 ~ CoinDetails ~ coinDetails:", coinDetails)
  const { query } = useRouter()
  const pagination = usePagination()


  useEffect(() => {
    async function fetchData() {
      if (typeof query.coin === 'string') {
        let requestCoin = await getDetailsOneCoin({ id: query.coin })
        setCoinDetails(requestCoin)
      }
    }
    fetchData()
  }, [query.coin])

  if (!query.coin) return null


  let currentPriceVsCurrency = coinDetails?.market_data.current_price?.[pagination.infoRequestAllMarket.vsCurrency]
  const coinName = Array.isArray(query.coin) ? query.coin[0] : query.coin

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex w-2/3 items-center'>
          <img
            className='h-16 bg-blue-200 rounded-lg p-3'
            src={coinDetails?.image.large}
            alt="Image crypto"
          />
          <div className='ml-4'>
            <h2 className='font-bold'>{(coinDetails?.symbol)?.toUpperCase()}</h2>
            <h5 className='text-gray-400 text-xs font-bold'>{(coinDetails?.name)?.toUpperCase()}</h5>
          </div>
        </div>
        <div className='w-1/5'>
          <p className='font-bold'>${currentPriceVsCurrency}</p>
          <p className='text-gray-400 text-xs font-bold'>1 {(coinDetails?.symbol)?.toUpperCase()}</p>
        </div>
      </div>
      <Chart coinName={coinName}/>
    </>
  )
}
