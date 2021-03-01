import { LoadSquareMeterService } from '@/data/protocols'
import { SquareMeterModel } from '@/domain/models'
import http from '@/infra/helpers/http-helper'

export class SquareMeterService implements LoadSquareMeterService {
  async load (): Promise<SquareMeterModel> {
    try {
      const response = await http.get('/square-meter/price')
      return response.data
    } catch (error) {
      console.error(error)
      return { price: 0 }
    }
  }
}
