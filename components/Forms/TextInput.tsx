import { useField } from 'formik'

export const TextInput = (props: any) => {
  const [field, meta] = useField(props)
  return (
    <div className="mb-4">
      <input
        className={`mb-2 block w-full rounded-full bg-primary-200 py-3 px-4 text-sm text-primary-900 outline-none ring-2 transition-colors duration-300 dark:bg-primary-600 dark:text-primary-100 ${
          meta.touched && meta.error
            ? 'ring-red-600'
            : 'ring-primary-300 focus:ring-blue-500 dark:ring-primary-400'
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="ml-4 text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  )
}
