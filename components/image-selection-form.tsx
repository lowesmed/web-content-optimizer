'use client'

import Image from 'next/image'
import { useState } from 'react'
import ImageMaxSizeInput from '@/components/image-max-size-input'

export default function ImageSelectionForm() {
  const [imageUrlInputValue, setImageUrlInputValue] = useState('')
  const [imageMaxSizeValue, setImageMaxSizeValue] = useState('400')

  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  /**
   * Input values are sent to the API for image processing. The response is converted to a Blob URL needed for displaying the processed image.
   *
   * @param event - A submitted form event
   * @returns
   */
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const response = await fetch('/api/optimize-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: imageUrlInputValue,
          maxSize: Number(imageMaxSizeValue),
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        setResultUrl(null)
        setError(data.error)
        return
      }

      setError(null)
      setResultUrl(URL.createObjectURL(await response.blob()))
    } catch {
      setResultUrl(null)
      setError('Could not reach the server. Check your connection and try again.')
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Image URL</h3>
          <p>Enter a URL to an image. The image must be in jpg/jpeg format.</p>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="https://..."
            autoComplete="off"
            value={imageUrlInputValue}
            className="py-2 px-4 rounded-full border border-solid  transition-colors"
            onChange={(event) => setImageUrlInputValue(event.target.value)}
          />
        </div>
        <ImageMaxSizeInput value={imageMaxSizeValue} onValueChange={setImageMaxSizeValue} />
        <button className="p-2 bg-green-600 text-white font-bold rounded-full cursor-pointer" type="submit">
          Optimize
        </button>
        {error && <p role="alert">{error}</p>}
        {resultUrl && (
          <div>
            <Image src={resultUrl} width={1200} height={1200} alt="Result of compressed image" />
            <a href={resultUrl} download="compressed.jpg">
              Download
            </a>
          </div>
        )}
      </div>
    </form>
  )
}
