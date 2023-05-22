import { useEffect, useState } from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import { getRangeCoin } from "../api/cryptoDetails";
import usePagination from "../hooks/usePagination";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

type CryptoNameProps = {
  coinName: string;
};

export function Chart(props: CryptoNameProps) {
  const { coinName } = props
  const [rangeCoin, setRangeCoin] = useState()
  // console.log("🚀 ~ file: Chart.tsx:50 ~ Chart ~ rangeCoin:", rangeCoin)
  const paginationInfo = usePagination()

  // const today = new Date()
  // console.log("🚀 ~ file: Chart.tsx:49 ~ Chart ~ today:", today)
  // const yesterday = new Date(today)
  // console.log(typeof((new Date().getTime()) - 24*60*60*1000))
  useEffect(() => {
    async function fetchData() {
      let requestCoinRange = await getRangeCoin({
        id: coinName,
        vsCurrency: paginationInfo.infoRequestAllMarket.vsCurrency,
        from: String((new Date().getTime()) - 24 * 60 * 60 * 1000),
        to: String(Date.now()),
      })
      setRangeCoin(requestCoinRange)
    }
    fetchData()
  }, [])

  console.log({
    id: coinName,
    vsCurrency: paginationInfo.infoRequestAllMarket.vsCurrency,
    from: String((new Date().getTime()) - 24 * 60 * 60 * 1000),
    to: String(Date.now()),
  })

  return (
    <Card>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
