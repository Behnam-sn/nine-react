import axios from 'axios'
import { Form, Formik, useField } from 'formik'
import { useSWRConfig } from 'swr'
import * as Yup from 'yup'

import { SubmitButton } from '@/components/Forms/SubmitButton'

interface CreateCommentFormProps {
  postId: number
}

export const CreateCommentForm = ({ postId }: CreateCommentFormProps) => {
  const { mutate } = useSWRConfig()

  return (
    <div className="grow">
      <Formik
        initialValues={{
          text: ''
        }}
        validationSchema={Yup.object({
          text: Yup.string()
            .max(255, 'Must be 255 characters or less')
            .required('Required')
        })}
        onSubmit={async (values, { resetForm }) => {
          await axios
            .post('/comments/', {
              text: values.text,
              post_id: postId
            })
            .then(() => {
              resetForm()
              mutate(`/posts/${postId}`)
            })
            .catch(error => {
              console.log(error)
            })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomTextarea name="text" placeholder="what's in your mind..." />
            <SubmitButton
              className="ml-auto"
              text="Post"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export const CustomTextarea = (props: any) => {
  const [field, meta] = useField(props)

  return (
    <div className="">
      <textarea
        className="mb-2 h-32 w-full rounded-lg bg-primary-100 p-4 text-primary-900 outline-none ring-1 ring-primary-300 transition-colors duration-300 focus:ring-blue-500 dark:bg-primary-900 dark:text-primary-100 dark:ring-primary-400 dark:focus:ring-blue-500"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="ml-4 text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  )
}
