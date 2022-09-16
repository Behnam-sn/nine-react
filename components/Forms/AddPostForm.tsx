import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import { CustomTextarea } from '@/components/forms/CustomTextarea'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { CreatePost } from '@/utils/post'

export const AddPostForm = () => {
  const router = useRouter()

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
          await CreatePost(values)
          router.push('/')
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
