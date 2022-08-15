import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { TextInput } from '@/components/Forms/TextInput'

export const LoginForm = () => {
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

          <button
            type="submit"
            className="mx-auto block rounded-full bg-blue-600 px-8 py-3 font-medium text-primary-100 outline-none transition-colors duration-300 hover:bg-blue-700"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  )
}
