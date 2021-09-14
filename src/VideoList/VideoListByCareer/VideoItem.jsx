import { useMatch } from '@reach/router'
import PropTypes from 'prop-types'

export const VideoItem = ({ title, id, urlVideo, onDelete }) => {
  const match = useMatch('/down')
  return (
    <div className="video-item">
      <p>{title}</p>
      {/* <img src={urlImage} alt="imagen" /> */}
      <video src={urlVideo} controls width={250}></video>
      {match && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="delete__button"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => onDelete(id, urlVideo)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      )}
    </div>
  )
}

VideoItem.propTypes = {
  title: PropTypes.string,
  urlImage: PropTypes.string,
  urlVideo: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func
}
