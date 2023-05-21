import { useState, useMemo } from 'react'
import type { AppProps } from 'next/app'
import { MainLayout } from '../layouts/MainLayout'
import { GetAllCoinsMarketsOptions } from '../interfaces/functions_interfaces'
import PaginationContext from '../context/PaginationContext'
import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  const [vsCurrency, setVsCurrency] = useState<string>('usd')
  const [perPage, setPerPage] = useState<number>(10)
  const [page, setPage] = useState<number>(1)

  let infoRequestAllMarket: GetAllCoinsMarketsOptions = { vsCurrency, perPage, page }

  const incrementPage = (page: number) => {
    setPage(page + 1)
  }

  const decrementPage = (page: number) => {
    setPage(page - 1)
  }

  const changePage = (page: number) => {
    setPage(page)
  }

  const paginationData = useMemo(() => ({
    infoRequestAllMarket,
    incrementPage,
    decrementPage,
    changePage
  }),
    [page])

  return (
    <PaginationContext.Provider value={paginationData}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </PaginationContext.Provider>
  )
}
