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
      const body = await this.readJsonBody(request)
      const imageUrl = this.parseImageUrl(body)
      const imageMaxSize = this.parseMaxSize(body)

      const validUrl = this.urlValidator.validate(imageUrl)
      const output = await this.imageProcessor.createVariant(validUrl, imageMaxSize)

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

  private async readJsonBody(request: Request): Promise<Record<string, unknown>> {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      throw new InvalidInputError('Request body must be valid JSON')
    }

    // "null" is valid JSON, so fall back to an empty object
    return (body ?? {}) as Record<string, unknown>
  }

  /**
   * Extract image URL from the JSON body.
   *
   * @returns The image URL as a string.
   */
  private parseImageUrl(body: Record<string, unknown>): string {
    const { imageUrl } = body
    
    if (typeof imageUrl !== 'string') {
      throw new InvalidInputError('imageUrl must be a string')
    }

    return imageUrl
  }

  /**
   * Extract image max size from the JSON body and turn it to a number.
   *
   * @returns The image URL as a string.
   */
  private parseMaxSize(body: Record<string, unknown>): number {
    const { maxSize } = body

    if (typeof maxSize !== 'number' || !Number.isFinite(maxSize)) {
      throw new InvalidInputError('The image maximum size must be a number')
    }

    return maxSize
  }
}
