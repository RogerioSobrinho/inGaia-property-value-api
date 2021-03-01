import { LoadPropertyValue } from '@/domain/usecases'
import { DBLoadPropertyValue } from '@/data/usecases'
import { SquareMeterService } from '@/infra/services/square-meter-service'

export const makeDbPropertyValue = (): LoadPropertyValue => {
  const squareMeterService = new SquareMeterService()
  return new DBLoadPropertyValue(squareMeterService)
}
