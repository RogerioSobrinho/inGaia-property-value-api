import { Controller, HttpResponse } from '@/presentation/protocols'
import { LoadPropertyValue } from '@/domain/usecases'
import { badRequest, forbidden, ok, serverError } from '@/presentation/helpers/http-helper'
import { InvalidParamError, MissingParamError, SquareMeterInvalidError } from '@/presentation/errors'

export class PropertyValueController implements Controller {
  constructor (
    private readonly loadPropertyValue: LoadPropertyValue
  ) { }

  async handle (request: PropertyValueController.Request): Promise<HttpResponse> {
    try {
      const { squareMeterQuantity } = request
      if (squareMeterQuantity) {
        if (isNaN(squareMeterQuantity)) {
          return forbidden(new InvalidParamError('squareMeterQuantity'))
        }
        const isValidSquareMeterQuantity = squareMeterQuantity >= 10 && squareMeterQuantity <= 10000
        if (!isValidSquareMeterQuantity) {
          return badRequest(new SquareMeterInvalidError())
        }
      } else {
        return forbidden(new MissingParamError('squareMeterQuantity'))
      }
      const propertyValue = await this.loadPropertyValue.load(squareMeterQuantity)
      return ok(propertyValue)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace PropertyValueController {
  export type Request = {
    squareMeterQuantity: number
  }
}
