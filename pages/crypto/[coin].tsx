import React from 'react'
import { useRouter } from 'next/router'

export default function CoinDetails() {
  const { query } = useRouter()
  console.log("🚀 ~ file: [coin].tsx:6 ~ CoinDetails ~ router:", query.coin)
  if(query.coin == null) return

  return (
    <div>{query.coin}</div>
  )
}
