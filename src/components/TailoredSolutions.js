// src/components/TailoredSolutionsPro.jsx
import React from "react";

export default function TailoredSolutionsPro() {
  return (
    <section className="ts2">
      <div className="ts2-wrap">
        {/* Headline */}
        <header className="ts2-head">
          <div className="ts2-deco" aria-hidden="true" />
          <h2 className="ts2-title">
            Crafting Solutions <br className="hide-sm" />
            Tailored to You
          </h2>
          <p className="ts2-sub">
            At <b>Codile</b>, we deliver a diverse range of solutions—precisely
            crafted for your unique goals.
          </p>
        </header>

        {/* Grid (two vertical stacks) */}
        <div className="ts2-grid">
          {/* LEFT STACK */}
          <div className="stack">
            {/* Subscription */}
            <article className="card glass" aria-labelledby="subTitle">
              <div className="chip"><span className="mark" /></div>
              <h3 id="subTitle" className="card-title">Subscription</h3>
              <p className="card-desc">
                Carefully curated subscription options designed to enhance the
                experience and remove friction.
              </p>

              <ul className="list" role="list">
                {[
                  ["Tailored Convenience", "Customize your subscription", "y"],
                  ["Cost Savings and Value", "Savings with flexible plans", "g"],
                  ["Priority Access", "Early access for subscribers", "b"],
                  ["Seamless Experience", "All benefits—no admin burden", "p"],
                ].map(([t, s, k]) => (
                  <li className="list-item" key={t}>
                    <span className={`bar ${k}`} aria-hidden="true" />
                    <div className="lt">
                      <div className="lt-title">{t}</div>
                      <div className="lt-sub">{s}</div>
                    </div>
                    <span className="chev">›</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Tracking & Record */}
            <article className="card glass" aria-labelledby="trkTitle">
              <div className="chip"><span className="mark" /></div>
              <h3 id="trkTitle" className="card-title">Tracking &amp; Record</h3>
              <p className="card-desc">
                Precision tracking to drive efficiency, ensure compliance, and
                enable confident decision-making.
              </p>

              <div className="viz">
                <div className="chart">
                  <span className="cbar c1" />
                  <span className="cbar c2" />
                  <span className="cbar c3" />
                  <span className="cbar c4" />
                </div>
                <div className="badges">
                  <span className="badge">Google Ads</span>
                  <span className="badge ok">Verified</span>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT STACK */}
          <div className="stack">
            {/* Advertising */}
            <article className="card glass" aria-labelledby="advTitle">
              <div className="chip"><span className="mark" /></div>
              <h3 id="advTitle" className="card-title">Advertising</h3>
              <p className="card-desc">
                Campaigns that resonate and convert—memorable stories, measurable
                outcomes.
              </p>

              <div className="icon-row" role="list">
                {["🌐","📊","🎯","📸","💬"].map((i) => (
                  <span key={i} className="tile" role="listitem" aria-label="feature icon">
                    {i}
                  </span>
                ))}
              </div>
            </article>

            {/* Bridge strip (between cards) */}
            <div className="bridge" aria-hidden="true">
              {["🌐","📊","🎯","📸","💬"].map((i, idx) => (
                <span key={idx} className="tile sm">{i}</span>
              ))}
            </div>

            {/* Efficient Management */}
            <article className="card glass" aria-labelledby="mngTitle">
              <div className="chip"><span className="mark" /></div>
              <h3 id="mngTitle" className="card-title">Efficient Management</h3>
              <p className="card-desc">
                Build momentum with clear planning, crisp allocation, and
                empowered teams.
              </p>

              <div className="bullets">
                <div className="bullet"><span className="dot" /> <b>Planning &amp; Goals</b></div>
                <div className="bullet"><span className="dot" /> <b>Resource Optimization</b></div>
                <div className="bullet"><span className="dot" /> Support &amp; Enablement</div>
              </div>

              {/* floating minis */}
              <div className="mini one">
                <span className="mini-title">Tailored Convenience</span>
                <span className="mini-cta">⋯</span>
              </div>
              <div className="mini two">
                <span className="mini-title">Create Planning &amp; Goals</span>
                <span className="mini-cta">➔</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <style>{`
        :root{
          --ink:#0b0f19;
          --muted:#6b7280;
          --line:#eef2f6;
          --accent:#ff6b6b;
          --accent2:#ff9a9a;
          --bg:#fff;
          --glass:#ffffffcc;
          --rad-lg:22px;
          --rad-md:14px;
          --shadow:0 16px 40px rgba(13,17,23,.08);
        }

        .ts2{ background:var(--bg); padding:64px 16px 88px; }
        .ts2-wrap{ max-width:1200px; margin:0 auto; }

        /* header */
        .ts2-head{ text-align:center; margin-bottom:28px; position:relative; }
        .ts2-deco{
          position:absolute; inset:-40px 0 auto 0; height:180px; pointer-events:none;
          background:
            radial-gradient(600px 120px at 50% 10%, rgba(255,107,107,.08), transparent 70%),
            radial-gradient(400px 120px at 70% 0%, rgba(255,154,154,.08), transparent 70%),
            radial-gradient(400px 120px at 30% 0%, rgba(133,213,255,.06), transparent 70%);
          filter:saturate(1.1);
        }
        .ts2-title{
          margin:0;
          color:var(--ink);
          font-weight:800;
          letter-spacing:-.02em;
          line-height:1.05;
          font-size: clamp(28px, 5vw, 52px);
        }
        .hide-sm{ display:inline; }
        .ts2-sub{
          color:#99a3b2;
          margin:8px auto 0;
          max-width:680px;
          font-size:14px; line-height:1.6;
        }

        /* grid */
        .ts2-grid{
          display:grid; grid-template-columns:1fr 1fr; gap:22px; align-items:start;
        }
        .stack{ display:grid; grid-template-rows:auto auto; gap:22px; }

        /* card */
        .card{
          position:relative;
          border-radius:var(--rad-lg);
          padding:22px;
          background:var(--glass);
          border:1px solid var(--line);
          box-shadow:var(--shadow);
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .card::before{
          content:""; position:absolute; inset:0; border-radius:inherit;
          padding:1px; background:linear-gradient(135deg, rgba(255,255,255,.6), rgba(255,255,255,0));
          -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
        }
        .card:hover{ transform: translateY(-4px); box-shadow:0 20px 44px rgba(13,17,23,.12); }

        .chip{
          width:38px; height:38px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          border:1px solid var(--line);
          background:linear-gradient(135deg, #fff, #f9fafb);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.9), var(--shadow);
          margin-bottom:10px;
        }
        .mark{
          width:18px; height:18px; border-radius:6px; display:block;
          background:radial-gradient(circle at 30% 30%, var(--accent), var(--accent2));
          box-shadow:0 0 0 6px rgba(255,107,107,.12);
        }

        .card-title{ font-weight:800; font-size:20px; color:var(--ink); margin:0 0 6px; }
        .card-desc{ color:#8892a3; font-size:14px; line-height:1.7; margin:0 0 12px; }

        /* subscription list */
        .list{ display:grid; gap:10px; }
        .list-item{
          display:grid; grid-template-columns:6px 1fr auto; gap:12px; align-items:center;
          background:#fff; border:1px solid var(--line); border-radius:14px; padding:12px 14px;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.8), var(--shadow);
        }
        .bar{ width:6px; height:100%; border-radius:8px; display:block; }
        .bar.y{ background:linear-gradient(#ffd169,#ffae00); }
        .bar.g{ background:linear-gradient(#72e1a1,#36c27a); }
        .bar.b{ background:linear-gradient(#7ecbff,#4aa8ff); }
        .bar.p{ background:linear-gradient(#f7a5d3,#ee70aa); }
        .lt-title{ font-weight:700; color:#2b3445; font-size:14px; }
        .lt-sub{ color:#8a93a4; font-size:12px; }
        .chev{ color:#aab3c2; font-size:18px; font-weight:900; padding-left:6px; }

        /* advertising icons */
        .icon-row{ display:flex; gap:12px; margin-top:10px; flex-wrap:wrap; }
        .tile{
          width:56px; height:56px; border-radius:16px;
          background:#fff; border:1px solid var(--line);
          display:flex; align-items:center; justify-content:center;
          font-size:22px; box-shadow:inset 0 1px 0 rgba(255,255,255,.8), var(--shadow);
        }
        .tile.sm{ width:48px; height:48px; border-radius:14px; font-size:20px; }

        /* bridge strip */
        .bridge{
          display:flex; gap:10px; width:max-content;
          margin: -6px auto -6px 8px;
          background:#fff; border:1px solid var(--line); border-radius:16px; padding:10px 12px;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.8), var(--shadow);
        }

        /* tracking viz */
        .viz{ margin-top:12px; background:linear-gradient(180deg,#fff,#fafafb); border:1px solid var(--line);
          border-radius:16px; padding:14px; box-shadow:inset 0 1px 0 rgba(255,255,255,.8), var(--shadow); }
        .chart{ display:flex; align-items:flex-end; gap:10px; height:120px; }
        .cbar{ flex:1; border-radius:12px; background:linear-gradient(180deg, rgba(255,107,107,.28), rgba(255,107,107,.08)); box-shadow: inset 0 -12px 30px rgba(255,107,107,.2); }
        .c1{ height:55%; } .c2{ height:85%; } .c3{ height:70%; } .c4{ height:40%; }
        .badges{ display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; }
        .badge{ background:#fff; border:1px solid var(--line); border-radius:999px; padding:6px 10px; font-size:12px; font-weight:700; color:#6b7280; box-shadow:inset 0 1px 0 rgba(255,255,255,.8), var(--shadow); }
        .badge.ok{ color:#10b981; border-color:#d1fae5; }

        /* management bullets + minis */
        .bullets{ display:grid; gap:8px; margin-top:6px; }
        .bullet{ display:flex; align-items:center; gap:10px; color:#2b3445; font-size:14px; }
        .dot{ width:10px; height:10px; border-radius:50%; background:linear-gradient(#ffb7b7,#ff8181); box-shadow:0 0 0 3px rgba(255,129,129,.18); }

        .mini{
          position:absolute; background:#fff; border:1px solid var(--line);
          border-radius:14px; padding:10px 12px; box-shadow:var(--shadow);
          display:flex; align-items:center; gap:10px;
        }
        .mini .mini-title{ font-weight:800; color:#2b3445; font-size:12px; }
        .mini .mini-cta{ margin-left:auto; color:#aab3c2; font-weight:900; }
        .mini.one{ right:16px; top:66%; transform:translateY(-50%); }
        .mini.two{ left:16px; bottom:18px; }

        /* responsive */
        @media (max-width: 980px){
          .ts2-grid{ grid-template-columns:1fr; }
          .bridge{ margin: -4px auto 0; }
          .mini.one, .mini.two{ position:relative; inset:auto; transform:none; margin-top:10px; }
          .hide-sm{ display:none; }
        }
      `}</style>
    </section>
  );
}
