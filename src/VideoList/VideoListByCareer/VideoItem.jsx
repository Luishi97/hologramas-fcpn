import PropTypes from 'prop-types'

export const VideoItem = ({ title, urlImage, urlVideo }) => {
  return (
    <div className="video-item">
      <p>{title}</p>
      {/* <img src={urlImage} alt="imagen" /> */}
      <video src={urlVideo} controls width={250}></video>
    </div>
  )
}

VideoItem.propTypes = {
  title: PropTypes.string,
  urlImage: PropTypes.string,
  urlVideo: PropTypes.string
}
