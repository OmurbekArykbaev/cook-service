import { ToastContainer, toast } from "react-toastify"

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

export const PushToast = (message: string, duration: number) => {
  toast.success(message, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

export default Toast
