import app from '@/main/config/app'
import request from 'supertest'

describe('Routes', () => {
  describe('GET /property-value/:squareMeterQuantity', () => {
    test('Should return 403 if paramater is NaN', async () => {
      await request(app)
        .get('/api/property-value/abc')
        .expect(403)
    })

    test('Should return 400 if paramater is invalid', async () => {
      await request(app)
        .get('/api/property-value/8')
        .expect(400)
    })

    test('Should return 200 on success', async () => {
      await request(app)
        .get('/api/property-value/10')
        .expect(200)
    })
  })
})
