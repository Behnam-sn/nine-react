import { Form, Formik, useField } from 'formik'
import * as Yup from 'yup'

import { SubmitButton } from '@/components/Forms/SubmitButton'

const CustomTextarea = (props: any) => {
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

export const AddPostForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          text: ''
        }}
        validationSchema={Yup.object({
          text: Yup.string()
            .max(255, 'Must be 255 characters or less')
            .required('Required')
        })}
        onSubmit={async values => {
          //   await SignIn(values.username, values.password)
          //   router.push('/')
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomTextarea name="text" placeholder="text" />

            <SubmitButton text="Post" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  )
}
