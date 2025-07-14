import Header from './components/Header';
import GameCard from './components/GameCard';
import CountdownCard from './components/CountdownCard';
import './styles/index.css';

export default function Home() {
  return (
    <div className="page">
      <Header />

      <div className="main-content">
        <h1 className="main-heading">Welcome to the guiding star in your world of gaming</h1>

        <section className="popular-section">
          <h2 className="section-title">Popular Right Now</h2>
          <div className="card-row">
            {[...Array(6)].map((_, i) => (
              <GameCard key={i} />
            ))}
          </div>
        </section>

        <section className="anticipate-section">
          <h2 className="section-title">Most Anticipated</h2>
          <div className="countdown-row">
            <CountdownCard title="Mafia: The Old Country" date="2025-08-08T00:00:00" />
            <CountdownCard title="Metal Gear Solid Delta: Snake Eater" date="2025-08-28T00:00:00" />
          </div>
        </section>
      </div>
    </div>
  );
}
