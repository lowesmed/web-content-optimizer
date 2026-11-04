type ImageMaxSizeInputProps = {
  value: string
  onValueChange: (value: string) => void
}

/**
 * Makes it possible to choose a custom maximum file size of the image.
 * Min value is set 60(Kb) to not make compression to heavy.
 * Max value is set to 800(Kb) because no web image should be exceeding that.
 */
export default function ImageMaxSizeInput({
    value,
    onValueChange,
  }: ImageMaxSizeInputProps) {

  return (
    <div className="flex flex-col gap-1 bg-gray-50 p-6 border border-solid rounded-2xl">
      <h3 className="font-bold">Maximum image file size</h3>
      <p>Limit the file size to optimize it for web. A lower number will reduce the quality of the image and may introduce compression artifacts. Below 100 is optimal, less than 400 recommended and only go up to 800 if really needed.</p>
      <div className="flex gap-2 items-center">
        <input
          type='range'
          name='imageMaxSizeNum'
          id='imageMaxSizeNum'
          min='60'
          max='800'
          step='10'
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          className="py-2 px-4 rounded-full border border-solid"
        />
        <p className="text-sm font-bold"><output htmlFor='imageMaxSizeNum'>{value}</output> KB</p>
      </div>
      <p className="text-sm">Default: 400</p>
    </div>
  )
}
