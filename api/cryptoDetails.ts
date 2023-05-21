import axios from 'axios'
import { BASE_PATH } from '../utils/constants'
import { GetCoinDetailsOptions } from '../interfaces/functions_interfaces'

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