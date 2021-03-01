export class SquareMeterInvalidError extends Error {
  constructor () {
    super('The number of square meters must be between 10 and 10,000')
    this.name = 'SquareMeterInvalidError'
  }
}
