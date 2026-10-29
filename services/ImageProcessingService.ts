import { OptiPic } from 'optipic'
import { InvalidInputError } from '@/domain/InvalidInputError'

export class ImageProcessingService {
  async createVariant(imageUrl: string, maxSize: number): Promise<Buffer> {
    const optiPic = new OptiPic()
    await this.load(optiPic, imageUrl)
    if (maxSize === 0) {
      return optiPic.compressToBuffer()
    }
    return optiPic.compressToBuffer({ maxSizeKB: maxSize})
  }

  private async load(optiPic: OptiPic, imageUrl: string): Promise<void> {
    try {
      await optiPic.load(imageUrl)
    } catch {
      throw new InvalidInputError(`Can't load a. JPEG image from the URL`)
    }
  }
}
