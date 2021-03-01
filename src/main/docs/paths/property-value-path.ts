export const propertyValuePath = {
  get: {
    tags: ['property-value'],
    summary: 'API to get value the property',
    description: 'API to get value the property',
    parameters: [{
      in: 'path',
      name: 'squareMeterQuantity',
      description: 'Square Meter Quantity',
      required: true,
      schema: {
        type: 'number'
      }
    }],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/propertyValue'
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
