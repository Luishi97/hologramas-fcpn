import { memo } from 'react'
import PropTypes from 'prop-types'

const CategoryCard = ({ name, id, onClick }) => {
  return (
    <div className="category_item-container">
      <div className="category_item_name" onClick={() => onClick(id)}>
        {name}
      </div>
    </div>
  )
}

export default memo(CategoryCard)

CategoryCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
}
