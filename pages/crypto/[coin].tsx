import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CoinDetailsInter } from '../../interfaces/coin_details'
import { getDetailsOneCoin } from '../../api/cryptoDetails'
import usePagination from '../../hooks/usePagination'

export default function CoinDetails() {
  const [coinDetails, setCoinDetails] = useState<CoinDetailsInter>()
  console.log("🚀 ~ file: [coin].tsx:8 ~ CoinDetails ~ coinDetails:", coinDetails)
  const { query } = useRouter()
  const pagination = usePagination()


  useEffect(() => {
    async function fetchData() {
      if (typeof query.coin === 'string') {
        let requestCoin = await getDetailsOneCoin({id: query.coin})
        setCoinDetails(requestCoin)
      }
    }
    fetchData()
  }, [])

  if (query.coin == null) return


  let currentPriceVsCurrency = coinDetails?.market_data.current_price?.[pagination.infoRequestAllMarket.vsCurrency]
  return (
    <>
      <div className='flex'>
        <img 
        className='h-20'
        src={coinDetails?.image.large} 
        alt="Image crypto" 
        />
        <div>
          <h2>{(coinDetails?.symbol)?.toUpperCase()}</h2>
          <h5>{(coinDetails?.name)?.toUpperCase()}</h5>
        </div>
      </div>
      <div>
        <p>${currentPriceVsCurrency}</p>
      </div>
    </>
  )
}
