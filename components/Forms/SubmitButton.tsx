interface Props {
  text: string
  disabled: boolean
  className?: string
}

export const SubmitButton = ({ text, disabled, className = '' }: Props) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`block rounded-full bg-blue-600 px-10 py-3 font-medium text-primary-100 outline-none transition-colors duration-300 hover:bg-blue-700 disabled:opacity-70 ${className}`}
    >
      {text}
    </button>
  )
}
