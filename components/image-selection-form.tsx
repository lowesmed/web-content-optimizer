'use client'

import { useState } from 'react'

export default function ImageSelectionForm() {
  const [imageUrlInputValue, setImageUrlInputValue] = useState('')

  return (
    <form>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="Enter a image URL"
          autoComplete="off"
          value={imageUrlInputValue}
          className="py-2 px-4 rounded-full border border-solid  transition-colors hover:b"
          onChange={(e) => setImageUrlInputValue(e.target.value)}
        />
        <h3>or</h3>
        <div className="flex">
          <div>
            <button className="p-3 bg-amber-600 text-white font-bold rounded-full cursor-pointer">Upload</button>
          </div>
          <div></div>
        </div>
        <button className="p-2 bg-green-600 text-white font-bold rounded-full cursor-pointer" type="submit">
          Generate
        </button>
      </div>
    </form>
  )
}
