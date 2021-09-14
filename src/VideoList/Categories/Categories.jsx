import { useState } from 'react'
import useFindAllCategories from '../../Shared/functions/useFindAllCategories'
import CategoryCard from './CategoryCard'
import Loading from '../../Shared/components/Loading'
import './categories.sass'

export const Categories = ({ setCarrerSelected }) => {
  const [careerList, setCareerList] = useState()
  useFindAllCategories(setCareerList)

  const handlerSelectCarrer = (id) => setCarrerSelected(id)

  if (careerList !== undefined)
    return (
      <div
        className="categories_container"
        data-flickity-options='{ "wrapAround": true }'
      >
        {careerList.length > 0 ? (
          careerList.map((career, index) => (
            <CategoryCard {...career} onClick={handlerSelectCarrer} key={index} />
          ))
        ) : (
          <p className="categories_error">No existen categorias</p>
        )}
      </div>
    )
  else return <Loading />
}
