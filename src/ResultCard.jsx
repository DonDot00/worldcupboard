export default function ResultCard({ game }) {
  const winner =
    game.scoreA > game.scoreB ? 'A'
    : game.scoreB > game.scoreA ? 'B'
    : 'draw'

  return (
    <div className="game-card result">
      <div className="game-badge">{game.group}</div>

      <div className="game-matchup">
        <span className={`team ${winner === 'A' ? 'winner' : ''}`}>
          <span className="flag">{game.flagA}</span>
          {game.teamA}
        </span>
        <span className="scoreline">{game.scoreA} – {game.scoreB}</span>
        <span className={`team ${winner === 'B' ? 'winner' : ''}`}>
          <span className="flag">{game.flagB}</span>
          {game.teamB}
        </span>
      </div>

      <div className="game-info">
        {winner === 'draw' && <span className="draw-label">Draw</span>}
        <span>📍 {game.venue}</span>
      </div>
    </div>
  )
}
