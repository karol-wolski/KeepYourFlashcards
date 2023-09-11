import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditSet from '../components/EditSet/EditSet'
import Layout from '../layouts/Layout'
import { Set } from '../ts/interfaces/Set'
import useGetSet from '../hooks/useGetSet'
import useUpdateSet from '../hooks/useUpdateSet'
import useDeleteSet from '../hooks/useDeleteSet'

const ManageSetPage = () => {
  const navigate = useNavigate()
  const { id = '' } = useParams()

  const [errorMsg, setErrorMsg] = useState<string>('')
  const setError = (msg: string) => setErrorMsg(msg)

  const { data: collection, isLoading: isLoadingSet } = useGetSet(id)
  const { mutate: updateSet } = useUpdateSet(setError)
  const { mutate: deleteSet } = useDeleteSet(setError)

  const onSubmit = (data: Set) => updateSet(data)
  const onDelete = () => deleteSet(id)
  const onCancel = () => navigate('/profile')

  return (
    <Layout>
      {isLoadingSet ? (
        <p>Data processing</p>
      ) : (
        <EditSet
          onSubmit={onSubmit}
          onDelete={onDelete}
          isLoading={isLoadingSet}
          additionalBtnFn={onCancel}
          additionalBtnName="Cancel"
          error={errorMsg}
          defaultData={collection}
        />
      )}
    </Layout>
  )
}

export default ManageSetPage
