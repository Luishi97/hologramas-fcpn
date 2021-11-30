import { Fragment, useState } from 'react'
import { Categories } from './Categories/Categories'
import { VideoListByCareer } from './VideoListByCareer/VideoListByCareer'
import manual from '../assets/manual.png'
import './container.sass'

export const VideoList = () => {
  const [carrerSelected, setCarrerSelected] = useState()
  const [showManuModal, setShowManuModal] = useState(false)

  return (
    <Fragment>
      <div className="container">
        <Categories setCarrerSelected={setCarrerSelected} />
        {carrerSelected ? (
          <VideoListByCareer carrerSelected={carrerSelected} />
        ) : (
          <div className="manual">
            <p>Seleccione una carrera</p>
            <img src={manual} alt="manual" onClick={() => setShowManuModal(true)} />
          </div>
        )}
      </div>
      {showManuModal && (
        <div className="modal" onClick={() => setShowManuModal(false)}>
          <div className="modal__body">
            <img src={manual} alt="manual" />
          </div>
        </div>
      )}
    </Fragment>
  )
}
