// src/components/Hero.jsx
import React from "react";
import { Container, Image } from "react-bootstrap";
import BrandScroll from "./BrandScroll";
import PostHeroContent from "./PostHeroContent";
import Footer from "./footer";

/**
 * 🔁 Replace these arrays with YOUR image URLs (remote or local imports).
 * - Each array renders as one vertical column.
 * - You can add/remove items; design auto-adapts.
 *
 * Examples:
 *   import c1 from "../assets/col1-1.jpg";
 *   const leftImgs = [c1, "/images/hero/left-2.jpg", "https://cdn.site.com/left-3.webp"];
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
        {/* Overlay */}
        <div className="gradient-overlay"></div>

        {/* Left headline block (unchanged) */}
        <div style={{ position: "absolute", left: "10%", top: "50px", zIndex: 10, maxWidth: "400px" }}>
          <h1
            style={{
              color: "#2b036bff",
              fontSize: "3.3rem",
              fontWeight: "700",
              marginBottom: "0.85rem",
              lineHeight: "1.15",
            }}
          >
            Grow Your Business
            <br />
            with My Digital Rise
          </h1>
          <p style={{ color: "#272020ff", fontSize: "1.02rem", lineHeight: "1.5" }}>
            Unlock the power of digital marketing with innovative strategies tailored for your brand. From SEO to Social
            Media, Digital Rise  helps you reach, engage, and convert your audience for real results.
          </p>
          <a
            href="#quote"
            style={{
              display: "inline-block",
              marginTop: "0.93rem",
              padding: "0.72rem 1.87rem",
              fontSize: "1.06rem",
              fontWeight: "600",
              color: "#fff",
              background: "linear-gradient(90deg, #7c3aed 0%, #4761ff 100%)",
              borderRadius: "0px",
              boxShadow: "0 4px 24px rgba(76, 61, 255, 0.18)",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              letterSpacing: "0.5px",
              marginBottom: "2.2rem",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "linear-gradient(90deg, #4761ff 0%, #7c3aed 100%)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "linear-gradient(90deg, #7c3aed 0%, #4761ff 100%)")
            }
          >
            Request a Quote
          </a>
        </div>

        {/* Right animated columns (unchanged layout/animation) */}
        <div className="columns-wrap">
          <Column imgs={leftImgs} speed={26} direction="down" />
          <Column imgs={middleImgs} speed={22} direction="up" />
          <Column imgs={rightImgs} speed={26} direction="down" />
        </div>
      </Container>
      {/* <BrandScroll /> */}

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
            rgba(32,1,34,0.0),   /* deep purple, almost solid */
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

      {/* Keep your below-the-fold content; removed stray backslash */}
      <PostHeroContent />
    </section>
  );
}
