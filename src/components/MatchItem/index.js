import './index.css'

const MatchItem = props => {
  const {thumbnailDetails, imageClick} = props
  const {thumbnailUrl} = thumbnailDetails
  const onClickThumbnail = () => {
    imageClick(thumbnailUrl)
  }
  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default MatchItem
