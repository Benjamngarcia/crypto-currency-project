import axios from 'axios'
import { BASE_PATH } from '../utils/constants'
import { GetCoinDetailsOptions, GetRangeHistoryOptions } from '../interfaces/functions_interfaces'

export async function getDetailsOneCoin(requestData : GetCoinDetailsOptions) {
  const { id } = requestData
  try {
    let url : string = `${BASE_PATH}/coins/${id}`
    let response = await axios.get(url)
    return response.data
  } catch (error) {
    return null
  }
}

export async function getRangeCoin(requestData : GetRangeHistoryOptions) {
  const { id, vsCurrency, from, to } = requestData
  try {
    let url : string = `${BASE_PATH}/coins/${id}/market_chart/range?vs_currency=${vsCurrency}&from=${from}&to=${to}`
    let response = await axios.get(url)
    return response.data
  } catch (error) {
    return null
  }
}