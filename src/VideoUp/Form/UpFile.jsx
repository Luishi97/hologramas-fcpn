import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from '@reach/router'
import useSaveVideo from '../useSaveVideo'

export default function UpFile({ careerList }) {
  const [formData, setFormData] = useState({})
  const [percentage, setPercentage] = useState(0)
  const navigate = useNavigate()

  const saveVideo = useSaveVideo(setPercentage)

  return (
    <Fragment>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form__item">
          <label htmlFor="name">Nombre del video:</label>
          <input
            type="text"
            required
            autoFocus
            onChange={({ target }) => setFormData({ ...formData, title: target.value })}
          />
        </div>
        <div className="form__item">
          <label htmlFor="name">Video:</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            required
            onChange={({ target }) =>
              setFormData({ ...formData, video: target.files[0] })
            }
          />
        </div>
        <div className="form__item">
          <label htmlFor="name">Carrera</label>
          <select
            name="video"
            required
            defaultValue="0"
            placeholder="selecciona"
            onChange={({ target }) =>
              setFormData({
                ...formData,
                carrerId: target.value,
                carrerName: careerList[target.options.selectedIndex - 1].name
              })
            }
          >
            <option value="0" selected disabled>
              Elige una opción
            </option>
            {careerList &&
              careerList.map(({ id, name }) => (
                <option value={id} name={name} key={id}>
                  {name}
                </option>
              ))}
          </select>
        </div>
        <div className="form__item--buttons">
          <button className="button" onClick={() => saveVideo(formData)}>
            Guardar
          </button>
          <button
            type="reset"
            className="button"
            onClick={() => {
              setFormData({})
              setPercentage(0)
            }}
          >
            Limpiar
          </button>
        </div>
      </form>
      <div className="charging">
        <div className="charging__mover" style={{ width: percentage }}>
          <span>{percentage} % </span>
        </div>
      </div>
      <button className="button" onClick={() => navigate('/', { replace: true })}>
        Volver a la página principal
      </button>
    </Fragment>
  )
}

UpFile.propTypes = {
  careerList: PropTypes.array
}
