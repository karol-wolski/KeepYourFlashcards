import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../layouts/Layout'
import AddSet from '../components/AddSet/AddSet'
import { Set } from '../ts/interfaces/Set'
import useAddSet from '../hooks/useAddSet'

const AddSetPage = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState<string>('')
  const setError = (msg: string) => setErrorMsg(msg)

  const { mutate, isLoading } = useAddSet(setError)
  const onSubmit = (data: Set) => mutate(data)
  const onCancel = () => navigate('/profile')

  return (
    <Layout>
      <div className="max-w-[80rem] mx-auto">
        <h2 className="font-bold text-[1.8rem] mb-[5rem]">
          Create set of flashcards
        </h2>
        <AddSet
          onSubmit={onSubmit}
          isLoading={isLoading}
          additionalBtnFn={onCancel}
          additionalBtnName="Cancel"
          error={errorMsg}
        />
      </div>
    </Layout>
  )
}

export default AddSetPage
