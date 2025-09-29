// src/components/PrintCare.jsx
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from './header';
import Footer from './footer';

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
    description:
      "Physical damage can prevent a stable data connection.",
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

const styles = {
  setupCardHover: { transition: "transform .3s ease, box-shadow .3s ease" },
};

export default function PrintCare() {
  useEffect(() => {
    // ACCESSORY CAROUSEL LOGIC (safe if elements are missing)
    const carousel = document.getElementById("accessoryCarousel");
    const prevBtn = document.getElementById("carouselPrev");
    const nextBtn = document.getElementById("carouselNext");

    const getCardW = () => {
      if (window.innerWidth < 576) return 118;
      if (window.innerWidth < 992) return 180;
      return 240;
    };
    const scrollAmount = () => getCardW() + (window.innerWidth < 576 ? 10 : 24);

    const onPrev = () =>
      carousel?.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    const onNext = () =>
      carousel?.scrollBy({ left: scrollAmount(), behavior: "smooth" });

    if (prevBtn && nextBtn && carousel) {
      prevBtn.addEventListener("click", onPrev);
      nextBtn.addEventListener("click", onNext);
    }

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e) => {
      if (!carousel) return;
      isDown = true;
      startX = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add("dragging");
    };
    const onPointerUp = () => {
      if (!carousel) return;
      isDown = false;
      carousel.classList.remove("dragging");
    };
    const onPointerMove = (e) => {
      if (!isDown || !carousel) return;
      e.preventDefault();
      const x = e.pageX ?? e.touches?.[0]?.pageX ?? 0;
      const walk = (x - startX) * 1.7;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel?.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    carousel?.addEventListener("pointerleave", onPointerUp);
    carousel?.addEventListener("pointermove", onPointerMove);

    // Touch events (mobile)
    carousel?.addEventListener("touchstart", onPointerDown);
    carousel?.addEventListener("touchend", onPointerUp);
    carousel?.addEventListener("touchmove", (e) => {
      if (!isDown || !carousel) return;
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.6;
      carousel.scrollLeft = scrollLeft - walk;
    });

    return () => {
      if (prevBtn && nextBtn && carousel) {
        prevBtn.removeEventListener("click", onPrev);
        nextBtn.removeEventListener("click", onNext);
      }
      carousel?.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      carousel?.removeEventListener("pointerleave", onPointerUp);
      carousel?.removeEventListener("pointermove", onPointerMove);

      carousel?.removeEventListener("touchstart", onPointerDown);
      carousel?.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <>
      <Header />
    <section className="print-care">
      {/* Local component styles */}
      <style>{`
        :root {
          --primary: #1849b2;
          --accent: #fd9226;
          --bg-light: #f5f7fa;
          --font-heading: 'Poppins', sans-serif;
          --font-body: 'Inter', Arial, sans-serif;
        }

        /* --- Hero --- */
        .site-hero {
          background: linear-gradient(100deg, var(--primary) 60%, var(--accent));
          color: #fff;
          padding: 6.5rem 0 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .site-hero h1 {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.4rem;
          letter-spacing: -1px;
          animation: fadeInDown 1s both;
        }
        .site-hero p {
          font-size: 1.25rem;
          font-weight: 400;
          max-width: 560px;
          margin: 0 auto 2.2rem;
          animation: fadeInUp 1s both;
          font-family: var(--font-body);
        }
        .btn-hero {
          background: var(--accent);
          color: #fff;
          border-radius: 36px;
          font-family: var(--font-heading);
          padding: 0.8rem 2.3rem;
          font-size: 1.14rem;
          border: none;
          box-shadow: 0 4px 18px rgba(253, 146, 38, 0.08);
          transition: background .18s, transform .15s;
          animation: fadeIn 1.5s both;
        }
        .btn-hero:hover { background: #e8831e; transform: scale(1.04); }

        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-55px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(65px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }

        /* --- Sections below hero --- */
        .strip-card {
          background:#fff; border-radius:30px; margin:35px auto 34px auto;
          max-width:1070px; box-shadow:0 2px 18px rgba(24,73,178,.07);
          padding:2rem 0 1.2rem 0;
        }

        .section-title{
          font-family:var(--font-heading);
        }
      `}</style>

      {/* ===== Hero ===== */}
      <div className="site-hero">
        <h1>Professional Printing. Effortless Experience.</h1>
        <p>
          Empower your office and creativity with latest printers. <br />
          Stunning color, business speed, and reliable wireless — the future of printing is here.
        </p>
        <button className="btn btn-hero">Get Started</button>
      </div>

      {/* ===== Promo Strip (kept) ===== */}
      <section className="strip-card">
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>🚀</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>Blazing Fast Prints</b><br />Up to 36ppm on select models
            </div>
          </div>
          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>💡</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>Stunning Color</b><br />Canon’s FINE &amp; HP Vivid tech
            </div>
          </div>
          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>📱</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>One-Touch Wireless</b><br />Mobile and AirPrint ready
            </div>
          </div>
          <div className="p-3 text-center" style={{ flex: "1 1 220px", minWidth: "180px" }}>
            <span style={{ fontSize: "1.8rem" }}>🌱</span>
            <div style={{ fontFamily: "'Poppins',sans-serif", marginTop: ".3em" }}>
              <b>Low Carbon Tech</b><br />Energy Star &amp; 40% less power
            </div>
          </div>
        </div>
      </section>

      {/* ====== NEW: Step-by-step cards (added just after hero) ====== */}
      <section id="setup" className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary section-title">Step-by-Step Printer Setup Manual</h2>
            <p className="text-muted">
              Easily set up your printer by following these simple instructions.
            </p>
          </div>

          <Row className="g-4" id="setupCardsRow">
            {setupSteps.map((step, idx) => (
              <Col key={idx} md={6} lg={3}>
                <Card
                  className="h-100 border bg-light text-center shadow-sm"
                  style={styles.setupCardHover}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 .5rem 1rem rgba(0,0,0,.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "var(--bs-box-shadow-sm)";
                  }}
                >
                  <div className="overflow-hidden rounded-top p-2 bg-white">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-100"
                      style={{
                        height: 200,
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary fs-6">
                      {step.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {step.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ====== USB Troubleshooting ====== */}
      <section id="usb" className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary section-title">USB Connecting Manual</h2>
          </div>

          <div id="troubleshootContainer">
            {troubleshootingSteps.map((step, idx) => (
              <div key={idx} className="mb-5">
                <h3 className="fw-bold text-primary">{step.title}</h3>
                {step.description && (
                  <p className="text-muted">{step.description}</p>
                )}
                {Array.isArray(step.items) && step.items.length > 0 && (
                  <ol className="ps-4">
                    {step.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ol>
                )}
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="img-fluid rounded shadow-sm mt-3"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ====== Wireless (Wi-Fi) Setup ====== */}
      <section id="wifi" className="bg-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary section-title">Wireless (Wi-Fi) Setup</h2>
            <p className="text-muted">Connect your printer to your network in a few simple steps.</p>
          </div>

          <Row className="g-4">
            {wifiSteps.map((step, idx) => (
              <Col key={idx} md={6} lg={3}>
                <Card className="h-100 border bg-light text-center shadow-sm">
                  <div className="overflow-hidden rounded-top p-2 bg-white">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-100"
                      style={{
                        height: 200,
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary fs-6">
                      {step.title}
                    </Card.Title>
                    <Card.Text className="text-muted small">
                      {step.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col md={8} className="mx-auto">
              <Card className="border-0 bg-light">
                <Card.Body className="py-3 px-4">
                  <ul className="mb-0">
                    <li>If your router splits 2.4/5 GHz, try 2.4 GHz for better range.</li>
                    <li>Avoid special characters in Wi-Fi name/password to reduce pairing issues.</li>
                    <li>After connecting, print a <em>Network Configuration</em> page to confirm the IP.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== Printer Offline? Quick Fix ====== */}
      <section id="offline-fix" className="bg-white py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary section-title">Printer Offline? Quick Fix</h2>
            <p className="text-muted">Try these checks before advanced troubleshooting.</p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <Card className="border shadow-sm h-100">
                <Card.Body>
                  <h5 className="fw-bold">Windows</h5>
                  <ol className="ps-3">
                    <li>Open “Printers & scanners” and select your printer.</li>
                    <li>In the queue, uncheck “Use printer offline”.</li>
                    <li>Remove device and add it again if needed.</li>
                    <li>Restart Print Spooler (Win+R → <code>services.msc</code> → Restart).</li>
                  </ol>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="border shadow-sm h-100">
                <Card.Body>
                  <h5 className="fw-bold">macOS</h5>
                  <ol className="ps-3">
                    <li>System Settings → Printers & Scanners → select the printer.</li>
                    <li>Delete and re-add the printer (Default or IP list).</li>
                    <li>Ensure the Mac and printer are on the same Wi-Fi network.</li>
                    <li>Reset printing system (advanced): right-click list → “Reset printing system…”.</li>
                  </ol>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== Firmware Update ====== */}
      <section id="firmware" className="bg-white py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary section-title">Firmware Update (Recommended)</h2>
            <p className="text-muted">Improves connectivity, security, and print quality.</p>
          </div>

          <Row className="g-4 justify-content-center">
            <Col md={10} lg={8}>
              <Card className="border shadow-sm">
                <Card.Body className="p-4">
                  <ol className="ps-3 mb-0">
                    <li>Ensure stable power and network; avoid turning the device off mid-update.</li>
                    <li>Open the printer toolbox/app or driver utility on your computer.</li>
                    <li>Look for “Firmware Update” or “Device Update”.</li>
                    <li>Apply the update and let the printer reboot if required.</li>
                  </ol>
                  <p className="small text-muted mt-3 mb-0">
                    If an update fails, power-cycle the printer and retry. Avoid USB hubs during updates.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
    <Footer />
    </>
  );
}
