import { InvalidInputError } from '@/domain/InvalidInputError'
import { ImageProcessingService } from '@/services/ImageProcessingService'
import { ImageUrlValidator } from '@/services/ImageUrlValidator'

export class ImageController {
  constructor(
    private readonly urlValidator: ImageUrlValidator,
    private readonly imageProcessor: ImageProcessingService
  ) {}


  /**
   * Prepare a HTTP response containing a compressed image.
   * 
   * @param request - POST request with the JSON body `{ "imageUrl": "https://..." }`
   * @returns The compressed JPEG (200), or JSON `{ error }` with status 400 for invalid input and 500 for unexpected errors 
   */
  async handle(request: Request): Promise<Response> {
    try {
      const imageUrl = await this.readImageUrl(request)
      const validUrl = this.urlValidator.validate(imageUrl)
      const output = await this.imageProcessor.createVariant(validUrl)

      return new Response(new Uint8Array(output), {
        headers: { 'Content-Type': 'image/jpeg' },
      })
    } catch (error) {
      if (error instanceof InvalidInputError) {
        return Response.json({ error: error.message }, { status: 400 })
      }
      console.error(error)
      return Response.json({ error: 'Internal error' }, { status: 500 })
    }
  }

  /**
   * Extract image URL from the JSON body.
   * 
   * @returns The image URL as a string.
   */
  private async readImageUrl(request: Request): Promise<string> {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      throw new InvalidInputError('Request body must be valid JSON')
    }

    // "null" is valid JSON, so fall back to an empty object before reading from it.
    const { imageUrl } = (body ?? {}) as Record<string, unknown>
    if (typeof imageUrl !== 'string') {
      throw new InvalidInputError('imageUrl must be a string')
    }

    return imageUrl
  }
}
