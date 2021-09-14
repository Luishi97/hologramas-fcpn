import { useState } from 'react'
import useFindAllCategories from '../Shared/functions/useFindAllCategories'
import UpFile from './Form/UpFile'
import './videoup.sass'

export default function VideoUp() {
  const [careerList, setCareerList] = useState()
  useFindAllCategories(setCareerList)

  return (
    <div className="col--container__up__form">
      <UpFile careerList={careerList} />
    </div>
  )
}
