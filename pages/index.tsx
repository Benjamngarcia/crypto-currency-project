import { useState, useEffect } from "react"
import { getAllCoinsMarkets } from "../api/cryptoList"
import { MarketCoins } from '../interfaces/market_coins';
import { CryptoTable } from "../components/CryptoTable";
import { Pagination } from '../components/Pagination';
import usePagination from "../hooks/usePagination";


export default function Home() {
  const [coinsInfo, setCoinsInfo] = useState<MarketCoins[]>([])

  const paginationInfo = usePagination()

  useEffect(() => {
    async function fetchData() {
      let requestAllCoins = await getAllCoinsMarkets(paginationInfo.infoRequestAllMarket)
      setCoinsInfo(requestAllCoins)
    }
    fetchData()
  }, [paginationInfo.infoRequestAllMarket.page])

  if(coinsInfo == null) return

  return (
    <>
      <CryptoTable coinsInfo={coinsInfo} />
      <Pagination />
    </>
  )
}
