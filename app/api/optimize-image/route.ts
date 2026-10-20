import { ImageController } from '@/controllers/ImageController'
import { ImageProcessingService } from '@/services/ImageProcessingService'
import { ImageUrlValidator } from '@/services/ImageUrlValidator'

const controller = new ImageController(new ImageUrlValidator(), new ImageProcessingService())

export async function POST(request: Request) {
  return controller.handle(request)
}
