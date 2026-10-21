'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageSelectionForm() {
  const [imageUrlInputValue, setImageUrlInputValue] = useState('')
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const response = await fetch('/api/optimize-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl: imageUrlInputValue
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="Enter a image URL"
          autoComplete="off"
          value={imageUrlInputValue}
          className="py-2 px-4 rounded-full border border-solid  transition-colors hover:b"
          onChange={(event) => setImageUrlInputValue(event.target.value)}
        />
        <button className="p-2 bg-green-600 text-white font-bold rounded-full cursor-pointer" type="submit">
          Generate
        </button>
        {error && <p role='alert'>{error}</p>}
        {resultUrl && (
          <div>
            <Image 
              src={resultUrl}
              width={1200}
              height={1200}
              alt='Result of compressed image'
            />
            <a href={resultUrl} download='compressed.jpg'>Download</a>
          </div>
        )}
      </div>
    </form>
  )
}
