import { LoadPropertyValue } from '@/domain/usecases'
import { PropertyValueModel } from '@/domain/models'
import { LoadSquareMeterService } from '@/data/protocols'

export class DBLoadPropertyValue implements LoadPropertyValue {
  constructor (
    private readonly squareMeterService: LoadSquareMeterService
  ) { }

  async load (squareMeterQuantity: number): Promise<PropertyValueModel> {
    const squareMeter = await this.squareMeterService.load()
    const propertyValue = (squareMeterQuantity * squareMeter.price).toFixed(2)
    return { value: +propertyValue }
  }
}
