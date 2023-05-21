import axios from 'axios'
import { BASE_PATH } from '../utils/constants'
import { GetAllCoinsMarketsOptions } from '../interfaces/functions_interfaces'

export async function getAllCoinsMarkets(requestData : GetAllCoinsMarketsOptions) {
  const { vsCurrency, perPage, page } = requestData
  try {
    let url : string = `${BASE_PATH}/coins/markets?vs_currency=${vsCurrency}&per_page=${perPage}&page=${page}`
    let response = await axios.get(url)
    console.log("🚀 ~ file: cryptoList.ts:10 ~ getAllCoinsMarkets ~ response:", response)
    return response.data
  } catch (error) {
    return null
  }
}