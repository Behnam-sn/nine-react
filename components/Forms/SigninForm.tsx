import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import * as Yup from 'yup'

import { CustomInput } from '@/components/Forms/CustomInput'
import { SubmitButton } from '@/components/Forms/SubmitButton'
import { SignIn } from '@/utils/auth'

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
          await SignIn(values.username, values.password)
          mutate('/users/current-user')
          router.push('/')
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
