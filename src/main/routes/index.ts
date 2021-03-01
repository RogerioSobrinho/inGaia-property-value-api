import { adaptRoute } from '@/main/adapters'
import { makePropertyValueController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/property-price/:squareMeterQuantity', adaptRoute(makePropertyValueController()))
}
