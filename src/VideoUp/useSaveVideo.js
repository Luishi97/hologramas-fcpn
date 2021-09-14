import { useCallback } from 'react'
import firebase from '../Shared/config/firebase'
import { v4 as uuid } from 'uuid'
import 'firebase/storage'

export default function useSaveVideo(setPercentage) {
  const videosRef = firebase.firestore().collection('videos')

  const saveVideo = useCallback((form) => {
    const newVideoRef = firebase
      .storage()
      .ref(form.carrerName)
      .child(uuid() + '.' + form.video.name.split('.')[1])
    const upper = newVideoRef.put(form.video)

    upper.on(
      'state_changed',
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setPercentage(percentage)
      },
      (error) => {
        console.error(error.message)
      },
      () => {
        upper.snapshot.ref.getDownloadURL().then((url) => {
          delete form.video
          delete form.carrerName

          videosRef.add({ ...form, urlVideo: url, created_at: new Date() })
        })
      }
    )
  }, [])

  return saveVideo
}
