import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const jivoLoadedRef = useRef(false);
  const waiterRef = useRef(null);

  // ---------- DATA (from PrintCare) ----------
  const setupSteps = [
    {
      title: "Download the Latest Software",
      description:
        "Download the most up-to-date drivers and printer software compatible with your system.",
      image: "https://pcpackard.com/images/psoft-1.jpg",
    },
    {
      title: "Connect Your Printer",
      description:
        "Link your printer to a USB cable or Wi-Fi via the printer’s wireless setup options.",
      image: "https://pcpackard.com/images/psoft-2.jpg",
    },
    {
      title: "Install the Printer Drivers",
      description:
        "Follow the on-screen prompts to complete the setup process.",
      image: "https://pcpackard.com/images/psoft-3.jpg",
    },
    {
      title: "Test the Printer",
      description:
        "Once installation is complete, print a test page to confirm your printer is working.",
      image: "https://pcpackard.com/images/psoft-4.jpg",
    },
  ];

  const troubleshootingSteps = [
    {
      title: "Step 1: Reconnect the USB Cable Properly",
      description:
        "Ensure a secure physical connection between your printer and computer.",
      image: "https://pcpackard.com/images/usb.png",
      items: [
        "Unplug the USB cable from both the printer and the computer.",
        "Wait a few seconds before reconnecting.",
        "Firmly plug the cable into both ends.",
        "Restart the printer installation process.",
      ],
    },
    {
      title: "Step 2: Test the USB Port Functionality",
      description: "Make sure the USB port you're using is working correctly.",
      image: "https://pcpackard.com/images/usb.png",
      items: [
        "Try connecting the printer to a different USB port.",
        "Alternatively, test the current port by connecting another USB device.",
      ],
    },
    {
      title: "Step 3: Verify Printer Power & Status Lights",
      description: "Ensure the printer is powered on and ready.",
      items: [
        "Check the power cable is firmly connected.",
        "Confirm that the power switch is turned on.",
        "Look at the status LEDs; no flashing error lights should be present.",
        "If lights indicate error, refer to the printer manual for codes.",
      ],
    },
    {
      title: "Step 4: Update Your Operating System",
      description:
        "Outdated OS versions can conflict with printer drivers and software.",
      items: [
        "Check for system updates on Windows or macOS.",
        "Install any pending updates and restart your computer.",
        "Re-run the printer setup after reboot.",
      ],
    },
    {
      title: "Step 5: Disable Firewall or Antivirus Temporarily",
      description:
        "Security software can block printer communication during setup.",
      items: [
        "Open your firewall or antivirus settings.",
        "Temporarily turn off protection or add printer software to exceptions.",
        "Test the printer connection while disabled.",
      ],
    },
    {
      title: "Step 6: Inspect USB Cable and Ports for Damage",
      description: "Physical damage can prevent a stable data connection.",
      items: [
        "Visually examine the USB cable for cuts or frays.",
        "Inspect USB ports for bent pins or debris.",
        "Blow out ports gently with compressed air.",
      ],
    },
    {
      title: "Step 7: Check Device Manager or System Report",
      description:
        "Verify that the printer and USB controllers are recognized by your OS.",
      items: [
        "On Windows, open Device Manager and check under USB Controllers and Printers.",
        "On Mac, open System Report and review the USB section.",
        "If entries show errors, update or reinstall the driver.",
      ],
    },
    {
      title: "Step 8: Try a Different USB Cable or Port",
      description: "Swapping components helps isolate the faulty part.",
      items: [
        "Use a known-good USB cable of the same type.",
        "Connect to an alternative USB port (rear vs. front).",
        "Repeat the printer setup process.",
      ],
    },
    {
      title: "Step 9: Restart Both Printer and Computer",
      description:
        "A full power cycle can clear temporary faults and refresh connections.",
      items: [
        "Turn off the printer and shut down your computer.",
        "Wait at least 30 seconds.",
        "Power on the printer first, then start your computer.",
        "Launch the printer setup again.",
      ],
    },
  ];

  const wifiSteps = [
    {
      title: "Prepare Your Network",
      description:
        "Keep printer, router, and computer close. Note your Wi-Fi name (SSID) and password.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      title: "Use Printer’s Wireless Setup",
      description:
        "From the printer panel, open Network/Wireless settings, select your Wi-Fi, and enter the password.",
      image:
        "https://images.unsplash.com/photo-1636015856875-00ce4b89433d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      title: "Try WPS (If Supported)",
      description:
        "Press WPS on the router, then press WPS on the printer within 2 minutes to pair.",
      image:
        "https://images.unsplash.com/photo-1680128371762-7bb37403e292?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      title: "Finish with Software",
      description:
        "Run the brand app/driver so the computer can detect and add the printer on Wi-Fi.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // ---------- Jivo helpers ----------
  function ensureJivoScript() {
    const hasScript = !!document.querySelector(
      'script[src*="jivosite.com/widget/4pzwN6ZTYv"]'
    );
    if (!hasScript) {
      const s = document.createElement("script");
      s.src = "https://code.jivosite.com/widget/4pzwN6ZTYv";
      s.async = true;
      s.onload = () => {
        if (window.jivo_api && !window.__jivoReady) {
          markReady();
        }
      };
      document.body.appendChild(s);
    }
  }

  function markReady() {
    window.__jivoReady = true;
    jivoLoadedRef.current = true;
    if (window.__jivoPendingOpen && window.jivo_api) {
      window.__jivoPendingOpen = false;
      try {
        window.jivo_api.open();
      } catch {}
    }
  }

  useEffect(() => {
    window.__jivoReady = window.__jivoReady || false;
    window.__jivoPendingOpen = window.__jivoPendingOpen || false;
    window.jivo_onLoadCallback = markReady;

    if (window.jivo_api) {
      markReady();
    } else {
      ensureJivoScript();
    }

    const check = setInterval(() => {
      if (window.jivo_api && !window.__jivoReady) {
        markReady();
        clearInterval(check);
      }
    }, 300);

    return () => {
      clearInterval(check);
      if (waiterRef.current) {
        clearInterval(waiterRef.current);
        waiterRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openChat() {
    if (window.jivo_api && window.__jivoReady) {
      try {
        window.jivo_api.open();
        return;
      } catch {}
    }
    window.__jivoPendingOpen = true;
    ensureJivoScript();

    if (!waiterRef.current) {
      let elapsed = 0;
      waiterRef.current = setInterval(() => {
        elapsed += 300;
        if (window.jivo_api) {
          try {
            window.jivo_api.open();
          } catch {}
          clearInterval(waiterRef.current);
          waiterRef.current = null;
        } else if (elapsed >= 10000) {
          clearInterval(waiterRef.current);
          waiterRef.current = null;
        }
      }, 300);
    }
  }

  return (
    <>
      <style>{`
  :root{
    --fsw: 1200px;       /* desktop full-screen box width */
    --banner-h: 460px;   /* banner height */
    --left-w: 58%;
    --right-w: 42%;
    --gap-top: 24px;     /* white gap below Navbar */
    --gap-bottom: 24px;  /* white gap below this section */

    --blue:#0a64c9;
    --blue-2:#095ab5;
    --text:#111827;
    --muted:#6b7280;
    --border:#e5e7eb;
    --white:#ffffff;
    --shadow: 0 10px 24px rgba(2, 6, 23, 0.10);

    --primary:#1849b2;
    --accent:#fd9226;
    --bg-light:#f5f7fa;
  }
  *{box-sizing:border-box}

  /* Force pure white background + white gaps; flow-root prevents margin collapse */
  .page-white{
    background:#fff;
    padding-top: var(--gap-top);
    padding-bottom: var(--gap-bottom);
    display: flow-root;
  }

  .fs-box{
    max-width:var(--fsw);
    margin:0 auto;
    padding:0 16px;
  }

  /* keep top gap via wrapper padding (no collapsing margins) */
  .banner-wrap{margin-top:0; margin-bottom:40px; background:#fff;}
  .banner{
    height:var(--banner-h);
    width:100%;
    display:flex; align-items:stretch; overflow:hidden;
    border-radius:8px;
    box-shadow:var(--shadow);
    background:#fff;
  }

  .banner-left{
    width:var(--left-w);
    background:linear-gradient(180deg,var(--blue) 0%, var(--blue-2) 100%);
    color:#fff;
    padding:28px;
    display:flex; flex-direction:column; justify-content:flex-start;
  }

  .hp-spacer{ height:46px; margin-bottom:16px; }

  .banner-title{
    font-size:32px; line-height:1.15; font-weight:750; margin:0 0 4px 0;
  }
  .banner-sub{opacity:.95; margin:0 0 18px 0;}

  .call-card{
    background:var(--white);
    color:var(--text);
    border:1px solid rgba(255,255,255,.25);
    border-radius:12px;
    padding:18px;
    max-width:660px;
    box-shadow: 0 4px 14px rgba(2,6,23,.10);
  }

  .phone-line{
    display:flex; align-items:center; gap:12px;
    color:#1459b9; font-weight:800; font-size:24px; margin-bottom:8px;
  }
  .phone-icon{
    width:24px; height:24px; border-radius:50%; background:#e8f1ff;
    display:inline-flex; align-items:center; justify-content:center;
    color:#1459b9; font-weight:700;
  }
  .bullet-list{margin:10px 0 16px 18px;font-weight: 600; padding:0; color:#1f2937;}
  .banner-btn{
    display:inline-block;
    background:#1a66cc; color:#fff;
    font-weight:700; padding:12px 16px;
    border:none; border-radius:8px; cursor:pointer;
  }
  .banner-btn:hover{background:#1558b0}
li{color: black !important;}
  .banner-right{
    width:var(--right-w); position:relative; overflow:hidden;
    background:#f1f5f9;
  }
  .agent-img{
    width:100%; height:100%; object-fit:cover; object-position:center;
    display:block;
  }

  /* ===== Bottom: How to setup your printer (existing) ===== */
  .section{margin-bottom:0; background:#fff;}
  .row-setup{display:grid; grid-template-columns: 52% 48%; gap:24px; align-items:center;}
  .setup-img{
    width:100%; height:360px; object-fit:cover; border-radius:12px; display:block;
    box-shadow: var(--shadow);
  }
  .setup-title{font-size:32px; font-weight:100; color:black; margin:0 0 8px 0;}
  .setup-sub{color:#000000; margin:0 0 16px 0;}
  .setup-btn{
    background:#1a66cc; color:#fff; border:none; border-radius:8px;
    padding:12px 16px; font-weight:700; cursor:pointer;
  }
  .setup-btn:hover{background:#1558b0}

  /* ====== ADDED: PrintCare sections (pure CSS) ====== */
  .pc-hero{
    background: linear-gradient(100deg, var(--primary) 60%, var(--accent));
    color:#fff; text-align:center; border-radius:16px;
    padding:72px 16px 48px; margin:40px 0 28px; position:relative; overflow:hidden;
    box-shadow: var(--shadow);
  }
  .pc-hero h1{font-size:40px; line-height:1.1; margin:0 0 12px; font-weight:800; letter-spacing:-.5px;}
  .pc-hero p{max-width:640px; margin:0 auto 20px; font-size:18px; opacity:.98;}
  .pc-hero .pc-btn{
    background:var(--accent); color:#fff; border:none; border-radius:36px;
    padding:12px 24px; font-weight:700; cursor:pointer;
  }
  .pc-hero .pc-btn:hover{filter:saturate(1.05) brightness(.98); transform: translateY(-1px);}

  .pc-strip{
    background:#fff; border-radius:20px; box-shadow:0 2px 18px rgba(24,73,178,.07);
    display:flex; flex-wrap:wrap; gap:18px; justify-content:space-between;
    padding:18px 16px; margin:24px auto 8px; max-width:1070px;
  }
  .pc-strip .item{flex:1 1 220px; min-width:180px; text-align:center}
  .pc-strip .item .emoji{font-size:28px; display:block}

  .section-head{text-align:center; margin:48px 0 24px; font-color:black}
  .section-head h2{font-size:28px; margin:0 0 8px; color:var(--primary);}
  .section-head p{color:black; margin:0}

  /* cards grid */
  .grid-4{display:grid; grid-template-columns: repeat(4, 1fr); gap:18px;}
  .grid-2{display:grid; grid-template-columns: repeat(2, 1fr); gap:18px;}
  .grid-1{display:grid; grid-template-columns: 1fr; gap:18px;}

  .pc-card{
    background:#f8fafc; border:1px solid #eef2f7; border-radius:14px;
    overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,.05);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .pc-card:hover{transform: translateY(-6px); box-shadow: 0 10px 22px rgba(0,0,0,.12);}
  .pc-card .imgwrap{padding:8px; background:#fff}
  .pc-card img{width:100%; height:200px; object-fit:cover; border-radius:10px}
  .pc-card .body{padding:12px 14px}
  .pc-card .title{font-weight:700; font-size:14px; color:var(--primary); margin:4px 0 6px}
  .pc-card .desc{font-size:13px; color:#334155; margin:0}

  /* article blocks */
  .pc-article{
    background:#fff; border:1px solid #eef2f7; border-radius:14px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    padding:18px 16px;
  }
  .pc-article h3{margin:0 0 6px; color:var(--primary)}
  .pc-article p{margin:0 0 8px; color:#374151}
  .pc-article ol{margin:8px 0 0 18px}
  .pc-article img{max-width:100%; height:auto; border-radius:10px; margin-top:12px; box-shadow:0 2px 8px rgba(0,0,0,.08)}

  /* two columns for Windows/mac */
  .grid-2 > .pc-article{height:100%}

  /* firmware center */
  .centered{max-width:820px; margin:0 auto}

  @media (max-width: 1200px){
    :root{ --fsw: 1024px; }
    .grid-4{grid-template-columns: repeat(3, 1fr);}
  }
  @media (max-width: 1024px){
    :root{ --fsw: 960px; --banner-h: 420px; }
    .row-setup{ grid-template-columns:1fr; }
    .banner{border-radius:0;}
    .grid-4{grid-template-columns: repeat(2, 1fr);}
    .grid-2{grid-template-columns: 1fr;}
  }
  @media (max-width: 640px){
    .grid-4{grid-template-columns: 1fr;}
    .pc-hero h1{font-size:30px}
    .pc-hero p{font-size:16px}
  }
`}</style>

      <div className="page-white">
        <div className="fs-box">
          {/* ===== Banner ===== */}
          <div className="banner-wrap">
            <div className="banner">
              <div className="banner-left">
                <div className="hp-spacer" aria-hidden="true" />
                <h2 className="banner-title">Exclusive Printer Assistance</h2>
                <p className="banner-sub">
                  Call now to speak directly with a live support expert.
                </p>

                <div className="call-card">
                  <div className="phone-line">
                    {/* <span className="phone-icon">☎</span>
                    <span>+1-866-203-0148</span> */}
                  </div>

                  <ul className="bullet-list">
                    <li>Is Your Printer Offline?</li>
                    <li>Printer Setup</li>
                    <li>123 Connect Printer</li>
                    <li>Update your Printer Driver</li>
                    <li>Connect your Printer To The Wifi</li>
                  </ul>

                  <button className="banner-btn" onClick={openChat}>
                    Click Here to Chat with Expert
                  </button>
                </div>
              </div>

              <div className="banner-right" aria-hidden="true">
                <img
                  className="agent-img"
                  src="/images/Screenshot (69).png"
                  alt="Online support representative with headset"
                />
              </div>
            </div>
          </div>

          {/* ===== Bottom: How to setup your printer (existing block) ===== */}
          <section className="section">
            <div className="row-setup">
              <div>
                <img
                  className="setup-img"
                  src="https://quickprinterscan.online/assets/img/Printer_feature.avif"
                  alt="Printer features and setup"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="setup-title">How to setup your printer</h3>
                <p className="setup-sub">
                  Click Printer Setup for step by step guidance on how to setup,
                  configure and register your printer.
                </p>
                <button className="setup-btn" onClick={openChat}>
                  Printer Setup
                </button>
              </div>
            </div>
          </section>

          {/* ====== ADDED: PrintCare - Hero ====== */}
          {/* <section className="pc-hero">
            <h1>Professional Printing. Effortless Experience.</h1>
            <p>
              Empower your office and creativity with HP &amp; Canon’s latest printers.
              Stunning color, business speed, and reliable wireless — the future of printing is here.
            </p>
            <button className="pc-btn" onClick={openChat}>Get Started</button>
          </section> */}

          {/* Promo strip */}
          {/* <div className="pc-strip">
            <div className="item">
              <span className="emoji">🚀</span>
              <div><b>Blazing Fast Prints</b><br/>Up to 36ppm on select models</div>
            </div>
            <div className="item">
              <span className="emoji">💡</span>
              <div><b>Stunning Color</b><br/>Canon’s FINE &amp; HP Vivid tech</div>
            </div>
            <div className="item">
              <span className="emoji">📱</span>
              <div><b>One-Touch Wireless</b><br/>Mobile and AirPrint ready</div>
            </div>
            <div className="item">
              <span className="emoji">🌱</span>
              <div><b>Low Carbon Tech</b><br/>Energy Star &amp; 40% less power</div>
            </div>
          </div> */}

          {/* ====== Step-by-Step Printer Setup Manual ====== */}
          <div className="section-head">
            <h2>Step-by-Step Printer Setup Manual</h2>
            <p>Easily set up your printer by following these simple instructions.</p>
          </div>
          <div className="grid-4">
            {setupSteps.map((step, i) => (
              <div className="pc-card" key={i}>
                <div className="imgwrap">
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
                <div className="body">
                  <div className="title">{step.title}</div>
                  <p className="desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ====== USB Connecting Manual ====== */}
          <div className="section-head" style={{marginTop: "48px"}}>
            <h2>USB Connecting Manual</h2>
          </div>
          <div className="grid-1">
            {troubleshootingSteps.map((step, idx) => (
              <article className="pc-article" key={idx}>
                <h3>{step.title}</h3>
                {step.description && <p>{step.description}</p>}
                {Array.isArray(step.items) && step.items.length > 0 && (
                  <ol>
                    {step.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ol>
                )}
                {step.image && (
                  <img src={step.image} alt={step.title} loading="lazy" />
                )}
              </article>
            ))}
          </div>

          ====== Wireless (Wi-Fi) Setup ======
          {/* <div className="section-head" style={{marginTop: "48px"}}>
            <h2>Wireless (Wi-Fi) Setup</h2>
            <p>Connect your printer to your network in a few simple steps.</p>
          </div>
          <div className="grid-4">
            {wifiSteps.map((step, idx) => (
              <div className="pc-card" key={idx}>
                <div className="imgwrap">
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
                <div className="body">
                  <div className="title">{step.title}</div>
                  <p className="desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Wi-Fi tips note */}
          {/* <div className="pc-article centered" style={{marginTop:"18px"}}>
            <ul style={{margin:0, paddingLeft:"18px"}}>
              <li>If your router splits 2.4/5 GHz, try 2.4 GHz for better range.</li>
              <li>Avoid special characters in Wi-Fi name/password to reduce pairing issues.</li>
              <li>After connecting, print a <em>Network Configuration</em> page to confirm the IP.</li>
            </ul>
          </div> */}

          {/* ====== Printer Offline? Quick Fix ====== */}
          {/* <div className="section-head" style={{marginTop: "48px"}}>
            <h2>Printer Offline? Quick Fix</h2>
            <p>Try these checks before advanced troubleshooting.</p>
          </div> */}
          {/* <div className="grid-2">
            <article className="pc-article">
              <h3>Windows</h3>
              <ol>
                <li>Open “Printers & scanners” and select your printer.</li>
                <li>In the queue, uncheck “Use printer offline”.</li>
                <li>Remove device and add it again if needed.</li>
                <li>Restart Print Spooler (Win+R → <code>services.msc</code> → Restart).</li>
              </ol>
            </article>
            <article className="pc-article">
              <h3>macOS</h3>
              <ol>
                <li>System Settings → Printers &amp; Scanners → select the printer.</li>
                <li>Delete and re-add the printer (Default or IP list).</li>
                <li>Ensure the Mac and printer are on the same Wi-Fi network.</li>
                <li>Reset printing system (advanced): right-click list → “Reset printing system…”.</li>
              </ol>
            </article>
          </div> */}

          {/* ====== Firmware Update ====== */}
          {/* <div className="section-head" style={{marginTop: "48px"}}>
            <h2>Firmware Update (Recommended)</h2>
            <p>Improves connectivity, security, and print quality.</p>
          </div> */}
          {/* <article className="pc-article centered">
            <ol>
              <li>Ensure stable power and network; avoid turning the device off mid-update.</li>
              <li>Open the printer toolbox/app or driver utility on your computer.</li>
              <li>Look for “Firmware Update” or “Device Update”.</li>
              <li>Apply the update and let the printer reboot if required.</li>
            </ol>
            <p className="small" style={{color:"#6b7280", marginTop:"12px"}}>
              If an update fails, power-cycle the printer and retry. Avoid USB hubs during updates.
            </p>
          </article> */}
        </div>
      </div>
    </>
  );
}
