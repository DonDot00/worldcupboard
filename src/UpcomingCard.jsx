export default function UpcomingCard({ game }) {
  const isLive = game.status === 'live'

  return (
    <div className={`game-card upcoming ${isLive ? 'live-card' : ''}`}>
      <div className={`game-badge ${isLive ? 'live-badge' : ''}`}>
        {isLive
          ? <><span className="live-dot" /> LIVE {game.minute} · {game.group}</>
          : game.group}
      </div>

      <div className="game-matchup">
        <span className="team">
          <span className="flag">{game.flagA}</span>
          {game.teamA}
        </span>

        {isLive
          ? <span className="scoreline live-score">{game.scoreA} – {game.scoreB}</span>
          : <span className="vs">vs</span>}

        <span className="team">
          <span className="flag">{game.flagB}</span>
          {game.teamB}
        </span>
      </div>

      <div className="game-info">
        {!isLive && <span>🕒 {game.time}</span>}
        <span>📍 {game.venue}</span>
        {game.note && <span>🟥 {game.note}</span>}
      </div>
    </div>
  )
}
