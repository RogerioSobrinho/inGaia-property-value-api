export const squareMeterPricePath = {
  get: {
    tags: ['square-meter'],
    summary: 'API to get price the square meter',
    description: 'API to get price the square meter',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/squareMeterPrice'
            }
          }
        }
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
