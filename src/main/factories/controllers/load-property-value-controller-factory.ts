import { Controller } from '@/presentation/protocols'
import { makeDbPropertyValue } from '@/main/factories/usecases'
import { PropertyValueController } from '@/presentation/controllers'

export const makePropertyValueController = (): Controller => {
  return new PropertyValueController(makeDbPropertyValue())
}
