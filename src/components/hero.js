// src/components/Hero.jsx
import React from "react";
import { Container, Image } from "react-bootstrap";
import BrandScroll from "./BrandScroll";

const leftImgs   = [1, 2, 3, 14, 101, 102];
const middleImgs = [4, 5, 6, 15, 201, 202];
const rightImgs  = [7, 8, 9, 16, 301, 302];

const src = (n) => `https://picsum.photos/seed/${n}/900/600`;

function Column({ imgs, speed = 22, direction = "up" }) {
  const animClass = direction === "up" ? "scroll-up" : "scroll-down";
  return (
    <div className="col tilt-right">
      <div className={`track ${animClass}`} style={{ ["--speed"]: `${speed}s` }}>
        <div className="stack">
          {imgs.map((n, i) => (
            <div className="rect" key={`A-${i}`}>
              <Image src={src(n)} alt={`img-${n}`} />
            </div>
          ))}
        </div>
        <div className="stack">
          {imgs.map((n, i) => (
            <div className="rect" key={`B-${i}`}>
              <Image src={src(n)} alt={`img-${n}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-root">
      <Container fluid className="hero-stage">
        {/* Overlay */}
        <div className="gradient-overlay"></div>

  <div style={{position: 'absolute', left: '10%', top: '50px', zIndex: 10, maxWidth: '400px'}}>
  <h1 style={{color: '#fff', fontSize: '3.3rem', fontWeight: '700', marginBottom: '0.85rem', lineHeight: '1.15'}}>
      Grow Your Business<br />
      with DigiSpark
    </h1>
  <p style={{color: '#eee', fontSize: '1.02rem', lineHeight: '1.5'}}>Unlock the power of digital marketing with innovative strategies tailored for your brand. From SEO to Social Media, DigiSpark helps you reach, engage, and convert your audience for real results.</p>
    <a href="#quote" style={{
      display: 'inline-block',
      marginTop: '0.93rem',
      padding: '0.72rem 1.87rem',
      fontSize: '1.06rem',
      fontWeight: '600',
      color: '#fff',
      background: 'linear-gradient(90deg, #7c3aed 0%, #4761ff 100%)',
      borderRadius: '0px',
      boxShadow: '0 4px 24px rgba(76, 61, 255, 0.18)',
      textDecoration: 'none',
      transition: 'background 0.2s, transform 0.2s',
      letterSpacing: '0.5px',
      marginBottom: '2.2rem', // extra gap below button
    }}
    onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #4761ff 0%, #7c3aed 100%)'}
    onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #7c3aed 0%, #4761ff 100%)'}
    >Request a Quote</a>
  </div>

        <div className="columns-wrap">
          <Column imgs={leftImgs}   speed={26} direction="down" />
          <Column imgs={middleImgs} speed={22} direction="up"   />
          <Column imgs={rightImgs}  speed={26} direction="down" />
        </div>
      </Container>
      <BrandScroll />

      <style>{`
        :root{
          --gap: 15px;
          --card-w: 293px;
          --card-h: 168px;
          --tilt: 10deg;
        }

        * { box-sizing: border-box; }

        .hero-root{
          background:#f6f7f9;
          display:flex;
          flex-direction:column;
          overflow:hidden;
        }

        .hero-stage{
          position:relative;
          height:100vh; width:100%;
          display:flex;
          justify-content:flex-end;
          align-items:stretch;
          overflow:hidden;
        }

      .gradient-overlay{
  position:absolute;
  top:0; left:0;
  width:100%; height:100%;
  z-index:5;
  pointer-events:none;
  background: linear-gradient(
    to right,
    rgba(32,1,34,0.95),   /* deep purple, almost solid */
    rgba(111,0,0,0.4)     /* deep red, still visible not transparent */
  );
}



        .columns-wrap{
          display:flex;
          gap:var(--gap);
          margin-right:5%;
          transform: translateX(20%);
          height:100%;
          position:relative;
          z-index:1;
        }

        .col{
          display:flex;
          flex-direction:column;
          transform: rotate(var(--tilt));
          overflow:hidden;
          height:120vh;
          top:-10vh;
          position:relative;
        }

        .track{
          display:flex;
          flex-direction:column;
          will-change: transform;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
        }

        .stack{ display:flex; flex-direction:column; }

        .rect{
          width:var(--card-w);
          height:var(--card-h);
          border:2px solid #333;
          border-radius:6px;
          overflow:hidden;
          background:#eee;
          box-shadow:0 6px 18px rgba(0,0,0,.15);
          flex:0 0 auto;
          margin-bottom: var(--gap);
        }

        .rect img{ width:100%; height:100%; object-fit:cover; display:block; }

        .track.scroll-up{ animation: scrollUp var(--speed) linear infinite; }
        .track.scroll-down{ animation: scrollDown var(--speed) linear infinite; }

        @keyframes scrollUp{
          0%{ transform: translate3d(0,0,0); }
          100%{ transform: translate3d(0,-50%,0); }
        }
        @keyframes scrollDown{
          0%{ transform: translate3d(0,-50%,0); }
          100%{ transform: translate3d(0,0,0); }
        }

        @media (max-width: 991px){
          .hero-stage{ justify-content:center; }
          .columns-wrap{ transform:none; margin-right:0; gap:var(--gap); height:100%; }
          .col{ transform:none; height:100%; }
          .track{ animation-duration:18s; }
          .rect{ width:min(92vw,360px); height:150px; margin-bottom:var(--gap); }
        }
      `}</style>
    </section>
  );
}
