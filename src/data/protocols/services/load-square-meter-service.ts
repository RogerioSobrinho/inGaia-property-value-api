import { SquareMeterModel } from '@/domain/models'

export interface LoadSquareMeterService {
  load: () => Promise<SquareMeterModel>
}
