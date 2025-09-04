import React, { useMemo, useState } from "react";
// import Header from "./header";
import Footer from "./footer";
import {
  Container, Row, Col, Card, Button, Badge, Accordion, Stack,
  Form, Modal, Table, Alert
} from "react-bootstrap";
import Header from "./header";

export default function SearchEngineOptimization({
  brand = "Digi Spark",
  onPrimaryCTA,         // optional: if passed, called on “Get Free SEO Audit”
  onDownloadReport,     // optional callback on sample report download
}) {
  // ...existing code...
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

  // =============== Dynamic Data ===============
  const hero = {
    title: `Rank. Convert. Scale — ${brand} SEO`,
    subtitle:
      "Technical + Content + Authority: a compound system that grows qualified traffic and revenue. We build durable search moats, not vanity rankings.",
    bullets: [
      { icon: "bi-speedometer2", text: "Core Web Vitals & crawl efficiency" },
      { icon: "bi-journal-text", text: "Topic maps, clusters & content ops" },
      { icon: "bi-diagram-3", text: "Entity SEO, schema & internal links" },
    ],
    image:
      "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1600&auto=format&fit=crop",
  };

  const stats = [
    { value: "220%+", label: "Avg. 6-mo Organic Growth" },
    { value: "150K+", label: "Keywords Tracked" },
    { value: "95%", label: "CWV Pass Rate" },
    { value: "40+", label: "Schemas Implemented" },
  ];

  const services = [
    {
      icon: "bi-gear-wide-connected",
      title: "Technical SEO",
      desc: "Crawl budget, indexation, site speed, CWV, log-file insights, hreflang, canonicals.",
      points: ["CWV & performance", "Sitemaps & robots", "Log file analysis"],
    },
    {
      icon: "bi-pen",
      title: "On-Page & Content",
      desc: "Topic research, clusters, briefs, NLP terms, internal links, SERP intent alignment.",
      points: ["Topic maps", "Briefs & NLP terms", "Internal linking"],
    },
    {
      icon: "bi-building",
      title: "Authority & Links",
      desc: "Digital PR, outreach, link reclamation, brand mentions, EEAT enhancements.",
      points: ["Digital PR", "Reclamation", "Brand signals"],
    },
    {
      icon: "bi-geo-alt",
      title: "Local SEO",
      desc: "Maps, profiles, citations, NAP, service area pages, reviews & photos strategy.",
      points: ["GMB optimization", "Citations/NAP", "Service pages"],
    },
    {
      icon: "bi-diagram-3",
      title: "Schema & Entities",
      desc: "JSON-LD, entity linking, rich results, knowledge graph alignment.",
      points: ["Product/FAQ/HowTo", "Org/Person", "Breadcrumbs"],
    },
    {
      icon: "bi-bar-chart-line",
      title: "Analytics & Reporting",
      desc: "GA4 & Search Console dashboards, Looker, KPI models, north-star tracking.",
      points: ["GA4 + GSC", "Attribution", "Looker studio"],
    },
  ];

  const process = [
    { title: "Audit & Opportunities", icon: "bi-clipboard-check", text: "Full technical & content audit. Prioritized opportunity map." },
    { title: "Strategy & Roadmap", icon: "bi-compass", text: "Quarterly plan with themes, clusters, and link strategy." },
    { title: "Implement & Ship", icon: "bi-rocket-takeoff", text: "Fix tech issues, publish clusters, deploy schemas & links." },
    { title: "Measure & Optimize", icon: "bi-graph-up-arrow", text: "Track KPIs, test SERP wins, iterate on internal links." },
  ];

  const toolstack = [
    { name: "Google Search Console", icon: "bi-google" },
    { name: "GA4", icon: "bi-bar-chart" },
    { name: "Screaming Frog", icon: "bi-bug-fill" },
    { name: "Ahrefs", icon: "bi-search" },
    { name: "Semrush", icon: "bi-speedometer2" },
    { name: "Sitebulb", icon: "bi-lightning-charge" },
    { name: "Looker Studio", icon: "bi-window" },
    { name: "Cloudflare", icon: "bi-cloud" },
  ];

  const caseStudies = [
    {
      title: "B2B SaaS — 3.2× pipeline from organic",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Non-brand clicks", value: "+178%" },
        { label: "Top-3 KW", value: "+92%" },
        { label: "MQL→SQL", value: "+26%" },
      ],
      summary:
        "Entity-driven clusters, programmatic internal links, FAQ/Product schema, and hub-page templates.",
    },
    {
      title: "D2C Cosmetics — 4.6× revenue from SEO",
      image:
        "https://images.unsplash.com/photo-1505575972945-280c5a6366b7?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Revenue", value: "4.6×" },
        { label: "CWV pass", value: "97%" },
        { label: "Rich results", value: "+210%" },
      ],
      summary:
        "Speed + CWV, PDP schema, UGC aggregation, review snippets, and seasonal landing pages.",
    },
    {
      title: "Fintech — +310% non-brand traffic",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Non-brand", value: "+310%" },
        { label: "Time to index", value: "-42%" },
        { label: "Avg. pos", value: "↑ 6.4" },
      ],
      summary:
        "Log-file insights, crawl shaping, intent-aligned content, and smart canonicals.",
    },
  ];

  const plans = [
    {
      name: "Starter SEO",
      price: "₹24,000/mo",
      desc: "For early-stage sites needing fundamentals done right.",
      highlights: [
        "Technical audit & fixes",
        "Basic schema & internal links",
        "4 briefs + 2 content edits/mo",
        "Monthly report",
      ],
      cta: "Get Starter",
      popular: false,
    },
    {
      name: "Growth SEO",
      price: "₹59,000/mo",
      desc: "Compound growth with clusters, links, and dashboards.",
      highlights: [
        "Quarterly strategy",
        "8 briefs + 4 content edits/mo",
        "Digital PR & link building",
        "Weekly dashboard",
      ],
      cta: "Scale with Us",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Large sites, complex tech, multi-region, SLAs.",
      highlights: [
        "CWV + infra collaboration",
        "Programmatic pages",
        "Advanced schema & entities",
        "SLA & security reviews",
      ],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  const faqs = [
    { q: "How fast will we see results?", a: "Quick wins appear in 4–8 weeks for technical fixes. Durable growth compounds over 3–6 months as clusters age and links accrue." },
    { q: "Do you write content too?", a: "Yes—briefs, outlines, and editorial QC are included. We can supply draft or final content depending on plan." },
    { q: "What about international or multi-language SEO?", a: "We handle hreflang, geo-targeting, and language-specific keyword research with localized SERP analysis." },
    { q: "Do you guarantee rankings?", a: "Search is dynamic; we don’t guarantee specific ranks. We commit to a transparent roadmap, high-leverage work, and revenue-aligned KPIs." },
  ];

  // =============== UI State & Handlers ===============
  const [hoverIdx, setHoverIdx] = useState(null);
  const [showAudit, setShowAudit] = useState(false);
  const [auditSubmitting, setAuditSubmitting] = useState(false);
  const [reportMsg, setReportMsg] = useState("");

  const openAudit = () => {
    if (onPrimaryCTA) return onPrimaryCTA();
    setShowAudit(true);
  };
  const submitAudit = (e) => {
    e.preventDefault();
    setAuditSubmitting(true);
    setTimeout(() => {
      setAuditSubmitting(false);
      setShowAudit(false);
      setReportMsg("Thanks! We’ll send your mini audit in 24 hours.");
      setTimeout(() => setReportMsg(""), 3000);
    }, 900);
  };
  const handleDownloadReport = () => {
    if (onDownloadReport) onDownloadReport();
    setReportMsg("Sample report downloaded.");
    setTimeout(() => setReportMsg(""), 2500);
  };

  // =============== SERP Preview (Dynamic Tool) ===============
  const [serp, setSerp] = useState({
    title: "Buy Organic Face Serum | Free Shipping – GlowCo",
    url: "https://www.example.com/serum/organic",
    description:
      "Dermatologist-tested vitamin C face serum for brighter skin. Save 15% today. Free shipping.",
    device: "desktop",
  });

  const serpTitleLen = serp.title.length;
  const serpDescLen = serp.description.length;
  const serpTitleLimit = serp.device === "mobile" ? 55 : 60;
  const serpDescLimit = serp.device === "mobile" ? 150 : 160;

  const serpGood = useMemo(() => ({
    title: serpTitleLen <= serpTitleLimit,
    description: serpDescLen <= serpDescLimit,
  }), [serpTitleLen, serpDescLen, serpTitleLimit, serpDescLimit]);

  // =============== Render ===============
  return (
    <>
    <Header/>
      {/* HERO */}
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <div className="d-flex gap-2 flex-wrap">
                <Badge style={thinBadge}>Technical</Badge>
                <Badge style={thinBadge}>Content</Badge>
                <Badge style={thinBadge}>Authority</Badge>
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
                <Button size="lg" variant="dark" onClick={openAudit}>
                  Get Free SEO Audit <i className="bi bi-arrow-right ms-2" />
                </Button>
                <Button size="lg" variant="outline-secondary" onClick={handleDownloadReport}>
                  Download sample report
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card style={heroWrap} className="shadow-sm border-0">
                <div className="ratio ratio-16x9">
                  <img
                    src={hero.image}
                    alt="SEO dashboard"
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
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>SEO services that move the needle</h2>
            <p style={subText}>Strategy + execution pods: technical fixes, content engines, links, and measurement.</p>
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

      {/* PROCESS + TOOLSTACK */}
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <div className="mb-3">
                <Badge style={thinBadge}>How we work</Badge>
                <h2 className="mt-2 fw-semibold fs-1" style={headline}>A compounding SEO system</h2>
                <p style={subText}>Transparent sprints, clear priority, measurable KPIs—every week.</p>
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
        </Container>
      </section>

      {/* SERP PREVIEW TOOL */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Optimizer</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>SERP Preview</h2>
            <p style={subText}>Craft perfect titles & descriptions. Live pixel-length guidance for desktop & mobile.</p>
          </div>

          <Row className="g-4">
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <Form>
                    <Row className="g-3">
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">Device</Form.Label>
                          <Form.Select
                            value={serp.device}
                            onChange={(e) =>
                              setSerp((v) => ({ ...v, device: e.target.value }))
                            }
                          >
                            <option value="desktop">Desktop</option>
                            <option value="mobile">Mobile</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">
                            Title {serpGood.title ? "" : <span className="text-danger">(trim)</span>}
                          </Form.Label>
                          <Form.Control
                            value={serp.title}
                            onChange={(e) =>
                              setSerp((v) => ({ ...v, title: e.target.value }))
                            }
                          />
                          <div className="small mt-1">
                            {serpTitleLen}/{serpTitleLimit} characters
                          </div>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">URL</Form.Label>
                          <Form.Control
                            value={serp.url}
                            onChange={(e) =>
                              setSerp((v) => ({ ...v, url: e.target.value }))
                            }
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">
                            Meta Description {serpGood.description ? "" : <span className="text-danger">(trim)</span>}
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            value={serp.description}
                            onChange={(e) =>
                              setSerp((v) => ({ ...v, description: e.target.value }))
                            }
                          />
                          <div className="small mt-1">
                            {serpDescLen}/{serpDescLimit} characters
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  {/* Google-like card */}
                  <div className="mb-2">
                    <a href={serp.url || "#"} className="text-decoration-none">
                      <div className="small" style={{ color: "#1a0dab" }}>
                        {serp.title || "Title"}
                      </div>
                    </a>
                    <div className="small" style={{ color: "#006621" }}>
                      {serp.url || "https://www.example.com/…"}
                    </div>
                  </div>
                  <div className="small" style={{ color: "#4d5156" }}>
                    {serp.description || "Meta description preview…"}
                  </div>
                  <div className="mt-3 d-flex gap-2">
                    <Badge bg={serpGood.title ? "success" : "danger"}>
                      Title {serpGood.title ? "OK" : "Too long"}
                    </Badge>
                    <Badge bg={serpGood.description ? "success" : "danger"}>
                      Description {serpGood.description ? "OK" : "Too long"}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CASE STUDIES */}
      <section style={section}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Proven outcomes</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Recent case studies</h2>
          </div>

          <Row className="g-4">
            {caseStudies.map((cs, i) => (
              <Col md={6} lg={4} key={i}>
                <Card style={cardLite(false)} className="h-100">
                  <div className="ratio ratio-16x9">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-5">{cs.title}</Card.Title>
                    <Stack direction="horizontal" gap={2} className="flex-wrap mb-2">
                      {cs.metrics.map((m, idx) => (
                        <span key={idx} style={chip}>
                          {m.label}: {m.value}
                        </span>
                      ))}
                    </Stack>
                    <Card.Text className="small" style={subText}>{cs.summary}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRICING */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Transparent pricing</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Plans for every growth stage</h2>
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
                    <Button variant="outline-secondary" onClick={openAudit}>
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
      <section style={section}>
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

      {/* CONTACT / AUDIT CTA */}
      <section style={sectionAlt}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={7}>
              <h2 className="fw-semibold display-6" style={headline}>
                Ready to build a durable search moat?
              </h2>
              <p style={subText}>
                Get a mini audit: tech issues, quick wins, and a 90-day roadmap. No fluff.
              </p>
              <Button size="lg" variant="dark" onClick={openAudit}>
                Get Free SEO Audit <i className="bi bi-arrow-right ms-2" />
              </Button>
              <Button size="lg" className="ms-2" variant="outline-secondary" onClick={handleDownloadReport}>
                Download sample report
              </Button>
            </Col>
            <Col lg={5}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-2">Schema checklist (starter)</h5>
                  <Table hover responsive className="mb-0 align-middle small">
                    <thead className="table-light">
                      <tr><th>Type</th><th>Status</th><th>Notes</th></tr>
                    </thead>
                    <tbody>
                      {[["Organization","Planned","Logo/contacts/links"],
                        ["BreadcrumbList","Planned","Site hierarchy"],
                        ["FAQ/HowTo","Optional","Depends on content"],
                        ["Product/Offer","If ecom","Variant/price/availability"],
                        ["Article","If blog","Author/date/modified"]].map((r,idx)=>(
                        <tr key={idx}>
                          <td>{r[0]}</td>
                          <td><Badge bg="light" text="dark" style={{ border: "1px solid #e5e7eb" }}>{r[1]}</Badge></td>
                          <td style={subText}>{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Audit Modal */}
      <Modal show={showAudit} onHide={() => setShowAudit(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Free SEO Audit — {brand}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitAudit}>
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
                  <Form.Label className="small">Website URL</Form.Label>
                  <Form.Control type="url" placeholder="https://yourdomain.com" required />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="small">Primary goal</Form.Label>
                  <Form.Select defaultValue="Traffic growth">
                    {["Traffic growth","Leads/MQLs","Revenue","International","Core Web Vitals"].map((g)=>(
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </Form.Select>
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
            <Button variant="secondary" onClick={() => setShowAudit(false)}>Cancel</Button>
            <Button type="submit" variant="dark" disabled={auditSubmitting}>
              {auditSubmitting ? "Submitting…" : "Request Audit"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Alerts */}
      {reportMsg && (
        <div style={{ position: "fixed", bottom: 12, right: 12, zIndex: 1060 }}>
          <Alert variant="success" className="shadow-sm border">{reportMsg}</Alert>
        </div>
      )}
      <Footer/>
    </>
  );
}
