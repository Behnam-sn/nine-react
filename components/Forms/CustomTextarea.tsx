import { useField } from 'formik'

export const CustomTextarea = (props: any) => {
  const [field, meta] = useField(props)

  return (
    <>
      <textarea
        className={`mb-4 h-60 w-full rounded-lg bg-primary-200 py-3 px-3 text-primary-900 outline-none ring-2 transition-colors duration-300 dark:bg-primary-700 dark:text-primary-100 ${
          meta.touched && meta.error
            ? 'ring-red-600'
            : 'ring-primary-300 focus:ring-blue-500 dark:ring-primary-400 dark:focus:ring-blue-500'
        }`}
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="ml-4 text-sm text-red-600">{meta.error}</div>
      ) : null}
    </>
  )
}
