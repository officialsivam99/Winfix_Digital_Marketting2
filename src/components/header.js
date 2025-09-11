// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const PURPLE = "#7c3aed"; // brand accent
  const TEXT = "#111827";
  const MUTED = "#6b7280";
  const BORDER = "#e5e7eb";

  const [open, setOpen] = useState(false);

  return (
    <header className="ff-header">
      <div className="ff-wrap">
        {/* Left: Brand */}
        <Link to="/" className="ff-brand">
          <div className="ff-logo">
            <span className="ff-logo-mark" />
          </div>
          <span className="ff-name">Digital Risen</span>
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation"
          className={`ff-burger d-lg-none ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Center: Nav */}
          <nav className={`ff-nav ${open ? "show" : ""}`}>
            <Link to="/SearchEngineOptimization" className="ff-link">SEO</Link>
            <Link to="/SocialMediaMarketing" className="ff-link">Social Media Marketing</Link>
            <Link to="/WebDevelopmentService" className="ff-link">Web Development</Link>
            <Link to="/EmailMarketing" className="ff-link">Email Marketing</Link>
            <Link to="/PayPerClickMarketing" className="ff-link">PPC</Link>
            <Link to="/AnalyticsDashboard" className="ff-link">Analytics</Link>
          </nav>

        {/* Right: Actions */}
        <div className="ff-actions">
          
          <Link to="/demo" className="ff-btn ff-outline">
            Contact Us
          </Link>
          <Link to="/get-started" className="ff-btn ff-solid">
            Get started
          </Link>
        </div>
      </div>

      <style>{`
        .ff-header{
          position: sticky;
          top: 0;
          z-index: 1050;
          background: #fff;
          border-bottom: 1px solid ${BORDER};
        }
        .ff-wrap{
          max-width: 1220px;
          margin: 0 auto;
          padding: 12px 20px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
        }

        .ff-brand{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .ff-logo{ width:28px; height:28px; position:relative; }
        .ff-logo-mark{
          display:block; width:100%; height:100%; border-radius:8px;
          background: linear-gradient(135deg, ${PURPLE}, #9d6bff);
        }
        .ff-name{ font-weight:600; color:${TEXT}; font-size:18px; letter-spacing:.2px; }

        .ff-nav{
          display:flex; align-items:center; gap:20px; justify-content:center;
        }
        .ff-link{
          color:${MUTED}; text-decoration:none; font-weight:500; font-size:14px;
          padding:6px 2px; transition:color .2s ease; position:relative;
        }
          .ff-link:hover{ color:${TEXT}; }
          .ff-link.active{ color:${PURPLE}; }
          .ff-link::after{
            content:""; position:absolute; left:0; right:0; bottom:-10px;
            height:2px; background:${PURPLE}; border-radius:2px;
            opacity:0; transition:opacity .2s;
          }
          .ff-link:hover::after{
            opacity:1;
          }
        .caret{ margin-left:6px; font-size:12px; opacity:.8; }

        .ff-actions{
          display:flex; align-items:center; gap:12px; justify-self:end;
        }
        .ff-login{ color:${PURPLE}; text-decoration:none; font-weight:600; font-size:14px; }
        .ff-btn{
          display:inline-flex; align-items:center; justify-content:center;
          padding:8px 14px; border-radius:10px; font-weight:600; font-size:14px;
          text-decoration:none; line-height:1;
          transition: transform .08s ease, box-shadow .2s ease;
        }
        .ff-btn:active{ transform:translateY(1px); }
        .ff-outline{ color:${PURPLE}; border:1px solid ${PURPLE}; background:#fff; }
        .ff-outline:hover{ box-shadow:0 2px 10px rgba(124,58,237,.15); }
        .ff-solid{ color:#fff; background:${PURPLE}; border:1px solid ${PURPLE}; }
        .ff-solid:hover{ box-shadow:0 2px 12px rgba(124,58,237,.25); }

        .ff-burger{
          width:38px; height:34px; border:0; background:transparent; padding:6px;
          display:inline-flex; flex-direction:column; justify-content:space-between; align-items:center;
        }
        .ff-burger span{
          display:block; width:100%; height:2px; background:${TEXT}; border-radius:2px;
          transition:transform .2s ease, opacity .2s ease;
        }
        .ff-burger.is-open span:nth-child(1){ transform:translateY(7px) rotate(45deg); }
        .ff-burger.is-open span:nth-child(2){ opacity:0; }
        .ff-burger.is-open span:nth-child(3){ transform:translateY(-7px) rotate(-45deg); }

        @media (max-width: 991.98px){
          .ff-wrap{ grid-template-columns: auto auto auto; }
          .ff-nav{
            position:absolute; top:60px; left:0; right:0;
            background:#fff; border-top:1px solid ${BORDER};
            box-shadow:0 10px 24px rgba(17,24,39,.06);
            padding:10px 20px;
            display:none; z-index:1040;
          }
          .ff-nav.show{
            display:flex; flex-direction:column; align-items:flex-start; gap:12px;
          }
          .ff-actions{ gap:8px; }
          .ff-link.active::after{ bottom:-6px; }
        }

        @media (max-width: 575.98px){
          .ff-actions .ff-outline{ display:none; }
        }
      `}</style>
    </header>
  );
}
