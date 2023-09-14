import { useCallback, useState } from 'react'
import { HandleMsg } from '../ts/types/HandleMsg'

const useMessage = (): [string, HandleMsg, () => void] => {
  const [message, setMessage] = useState<string>('')
  const update = useCallback((msg: string) => setMessage(msg), [])
  const clear = useCallback(() => setMessage(''), [])

  return [message, update, clear]
}

export default useMessage
