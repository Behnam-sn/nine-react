import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { SubmitButton } from '@/components/Forms/SubmitButton'
import { TextInput } from '@/components/Forms/TextInput'
import { SignIn } from '@/utils/sign'

export const SignInForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required')
        })}
        onSubmit={async values => {
          await SignIn(values.username, values.password)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="username" type="text" placeholder="Username" />
            <TextInput name="password" type="password" placeholder="Password" />
            <SubmitButton text="Sign In" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  )
}
