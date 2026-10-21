import { InvalidInputError } from '@/domain/InvalidInputError'

export class ImageUrlValidator {
  validate(urlToValidate: string): string {
    try {
      const url = new URL(urlToValidate)
      if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error()

      return url.toString()
    } catch {
      throw new InvalidInputError('Invalid image URL')
    }
  }
}
