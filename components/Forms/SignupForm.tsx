import axios from 'axios'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import * as Yup from 'yup'

import { CustomInput } from '@/components/forms/CustomInput'
import { SubmitButton } from '@/components/forms/SubmitButton'
import { setToken } from '@/utils/auth'

export const SignUpForm = () => {
  const router = useRouter()
  const { mutate } = useSWRConfig()

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          name: '',
          password: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(5, 'Must be 5 characters or more')
            .required('Required'),
          name: Yup.string().required('Required'),
          password: Yup.string().required('Required')
        })}
        onSubmit={async values => {
          await axios
            .post('/auth/signup', values)
            .then(async response => {
              setToken(response.data.access_token)
              await mutate('/users/current-user/')
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
            <CustomInput name="name" type="text" placeholder="Name" />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <SubmitButton
              className="mx-auto"
              text="Sign Up"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}
