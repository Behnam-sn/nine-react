import { useField } from 'formik'

export const CustomTextarea = (props: any) => {
  const [field, meta] = useField(props)

  return (
    <div className="mb-4">
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="ml-4 text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  )
}
