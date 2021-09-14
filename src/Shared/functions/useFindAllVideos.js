import { useEffect } from 'react'
import firebase from '../config/firebase'

export default function useFindAllVideos(setVideoList, carrerSelected) {
  const videosRef = firebase.firestore().collection('videos')

  useEffect(() => {
    videosRef.where('carrerId', '==', carrerSelected).onSnapshot((videos) => {
      const viodeosData = []
      videos.forEach((video) => {
        const data = video.data()
        const id = video.id
        viodeosData.push({ ...data, id })
      })
      console.log('viodeosData', viodeosData)
      setVideoList(viodeosData)
    })
  }, [carrerSelected])
}
