import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import Layout from '../layouts/Layout'
import AddSet from '../components/AddSet/AddSet'
import { CreteSetFn } from '../api/cardsApi'
import { CreateSet } from '../ts/interfaces/Set'

const AddSetPage = () => {
  const [errorMsg, setErrorMsg] = useState<string>('')
  const navigate = useNavigate()
  const { mutate, isLoading } = useMutation({
    mutationFn: CreteSetFn,
    onSuccess: (data) => {
      if (data) {
        navigate('/yourSets')
      }
    },
    onError: ({ response }) => {
      setErrorMsg(response.data.message)
    },
  })

  const onSubmit = (data: CreateSet) => mutate(data)

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
