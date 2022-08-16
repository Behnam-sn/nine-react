import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import * as Yup from 'yup'

import { SubmitButton } from '@/components/Forms/SubmitButton'
import { TextInput } from '@/components/Forms/TextInput'
import { SignUp } from '@/utils/auth'

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
          await SignUp(values)
          mutate('/users/current-user')
          router.push('/')
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput name="username" type="text" placeholder="Username" />
            <TextInput name="name" type="text" placeholder="Name" />
            <TextInput name="password" type="password" placeholder="Password" />
            <SubmitButton text="Sign Up" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  )
}
