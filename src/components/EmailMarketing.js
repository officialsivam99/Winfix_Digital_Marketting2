import React, { useMemo, useState } from "react";
// import Header from "./header";
import Footer from "./footer";
import {
  Container, Row, Col, Card, Button, Badge, Stack,
  Form, Modal, Table, Alert, Accordion
} from "react-bootstrap";
import Header from "./header";

export default function EmailMarketing({
  brand = "Digi Spark",
  onPrimaryCTA,        // optional callback for main CTA
  onDownloadAssets,    // optional callback when sample assets downloaded
}) {
  /* ============== Inline CSS (custom) ============== */
  const section = { padding: "56px 0", background: "#ffffff" };
  const sectionAlt = { padding: "56px 0", background: "#f8f9fb" };
  const headline = { letterSpacing: "-0.3px" };
  const subText = { color: "#6b7280" };
  const thinBadge = {
    backgroundColor: "rgba(108,117,125,0.1)",
    color: "#6c757d",
    border: "1px solid #e5e7eb",
  };
  const heroWrap = {
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,.08)",
    background:
      "linear-gradient(180deg, rgba(246,248,252,.85), rgba(255,255,255,.92))",
    backdropFilter: "blur(6px)",
    overflow: "hidden",
  };
  const statCard = {
    borderRadius: 14,
    border: "1px solid rgba(0,0,0,.06)",
    background: "#fff",
  };
  const chip = {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#f8fafc",
    color: "#111827",
    fontSize: 12,
    border: "1px solid #e5e7eb",
  };
  const cardLite = (hover) => ({
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,.08)",
    background: "#fff",
    overflow: "hidden",
    transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
    transform: `translateY(${hover ? "-3px" : "0"})`,
    boxShadow: hover
      ? "0 12px 28px rgba(16,24,40,.14)"
      : "0 6px 18px rgba(16,24,40,.08)",
  });
  const listTick = { color: "#198754" };

  /* ============== Dynamic Data ============== */
  const hero = {
    title: `Lifecycle & Email Marketing — ${brand}`,
    subtitle:
      "Flows + campaigns that turn subscribers into customers. We plan the lifecycle, build templates, segment audiences, and iterate weekly for growth.",
    bullets: [
      { icon: "bi-mailbox", text: "Klaviyo/Mailchimp/HubSpot expertise" },
      { icon: "bi-people", text: "Smart segments & personalization" },
      { icon: "bi-graph-up-arrow", text: "A/B tests & revenue attribution" },
    ],
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop",
  };

  const stats = [
    { value: "28%+", label: "Avg. Open Rate" },
    { value: "3.5%+", label: "Avg. Click Rate" },
    { value: "22%", label: "Revenue from Email" },
    { value: "150+", label: "Flows/Campaigns Launched" },
  ];

  const services = [
    {
      icon: "bi-diagram-3",
      title: "Lifecycle Strategy",
      desc: "Welcome, Browse Abandon, Cart, Post-purchase, Winbacks, Re-engagement.",
      points: ["Journey map", "KPIs", "Testing roadmap"],
    },
    {
      icon: "bi-envelope-paper",
      title: "Template System",
      desc: "Modular, responsive templates for promo/newsletter/trigger flows.",
      points: ["Design system", "Blocks & snippets", "Dark-mode care"],
    },
    {
      icon: "bi-people",
      title: "Segmentation & Personalization",
      desc: "RFM, CLV cohorts, predictive send, dynamic product blocks.",
      points: ["RFM/CLV", "Events & traits", "Dynamic feeds"],
    },
    {
      icon: "bi-rocket-takeoff",
      title: "Campaigns & Automations",
      desc: "Weekly calendars, promos, seasonal, and triggered automations.",
      points: ["Calendar", "A/B tests", "Automation QA"],
    },
    {
      icon: "bi-shield-check",
      title: "Deliverability",
      desc: "SPF/DKIM/DMARC, list hygiene, bounce/complaint control.",
      points: ["Auth & warm-up", "List cleaning", "Inbox testing"],
    },
    {
      icon: "bi-bar-chart-line",
      title: "Analytics & Growth",
      desc: "Revenue attribution, uplift analysis, dashboarding & insights.",
      points: ["GA4/UTM", "Attribution", "Looker reports"],
    },
  ];

  const process = [
    { title: "Audit & Plan", icon: "bi-clipboard-check", text: "Inventory flows, health check, and 90-day roadmap." },
    { title: "Build & Integrate", icon: "bi-layers", text: "Templates, events, product blocks, and tracking." },
    { title: "Launch & Test", icon: "bi-speedometer2", text: "Ship flows/campaigns and start A/Bs." },
    { title: "Scale & Optimize", icon: "bi-graph-up", text: "Iterate segments, content, timing, and offers." },
  ];

  const toolstack = [
    { name: "Klaviyo", icon: "bi-lightning-charge" },
    { name: "Mailchimp", icon: "bi-envelope-fill" },
    { name: "HubSpot", icon: "bi-h-square" },
    { name: "GA4", icon: "bi-bar-chart" },
    { name: "Shopify", icon: "bi-bag" },
    { name: "WooCommerce", icon: "bi-cart2" },
    { name: "Looker Studio", icon: "bi-window" },
    { name: "Litmus", icon: "bi-display" },
  ];

  const templates = [
    { name: "Welcome A", tag: "Welcome", subject: "Welcome to the crew 👋", preview: "Kickstart perks & picks" },
    { name: "Cart Rescue", tag: "Cart", subject: "Still thinking it over?", preview: "Your cart waits—grab 10% off" },
    { name: "Post-Purchase", tag: "Post-purchase", subject: "Thanks! A few tips…", preview: "Make the most of it" },
    { name: "Winback", tag: "Winback", subject: "We miss you ❤️", preview: "Come back to fresh picks" },
    { name: "Newsletter", tag: "Campaign", subject: "This week in drops", preview: "Top picks & trends" },
    { name: "Re-engage", tag: "Re-engage", subject: "Still want emails?", preview: "Choose your preferences" },
  ];

  const plans = [
    {
      name: "Starter Email",
      price: "₹19,000/mo",
      desc: "Templates + 1-2 flows + monthly campaigns.",
      highlights: ["Welcome + Post-purchase", "2 promos/mo", "Basic reporting"],
      cta: "Get Starter",
      popular: false,
    },
    {
      name: "Growth Lifecycle",
      price: "₹49,000/mo",
      desc: "Full lifecycle, testing, and segmentation.",
      highlights: ["6+ flows", "4 promos/mo", "A/B + cohort insights"],
      cta: "Scale with Us",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Complex catalogs, multi-region, SLAs.",
      highlights: ["Dynamic blocks", "Deliverability ops", "SLA & security"],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  const faqs = [
    { q: "Which ESPs do you support?", a: "Klaviyo, Mailchimp, HubSpot, and custom SMTP where needed." },
    { q: "Do you write copy and design creatives?", a: "Yes—subject lines, body copy, product blocks, and on-brand visuals." },
    { q: "What about SMS/WhatsApp?", a: "We can add SMS/WhatsApp steps to flows and coordinate offers across channels." },
    { q: "How do you improve deliverability?", a: "Authentication, warm-up, list hygiene, and content/spam checks—plus seed testing." },
  ];

  /* ============== UI State & Handlers ============== */
  const [hoverIdx, setHoverIdx] = useState(null);
  const [showPlan, setShowPlan] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [assetMsg, setAssetMsg] = useState("");

  const openPlan = () => {
    if (onPrimaryCTA) return onPrimaryCTA();
    setShowPlan(true);
  };
  const submitPlan = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowPlan(false);
      setAssetMsg("Thanks! We’ll send your lifecycle plan in 24 hours.");
      setTimeout(() => setAssetMsg(""), 3000);
    }, 900);
  };
  const handleDownloadAssets = () => {
    if (onDownloadAssets) onDownloadAssets();
    setAssetMsg("Sample template pack downloaded.");
    setTimeout(() => setAssetMsg(""), 2500);
  };

  /* ============== Planner (List → Revenue) ============== */
  const [calc, setCalc] = useState({
    listSize: 20000,
    openRate: 28,   // %
    clickRate: 3.5, // % of total recipients
    convRate: 2.2,  // % of clickers
    aov: 1800,      // ₹
    sendsPerMonth: 8,
  });
  const derived = useMemo(() => {
    const list = +calc.listSize || 0;
    const opens = Math.round(list * (+calc.openRate / 100));
    const clicks = Math.round(list * (+calc.clickRate / 100));
    const orders = Math.round(clicks * (+calc.convRate / 100));
    const revenuePerSend = Math.round(orders * (+calc.aov || 0));
    const monthlyRevenue = revenuePerSend * (+calc.sendsPerMonth || 0);
    return { opens, clicks, orders, revenuePerSend, monthlyRevenue };
  }, [calc]);

  /* ============== Subject Tester & Email Preview ============== */
  const spamWords = ["free", "guarantee", "winner", "act now", "risk-free", "urgent"];
  const [subject, setSubject] = useState("Welcome to the crew 👋");
  const [preheader, setPreheader] = useState("Kickstart perks & picks — open for a surprise");
  const [addEmoji, setAddEmoji] = useState(true);
  const warnings = useMemo(() => {
    const s = subject.toLowerCase();
    return spamWords.filter(w => s.includes(w));
  }, [subject]);

  const [builder, setBuilder] = useState({
    hero: "Big mid-season drop just landed.",
    body: "Curated picks you’ll love. Members get early access and insider pricing.",
    cta: "Shop the Drop",
    url: "https://example.com/drop",
  });

  /* ================= Render ================= */
  return (
    <>
      <Header />
      {/* HERO */}
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <div className="d-flex gap-2 flex-wrap">
                <Badge style={thinBadge}>Flows</Badge>
                <Badge style={thinBadge}>Campaigns</Badge>
                <Badge style={thinBadge}>Deliverability</Badge>
              </div>
              <h1 className="mt-3 display-5 fw-semibold" style={headline}>
                {hero.title}
              </h1>
              <p className="lead" style={subText}>{hero.subtitle}</p>

              <ul className="list-unstyled small" style={{ color: "#475569" }}>
                {hero.bullets.map((b, i) => (
                  <li key={i} className="d-flex align-items-center mb-2">
                    <i className={`bi ${b.icon} me-2 text-success`} />
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button size="lg" variant="dark" onClick={openPlan}>
                  Get Lifecycle Plan <i className="bi bi-arrow-right ms-2" />
                </Button>
                <Button size="lg" variant="outline-secondary" onClick={handleDownloadAssets}>
                  Download sample templates
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card style={heroWrap} className="shadow-sm border-0">
                <div className="ratio ratio-16x9">
                  <img
                    src={hero.image}
                    alt="Email & lifecycle dashboard"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="g-3 text-center mt-4">
            {stats.map((s, i) => (
              <Col xs={6} md={3} key={i}>
                <div style={statCard} className="py-3">
                  <div className="fs-3 fw-semibold">{s.value}</div>
                  <div className="small" style={subText}>{s.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>What we do</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Lifecycle services that compound</h2>
            <p style={subText}>Strategy, templates, segments, deliverability, and analytics—done by one tight pod.</p>
          </div>

          <Row className="g-4">
            {services.map((s, i) => (
              <Col md={6} lg={4} key={i}>
                <Card
                  style={cardLite(hoverIdx === i)}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(null)}
                  className="h-100"
                >
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div
                        className="d-inline-flex align-items-center justify-content-center text-white"
                        style={{ background: "#111827", borderRadius: 10, padding: 8 }}
                      >
                        <i className={`bi ${s.icon}`} />
                      </div>
                      <Card.Title className="mb-0 fs-5">{s.title}</Card.Title>
                    </div>
                    <Card.Text className="small" style={subText}>{s.desc}</Card.Text>
                    <Stack direction="horizontal" gap={2} className="flex-wrap mt-2">
                      {s.points.map((p, idx) => (
                        <span key={idx} style={chip}>{p}</span>
                      ))}
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PROCESS + TOOLSTACK + TEMPLATES */}
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <div className="mb-3">
                <Badge style={thinBadge}>How we work</Badge>
                <h2 className="mt-2 fw-semibold fs-1" style={headline}>A clean lifecycle system</h2>
                <p style={subText}>Map the journey → build flows/templates → launch tests → measure revenue.</p>
              </div>

              <Row className="g-3">
                {process.map((p, i) => (
                  <Col sm={6} key={i}>
                    <Card style={cardLite(false)} className="h-100">
                      <Card.Body>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <div className="d-inline-flex align-items-center justify-content-center text-white"
                               style={{ background: "#111827", borderRadius: 10, padding: 8 }}>
                            <i className={`bi ${p.icon}`} />
                          </div>
                          <Card.Title className="mb-0 fs-6">{p.title}</Card.Title>
                        </div>
                        <Card.Text className="small" style={subText}>{p.text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={5}>
              <div className="mb-3">
                <Badge style={thinBadge}>Toolkit</Badge>
                <h3 className="mt-2 fs-4 fw-semibold" style={headline}>Tools we live in</h3>
              </div>
              <Row className="g-3">
                {toolstack.map((t, i) => (
                  <Col xs={6} key={i}>
                    <Card style={cardLite(false)} className="h-100">
                      <Card.Body className="d-flex align-items-center gap-2 small">
                        <i className={`bi ${t.icon} fs-5`} />
                        <span>{t.name}</span>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <div className="mt-4">
            <Badge style={thinBadge}>Starter templates</Badge>
            <Row className="g-3 mt-1">
              {templates.map((t, i) => (
                <Col sm={6} md={4} key={i}>
                  <Card style={cardLite(false)} className="h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between">
                        <Card.Title className="fs-6 mb-0">{t.name}</Card.Title>
                        <Badge bg="light" text="dark" style={{ border: "1px solid #e5e7eb" }}>{t.tag}</Badge>
                      </div>
                      <div className="small mt-2"><strong>Subject:</strong> {t.subject}</div>
                      <div className="small text-secondary">{t.preview}</div>
                      <div className="mt-2">
                        <Button size="sm" variant="outline-secondary" onClick={openPlan}>
                          Request variant <i className="bi bi-arrow-right ms-1" />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* PLANNERS & PREVIEW */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Planner & Preview</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Campaign planner + Subject tester</h2>
            <p style={subText}>Forecast outcomes and craft inbox-worthy subjects with spam-word checks.</p>
          </div>

          <Row className="g-4">
            {/* Planner */}
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-3">Revenue Forecast</h5>
                  <Form>
                    <Row className="g-3">
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">List size</Form.Label>
                          <Form.Control type="number" min={0}
                            value={calc.listSize}
                            onChange={(e)=>setCalc(v=>({...v, listSize:+e.target.value}))}/>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Sends per month</Form.Label>
                          <Form.Control type="number" min={0}
                            value={calc.sendsPerMonth}
                            onChange={(e)=>setCalc(v=>({...v, sendsPerMonth:+e.target.value}))}/>
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
                        <Form.Group>
                          <Form.Label className="small">Open rate %</Form.Label>
                          <Form.Control type="number" step="0.1" min={0}
                            value={calc.openRate}
                            onChange={(e)=>setCalc(v=>({...v, openRate:+e.target.value}))}/>
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
                        <Form.Group>
                          <Form.Label className="small">Click rate %</Form.Label>
                          <Form.Control type="number" step="0.1" min={0}
                            value={calc.clickRate}
                            onChange={(e)=>setCalc(v=>({...v, clickRate:+e.target.value}))}/>
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
                        <Form.Group>
                          <Form.Label className="small">Conv. rate %</Form.Label>
                          <Form.Control type="number" step="0.1" min={0}
                            value={calc.convRate}
                            onChange={(e)=>setCalc(v=>({...v, convRate:+e.target.value}))}/>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Label className="small">AOV / LTV slice (₹)</Form.Label>
                          <Form.Control type="number" min={0}
                            value={calc.aov}
                            onChange={(e)=>setCalc(v=>({...v, aov:+e.target.value}))}/>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <Table responsive bordered size="sm" className="mt-3 align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Opens</th><th>Clicks</th><th>Orders</th><th>Revenue / send</th><th>Monthly revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{derived.opens.toLocaleString()}</td>
                        <td>{derived.clicks.toLocaleString()}</td>
                        <td>{derived.orders.toLocaleString()}</td>
                        <td>₹{derived.revenuePerSend.toLocaleString()}</td>
                        <td>₹{derived.monthlyRevenue.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="small text-secondary">
                    Tip: Boost opens via better **subject + send time**; clicks via **clear CTAs**; orders via **offers & PDP speed**.
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Subject tester + email preview */}
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-3">Subject Line Tester</h5>
                  <Form>
                    <Row className="g-3">
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">Subject</Form.Label>
                          <Form.Control
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                            maxLength={78}
                          />
                          <div className="small mt-1">{subject.length}/78</div>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">Preheader</Form.Label>
                          <Form.Control
                            value={preheader}
                            onChange={(e)=>setPreheader(e.target.value)}
                            maxLength={110}
                          />
                          <div className="small mt-1">{preheader.length}/110</div>
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="d-flex align-items-center gap-2">
                        <Form.Check
                          type="switch"
                          id="emoji-toggle"
                          checked={addEmoji}
                          onChange={(e)=>setAddEmoji(e.target.checked)}
                          label="Try with emoji"
                        />
                        {warnings.length > 0 && (
                          <Badge bg="warning" text="dark">
                            Avoid: {warnings.join(", ")}
                          </Badge>
                        )}
                      </Col>
                    </Row>
                  </Form>

                  {/* Inbox preview */}
                  <div className="mt-3 p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
                    <div className="small" style={{ color: "#111827" }}>
                      <strong>From:</strong> {brand} <span className="text-secondary">&lt;hello@{brand.toLowerCase().replace(/\s+/g,'')}.com&gt;</span>
                    </div>
                    <div className="small mt-1" style={{ color: "#111827" }}>
                      <strong>Subject:</strong>{" "}
                      {addEmoji ? `✨ ${subject}` : subject}
                    </div>
                    <div className="small text-secondary">
                      {preheader}
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h6 className="fw-semibold mb-2">Email Block Preview</h6>
                  <Form>
                    <Row className="g-3">
                      <Col xs={12}><Form.Group><Form.Label className="small">Hero line</Form.Label>
                        <Form.Control value={builder.hero}
                          onChange={(e)=>setBuilder(v=>({...v, hero:e.target.value}))}/></Form.Group></Col>
                      <Col xs={12}><Form.Group><Form.Label className="small">Body</Form.Label>
                        <Form.Control as="textarea" rows={3} value={builder.body}
                          onChange={(e)=>setBuilder(v=>({...v, body:e.target.value}))}/></Form.Group></Col>
                      <Col sm={6}><Form.Group><Form.Label className="small">CTA text</Form.Label>
                        <Form.Control value={builder.cta}
                          onChange={(e)=>setBuilder(v=>({...v, cta:e.target.value}))}/></Form.Group></Col>
                      <Col sm={6}><Form.Group><Form.Label className="small">CTA URL</Form.Label>
                        <Form.Control value={builder.url}
                          onChange={(e)=>setBuilder(v=>({...v, url:e.target.value}))}/></Form.Group></Col>
                    </Row>
                  </Form>

                  {/* Simple email card */}
                  <div className="mt-3 p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 12, background: "#ffffff" }}>
                    <div className="fw-semibold mb-2">{builder.hero}</div>
                    <div className="small text-secondary">{builder.body}</div>
                    <a href={builder.url} className="btn btn-dark btn-sm mt-3">
                      {builder.cta} <i className="bi bi-arrow-right ms-1" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PRICING */}
      <section style={section}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Transparent pricing</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Plans for every stage</h2>
          </div>
          <Row className="g-4">
            {plans.map((pl, i) => (
              <Col md={6} lg={4} key={i}>
                <Card
                  style={{
                    ...cardLite(false),
                    border: pl.popular ? "1px solid #111827" : "1px solid rgba(0,0,0,.08)",
                  }}
                  className="h-100"
                >
                  <Card.Body>
                    {pl.popular && (
                      <span className="badge text-bg-dark rounded-pill mb-2">
                        Most Popular
                      </span>
                    )}
                    <Card.Title className="fs-5">{pl.name}</Card.Title>
                    <div className="h2 mt-1">{pl.price}</div>
                    <Card.Text className="small" style={subText}>{pl.desc}</Card.Text>
                    <ul className="small" style={{ color: "#475569" }}>
                      {pl.highlights.map((h, idx) => (
                        <li key={idx} className="mb-1">
                          <i className="bi bi-check2-circle me-2" style={listTick} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline-secondary" onClick={openPlan}>
                      {pl.cta} <i className="bi bi-arrow-right ms-2" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>FAQ</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Answers to common questions</h2>
          </div>
          <Accordion className="mx-auto" style={{ maxWidth: 920 }}>
            {faqs.map((f, i) => (
              <Accordion.Item eventKey={String(i)} key={i}>
                <Accordion.Header>{f.q}</Accordion.Header>
                <Accordion.Body className="text-secondary small">{f.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* CTA */}
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={7}>
              <h2 className="fw-semibold display-6" style={headline}>
                Ready to turn email into a growth channel?
              </h2>
              <p style={subText}>
                Get a lifecycle plan with flows, campaign calendar, and revenue forecast tailored to you.
              </p>
              <Button size="lg" variant="dark" onClick={openPlan}>
                Get Lifecycle Plan <i className="bi bi-arrow-right ms-2" />
              </Button>
              <Button size="lg" className="ms-2" variant="outline-secondary" onClick={handleDownloadAssets}>
                Download sample templates
              </Button>
            </Col>
            <Col lg={5}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-2">Core flows checklist</h5>
                  <ul className="small mb-0" style={{ color: "#475569" }}>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Welcome (2–3 parts)</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Browse & Cart Abandon</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Post-purchase & Cross-sell</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Winback (60/90 days)</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Re-engagement & List hygiene</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Plan Modal */}
      <Modal show={showPlan} onHide={() => setShowPlan(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Lifecycle Plan Request — {brand}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitPlan}>
          <Modal.Body>
            <Row className="g-3">
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Name</Form.Label>
                  <Form.Control required />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Work email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="small">Store / Website URL</Form.Label>
                  <Form.Control type="url" placeholder="https://yourdomain.com" required />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">ESP</Form.Label>
                  <Form.Select defaultValue="Klaviyo">
                    {["Klaviyo","Mailchimp","HubSpot","Other"].map((g)=>(
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Monthly orders / leads</Form.Label>
                  <Form.Control type="number" min={0} />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="small">Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Anything we should know?" />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPlan(false)}>Cancel</Button>
            <Button type="submit" variant="dark" disabled={submitting}>
              {submitting ? "Submitting…" : "Request Plan"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Alerts */}
      {assetMsg && (
        <div style={{ position: "fixed", bottom: 12, right: 12, zIndex: 1060 }}>
          <Alert variant="success" className="shadow-sm border">{assetMsg}</Alert>
        </div>
      )}
      <Footer/>
    </>
  );
}
