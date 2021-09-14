import firebase from '../../Shared/config/firebase'
import 'firebase/firestore'
import { useCallback } from 'react'

export default function useDelteVideo() {
  const videosRef = firebase.firestore().collection('videos')

  const deleteVideo = useCallback((id, url) => {
    firebase
      .storage()
      .refFromURL(url)
      .delete()
      .then(() => videosRef.doc(id).delete())
      .catch((err) => console.log(err))
  })
  return deleteVideo
}
