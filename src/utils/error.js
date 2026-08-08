import axios from 'axios'

export const getErrorMessage = (err) => {
  if (axios.isAxiosError(err)) {
    return (
      err.response?.data?.message || err.message || 'Failed connect to server, check your network'
    )
  }

  if (err instanceof Error) {
    return err.message
  }

  return 'Sorry, Something Wrong!'
}
