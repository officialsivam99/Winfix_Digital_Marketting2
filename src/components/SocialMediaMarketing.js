import React, { useEffect, useRef, useState } from "react";
// import Header from "./header";
import Footer from "./footer";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
  Accordion,
  Stack,
  ProgressBar,
  Table,
} from "react-bootstrap";
import WeekCalendarSection from "./WeekCalendarSection";
import Header from "./header";

/**
 * Digi Spark — Social Media Marketing (React‑Bootstrap Only)
 * ---------------------------------------------------------
 * A long, dynamic, conversion‑ready SMM page for your Digi Spark site.
 * Everything is data‑driven via arrays so you can edit quickly.
 * Uses only Bootstrap 5, React‑Bootstrap, and Bootstrap Icons.
 *
 * Usage:
 * 1) Make sure you import the styles once in your app:
 *    import 'bootstrap/dist/css/bootstrap.min.css';
 *    import 'bootstrap-icons/font/bootstrap-icons.css';
 *    import './App.css'; // add helpers from bottom comment
 * 2) <SocialMediaMarketing brand="Digi Spark" />
 */

export default function SocialMediaMarketing({ brand = "Digi Spark", onPrimaryCTA }) {
  const heroRef = useRef(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => setShowSticky(!entries[0].isIntersecting),
      { threshold: 0.25 }
    );
    if (heroRef.current) io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  // ---------- Dynamic Data ----------
  const hero = {
    title: `Grow Faster with ${brand} — Social Media Marketing`,
    subtitle:
      "Strategy, content, and performance all in one place. We plan, create, publish, and optimize across platforms to get you real business results.",
    bullets: [
      { icon: "bi-graph-up-arrow", text: "ROI‑focused growth campaigns" },
      { icon: "bi-magic", text: "High‑quality creatives & UGC" },
      { icon: "bi-speedometer2", text: "Always‑on optimization & reporting" },
    ],
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop",
  };

  const stats = [
    { value: "10M+", label: "Monthly Impressions Managed" },
    { value: "4.2%", label: "Avg. CTR on Paid Social" },
    { value: "3x", label: "Avg. ROAS Improvement" },
    { value: "250+", label: "Brand Creatives/Month" },
  ];

  const platforms = [
    { name: "Instagram", icon: "bi-instagram" },
    { name: "Facebook", icon: "bi-facebook" },
    { name: "YouTube", icon: "bi-youtube" },
    { name: "LinkedIn", icon: "bi-linkedin" },
    { name: "X (Twitter)", icon: "bi-twitter" },
    { name: "Pinterest", icon: "bi-pinterest" },
    { name: "Snapchat", icon: "bi-snapchat" },
    { name: "Reddit", icon: "bi-reddit" },
  ];

  const services = [
    {
      icon: "bi-bullseye",
      title: "Social Strategy & Calendar",
      desc: "Channel strategy, ICP, tone, pillars, and monthly content calendar that aligns with business goals.",
      points: ["Competitor & audience analysis", "Content pillars", "Monthly calendar"],
    },
    {
      icon: "bi-camera-video",
      title: "Content Production & UGC",
      desc: "Short‑form video, carousels, static posts, motion graphics, and creator‑led content.",
      points: ["UGC sourcing", "Shoot & edit", "Brand templates"],
    },
    {
      icon: "bi-megaphone",
      title: "Paid Social & Funnels",
      desc: "Full‑funnel paid social across Meta, TikTok, YouTube, and LinkedIn for scalable growth.",
      points: ["Meta/TikTok/YouTube/LinkedIn", "Retargeting", "ROAS optimization"],
    },
    {
      icon: "bi-emoji-smile",
      title: "Community & Influencers",
      desc: "DMs, comments, outreach, influencer seeding, and collabs to build trust & social proof.",
      points: ["Community response", "Influencer seeding", "Giveaways/collabs"],
    },
    {
      icon: "bi-pie-chart",
      title: "Analytics & Reporting",
      desc: "KPI dashboards, cohort analysis, A/B testing, and monthly growth recommendations.",
      points: ["KPI dashboards", "A/B testing", "Cohort insights"],
    },
    {
      icon: "bi-shield-check",
      title: "Brand Safety & Compliance",
      desc: "Content approvals, policy checks, and compliant ad setups across regions.",
      points: ["Ad policy checks", "Approval workflows", "Regional compliance"],
    },
  ];

  const process = [
    { title: "Audit & Goals", icon: "bi-clipboard-data", text: "Baseline audit, KPI mapping, ICP and creative angles." },
    { title: "Plan & Calendar", icon: "bi-calendar3", text: "Monthly pillars, hooks, and shoot plan with approvals." },
    { title: "Produce & Publish", icon: "bi-film", text: "UGC + studio content, daily posting & stories/reels." },
    { title: "Amplify (Paid)", icon: "bi-rocket-takeoff", text: "Test creatives, scale winners, retarget warm audiences." },
    { title: "Engage & Partner", icon: "bi-people", text: "Reply DMs, comments, micro‑influencers & collabs." },
    { title: "Measure & Improve", icon: "bi-bar-chart-line", text: "Weekly checks, monthly reports, growth roadmap." },
  ];

  const sampleCalendar = [
    { day: "Mon", post: "Reel: Problem → Outcome (Hook)", platform: "Instagram", status: 100 },
    { day: "Tue", post: "Carousel: 5 Tips", platform: "LinkedIn", status: 100 },
    { day: "Wed", post: "UGC: Unboxing / Review", platform: "YouTube Shorts", status: 80 },
    { day: "Thu", post: "Meme/Trend Remix", platform: "Instagram", status: 60 },
    { day: "Fri", post: "Founder Story Snippet", platform: "Facebook", status: 90 },
    { day: "Sat", post: "Testimonial Cutdown", platform: "YouTube", status: 70 },
    { day: "Sun", post: "Poll/Question", platform: "Instagram", status: 50 },
  ];

  const caseStudies = [
    {
      title: "D2C Skincare — 4.1x ROAS in 60 days",
      image: "https://images.unsplash.com/photo-1556228453-efd1e3f0b5f2?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "ROAS", value: "+4.1x" },
        { label: "CPM", value: "-27%" },
        { label: "CTR", value: "+2.3%" },
      ],
      summary:
        "Scaled Meta + TikTok with UGC hooks, creator seeding, and weekly creative sprints.",
    },
    {
      title: "EdTech — 3x sign‑ups at same spend",
      image: "https://images.unsplash.com/photo-1554446422-c4d46271ab85?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Sign‑ups", value: "+3x" },
        { label: "CPA", value: "-35%" },
        { label: "Watch‑time", value: "+78%" },
      ],
      summary:
        "YouTube Shorts + LinkedIn carousels, improved landing pages and better onboarding funnel.",
    },
    {
      title: "B2B SaaS — Pipeline lift by 62%",
      image: "https://images.unsplash.com/photo-1551281044-8a94f3f2bf72?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Pipeline", value: "+62%" },
        { label: "MQL→SQL", value: "+19%" },
        { label: "CPL", value: "-22%" },
      ],
      summary:
        "LinkedIn ABM: thought‑leadership pods, case‑carousel series, and founder video posts.",
    },
  ];

  const plans = [
    {
      name: "Starter Social",
      price: "₹19,000/mo",
      desc: "For early‑stage brands getting consistent with content.",
      highlights: [
        "8 posts + 4 stories/mo",
        "1 platform",
        "Basic analytics",
        "Monthly report",
      ],
      cta: "Get Starter",
      popular: false,
    },
    {
      name: "Growth Engine",
      price: "₹49,000/mo",
      desc: "For brands ready to scale with paid + UGC.",
      highlights: [
        "16 posts + 8 stories/mo",
        "2–3 platforms",
        "UGC sourcing",
        "Paid social mgmt",
        "Weekly report",
      ],
      cta: "Scale with Us",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full creative pods, multi‑region, and heavy experimentation.",
      highlights: [
        "Creative sprints",
        "Influencer seeding",
        "ABM/LinkedIn",
        "Attribution setup",
        "SLA & compliance",
      ],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  const faqs = [
    { q: "How soon can we start?", a: "Usually within 1–2 weeks after audit and onboarding." },
    { q: "Can you work with our in‑house team?", a: "Yes. We often act as a creative + media pod plugged into your team." },
    { q: "Which platforms do you recommend?", a: "We choose based on ICP and goals; most brands start with Instagram + Meta or LinkedIn + YouTube." },
    { q: "Do you guarantee results?", a: "We don't promise vanity metrics. We target business KPIs and share clear experiments & projections." },
  ];

  const handleCTA = () => {
    if (onPrimaryCTA) return onPrimaryCTA();
    if (typeof window !== "undefined" && window.jivo_api?.open) {
      try { window.jivo_api.open(); return; } catch {/* ignore */}
    }
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ---------- Render ----------
  return (
    
    <main className="bg-light">
      <Header />
      {/* HERO */}
      <section className="py-5" ref={heroRef}>
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="d-flex gap-2 flex-wrap">
                <Badge bg="white" text="dark" className="border">Strategy</Badge>
                <Badge bg="white" text="dark" className="border">Creatives</Badge>
                <Badge bg="white" text="dark" className="border">Performance</Badge>
              </div>
              <h1 className="mt-3 display-5 fw-semibold">{hero.title}</h1>
              <p className="lead text-muted">{hero.subtitle}</p>
              <ul className="list-unstyled small text-secondary mt-3">
                {hero.bullets.map((b, i) => (
                  <li key={i} className="d-flex align-items-center mb-2">
                    <i className={`${b.icon} me-2 text-success`} /> <span>{b.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 d-flex flex-wrap gap-2">
                <Button variant="dark" size="lg" onClick={handleCTA}>
                  Start Growing <i className="bi bi-arrow-right ms-2" />
                </Button>
                <Button variant="outline-secondary" size="lg" href="#cases">View Case Studies</Button>
                <Badge bg="dark" className="rounded-pill d-inline-flex align-items-center gap-2 p-2"><i className="bi bi-shield-check"/> Free strategy call</Badge>
              </div>
              <Row className="text-center mt-4 g-3">
                {stats.map((s, i) => (
                  <Col xs={6} md={3} key={i}>
                    <div className="fs-2 fw-semibold text-dark">{s.value}</div>
                    <div className="small text-secondary">{s.label}</div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6}>
              <Card className="shadow-sm overflow-hidden rounded-4 border-0">
                <div className="ratio ratio-16x9">
                  <img src={hero.image} alt="Social media dashboard" className="w-100 h-100 object-fit-cover"/>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky CTA */}
      {showSticky && (
        <div className="position-fixed start-50 translate-middle-x bottom-0 pb-3" style={{ zIndex: 1040, width: 'min(960px, 100%)' }}>
          <Card className="shadow-lg border-0 rounded-4 mx-3">
            <Card.Body className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <span className="small text-secondary">Ready to scale? Get a free SMM plan in 24 hours.</span>
              <Button variant="dark" onClick={handleCTA}>Start Growing <i className="bi bi-arrow-right ms-2"/></Button>
            </Card.Body>
          </Card>
        </div>
      )}

      {/* PLATFORMS */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">Where we operate</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Multi‑platform execution</h2>
            <p className="text-muted">We prioritize the platforms your audience actually uses and adapt creative to native formats.</p>
          </div>
          <Row className="g-3 text-center">
            {platforms.map((p, i) => (
              <Col xs={6} sm={4} md={3} lg={2} key={i}>
                <Card className="h-100 rounded-4 shadow-sm border-0 p-3">
                  <i className={`${p.icon} fs-3`}/>
                  <div className="small mt-2">{p.name}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">What we do</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Full‑service social that performs</h2>
            <p className="text-muted">From content to media buying, our pod covers every moving part so you can focus on the business.</p>
          </div>
          <Row className="g-4">
            {services.map((s, i) => (
              <Col sm={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm border-0 rounded-4">
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="bg-dark text-white d-inline-flex align-items-center justify-content-center rounded-3 p-2"><i className={s.icon}/></div>
                      <Card.Title className="mb-0 fs-5">{s.title}</Card.Title>
                    </div>
                    <Card.Text className="text-muted small">{s.desc}</Card.Text>
                    <Stack direction="horizontal" gap={2} className="flex-wrap">
                      {s.points.map((p, idx) => (
                        <span key={idx} className="badge bg-light text-dark border rounded-pill">{p}</span>
                      ))}
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SAMPLE CALENDAR */}
      {/* WEEK CALENDAR — Upgraded */}
      <WeekCalendarSection data={sampleCalendar} />


      {/* CASE STUDIES */}
      <section id="cases" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">Proven outcomes</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Recent case studies</h2>
          </div>
          <Row className="g-4">
            {caseStudies.map((cs, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 rounded-4 shadow-sm border-0">
                  <div className="ratio ratio-16x9">
                    <img src={cs.image} alt={cs.title} className="w-100 h-100 object-fit-cover"/>
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-5">{cs.title}</Card.Title>
                    <Stack direction="horizontal" gap={2} className="flex-wrap mb-2">
                      {cs.metrics.map((m, idx) => (
                        <span key={idx} className="badge bg-light text-dark border rounded-pill">{m.label}: {m.value}</span>
                      ))}
                    </Stack>
                    <Card.Text className="small text-muted">{cs.summary}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRICING */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">Transparent pricing</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Plans for every growth stage</h2>
          </div>
          <Row className="g-4">
            {plans.map((pl, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className={`h-100 rounded-4 shadow-sm ${pl.popular ? 'border border-dark' : 'border-0'}`}>
                  <Card.Body>
                    {pl.popular && <span className="badge text-bg-dark rounded-pill mb-2">Most Popular</span>}
                    <Card.Title className="fs-5">{pl.name}</Card.Title>
                    <div className="h2 mt-1">{pl.price}</div>
                    <Card.Text className="small text-muted">{pl.desc}</Card.Text>
                    <ul className="small text-secondary ps-3">
                      {pl.highlights.map((h, idx) => (
                        <li key={idx} className="mb-1"><i className="bi bi-check2-circle text-success me-2"/>{h}</li>
                      ))}
                    </ul>
                    <Button variant="outline-secondary" onClick={handleCTA}>{pl.cta} <i className="bi bi-arrow-right ms-2"/></Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* KPI COMPARISON (optional table) */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">What improves</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Key KPIs we optimize</h2>
            <p className="text-muted">We focus on business outcomes, not vanity metrics. Here’s a sample set of KPIs tracked monthly.</p>
          </div>
          <div className="table-responsive rounded-4 shadow-sm bg-white">
            <Table className="mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>KPI</th>
                  <th>Baseline</th>
                  <th>Target After 90 Days</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>ROAS</td><td>1.2x</td><td>3.0x+</td></tr>
                <tr><td>CTR</td><td>0.7%</td><td>1.5%–3.0%</td></tr>
                <tr><td>CPM</td><td>₹260</td><td>₹180–₹220</td></tr>
                <tr><td>CPL (B2B)</td><td>₹1,200</td><td>₹700–₹900</td></tr>
                <tr><td>Watch‑time (Shorts/Reels)</td><td>12s</td><td>20–28s</td></tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">Customer love</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Marketers who trust us</h2>
          </div>
          <Row className="g-4">
            {[{text: `${brand} helped us find our voice on Instagram—revenue up 38% from social in 90 days.`, author:'Neha Gupta', role:'Founder, CuraSkin'}, {text: 'Weekly tests, creator pipeline, and solid reports. Exactly what our team needed.', author:'Arjun Mehta', role:'Growth Lead, LearnPro'}, {text: 'From “posting sometimes” to a real engine. We now plan content, run paid, and measure KPIs.', author:'Priya Nair', role:'CMO, WorkSphere'}].map((t,i)=> (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 rounded-4 shadow-sm border-0">
                  <Card.Body>
                    <blockquote className="small text-secondary">“{t.text}”</blockquote>
                    <div className="mt-3 small fw-medium">{t.author} <span className="text-muted fw-normal">— {t.role}</span></div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">FAQ</Badge>
            <h2 className="mt-2 fw-semibold fs-1">Answers to common questions</h2>
          </div>
          <Accordion className="mx-auto" style={{ maxWidth: 920 }}>
            {faqs.map((f,i)=> (
              <Accordion.Item eventKey={String(i)} key={i}>
                <Accordion.Header>{f.q}</Accordion.Header>
                <Accordion.Body className="text-secondary small">{f.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Badge bg="secondary" className="bg-opacity-10 text-secondary">Get in touch</Badge>
              <h2 className="mt-2 fw-semibold fs-1">Tell us your growth goals</h2>
              <p className="text-muted">Share your product, ICP, and targets—we'll reply with a mini‑roadmap and projected KPIs.</p>
              <Row xs={2} className="g-2 small text-secondary">
                <Col><i className="bi bi-check2-circle text-success me-2"/>24‑hour response</Col>
                <Col><i className="bi bi-check2-circle text-success me-2"/>Weekly reports</Col>
                <Col><i className="bi bi-check2-circle text-success me-2"/>Creator network</Col>
                <Col><i className="bi bi-check2-circle text-success me-2"/>NDA on request</Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Card className="rounded-4 shadow-sm border-0">
                <Card.Body>
                  <Form onSubmit={(e)=>{e.preventDefault(); handleCTA();}}>
                    <Row className="g-3">
                      <Col sm={6}><Form.Group><Form.Label className="small">Full name</Form.Label><Form.Control required/></Form.Group></Col>
                      <Col sm={6}><Form.Group><Form.Label className="small">Work email</Form.Label><Form.Control type="email" required/></Form.Group></Col>
                      <Col sm={6}><Form.Group><Form.Label className="small">Company</Form.Label><Form.Control/></Form.Group></Col>
                      <Col sm={6}><Form.Group><Form.Label className="small">Monthly ad budget (₹)</Form.Label><Form.Control type="number" min={0}/></Form.Group></Col>
                      <Col xs={12}><Form.Group><Form.Label className="small">What do you want to achieve?</Form.Label><Form.Control as="textarea" rows={5} required/></Form.Group></Col>
                    </Row>
                    <Button type="submit" variant="dark" className="mt-3">Get Growth Plan <i className="bi bi-arrow-right ms-2"/></Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER CTA */}
      <section className="py-5 bg-dark text-white">
        <Container className="text-center">
          <h2 className="fw-semibold display-6">Ready to turn social into revenue?</h2>
          <p className="text-white-50">We’ll help you build a repeatable growth engine across organic + paid.</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <Button variant="light" onClick={handleCTA}>Start Growing <i className="bi bi-arrow-right ms-2"/></Button>
            <Button variant="outline-light" href="#cases">Explore Case Studies</Button>
          </div>
        </Container>
      </section>
      <Footer/>
    </main>
  );
}

/* --- Add to App.css (or any global CSS you import once) ---
.object-fit-cover { object-fit: cover; }
.badge.bg-opacity-10 { --bs-bg-opacity: 0.1; }
*/
