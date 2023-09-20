import { toast, ToastOptions } from 'react-toastify'

const toastSettings: ToastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  bodyClassName: 'text-[3rem]',
}

const toastError = {
  ...toastSettings,
  type: toast.TYPE.ERROR,
}

const toastSuccess = {
  ...toastSettings,
  type: toast.TYPE.SUCCESS,
}

const toastInfo = {
  ...toastSettings,
  type: toast.TYPE.INFO,
}

const toastWarning = {
  ...toastSettings,
  type: toast.TYPE.WARNING,
}

export { toastError, toastSuccess, toastInfo, toastWarning }
