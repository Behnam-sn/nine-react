import axios from 'axios'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import * as Yup from 'yup'

import { CustomInput } from '@/components/Forms/CustomInput'
import { SubmitButton } from '@/components/Forms/SubmitButton'
import { setToken } from '@/utils/auth'

export const SignInForm = () => {
  const router = useRouter()
  const { mutate } = useSWRConfig()

  return (
    <div>
      <Formik
        initialValues={{
          username: 'a',
          password: 'a'
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required')
        })}
        onSubmit={async values => {
          const User = new FormData()
          User.append('username', values.username)
          User.append('password', values.password)

          await axios
            .post('/auth/signin', User)
            .then(async response => {
              setToken(response.data.access_token)
              await mutate('/users/current-user')
              router.back()
            })
            .catch(error => {
              console.log(error)
            })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput name="username" type="text" placeholder="Username" />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <SubmitButton
              className="mx-auto"
              text="Sign In"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}
