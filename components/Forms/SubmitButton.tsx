interface Props {
  text: string
}

export const SubmitButton = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="mx-auto block rounded-full bg-blue-600 px-10 py-3 font-medium text-primary-100 outline-none transition-colors duration-300 hover:bg-blue-700"
    >
      {text}
    </button>
  )
}
