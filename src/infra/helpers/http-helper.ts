import axios from 'axios'
import env from '@/main/config/env'

const instance = axios.create({
  baseURL: encodeURI(env.square_meter_url)
})

export default instance
