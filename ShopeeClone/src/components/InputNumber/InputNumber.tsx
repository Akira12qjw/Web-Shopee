import { InputHTMLAttributes, forwardRef, useState } from 'react'

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  {
    errorMessage,
    className,
    classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
    onChange,
    value = '',
    ...rest
  },
  ref
) {
  const [localValue, setLocalValue] = useState<string>(value as string)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    //kiểm tra value có phải chữ số khay không
    if (/^\d+$/.test(value) || value === '') {
      //Thực thi onChange callback từ bên ngoài truyền vào props
      onChange && onChange(event)
      // Cập nhật localValue State
      setLocalValue(value)
    }
  }
  return (
    <div className={className}>
      <input className={classNameInput} {...rest} ref={ref} value={value || localValue} onChange={handleChange} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})
export default InputNumber
