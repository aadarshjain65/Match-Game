import './index.css'

const NavBar = props => {
  const {scoreCount, timeCount} = props

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-container">
        <li className="score">
          <p>
            Score: <span className="score-count">{scoreCount}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer">{timeCount} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
