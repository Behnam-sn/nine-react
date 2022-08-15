import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { SubmitButton } from '@/components/Forms/SubmitButton'
import { TextInput } from '@/components/Forms/TextInput'

export const SigninForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(5, 'Must be 5 characters or more')
            .required('Required'),
          password: Yup.string().required('Required')
        })}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form>
          <TextInput name="username" type="text" placeholder="username" />
          <TextInput name="password" type="password" placeholder="password" />
          <SubmitButton text="Sign in" />
        </Form>
      </Formik>
    </div>
  )
}
