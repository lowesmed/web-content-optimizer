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
    <input 
      type='number'
      name='imageMaxSizeNum'
      id='imageMaxSizeNum'
      min='60'
      max='800'
      placeholder='400'
      autoComplete='off'
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      className="py-2 px-4 rounded-full border border-solid"
    />  
  )
}
