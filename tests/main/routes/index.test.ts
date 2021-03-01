import app from '@/main/config/app'
import request from 'supertest'

describe('Routes', () => {
  describe('GET /property-price/:squareMeterQuantity', () => {
    test('Should return 403 if paramater is NaN', async () => {
      await request(app)
        .get('/api/property-price/abc')
        .expect(403)
    })

    test('Should return 400 if paramater is invalid', async () => {
      await request(app)
        .get('/api/property-price/8')
        .expect(400)
    })

    test('Should return 200 on success', async () => {
      await request(app)
        .get('/api/property-price/10')
        .expect(200)
    })
  })
})
