import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { CustomTextarea } from '@/components/Forms/CustomTextarea'
import { SubmitButton } from '@/components/Forms/SubmitButton'

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
