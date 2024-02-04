import './index.css'

const ScoreCard = props => {
  const {scoreCount, playAgain} = props
  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="your-score-heading">YOUR SCORE</p>
      <p className="your-score">{scoreCount}</p>
      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
