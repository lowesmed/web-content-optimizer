import { OptiPic } from 'optipic'
import { InvalidInputError } from '@/domain/InvalidInputError'

export class ImageProcessingService {
  async createVariant(imageUrl: string): Promise<Buffer> {
    const optiPic = new OptiPic()
    await this.load(optiPic, imageUrl)
    return optiPic.compressToBuffer()
  }

  private async load(optiPic: OptiPic, imageUrl: string): Promise<void> {
    try {
      await optiPic.load(imageUrl)
    } catch {
      throw new InvalidInputError(`Can't load a. JPEG image from the URL`)
    }
  }
}
