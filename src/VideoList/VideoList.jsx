import { useState } from 'react'
import { Categories } from './Categories/Categories'
import { VideoListByCareer } from './VideoListByCareer/VideoListByCareer'
import './container.sass'

export const VideoList = () => {
  const [carrerSelected, setCarrerSelected] = useState()

  return (
    <div className="container">
      <Categories setCarrerSelected={setCarrerSelected} />
      {carrerSelected ? (
        <VideoListByCareer carrerSelected={carrerSelected} />
      ) : (
        <p>Seleccione una carrera</p>
      )}
    </div>
  )
}
