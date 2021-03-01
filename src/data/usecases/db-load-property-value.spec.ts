import faker from 'faker'
import { LoadSquareMeterService } from '@/data/protocols'
import { SquareMeterModel } from '@/domain/models'
import { DBLoadPropertyValue } from '.'

export const throwError = (): never => {
  throw new Error()
}

export const mockSquareMeterModel = (): SquareMeterModel => {
  return {
    price: faker.random.number()
  }
}

export class LoadSquareMeterServiceSpy implements LoadSquareMeterService {
  surveyModel = mockSquareMeterModel()
  async load (): Promise<SquareMeterModel> {
    return this.surveyModel
  }
}

type SutTypes = {
  sut: DBLoadPropertyValue
  loadSquareMeterServiceSpy: LoadSquareMeterServiceSpy
}

const makeSut = (): SutTypes => {
  const loadSquareMeterServiceSpy = new LoadSquareMeterServiceSpy()
  const sut = new DBLoadPropertyValue(loadSquareMeterServiceSpy)
  return {
    sut,
    loadSquareMeterServiceSpy
  }
}

describe('DbLoadSquareMeter UseCase', () => {
  test('Should throw if load throws', async () => {
    const { sut, loadSquareMeterServiceSpy } = makeSut()
    jest.spyOn(loadSquareMeterServiceSpy, 'load').mockImplementationOnce(throwError)
    const promise = sut.load(1)
    await expect(promise).rejects.toThrow()
  })

  test('Should call load if return 0', async () => {
    const { sut, loadSquareMeterServiceSpy } = makeSut()
    loadSquareMeterServiceSpy.surveyModel.price = 0
    const propertyValueResult = await sut.load(1)
    expect(propertyValueResult.value).toBe(0)
  })

  test('Should return load on success', async () => {
    const { sut, loadSquareMeterServiceSpy } = makeSut()
    const propertyValueResult = await sut.load(1)
    expect(propertyValueResult.value).toEqual(loadSquareMeterServiceSpy.surveyModel.price)
  })
})
