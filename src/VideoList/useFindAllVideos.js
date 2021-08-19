import { useEffect } from 'react'
import firebase from '../Shared/config/firebase'

export default function useFindAllVideos(setVideoList, carrerSelected) {
  const videosRef = firebase.firestore().collection('videos')

  useEffect(() => {
    videosRef
      .where('carrerId', '==', carrerSelected)
      .get()
      .then((videos) => {
        const viodeosData = []
        videos.forEach((video) => {
          const data = video.data()
          const id = video.id
          viodeosData.push({ ...data, id })
        })
        console.log('viodeosData', viodeosData)
        setVideoList(viodeosData)
      })
      .catch((err) => {
        console.log(err)
        setVideoList(null)
      })
  }, [carrerSelected])
}
