import { adaptRoute } from '@/main/adapters'
import { makePropertyValueController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/property-value/:squareMeterQuantity', adaptRoute(makePropertyValueController()))
}
