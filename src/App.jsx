import './App.css'
import UpcomingCard from './UpcomingCard'
import ResultCard from './ResultCard'

const PAST_RESULTS = [
  // Jun 18
  { id: 1,  date: 'Jun 18', group: 'Group B', teamA: 'Switzerland',  flagA: '🇨🇭', scoreA: 4, teamB: 'Bosnia & Herz.', flagB: '🇧🇦', scoreB: 1, venue: 'SoFi Stadium, Los Angeles' },
  { id: 2,  date: 'Jun 18', group: 'Group A', teamA: 'Czechia',       flagA: '🇨🇿', scoreA: 1, teamB: 'South Africa',   flagB: '🇿🇦', scoreB: 1, venue: 'Mercedes-Benz Stadium, Atlanta' },
  // Jun 17
  { id: 3,  date: 'Jun 17', group: 'Group L', teamA: 'England',       flagA: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', scoreA: 4, teamB: 'Croatia',        flagB: '🇭🇷', scoreB: 2, venue: 'AT&T Stadium, Dallas' },
  { id: 4,  date: 'Jun 17', group: 'Group L', teamA: 'Ghana',         flagA: '🇬🇭', scoreA: 1, teamB: 'Panama',         flagB: '🇵🇦', scoreB: 0, venue: 'BMO Field, Toronto' },
  { id: 5,  date: 'Jun 17', group: 'Group K', teamA: 'Portugal',      flagA: '🇵🇹', scoreA: 1, teamB: 'DR Congo',       flagB: '🇨🇩', scoreB: 1, venue: 'NRG Stadium, Houston' },
  { id: 6,  date: 'Jun 17', group: 'Group K', teamA: 'Colombia',      flagA: '🇨🇴', scoreA: 3, teamB: 'Uzbekistan',     flagB: '🇺🇿', scoreB: 1, venue: 'Estadio Azteca, Mexico City' },
  // Jun 16
  { id: 7,  date: 'Jun 16', group: 'Group J', teamA: 'Argentina',     flagA: '🇦🇷', scoreA: 3, teamB: 'Algeria',        flagB: '🇩🇿', scoreB: 0, venue: 'GEHA Field at Arrowhead, Kansas City' },
  { id: 8,  date: 'Jun 16', group: 'Group J', teamA: 'Austria',       flagA: '🇦🇹', scoreA: 3, teamB: 'Jordan',         flagB: '🇯🇴', scoreB: 1, venue: "Levi's Stadium, San Francisco" },
  { id: 9,  date: 'Jun 16', group: 'Group I', teamA: 'France',        flagA: '🇫🇷', scoreA: 3, teamB: 'Senegal',        flagB: '🇸🇳', scoreB: 1, venue: 'MetLife Stadium, New York/NJ' },
  { id: 10, date: 'Jun 16', group: 'Group I', teamA: 'Norway',        flagA: '🇳🇴', scoreA: 4, teamB: 'Iraq',           flagB: '🇮🇶', scoreB: 1, venue: 'Gillette Stadium, Boston' },
  // Jun 15
  { id: 11, date: 'Jun 15', group: 'Group H', teamA: 'Spain',         flagA: '🇪🇸', scoreA: 0, teamB: 'Cabo Verde',     flagB: '🇨🇻', scoreB: 0, venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 12, date: 'Jun 15', group: 'Group H', teamA: 'Saudi Arabia',  flagA: '🇸🇦', scoreA: 1, teamB: 'Uruguay',        flagB: '🇺🇾', scoreB: 1, venue: 'Hard Rock Stadium, Miami' },
  { id: 13, date: 'Jun 15', group: 'Group G', teamA: 'Belgium',       flagA: '🇧🇪', scoreA: 1, teamB: 'Egypt',          flagB: '🇪🇬', scoreB: 1, venue: 'Lumen Field, Seattle' },
  { id: 14, date: 'Jun 15', group: 'Group G', teamA: 'Iran',          flagA: '🇮🇷', scoreA: 2, teamB: 'New Zealand',    flagB: '🇳🇿', scoreB: 2, venue: 'SoFi Stadium, Los Angeles' },
  // Jun 14
  { id: 15, date: 'Jun 14', group: 'Group E', teamA: 'Germany',       flagA: '🇩🇪', scoreA: 7, teamB: 'Curaçao',        flagB: '🇨🇼', scoreB: 1, venue: 'NRG Stadium, Houston' },
  { id: 16, date: 'Jun 14', group: 'Group E', teamA: 'Ivory Coast',   flagA: '🇨🇮', scoreA: 1, teamB: 'Ecuador',        flagB: '🇪🇨', scoreB: 0, venue: 'Lincoln Financial Field, Philadelphia' },
  { id: 17, date: 'Jun 14', group: 'Group F', teamA: 'Netherlands',   flagA: '🇳🇱', scoreA: 2, teamB: 'Japan',          flagB: '🇯🇵', scoreB: 2, venue: 'AT&T Stadium, Dallas' },
  { id: 18, date: 'Jun 14', group: 'Group F', teamA: 'Sweden',        flagA: '🇸🇪', scoreA: 5, teamB: 'Tunisia',        flagB: '🇹🇳', scoreB: 1, venue: 'Estadio BBVA, Monterrey' },
  // Jun 13
  { id: 19, date: 'Jun 13', group: 'Group B', teamA: 'Qatar',         flagA: '🇶🇦', scoreA: 1, teamB: 'Switzerland',    flagB: '🇨🇭', scoreB: 1, venue: "Levi's Stadium, San Francisco" },
  { id: 20, date: 'Jun 13', group: 'Group C', teamA: 'Brazil',        flagA: '🇧🇷', scoreA: 1, teamB: 'Morocco',        flagB: '🇲🇦', scoreB: 1, venue: 'MetLife Stadium, New York/NJ' },
  { id: 21, date: 'Jun 13', group: 'Group C', teamA: 'Haiti',         flagA: '🇭🇹', scoreA: 0, teamB: 'Scotland',       flagB: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', scoreB: 1, venue: 'Gillette Stadium, Boston' },
  { id: 22, date: 'Jun 13', group: 'Group D', teamA: 'Australia',     flagA: '🇦🇺', scoreA: 2, teamB: 'Türkiye',        flagB: '🇹🇷', scoreB: 0, venue: 'BC Place, Vancouver' },
  // Jun 12
  { id: 23, date: 'Jun 12', group: 'Group B', teamA: 'Canada',        flagA: '🇨🇦', scoreA: 1, teamB: 'Bosnia & Herz.', flagB: '🇧🇦', scoreB: 1, venue: 'BMO Field, Toronto' },
  { id: 24, date: 'Jun 12', group: 'Group D', teamA: 'USA',           flagA: '🇺🇸', scoreA: 4, teamB: 'Paraguay',       flagB: '🇵🇾', scoreB: 1, venue: 'SoFi Stadium, Los Angeles' },
  // Jun 11
  { id: 25, date: 'Jun 11', group: 'Group A', teamA: 'Mexico',        flagA: '🇲🇽', scoreA: 2, teamB: 'South Africa',   flagB: '🇿🇦', scoreB: 0, venue: 'Estadio Azteca, Mexico City' },
  { id: 26, date: 'Jun 11', group: 'Group A', teamA: 'South Korea',   flagA: '🇰🇷', scoreA: 2, teamB: 'Czechia',        flagB: '🇨🇿', scoreB: 1, venue: 'Estadio Akron, Guadalajara' },
]

const UPCOMING_GAMES = [
  // Jun 18 — live
  { id: 100, date: 'Jun 18', status: 'live', minute: "36'", group: 'Group B', teamA: 'Canada', flagA: '🇨🇦', scoreA: 2, teamB: 'Qatar', flagB: '🇶🇦', scoreB: 0, venue: 'BC Place, Vancouver', note: 'Red card: Qatar' },
  // Jun 18
  { id: 101, date: 'Jun 18', time: '9:00 PM ET',  group: 'Group A', teamA: 'Mexico',        flagA: '🇲🇽', teamB: 'South Korea',   flagB: '🇰🇷', venue: 'Estadio Akron, Guadalajara' },
  // Jun 19
  { id: 102, date: 'Jun 19', time: '3:00 PM ET',  group: 'Group D', teamA: 'USA',           flagA: '🇺🇸', teamB: 'Australia',     flagB: '🇦🇺', venue: 'Lumen Field, Seattle' },
  { id: 103, date: 'Jun 19', time: '6:00 PM ET',  group: 'Group C', teamA: 'Scotland',      flagA: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', teamB: 'Morocco',       flagB: '🇲🇦', venue: 'Gillette Stadium, Boston' },
  { id: 104, date: 'Jun 19', time: '8:30 PM ET',  group: 'Group C', teamA: 'Brazil',        flagA: '🇧🇷', teamB: 'Haiti',         flagB: '🇭🇹', venue: 'Lincoln Financial Field, Philadelphia' },
  { id: 105, date: 'Jun 19', time: '11:00 PM ET', group: 'Group D', teamA: 'Türkiye',       flagA: '🇹🇷', teamB: 'Paraguay',      flagB: '🇵🇾', venue: "Levi's Stadium, San Francisco" },
  // Jun 20
  { id: 106, date: 'Jun 20', time: '1:00 PM ET',  group: 'Group F', teamA: 'Netherlands',   flagA: '🇳🇱', teamB: 'Sweden',        flagB: '🇸🇪', venue: 'NRG Stadium, Houston' },
  { id: 107, date: 'Jun 20', time: '4:00 PM ET',  group: 'Group E', teamA: 'Germany',       flagA: '🇩🇪', teamB: 'Ivory Coast',   flagB: '🇨🇮', venue: 'BMO Field, Toronto' },
  { id: 108, date: 'Jun 20', time: '8:00 PM ET',  group: 'Group E', teamA: 'Ecuador',       flagA: '🇪🇨', teamB: 'Curaçao',       flagB: '🇨🇼', venue: 'GEHA Field at Arrowhead, Kansas City' },
  // Jun 21
  { id: 109, date: 'Jun 21', time: '12:00 AM ET', group: 'Group F', teamA: 'Tunisia',       flagA: '🇹🇳', teamB: 'Japan',         flagB: '🇯🇵', venue: 'Estadio BBVA, Monterrey' },
  { id: 110, date: 'Jun 21', time: '12:00 PM ET', group: 'Group H', teamA: 'Spain',         flagA: '🇪🇸', teamB: 'Saudi Arabia',  flagB: '🇸🇦', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 111, date: 'Jun 21', time: '3:00 PM ET',  group: 'Group G', teamA: 'Belgium',       flagA: '🇧🇪', teamB: 'Iran',          flagB: '🇮🇷', venue: 'SoFi Stadium, Los Angeles' },
  { id: 112, date: 'Jun 21', time: '6:00 PM ET',  group: 'Group H', teamA: 'Uruguay',       flagA: '🇺🇾', teamB: 'Cabo Verde',    flagB: '🇨🇻', venue: 'Hard Rock Stadium, Miami' },
  { id: 113, date: 'Jun 21', time: '9:00 PM ET',  group: 'Group G', teamA: 'New Zealand',   flagA: '🇳🇿', teamB: 'Egypt',         flagB: '🇪🇬', venue: 'BC Place, Vancouver' },
  // Jun 22
  { id: 114, date: 'Jun 22', time: '1:00 PM ET',  group: 'Group J', teamA: 'Argentina',     flagA: '🇦🇷', teamB: 'Austria',       flagB: '🇦🇹', venue: 'AT&T Stadium, Dallas' },
  { id: 115, date: 'Jun 22', time: '5:00 PM ET',  group: 'Group I', teamA: 'France',        flagA: '🇫🇷', teamB: 'Iraq',          flagB: '🇮🇶', venue: 'Lincoln Financial Field, Philadelphia' },
  { id: 116, date: 'Jun 22', time: '8:00 PM ET',  group: 'Group I', teamA: 'Norway',        flagA: '🇳🇴', teamB: 'Senegal',       flagB: '🇸🇳', venue: 'MetLife Stadium, New York/NJ' },
  { id: 117, date: 'Jun 22', time: '11:00 PM ET', group: 'Group J', teamA: 'Jordan',        flagA: '🇯🇴', teamB: 'Algeria',       flagB: '🇩🇿', venue: "Levi's Stadium, San Francisco" },
  // Jun 23
  { id: 118, date: 'Jun 23', time: '1:00 PM ET',  group: 'Group K', teamA: 'Portugal',      flagA: '🇵🇹', teamB: 'Uzbekistan',    flagB: '🇺🇿', venue: 'NRG Stadium, Houston' },
  { id: 119, date: 'Jun 23', time: '4:00 PM ET',  group: 'Group L', teamA: 'England',       flagA: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', teamB: 'Ghana',         flagB: '🇬🇭', venue: 'Gillette Stadium, Boston' },
  { id: 120, date: 'Jun 23', time: '7:00 PM ET',  group: 'Group L', teamA: 'Panama',        flagA: '🇵🇦', teamB: 'Croatia',       flagB: '🇭🇷', venue: 'BMO Field, Toronto' },
  { id: 121, date: 'Jun 23', time: '10:00 PM ET', group: 'Group K', teamA: 'Colombia',      flagA: '🇨🇴', teamB: 'DR Congo',      flagB: '🇨🇩', venue: 'Estadio Akron, Guadalajara' },
  // Jun 24
  { id: 122, date: 'Jun 24', time: '3:00 PM ET',  group: 'Group B', teamA: 'Switzerland',   flagA: '🇨🇭', teamB: 'Canada',        flagB: '🇨🇦', venue: 'BC Place, Vancouver' },
  { id: 123, date: 'Jun 24', time: '3:00 PM ET',  group: 'Group B', teamA: 'Bosnia & Herz.',flagA: '🇧🇦', teamB: 'Qatar',         flagB: '🇶🇦', venue: 'Lumen Field, Seattle' },
  { id: 124, date: 'Jun 24', time: '6:00 PM ET',  group: 'Group C', teamA: 'Morocco',       flagA: '🇲🇦', teamB: 'Haiti',         flagB: '🇭🇹', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 125, date: 'Jun 24', time: '6:00 PM ET',  group: 'Group C', teamA: 'Scotland',      flagA: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', teamB: 'Brazil',        flagB: '🇧🇷', venue: 'Hard Rock Stadium, Miami' },
  { id: 126, date: 'Jun 24', time: '9:00 PM ET',  group: 'Group A', teamA: 'South Africa',  flagA: '🇿🇦', teamB: 'South Korea',   flagB: '🇰🇷', venue: 'Estadio BBVA, Monterrey' },
  { id: 127, date: 'Jun 24', time: '9:00 PM ET',  group: 'Group A', teamA: 'Czechia',       flagA: '🇨🇿', teamB: 'Mexico',        flagB: '🇲🇽', venue: 'Estadio Azteca, Mexico City' },
  // Jun 25
  { id: 128, date: 'Jun 25', time: '4:00 PM ET',  group: 'Group E', teamA: 'Curaçao',       flagA: '🇨🇼', teamB: 'Ivory Coast',   flagB: '🇨🇮', venue: 'Lincoln Financial Field, Philadelphia' },
  { id: 129, date: 'Jun 25', time: '4:00 PM ET',  group: 'Group E', teamA: 'Ecuador',       flagA: '🇪🇨', teamB: 'Germany',       flagB: '🇩🇪', venue: 'MetLife Stadium, New York/NJ' },
  { id: 130, date: 'Jun 25', time: '7:00 PM ET',  group: 'Group F', teamA: 'Tunisia',       flagA: '🇹🇳', teamB: 'Netherlands',   flagB: '🇳🇱', venue: 'GEHA Field at Arrowhead, Kansas City' },
  { id: 131, date: 'Jun 25', time: '7:00 PM ET',  group: 'Group F', teamA: 'Japan',         flagA: '🇯🇵', teamB: 'Sweden',        flagB: '🇸🇪', venue: 'AT&T Stadium, Dallas' },
  { id: 132, date: 'Jun 25', time: '10:00 PM ET', group: 'Group D', teamA: 'Türkiye',       flagA: '🇹🇷', teamB: 'USA',           flagB: '🇺🇸', venue: 'SoFi Stadium, Los Angeles' },
  { id: 133, date: 'Jun 25', time: '10:00 PM ET', group: 'Group D', teamA: 'Paraguay',      flagA: '🇵🇾', teamB: 'Australia',     flagB: '🇦🇺', venue: "Levi's Stadium, San Francisco" },
  // Jun 26
  { id: 134, date: 'Jun 26', time: '3:00 PM ET',  group: 'Group I', teamA: 'Norway',        flagA: '🇳🇴', teamB: 'France',        flagB: '🇫🇷', venue: 'Gillette Stadium, Boston' },
  { id: 135, date: 'Jun 26', time: '3:00 PM ET',  group: 'Group I', teamA: 'Senegal',       flagA: '🇸🇳', teamB: 'Iraq',          flagB: '🇮🇶', venue: 'BMO Field, Toronto' },
  { id: 136, date: 'Jun 26', time: '8:00 PM ET',  group: 'Group G', teamA: 'Egypt',         flagA: '🇪🇬', teamB: 'Iran',          flagB: '🇮🇷', venue: 'Lumen Field, Seattle' },
  { id: 137, date: 'Jun 26', time: '8:00 PM ET',  group: 'Group G', teamA: 'New Zealand',   flagA: '🇳🇿', teamB: 'Belgium',       flagB: '🇧🇪', venue: 'BC Place, Vancouver' },
  { id: 138, date: 'Jun 26', time: '11:00 PM ET', group: 'Group H', teamA: 'Cabo Verde',    flagA: '🇨🇻', teamB: 'Saudi Arabia',  flagB: '🇸🇦', venue: 'NRG Stadium, Houston' },
  { id: 139, date: 'Jun 26', time: '11:00 PM ET', group: 'Group H', teamA: 'Uruguay',       flagA: '🇺🇾', teamB: 'Spain',         flagB: '🇪🇸', venue: 'Estadio Akron, Guadalajara' },
  // Jun 27
  { id: 140, date: 'Jun 27', time: '5:00 PM ET',  group: 'Group L', teamA: 'Panama',        flagA: '🇵🇦', teamB: 'England',       flagB: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue: 'MetLife Stadium, New York/NJ' },
  { id: 141, date: 'Jun 27', time: '5:00 PM ET',  group: 'Group L', teamA: 'Croatia',       flagA: '🇭🇷', teamB: 'Ghana',         flagB: '🇬🇭', venue: 'Lincoln Financial Field, Philadelphia' },
  { id: 142, date: 'Jun 27', time: '7:30 PM ET',  group: 'Group K', teamA: 'Colombia',      flagA: '🇨🇴', teamB: 'Portugal',      flagB: '🇵🇹', venue: 'Hard Rock Stadium, Miami' },
  { id: 143, date: 'Jun 27', time: '7:30 PM ET',  group: 'Group K', teamA: 'DR Congo',      flagA: '🇨🇩', teamB: 'Uzbekistan',    flagB: '🇺🇿', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 144, date: 'Jun 27', time: '10:00 PM ET', group: 'Group J', teamA: 'Algeria',       flagA: '🇩🇿', teamB: 'Austria',       flagB: '🇦🇹', venue: 'GEHA Field at Arrowhead, Kansas City' },
  { id: 145, date: 'Jun 27', time: '10:00 PM ET', group: 'Group J', teamA: 'Jordan',        flagA: '🇯🇴', teamB: 'Argentina',     flagB: '🇦🇷', venue: 'AT&T Stadium, Dallas' },
]

function groupByDate(games) {
  const map = {}
  for (const g of games) {
    if (!map[g.date]) map[g.date] = []
    map[g.date].push(g)
  }
  return Object.entries(map)
}

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
