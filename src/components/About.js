import React from "react";

// You can swap these images with your own
const heroA = "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop";
const heroB = "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop";
const heroC = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop";

const event1 = "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop";
const event2 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop";
const event3 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop";

export default function About() {
  return (
    <section className="about-section">
      <div className="wrap">
        {/* ===== Top (About) ===== */}
        <div className="about-grid">
          {/* Image collage (left) */}
          <div className="collage">
            <div className="big">
              <img src={heroA} alt="Team at work" />
            </div>
            <div className="two">
              <img src={heroB} alt="Office culture" />
              <img src={heroC} alt="Workspace" />
            </div>
          </div>

          {/* Text (right) */}
          <div className="about-copy">
            <div className="chip">
              <span className="dot" />
              About Us
            </div>

            <h2 className="title">
              Digi Spark–Best AI Based Digital Marketing Agency
              <br />
              <span className="since">Since 2017</span>
            </h2>

            <p className="para">
              At Digi Spark, we transcend traditional boundaries, ushering in
              a new era of digital marketing excellence. We are not just a digital
              marketing agency; we are architects of cutting-edge AI solutions,
              crafting bespoke strategies to elevate your brand in the digital
              landscape.
            </p>

            <button className="cta">
              Learn More <span className="arrow">↗</span>
            </button>
          </div>
        </div>

        {/* ===== KPI / Stats ===== */}
        <div className="kpi-grid">
          <div className="kpi">
            <div className="num">25K+</div>
            <div className="pill" />
            <div className="label">Project Complete</div>
          </div>

          <div className="kpi">
            <div className="num">7+</div>
            <div className="pill" />
            <div className="label">Years Of Experience</div>
          </div>

          <div className="kpi">
            <div className="num">60K+</div>
            <div className="pill" />
            <div className="label">Satisfaction Client</div>
          </div>

          <div className="kpi">
            <div className="num">30+</div>
            <div className="pill" />
            <div className="label">Trusted Partners</div>
          </div>
        </div>

        {/* ===== Events ===== */}
        <h3 className="events-title">Events</h3>

        <div className="events-grid">
          <article className="card">
            <div className="thumb">
              <img src={event1} alt="Winter Dinner 2025" />
              <span className="badge">Business</span>
            </div>
            <div className="card-body">
              <h4 className="card-title">Winter Dinner 2025</h4>
              <div className="meta">
                <span className="meta-item">📂 Business</span>
                <span className="dot-sep">•</span>
                <span className="meta-item">📅 2 February 2025</span>
              </div>
              <p className="card-text">
                Octopi Digital Limited had a fantastic winter dinner, filled with
                great food, laughter, and unforgettable moments. It was a night of
                bonding and team spirit.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="thumb">
              <img src={event2} alt="Octave 2025" />
              <span className="badge">Business</span>
            </div>
            <div className="card-body">
              <h4 className="card-title">Octave 2025</h4>
              <div className="meta">
                <span className="meta-item">📂 Business</span>
                <span className="dot-sep">•</span>
                <span className="meta-item">📅 5 January 2025</span>
              </div>
              <p className="card-text">
                A day of fun, learning, and bonding! From inspiring sessions to
                exciting games, delicious meals, and well-deserved awards.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="thumb">
              <img src={event3} alt="Team Dinner 2024" />
              <span className="badge">Business</span>
            </div>
            <div className="card-body">
              <h4 className="card-title">Team Dinner 2024</h4>
              <div className="meta">
                <span className="meta-item">📂 Business</span>
                <span className="dot-sep">•</span>
                <span className="meta-item">📅 18 October 2024</span>
              </div>
              <p className="card-text">
                An unforgettable night of great food, laughter, and bonding with
                the amazing team at Octopi Digital—here’s to the people who make
                it all special!
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* ===== Styles ===== */}
      <style>{`
        :root{
          --primary: #f59e0b;        /* warm orange */
          --primary-600: #f59e0b;
          --primary-700: #ea8a00;
          --text: #0f172a;
          --muted: #6b7280;
          --card: #ffffff;
          --line: #f1f5f9;
          --shadow: 0 10px 24px rgba(15,23,42,.06);
          --radius: 18px;
        }

        .about-section{
          background: #fff;
          padding: 40px 16px 64px;
        }
        .wrap{
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- About split --- */
        .about-grid{
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 28px;
          align-items: center;
        }
        .collage{
          display: grid;
          grid-template-rows: 1fr auto;
          gap: 14px;
        }
        .collage .big{
          border-radius: var(--radius);
          overflow: hidden;
          border: 3px solid var(--primary);
        }
        .collage .big img{
          display:block; width:100%; height:100%; object-fit:cover;
          aspect-ratio: 4 / 3;
        }
        .collage .two{
          display:grid; grid-template-columns: 1fr 1fr; gap: 14px;
        }
        .collage .two img{
          width:100%; height:140px; object-fit:cover;
          border-radius: var(--radius);
          border: 2px solid var(--primary);
        }

        .about-copy .chip{
          display:inline-flex; align-items:center; gap:10px;
          padding: 6px 12px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          font-weight: 600;
          color: var(--text);
          margin-bottom: 10px;
        }
        .about-copy .chip .dot{
          width:10px; height:10px; border-radius:50%; background: var(--primary);
          box-shadow: 0 0 0 3px rgba(245,158,11,.2);
        }

        .title{
          font-size: 32px;
          line-height: 1.25;
          color: var(--text);
          margin: 6px 0 10px;
          font-weight: 800;
        }
        .since{ color: var(--primary-600); }

        .para{
          color: var(--muted);
          line-height: 1.7;
          font-size: 15px;
          max-width: 62ch;
          margin-bottom: 16px;
        }

        .cta{
          appearance:none; border:0; cursor:pointer;
          background: var(--primary-600);
          color:#fff; font-weight:700; font-size:14px;
          padding: 10px 16px;
          border-radius: 999px;
          display:inline-flex; align-items:center; gap:10px;
          box-shadow: 0 8px 20px rgba(245,158,11,.25);
        }
        .cta .arrow{ font-size: 16px; }

        /* --- KPI row --- */
        .kpi-grid{
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .kpi{
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 22px 20px;
          text-align: center;
          box-shadow: var(--shadow);
        }
        .kpi .num{
          font-size: 28px;
          font-weight: 800;
          color: var(--text);
        }
        .kpi .pill{
          width: 62px; height: 6px; border-radius: 999px;
          background: var(--primary-600);
          margin: 8px auto 10px;
          opacity: .65;
        }
        .kpi .label{
          color: var(--muted);
          font-weight: 600;
          font-size: 14px;
        }
        .kpi.featured{
          background: var(--primary-600);
          border-color: var(--primary-600);
          color: #fff;
        }
        .kpi.featured .num,
        .kpi.featured .label{ color:#fff; }
        .kpi.featured .pill{ display:none; }

        /* --- Events --- */
        .events-title{
          margin: 34px 0 16px;
          text-align: center;
          font-size: 22px;
          font-weight: 800;
          color: var(--text);
        }
        .events-grid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .card{
          background:#fff;
          border: 1px solid var(--line);
          border-radius: 18px;
          box-shadow: var(--shadow);
          overflow:hidden;
          display:flex; flex-direction:column;
        }
        .thumb{
          position:relative; overflow:hidden;
          border-bottom:1px solid var(--line);
        }
        .thumb img{
          width:100%; height:210px; object-fit:cover; display:block;
        }
        .badge{
          position:absolute; left:14px; bottom:14px;
          background: #fff;
          color: var(--text);
          border-radius: 10px;
          padding: 6px 10px;
          font-weight: 700; font-size: 12px;
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
        }
        .card-body{ padding: 14px 16px 16px; }
        .card-title{
          font-size: 16px; font-weight: 800; color: var(--text); margin: 2px 0 8px;
        }
        .meta{
          display:flex; align-items:center; gap:8px;
          color: var(--muted);
          font-size: 12px; font-weight:700;
          margin-bottom: 8px;
        }
        .dot-sep{ opacity:.4; }
        .card-text{
          color: var(--muted); font-size: 14px; line-height: 1.6;
        }

        /* --- Responsive --- */
        @media (max-width: 1100px){
          .about-grid{ grid-template-columns: 360px 1fr; }
          .title{ font-size: 28px; }
        }
        @media (max-width: 900px){
          .about-grid{ grid-template-columns: 1fr; }
          .collage{ order: 2; }
          .about-copy{ order: 1; }
        }
        @media (max-width: 768px){
          .kpi-grid{ grid-template-columns: repeat(2, 1fr); }
          .events-grid{ grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px){
          .events-grid{ grid-template-columns: 1fr; }
          .collage .two img{ height:120px; }
          .thumb img{ height:200px; }
        }
      `}</style>
    </section>
  );
}
