import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditSet from '../components/EditSet/EditSet'
import Layout from '../layouts/Layout'
import { Set } from '../ts/interfaces/Set'
import useGetSet from '../hooks/useGetSet'
import useUpdateSet from '../hooks/useUpdateSet'
import useDeleteSet from '../hooks/useDeleteSet'
import LoaderFullScreen from '../components/LoaderFullScreen/LoaderFullScreen'
import Modal from '../components/Modal/Modal'

const ManageSetPage = () => {
  const navigate = useNavigate()
  const { id = '' } = useParams()

  const [errorMsg, setErrorMsg] = useState<string>('')
  const [isOpenModal, setIsOpenModal] = useState<boolean>()
  const setError = (msg: string) => setErrorMsg(msg)

  const { data: collection, isLoading: isLoadingSet } = useGetSet(id)
  const { mutate: updateSet } = useUpdateSet(setError)
  const { mutate: deleteSet } = useDeleteSet(setError)

  const onSubmit = (data: Set) => updateSet(data)
  const onDelete = () => setIsOpenModal(true)
  const onCancel = () => navigate('/profile')
  const handleDelete = () => deleteSet(id)
  const handleCancelModal = () => setIsOpenModal(false)

  if (isLoadingSet) {
    return <LoaderFullScreen />
  }

  return (
    <Layout>
      <EditSet
        onSubmit={onSubmit}
        onDelete={onDelete}
        isLoading={isLoadingSet}
        additionalBtnFn={onCancel}
        additionalBtnName="Cancel"
        error={errorMsg}
        defaultData={collection}
      />
      {isOpenModal && (
        <Modal
          title={`Remove: ${collection?.name}`}
          desc="Do you want to remove this set?"
          handleSubmit={handleDelete}
          handleCancel={handleCancelModal}
          buttonSubmitName="Remove"
        />
      )}
    </Layout>
  )
}

export default ManageSetPage
