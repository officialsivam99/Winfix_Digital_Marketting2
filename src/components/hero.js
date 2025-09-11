// src/components/Hero.jsx
import React from "react";
import { Container, Image, Row, Col, Form, InputGroup, Button, Badge } from "react-bootstrap";
import { FiCheckCircle, FiPhoneCall, FiArrowRight } from "react-icons/fi";
// import BrandScroll from "./BrandScroll";
import PostHeroContent from "./PostHeroContent";
// import Footer from "./footer";

/**
 * Replace these arrays with YOUR image URLs (remote or local imports).
 */
const leftImgs = [
  "https://cdn.dribbble.com/userupload/24542283/file/original-ffad4dd1c210915ad274fae7a424437e.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/17969071/file/original-407c688ceb5f416f6ee3abc43f419f18.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/43451858/file/original-547693dee85195598119f46480182ad1.jpg?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/12618430/file/original-6e8dac9e1dd1a6071a27561a99dfa048.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/43156360/file/original-afb23429f4618faa51256075689522df.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/33502980/file/original-5ec95131a91a7671ec245dbc6ab9d6c9.png?resize=1024x865&vertical=center",
];
const middleImgs = [
  "https://cdn.dribbble.com/userupload/44666303/file/d809973c8fde9daab0c1fe84fabe0dfe.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/12206102/file/original-44549457f65133a0ee10b618f7604142.png?resize=1504x1145&vertical=center",
  "https://cdn.dribbble.com/userupload/17392581/file/original-3ce6ffe6bd75be6875b774a13f934889.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/18837074/file/original-aa1ad46518ac785cd4d60075ffade71c.jpg?resize=1200x855&vertical=center",
  "https://cdn.dribbble.com/userupload/24859147/file/original-d68f362c50811e6e5b247875149b8442.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/42846070/file/original-aaeb2718bcde7087a399165b06cc5a29.png?resize=1504x1128&vertical=center",
];
const rightImgs = [
  "https://cdn.dribbble.com/userupload/43834914/file/original-5dc5c5467b86777ac15a735bedd85fcb.jpg?resize=1504x1129&vertical=center",
  "https://cdn.dribbble.com/userupload/15142246/file/original-086dc01ebba98709a77f8c0dcaebebad.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/44639778/file/ec1be50dd19fe285f6b8d500270b37ba.jpg?resize=1504x1129&vertical=center",
  "https://cdn.dribbble.com/userupload/9592187/file/original-2986a2b9b177967966c2042460914dc7.jpg?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/43426653/file/original-b5a150b520a96a2f14feac2eb5af0ecc.png?resize=1504x1128&vertical=center",
  "https://cdn.dribbble.com/userupload/14469756/file/original-dfdcc888569ed105950996b6a461fb25.png?resize=1504x1128&vertical=center",
];

