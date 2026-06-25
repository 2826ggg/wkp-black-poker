import './App.css'


export default function App() {


const discord =
"https://discord.gg/6Mvu2T3c7"


return (

<div className="app">


{/* NAV */}

<header className="nav">


<div className="logo">

♠ WKP INTERNATIONAL

</div>



<div className="nav-right">


<button>

赛事

</button>


<button>

排名

</button>


<button>

登录

</button>


<button className="gold">

注册

</button>


</div>


</header>





{/* HERO */}

<section className="hero">


<h1>

BLACK POKER TOURNAMENT

</h1>


<p>

Global Poker Community

<br/>

VIP Black Gold Series

</p>



<div>


<button className="cta">

JOIN WKP

</button>



<a

href={discord}

target="_blank"

>


<button className="discord">

DISCORD

</button>


</a>


</div>



</section>








{/* EVENTS */}

<section className="section">


<h2>

🏆 UPCOMING EVENTS

</h2>



<div className="grid">



<div className="card">


<h3>

WKP Shanghai Open

</h3>


<p>

Players: 128

</p>


<p>

Status: OPEN

</p>


<button>

REGISTER

</button>


</div>





<div className="card">


<h3>

Tokyo Black Series

</h3>


<p>

Players: 200

</p>


<p>

VIP Tournament

</p>


<button>

REGISTER

</button>


</div>





<div className="card">


<h3>

Taipei Night Cup

</h3>


<p>

Global Event

</p>


<p>

Ranking Points

</p>


<button>

REGISTER

</button>


</div>



</div>


</section>








{/* RANKING */}


<section className="section dark">


<h2>

🏅 GLOBAL RANKING

</h2>



<div className="ranking">


<p>

🥇 John 🇺🇸 1250 PTS

</p>


<p>

🥈 Alex 🇯🇵 980 PTS

</p>


<p>

🥉 Mike 🇩🇪 760 PTS

</p>



</div>



</section>









{/* RULES */}


<section className="section">


<h2>

📜 WKP COMMUNITY

</h2>


<ul>


<li>

Global Poker Players

</li>


<li>

Tournament Ranking

</li>


<li>

Strategy Discussion

</li>


<li>

VIP Community

</li>


</ul>


</section>







{/* DISCORD */}


<section className="discord-box">


<h2>

♠ JOIN WKP COMMUNITY

</h2>



<p>

Meet international players

</p>



<a

href={discord}

target="_blank"

>


<button className="discord">

JOIN DISCORD

</button>


</a>



</section>







<footer className="footer">


© 2026 WKP International Poker Club


</footer>



</div>

)

}
