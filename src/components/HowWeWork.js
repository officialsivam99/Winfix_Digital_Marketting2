import React from "react";

export default function HowWeWork() {
  const imgMain =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop";
  const imgMeeting =
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop";

  return (
    <section className="hww">
      <div className="wrap">
        {/* ======= Top: Image + Copy ======= */}
        <div className="top">
          <div className="heroImg">
            <img src={imgMain} alt="Team working" />
            <span className="accent" />
          </div>

          <div className="copy">
            <div className="chip">
              <span className="dot" />
              How We Work
            </div>

            <h2 className="title">Smart &amp; Effective Solution.</h2>

            <p className="p">
              On the other side, we condemn righteous wrath and despise men who
              are seduced and demoralized by the allure of fleeting pleasure. We
              believe on providing substantial, long-term achievements rather
              than pursuing short-term happiness.
            </p>
            <p className="p">
              Our team values creativity and strategic thinking in order to
              provide unique solutions to real-world problems. We collaborate
              closely with our customers to ensure that each project reflects
              their vision while upholding the highest standards of quality and
              honesty.
            </p>
          </div>
        </div>

        {/* ======= Middle: 4 feature cards ======= */}
        <div className="features">
          {[
            {
              icon: "👥",
              n: "01",
              t: "Creative Team",
              d: "Ads Manager is your starting point for running ads on Facebook, Instagram, Messenger or Audience Network.",
            },
            {
              icon: "🧭",
              n: "02",
              t: "Strategy Development",
              d: "Creating a strategic plan to direct the expansion and success of the organization.",
            },
            {
              icon: "⚙️",
              n: "03",
              t: "Implementation",
              d: "Implementing strategic plans by allocating resources and taking action.",
            },
            {
              icon: "📈",
              n: "04",
              t: "Analysis Refinement",
              d: "Data accuracy and insights are improved through an iterative process.",
            },
          ].map((f, i) => (
            <div className="feature" key={i}>
              <div className="f-head">
                <span className="f-icon">{f.icon}</span>
                <span className="f-num">{f.n}</span>
              </div>
              <div className="f-title">{f.t}</div>
              <div className="f-desc">{f.d}</div>
            </div>
          ))}
        </div>

        {/* ======= Bottom: Experience + Services + Meeting image ======= */}
        <div className="bottom">
          <div className="leftCol">
            <div className="expCard">
              <div className="expIcon">📜</div>
              <div className="expText">
                <div className="expSmall">
                  Octopi Digital is ready to protect your businesses
                </div>
                <div className="expBig">
                  We have over <strong>7 years of experience</strong>
                </div>
              </div>
            </div>

            <div className="acc">
              {["Business Growth", "Marketing Automation", "Marketing Solution"].map(
                (t, i) => (
                  <button className="accItem" key={i}>
                    {t} <span className="arr">↗</span>
                  </button>
                )
              )}
            </div>

            <button className="meeting">
              <span>📅</span> Book A Meeting
            </button>
          </div>

          <div className="rightCol">
            <div className="meetingImg">
              <img src={imgMeeting} alt="Team meeting" />
            </div>
          </div>
        </div>
      </div>

      {/* ======= Styles ======= */}
      <style>{`
        :root{
          --primary: #f59e0b;      /* warm orange */
          --primary-700: #ea8a00;
          --text: #0f172a;
          --muted: #6b7280;
          --card: #fff;
          --line: #f1f5f9;
          --shadow: 0 12px 28px rgba(15,23,42,.06);
          --radius: 18px;
        }

        .hww{ background:#fff; padding:42px 16px 64px; }
        .wrap{ max-width:1200px; margin:0 auto; }

        /* Top area */
        .top{
          display:grid;
          grid-template-columns: 520px 1fr;
          gap: 28px;
          align-items:center;
        }
        .heroImg{ position:relative; border-radius:24px; overflow:hidden; }
        .heroImg img{
          display:block; width:100%; height:100%; object-fit:cover; aspect-ratio: 4/3;
          border-radius:24px;
          border: 3px solid var(--line);
          box-shadow: var(--shadow);
        }
        .heroImg .accent{
          position:absolute; right:10px; top:10px; bottom:10px; width:6px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--primary-700) 100%);
          border-radius:6px;
        }

        .chip{
          display:inline-flex; align-items:center; gap:10px;
          padding: 6px 12px; border-radius:999px; background:#fff;
          border:1px solid var(--line); box-shadow: var(--shadow);
          font-weight:700; color:var(--primary-700); margin-bottom:8px;
        }
        .chip .dot{ width:10px; height:10px; border-radius:50%; background:var(--primary); }
        .title{ font-size:30px; font-weight:800; color:var(--text); margin:8px 0 10px; }
        .p{ color:var(--muted); line-height:1.75; margin:0 0 10px; }

        /* Feature cards */
        .features{
          margin-top:26px;
          display:grid; grid-template-columns: repeat(4, 1fr); gap:14px;
        }
        .feature{
          background:var(--card); border:1px solid var(--line); border-radius:16px;
          padding:16px 16px 18px; box-shadow: var(--shadow);
        }
        .f-head{ display:flex; align-items:center; justify-content:space-between; }
        .f-icon{ font-size:22px; }
        .f-num{ font-weight:900; color:#d7dde8; font-size:18px; }
        .f-title{ margin-top:8px; color:var(--primary-700); font-weight:800; }
        .f-desc{ color:var(--muted); font-size:14px; margin-top:8px; line-height:1.6; }

        /* Bottom area */
        .bottom{
          margin-top:26px;
          display:grid; grid-template-columns: 1.2fr 1fr; gap:18px; align-items:start;
        }

        .expCard{
          background: var(--primary);
          color:#fff; border-radius:16px; padding:18px;
          display:flex; gap:14px; align-items:center;
          box-shadow: var(--shadow);
        }
        .expIcon{ font-size:26px; }
        .expSmall{ font-weight:700; opacity:.95; }
        .expBig{ font-size:22px; font-weight:900; line-height:1.25; }

        .acc{ margin-top:12px; display:grid; gap:10px; }
        .accItem{
          width:100%; text-align:left; padding:14px 16px; border-radius:12px;
          background:#fff; border:1px solid var(--line); font-weight:700; color:var(--text);
          display:flex; align-items:center; justify-content:space-between;
          box-shadow: var(--shadow);
        }
        .accItem .arr{ color:var(--primary-700); font-size:16px; }

        .meeting{
          margin-top:12px; background:#fff; border:1px solid var(--line);
          padding:12px 14px; border-radius:12px; font-weight:800; color:var(--primary-700);
          display:inline-flex; align-items:center; gap:8px; box-shadow: var(--shadow);
        }

        .meetingImg{ border-radius:18px; overflow:hidden; border:1px solid var(--line); box-shadow: var(--shadow); }
        .meetingImg img{ display:block; width:100%; height:100%; object-fit:cover; aspect-ratio: 4/3; }

        /* Responsive */
        @media (max-width: 1100px){
          .top{ grid-template-columns: 1fr; }
          .features{ grid-template-columns: repeat(2, 1fr); }
          .bottom{ grid-template-columns: 1fr; }
        }
        @media (max-width: 640px){
          .title{ font-size:26px; }
          .features{ grid-template-columns: 1fr; }
          .p{ font-size:15px; }
        }
      `}</style>
    </section>
  );
}