function Column({ imgs, speed = 22, direction = "up" }) {
  const animClass = direction === "up" ? "scroll-up" : "scroll-down";
  return (
    <div className="col tilt-right">
      <div className={`track ${animClass}`} style={{ ["--speed"]: `${speed}s` }}>
        <div className="stack">
          {imgs.map((url, i) => (
            <div className="rect" key={`A-${i}`}>
              <Image src={url} alt={`hero-col-img-${i}`} />
            </div>
          ))}
        </div>
        <div className="stack">
          {imgs.map((url, i) => (
            <div className="rect" key={`B-${i}`}>
              <Image src={url} alt={`hero-col-img-dup-${i}`} />
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

        {/* Gradient overlay */}
        <div className="gradient-overlay" />

        {/* LEFT: conversion stack */}
        <div className="left-pane">
          <Badge bg="" className="eyebrow">Performance Marketing • SEO • SMM</Badge>

          <h1 className="hero-title">
            Grow Your Business
            <br />
            with My Digital Rise
          </h1>

          <p className="hero-sub">
            Unlock the power of digital with strategies built to acquire, retain, and scale.
            From SEO to Paid Social—get outcomes, not vanity metrics.
          </p>

          {/* Primary + Secondary CTA */}
          <div className="cta-row">
            <a href="#quote" className="btn btn-primary main-cta">
              Request a Quote <FiArrowRight style={{ marginLeft: 8 }} />
            </a>
            <a href="tel:+91-9999999999" className="btn btn-outline-dark ghost-cta">
              <FiPhoneCall style={{ marginRight: 8 }} />
              Talk to an Expert
            </a>
          </div>

          {/* Trust badges */}
          <div className="trust-badges">
            <span className="badge-pill">Google Ads</span>
            <span className="badge-pill">Meta Business</span>
            <span className="badge-pill">Shopify</span>
          </div>

          {/* Social proof: rating */}
          <div className="rating-row" aria-label="Client rating 4.9 out of 5">
            <div className="stars" title="4.9/5">
              <span>★★★★★</span>
            </div>
            <small>4.9/5 from 120+ clients</small>
          </div>

          {/* Micro-stats */}
          <Row className="micro-stats g-2">
            <Col xs="auto" className="stat">
              <strong>125k+</strong>
              <span>Monthly organic visits</span>
            </Col>
            <Col xs="auto" className="sep" />
            <Col xs="auto" className="stat">
              <strong>3.8×</strong>
              <span>Avg. ROAS</span>
            </Col>
            <Col xs="auto" className="sep" />
            <Col xs="auto" className="stat">
              <strong>60+</strong>
              <span>Active brands</span>
            </Col>
          </Row>

          {/* Quick lead form */}
          <Form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <InputGroup>
              <Form.Control type="email" placeholder="Work email e.g. founder@brand.com" required />
              <Button type="submit" className="btn btn-primary">Get Free Audit</Button>
            </InputGroup>
            <small className="privacy-note">No spam. 24–48h response. Your data is safe.</small>
          </Form>

          {/* Benefits checklist */}
          <ul className="benefits">
            <li><FiCheckCircle /> Outcome-driven strategy & tracking</li>
            <li><FiCheckCircle /> Landing pages & CRO included</li>
            <li><FiCheckCircle /> Transparent weekly reporting</li>
          </ul>
        </div>

        {/* RIGHT: animated columns */}
        <div className="columns-wrap">
          <Column imgs={leftImgs} speed={26} direction="down" />
          <Column imgs={middleImgs} speed={22} direction="up" />
          <Column imgs={rightImgs} speed={26} direction="down" />
        </div>
      </Container>

      {/* Below-the-fold content */}
      <PostHeroContent />

      <style>{`
        :root{
          --gap: 15px;
          --card-w: 293px;
          --card-h: 168px;
          --tilt: 10deg;
          --primary: #4f46e5;
          --deep: rgba(32,1,34,0.95);
          --crimson: rgba(111,0,0,0.4);
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
          inset:0;
          z-index:3;
          pointer-events:none;
          background: linear-gradient(to right, rgba(32,1,34,0.0), rgba(111,0,0,0.4));
        }

        /* LEFT PANE */
        .left-pane{
          position:absolute;
          left:6%;
          top:52px;
          z-index:10;
          max-width: 520px;
          padding: 8px 0;
        }

        .eyebrow{
          display:inline-block;
          background: #f1f0ff;
          color: #4033a7;
          border: 1px solid #e6e3ff;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: .78rem;
          letter-spacing: .3px;
          margin-bottom: 12px;
        }

        .hero-title{
          color:#2b036bff;
          font-size: clamp(2.2rem, 3vw + 1rem, 3.3rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 .75rem 0;
        }

        .hero-sub{
          color:#272020ff;
          font-size: 1.02rem;
          line-height: 1.55;
          margin: 0 0 1.1rem 0;
        }

        .cta-row{
          display:flex; gap:10px; align-items:center; margin-bottom: 12px;
        }
        .main-cta{
          background: linear-gradient(90deg, #7c3aed 0%, #4761ff 100%) !important;
          border: 0 !important;
          padding: .78rem 1.2rem;
          font-weight: 600;
          letter-spacing: .3px;
          box-shadow: 0 6px 22px rgba(76,61,255,.22);
        }
        .main-cta:hover{
          transform: translateY(-1px);
          background: linear-gradient(90deg, #4761ff 0%, #7c3aed 100%) !important;
        }
        .ghost-cta{
          border-radius: 8px;
          padding: .72rem 1rem;
          border-width: 1.5px !important;
        }

        .trust-badges{
          display:flex; gap:8px; flex-wrap:wrap; margin: 10px 0 6px;
        }
        .trust-badges .badge-pill{
          border:1px solid #e7e7ea;
          background:#ffffffc9;
          padding:6px 10px;
          border-radius:999px;
          font-size:.82rem;
        }

        .rating-row{
          display:flex; align-items:center; gap:10px; margin: 2px 0 12px;
        }
        .stars span{ letter-spacing: 2px; }
        .rating-row small{ color:#555; }

        .micro-stats{
          margin: 0 0 12px 0;
          align-items: center;
          --sep: #e5e7eb;
        }
        .stat{
          display:flex; flex-direction:column;
          padding: 6px 8px;
        }
        .stat strong{
          font-size:1.05rem;
          line-height:1;
        }
        .stat span{
          color:#6b7280;
          font-size:.82rem;
        }
        .sep{
          width:1px; height:26px; background: var(--sep);
        }

        .lead-form{
          background:#fff;
          border:1px solid #ececf1;
          border-radius: 10px;
          padding: 8px;
          box-shadow: 0 10px 24px rgba(2,6,23,0.06);
          margin: 0 0 10px 0;
        }
        .lead-form .btn-primary{
          background: var(--primary);
          border-color: var(--primary);
        }
        .privacy-note{
          display:block;
          margin-top:6px;
          color:#71717a;
          font-size:.78rem;
        }

        .benefits{
          display:grid; gap:6px; padding-left: 0; margin: 4px 0 0 0; list-style:none;
        }
        .benefits li{
          display:flex; align-items:center; gap:8px; color:#0f172a;
          font-size:.94rem;
        }
        .benefits svg{ flex:0 0 auto; color:#10b981; }

        /* RIGHT COLUMNS */
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
        @keyframes scrollUp{ 0%{ transform: translate3d(0,0,0); } 100%{ transform: translate3d(0,-50%,0); } }
        @keyframes scrollDown{ 0%{ transform: translate3d(0,-50%,0); } 100%{ transform: translate3d(0,0,0); } }

        /* Responsive */
        @media (max-width: 1200px){
          .left-pane{ left:5%; max-width: 520px; }
        }
        @media (max-width: 991px){
          .hero-stage{ justify-content:center; }
          .columns-wrap{ transform:none; margin-right:0; gap:var(--gap); height:100%; }
          .col{ transform:none; height:100%; }
          .track{ animation-duration:18s; }
          .rect{ width:min(92vw,360px); height:150px; margin-bottom:var(--gap); }
          .left-pane{
            position:absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 32px;
            max-width: 640px;
            width: min(92vw, 680px);
          }
        }
      `}</style>
    </section>
  );
}
