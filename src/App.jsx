import './App.css'
import UpcomingCard from './UpcomingCard'
import ResultCard from './ResultCard'
import { PAST_RESULTS, UPCOMING_GAMES, groupByDate } from './matches'

export default function App() {
  const upcomingByDate = groupByDate(UPCOMING_GAMES)
  const resultsByDate = groupByDate(PAST_RESULTS)

  return (
    <>
      <section id="center">
        <h1>🏆 World Cup 2026</h1>
        <p>Group Stage · Jun 11 – Jun 27 · USA, Canada &amp; Mexico</p>
      </section>

      <div className="ticks" />

      <section id="next-steps">

        <div className="board-section">
          <h2>Upcoming Games</h2>
          {upcomingByDate.map(([date, games]) => (
            <div key={date} className="date-group">
              <div className="date-header">{date}</div>
              <div className="game-list">
                {games.map(g => <UpcomingCard key={g.id} game={g} />)}
              </div>
            </div>
          ))}
        </div>

        <div className="board-section">
          <h2>Past Results</h2>
          {resultsByDate.map(([date, games]) => (
            <div key={date} className="date-group">
              <div className="date-header">{date}</div>
              <div className="game-list">
                {games.map(g => <ResultCard key={g.id} game={g} />)}
              </div>
            </div>
          ))}
        </div>

      </section>

      <div className="ticks" />
      <section id="spacer" />
    </>
  )
}
