import axios from 'axios'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { SubmitButton } from '@/components/Forms/SubmitButton'
import { TextInput } from '@/components/Forms/TextInput'

interface SigninProps {
  username: string
  password: string
}

const Signin = async (values: SigninProps) => {
  const User = new FormData()
  User.append('username', values.username)
  User.append('password', values.password)

  await axios
    .post('auth/signin', User)
    .then(response => {
      let token = response.data.access_token
      // setCookie("jwt_token", token, 5);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    })
    .catch(error => {
      console.log(error)
    })
}

export const SigninForm = () => {
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
        onSubmit={async (values: SigninProps) => {
          await Signin(values)
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
