import { PropertyValueModel } from '@/domain/models'

export interface LoadPropertyValue {
  load: () => Promise<PropertyValueModel>
}
