import { LoadPropertyValue } from '@/domain/usecases'
import { PropertyValueModel } from '@/domain/models'
import { PropertyValueController } from '.'
import { badRequest, forbidden, ok, serverError } from '@/presentation/helpers'

import faker from 'faker'
import { MissingParamError, SquareMeterInvalidError } from '../errors'

const mockRequest = (squareMeterQuantity: number = null): PropertyValueController.Request => ({
  squareMeterQuantity
})

export const throwError = (): never => {
  throw new Error()
}

export const mockPropertyValueModel = (): PropertyValueModel => {
  return {
    value: faker.random.number()
  }
}

export class LoadPropertyValueSpy implements LoadPropertyValue {
  propertyModel = mockPropertyValueModel()
  async load (_squareMeterQuantity: number): Promise<PropertyValueModel> {
    return this.propertyModel
  }
}

type SutTypes = {
  sut: PropertyValueController
  loadPropertyValueSpy: LoadPropertyValueSpy
}

const makeSut = (): SutTypes => {
  const loadPropertyValueSpy = new LoadPropertyValueSpy()
  const sut = new PropertyValueController(loadPropertyValueSpy)
  return {
    sut,
    loadPropertyValueSpy
  }
}

describe('PropertyValueController', () => {
  describe('load', () => {
    test('should throw if load throws', async () => {
      const { sut, loadPropertyValueSpy } = makeSut()
      jest.spyOn(loadPropertyValueSpy, 'load').mockImplementationOnce(throwError)
      const httpResponse = await sut.handle(mockRequest(12))
      expect(httpResponse).toEqual(serverError(new Error()))
    })

    test('Should return 204 if Square Meter Quantity is empty or null', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(mockRequest())
      expect(httpResponse).toEqual(forbidden(new MissingParamError('squareMeterQuantity')))
    })

    test('Should return 400 if Square Meter Quantity is less than 10', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(mockRequest(9))
      expect(httpResponse).toEqual(badRequest(new SquareMeterInvalidError()))
    })

    test('Should return 400 if Square Meter Quantity is greater than 10', async () => {
      const { sut } = makeSut()
      const httpResponse = await sut.handle(mockRequest(9))
      expect(httpResponse).toEqual(badRequest(new SquareMeterInvalidError()))
    })

    test('Should return 200 on success', async () => {
      const { sut, loadPropertyValueSpy } = makeSut()
      const httpResponse = await sut.handle(mockRequest(11))
      expect(httpResponse).toEqual(ok(loadPropertyValueSpy.propertyModel))
    })
  })
})
