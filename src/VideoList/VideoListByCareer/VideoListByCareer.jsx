import { useState } from 'react'
import PropTypes from 'prop-types'
import { VideoItem } from './VideoItem'
import './videoList.sass'
import useFindAllVideos from '../../Shared/functions/useFindAllVideos'
import useDelteVideo from './useDeleteVideo'

export const VideoListByCareer = ({ carrerSelected }) => {
  const [videoList, setVideoList] = useState()
  const deleteVideo = useDelteVideo()

  useFindAllVideos(setVideoList, carrerSelected)

  if (videoList === undefined) return <p className="loading">Cargando...</p>
  else if (videoList === null) return <p className="loading">Error</p>
  else
    return (
      <div className="video_container">
        {videoList.length > 0 ? (
          videoList.map((career, index) => (
            <VideoItem {...career} key={index} onDelete={deleteVideo} />
          ))
        ) : (
          <p className="video_error">No existen videos</p>
        )}
      </div>
    )
}

VideoListByCareer.propTypes = {
  categorySelected: PropTypes.string
}
