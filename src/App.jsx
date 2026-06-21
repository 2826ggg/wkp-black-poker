import './App.css'

export default function App() {
  return (
    <div className="app">

      {/* NAV */}
      <header className="nav">
        <div className="logo">WKP BLACK SERIES</div>
        <div className="nav-right">
          <button>赛事</button>
          <button>规则</button>
          <button className="gold">报名</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>BLACK POKER TOURNAMENT</h1>
        <p>全球德州扑克高端赛事平台 · VIP 黑金系列</p>
        <button className="cta">立即报名</button>
      </section>

      {/* EVENTS */}
      <section className="section">
        <h2>🔥 即将开始赛事</h2>

        <div className="grid">
          <div className="card">
            <h3>WKP Shanghai Open</h3>
            <p>Buy-in: $500</p>
            <p>Prize Pool: $50,000</p>
          </div>

          <div className="card">
            <h3>Tokyo Black Series</h3>
            <p>Buy-in: $1000</p>
            <p>Prize Pool: $120,000</p>
          </div>

          <div className="card">
            <h3>Taipei Night Cup</h3>
            <p>Buy-in: $300</p>
            <p>Prize Pool: $30,000</p>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="section dark">
        <h2>📜 赛事规则</h2>
        <ul>
          <li>禁止外挂 / 作弊行为</li>
          <li>所有比赛采用德州扑克标准规则</li>
          <li>支持线上 & 线下赛事</li>
          <li>奖金自动结算</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 WKP Black Poker Series · All Rights Reserved
      </footer>

    </div>
  )
}