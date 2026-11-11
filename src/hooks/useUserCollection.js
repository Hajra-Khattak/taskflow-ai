import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

// Live list of the signed in user's documents.
// `subscribe(uid, onData, onError)` must return an unsubscribe function.
// State remembers which uid it belongs to, so loading is derived instead of set inside the effect.
export function useUserCollection(subscribe, errorMessage) {
  const { user } = useAuth()
  const uid = user?.uid
  const [state, setState] = useState({ uid: null, items: [], error: '' })

  useEffect(() => {
    if (!uid) return undefined

    return subscribe(
      uid,
      (items) => setState({ uid, items, error: '' }),
      (err) => {
        console.error(err)
        setState((prev) => ({
          uid,
          items: prev.uid === uid ? prev.items : [],
          error: errorMessage,
        }))
      }
    )
  }, [uid, subscribe, errorMessage])

  const isCurrent = Boolean(uid) && state.uid === uid

  return {
    uid,
    items: isCurrent ? state.items : [],
    loading: Boolean(uid) && !isCurrent,
    error: isCurrent ? state.error : '',
  }
}
