import { PropertyValueModel } from '@/domain/models'

export interface LoadPropertyValue {
  load: (squareMeterQuantity: number) => Promise<PropertyValueModel>
}
