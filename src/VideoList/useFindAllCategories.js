import { useEffect } from 'react'
import firebase from '../Shared/config/firebase'

export default function useFindAllCategories(setCareerList) {
  const careerRef = firebase.firestore().collection('career')

  useEffect(() => {
    careerRef
      .get()
      .then((careers) => {
        const viodeosData = []
        careers.forEach((career) => {
          const data = career.data()
          const id = career.id
          viodeosData.push({ ...data, id })
        })
        setCareerList(viodeosData)
      })
      .catch((err) => {
        console.log(err)
        setCareerList(null)
      })
  }, [])
}
