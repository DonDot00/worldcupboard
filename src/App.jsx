import './App.css'

const UPCOMING_GAMES = [
  {
    id: 1,
    date: 'Jun 18',
    time: '3:00 PM ET',
    teamA: 'Spain',
    flagA: '🇪🇸',
    teamB: 'Brazil',
    flagB: '🇧🇷',
    venue: 'SoFi Stadium, Los Angeles',
    group: 'Group C',
  },
  {
    id: 2,
    date: 'Jun 18',
    time: '6:00 PM ET',
    teamA: 'Germany',
    flagA: '🇩🇪',
    teamB: 'Japan',
    flagB: '🇯🇵',
    venue: 'AT&T Stadium, Dallas',
    group: 'Group E',
  },
  {
    id: 3,
    date: 'Jun 19',
    time: '12:00 PM ET',
    teamA: 'France',
    flagA: '🇫🇷',
    teamB: 'Mexico',
    flagB: '🇲🇽',
    venue: 'Estadio Azteca, Mexico City',
    group: 'Group A',
  },
  {
    id: 4,
    date: 'Jun 19',
    time: '3:00 PM ET',
    teamA: 'Argentina',
    flagA: '🇦🇷',
    teamB: 'Portugal',
    flagB: '🇵🇹',
    venue: 'MetLife Stadium, New York',
    group: 'Group D',
  },
  {
    id: 5,
    date: 'Jun 20',
    time: '6:00 PM ET',
    teamA: 'USA',
    flagA: '🇺🇸',
    teamB: 'England',
    flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    venue: 'Levi\'s Stadium, San Francisco',
    group: 'Group B',
  },
]

const PAST_RESULTS = [
  {
    id: 1,
    date: 'Jun 11',
    teamA: 'Mexico',
    flagA: '🇲🇽',
    scoreA: 2,
    teamB: 'Canada',
    flagB: '🇨🇦',
    scoreB: 0,
    group: 'Group A',
  },
  {
    id: 2,
    date: 'Jun 12',
    teamA: 'USA',
    flagA: '🇺🇸',
    scoreA: 3,
    teamB: 'Bolivia',
    flagB: '🇧🇴',
    scoreB: 1,
    group: 'Group B',
  },
  {
    id: 3,
    date: 'Jun 13',
    teamA: 'France',
    flagA: '🇫🇷',
    scoreA: 4,
    teamB: 'Saudi Arabia',
    flagB: '🇸🇦',
    scoreB: 0,
    group: 'Group A',
  },
  {
    id: 4,
    date: 'Jun 14',
    teamA: 'Brazil',
    flagA: '🇧🇷',
    scoreA: 3,
    teamB: 'Serbia',
    flagB: '🇷🇸',
    scoreB: 1,
    group: 'Group C',
  },
  {
    id: 5,
    date: 'Jun 15',
    teamA: 'England',
    flagA: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    scoreA: 1,
    teamB: 'IR Iran',
    flagB: '🇮🇷',
    scoreB: 1,
    group: 'Group B',
  },
  {
    id: 6,
    date: 'Jun 16',
    teamA: 'Spain',
    flagA: '🇪🇸',
    scoreA: 2,
    teamB: 'South Korea',
    flagB: '🇰🇷',
    scoreB: 0,
    group: 'Group C',
  },
  {
    id: 7,
    date: 'Jun 17',
    teamA: 'Argentina',
    flagA: '🇦🇷',
    scoreA: 1,
    teamB: 'Morocco',
    flagB: '🇲🇦',
    scoreB: 1,
    group: 'Group D',
  },
]

function UpcomingCard({ game }) {
  return (
    <div className="game-card upcoming">
      <div className="game-badge">{game.group}</div>
      <div className="game-matchup">
        <span className="team">
          <span className="flag">{game.flagA}</span>
          {game.teamA}
        </span>
        <span className="vs">vs</span>
        <span className="team">
          <span className="flag">{game.flagB}</span>
          {game.teamB}
        </span>
      </div>
      <div className="game-info">
        <span> {game.date}</span>
        <span> {game.time}</span>
        <span> {game.venue}</span>
      </div>
    </div>
  )
}

function ResultCard({ game }) {
  const winner =
    game.scoreA > game.scoreB ? 'A'
    : game.scoreB > game.scoreA ? 'B'
    : 'draw'

  return (
    <div className="game-card result">
      <div className="game-badge">{game.group} · {game.date}</div>
      <div className="game-matchup">
        <span className={`team ${winner === 'A' ? 'winner' : ''}`}>
          <span className="flag">{game.flagA}</span>
          {game.teamA}
        </span>
        <span className="scoreline">
          {game.scoreA} – {game.scoreB}
        </span>
        <span className={`team ${winner === 'B' ? 'winner' : ''}`}>
          <span className="flag">{game.flagB}</span>
          {game.teamB}
        </span>
      </div>
      {winner === 'draw' && <div className="draw-label">Draw</div>}
    </div>
  )
}

export default function App() {
  return (
    <>
      <section id="center">
        <h1>🏆 World Cup 2026</h1>
        <p>Live schedule and results board</p>
      </section>

      <div className="ticks" />

      <section id="next-steps" style={{ flexDirection: 'column', padding: '32px' }}>
        <div className="board-section">
          <h2>Upcoming Games</h2>
          <div className="game-list">
            {UPCOMING_GAMES.map(g => <UpcomingCard key={g.id} game={g} />)}
          </div>
        </div>

        <div className="board-section" style={{ marginTop: '40px' }}>
          <h2>Past Results</h2>
          <div className="game-list">
            {PAST_RESULTS.slice().reverse().map(g => <ResultCard key={g.id} game={g} />)}
          </div>
        </div>
      </section>

      <div className="ticks" />
      <section id="spacer" />
    </>
  )
}
