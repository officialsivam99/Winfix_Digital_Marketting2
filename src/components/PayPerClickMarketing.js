import React, { useMemo, useState } from "react";
// import Header from "./header";
import Footer from "./footer";
import {
  Container, Row, Col, Card, Button, Badge, Stack,
  Form, Modal, Table, Alert, Accordion
} from "react-bootstrap";
import Header from "./header";

export default function PayPerClickMarketing({
  brand = "Digi Spark",
  onPrimaryCTA,       // optional callback for main CTA
  onDownloadPlan,     // optional callback when sample plan is downloaded
}) {
  /* ================= Inline CSS ================= */
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

  /* ================= Dynamic Data ================= */
  const hero = {
    title: `Profitable PPC at Scale — ${brand}`,
    subtitle:
      "Search, Shopping, Performance Max, and Paid Social tuned for ROAS. We build test loops, tighten targeting, and scale winners with confidence.",
    bullets: [
      { icon: "bi-bullseye", text: "Clear targets (CPL/CPA/ROAS)" },
      { icon: "bi-graph-up-arrow", text: "Iterative testing & budgets" },
      { icon: "bi-boxes", text: "Ad + LP alignment with analytics" },
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
  };

  const stats = [
    { value: "3.4×", label: "Avg. ROAS Improvement" },
    { value: "27%", label: "Avg. CPC Reduction" },
    { value: "65+", label: "Markets Managed" },
    { value: "1000s", label: "Ad Variations Tested" },
  ];

  const services = [
    {
      icon: "bi-search",
      title: "Google Search & Shopping",
      desc: "Query sculpting, negatives, SKAG/STAG, feeds, GMC health, and PMax guardrails.",
      points: ["Exact/Phrase orchestration", "Feed optimization", "PMax exclusions"],
    },
    {
      icon: "bi-bag",
      title: "Meta & TikTok Ads",
      desc: "Creative testing engine: hooks, UGC, statics, and conversion API setups.",
      points: ["UGC pipelines", "CAPI/Pixel hygiene", "Creative sprints"],
    },
    {
      icon: "bi-bezier",
      title: "Landing Pages & CRO",
      desc: "Message match, forms, speed, and experiments to lower CPA and raise AOV.",
      points: ["LP templates", "Form friction fixes", "A/B & heatmaps"],
    },
    {
      icon: "bi-diagram-3",
      title: "Attribution & Analytics",
      desc: "GA4, offline conversions, UTMs, and MMM-style KPI scorecards.",
      points: ["GA4 + GAds linking", "Offline conv. import", "Looker dashboards"],
    },
    {
      icon: "bi-gear",
      title: "Automation & Scripts",
      desc: "Rules/scripts to kill losers, boost winners, and guard CAC ceilings.",
      points: ["Budget pacing", "Query scrubbing", "Anomaly alerts"],
    },
    {
      icon: "bi-shield-check",
      title: "Audits & Governance",
      desc: "Policy-safe ads, account structure, naming, and access controls.",
      points: ["Policy checks", "Naming conventions", "RBAC"],
    },
  ];

  const process = [
    { title: "Audit & Targets", icon: "bi-clipboard-check", text: "Account audit, goals (CPL/ROAS), and budget pacing rules." },
    { title: "Structure & Tracking", icon: "bi-diagram-3", text: "Restructure campaigns, fix pixels/GA4, offline conversions." },
    { title: "Creative & LPs", icon: "bi-layers", text: "Ad variants, UGC sourcing, message match across LPs." },
    { title: "Scale & Automate", icon: "bi-rocket-takeoff", text: "Bid strategies, scripts, and controlled scaling." },
  ];

  const toolstack = [
    { name: "Google Ads", icon: "bi-google" },
    { name: "GMC / Merchant Center", icon: "bi-bag" },
    { name: "GA4", icon: "bi-bar-chart" },
    { name: "Looker Studio", icon: "bi-window" },
    { name: "Meta Ads", icon: "bi-meta" },     // icon fallback; will render as text if not present
    { name: "TikTok Ads", icon: "bi-tiktok" }, // same note
    { name: "Scripts/Rules", icon: "bi-code-slash" },
    { name: "Hotjar", icon: "bi-fire" },
  ];

  const caseStudies = [
    {
      title: "D2C Apparel — 4.1× ROAS at scale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "ROAS", value: "4.1×" },
        { label: "CPA", value: "-31%" },
        { label: "AOV", value: "+18%" },
      ],
      summary: "Feed cleanup, PMax with brand guardrails, UGC statics, and LPs for top SKUs.",
    },
    {
      title: "B2B SaaS — 42% lower CPL",
      image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "CPL", value: "-42%" },
        { label: "SQL rate", value: "+29%" },
        { label: "CTR", value: "+23%" },
      ],
      summary: "Exact/Phrase orchestration, persona LPs, and offline conversion import.",
    },
    {
      title: "Marketplace — +76% revenue QoQ",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "Revenue", value: "+76%" },
        { label: "CPC", value: "-24%" },
        { label: "Units", value: "+54%" },
      ],
      summary: "Shopping feed enrichment, query scrubbing scripts, and CRO fixes.",
    },
  ];

  const plans = [
    {
      name: "Launch PPC",
      price: "₹29,000/mo",
      desc: "For new accounts or small spends getting structured.",
      highlights: ["Search + basic PMax", "Pixel/GA4 setup", "4 ad sets/mo", "Monthly report"],
      cta: "Get Starter",
      popular: false,
    },
    {
      name: "Growth PPC",
      price: "₹69,000/mo",
      desc: "For scaling brands with creative testing and automation.",
      highlights: ["Search + Shopping + Meta", "UGC pipeline", "Scripts/rules", "Weekly dashboard"],
      cta: "Scale with Us",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "High spend, multi-region, SLAs, complex catalogs.",
      highlights: ["PMax guardrails", "Offline conv.", "LP/CRO program", "SLA & governance"],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  const faqs = [
    { q: "How fast can you launch?", a: "We usually ship the first iteration within 7–10 days post-access and audit." },
    { q: "Which bidding strategies do you use?", a: "We start with manual/Max Clicks for data, then move to tCPA/tROAS as signals mature." },
    { q: "Do you create landing pages?", a: "Yes—message-matched LPs and forms. We also audit existing pages for speed and clarity." },
    { q: "Can you integrate offline conversions?", a: "Yes—CRM integrations or CSV imports so Google/META optimize for qualified outcomes." },
  ];

  /* ================= UI State & Handlers ================= */
  const [hoverIdx, setHoverIdx] = useState(null);
  const [showProposal, setShowProposal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [planMsg, setPlanMsg] = useState("");

  const openProposal = () => {
    if (onPrimaryCTA) return onPrimaryCTA();
    setShowProposal(true);
  };
  const submitProposal = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowProposal(false);
      setPlanMsg("Thanks! We’ll send your PPC plan in 24 hours.");
      setTimeout(() => setPlanMsg(""), 3000);
    }, 900);
  };
  const handleDownloadPlan = () => {
    if (onDownloadPlan) onDownloadPlan();
    setPlanMsg("Sample PPC plan downloaded.");
    setTimeout(() => setPlanMsg(""), 2500);
  };

  /* ================== Calculators ================== */
  // Budget → Clicks → Leads → Revenue → ROAS
  const [calc, setCalc] = useState({
    monthlyBudget: 50000,
    avgCPC: 25,
    convRate: 3.2,       // site CVR %
    leadToSale: 25,      // % of leads that close (B2B) or cart CVR for ecom
    avgOrderValue: 3000, // AOV/LTV slice
  });

  const derived = useMemo(() => {
    const spend = +calc.monthlyBudget || 0;
    const cpc = Math.max(+calc.avgCPC || 0, 0.01);
    const cvr = Math.max(+calc.convRate || 0, 0) / 100;
    const l2s = Math.max(+calc.leadToSale || 0, 0) / 100;
    const aov = Math.max(+calc.avgOrderValue || 0, 0);

    const clicks = Math.floor(spend / cpc);
    const leads = Math.round(clicks * cvr);
    const sales = Math.round(leads * l2s);
    const revenue = Math.round(sales * aov);
    const roas = spend > 0 ? (revenue / spend).toFixed(2) : "0.00";

    return { clicks, leads, sales, revenue, roas };
  }, [calc]);

  // Ad Preview (Google-like)
  const [ad, setAd] = useState({
    headlines: ["Premium Office Chairs", "Ergonomic Mesh Back", "Free 2-Day Delivery"],
    descriptions: ["Upgrade comfort & posture. Shop bestselling ergonomic chairs.", "Save 10% today. Trusted by 2,000+ teams."],
    path: "chairs/ergonomic",
    finalUrl: "https://www.example.com/chairs/ergonomic",
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
                <Badge style={thinBadge}>Search</Badge>
                <Badge style={thinBadge}>Shopping</Badge>
                <Badge style={thinBadge}>Meta/TikTok</Badge>
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
                <Button size="lg" variant="dark" onClick={openProposal}>
                  Get PPC Proposal <i className="bi bi-arrow-right ms-2" />
                </Button>
                <Button size="lg" variant="outline-secondary" onClick={handleDownloadPlan}>
                  Download sample plan
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <Card style={heroWrap} className="shadow-sm border-0">
                <div className="ratio ratio-16x9">
                  <img
                    src={hero.image}
                    alt="PPC dashboard"
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
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Full-funnel PPC that pays for itself</h2>
            <p style={subText}>Search intent, thumb-stopping creative, and clean measurement—shipped weekly.</p>
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
                <h2 className="mt-2 fw-semibold fs-1" style={headline}>Clean structure, constant testing</h2>
                <p style={subText}>We prioritize signal quality, match types, creatives, and landing experiences.</p>
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

      {/* CALCULATORS & AD PREVIEW */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Planner</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Budget & ROAS Calculator + Ad Preview</h2>
            <p style={subText}>Forecast outcomes and craft polished Google-style ads with live preview.</p>
          </div>

          <Row className="g-4">
            {/* Calculator */}
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-3">Budget → Results</h5>
                  <Form>
                    <Row className="g-3">
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Monthly budget (₹)</Form.Label>
                          <Form.Control
                            type="number"
                            min={0}
                            value={calc.monthlyBudget}
                            onChange={(e)=>setCalc(v=>({...v, monthlyBudget: +e.target.value}))}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Avg. CPC (₹)</Form.Label>
                          <Form.Control
                            type="number"
                            min={0.1}
                            step="0.1"
                            value={calc.avgCPC}
                            onChange={(e)=>setCalc(v=>({...v, avgCPC: +e.target.value}))}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Site Conversion Rate (%)</Form.Label>
                          <Form.Control
                            type="number"
                            min={0}
                            step="0.1"
                            value={calc.convRate}
                            onChange={(e)=>setCalc(v=>({...v, convRate: +e.target.value}))}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Lead→Sale / Cart CVR (%)</Form.Label>
                          <Form.Control
                            type="number"
                            min={0}
                            step="0.1"
                            value={calc.leadToSale}
                            onChange={(e)=>setCalc(v=>({...v, leadToSale: +e.target.value}))}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Avg Order Value / LTV slice (₹)</Form.Label>
                          <Form.Control
                            type="number"
                            min={0}
                            value={calc.avgOrderValue}
                            onChange={(e)=>setCalc(v=>({...v, avgOrderValue: +e.target.value}))}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  <Table responsive bordered size="sm" className="mt-3 align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Clicks</th><th>Leads</th><th>Sales</th><th>Revenue (₹)</th><th>ROAS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{derived.clicks.toLocaleString()}</td>
                        <td>{derived.leads.toLocaleString()}</td>
                        <td>{derived.sales.toLocaleString()}</td>
                        <td>{derived.revenue.toLocaleString()}</td>
                        <td>{derived.roas}×</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="small text-secondary">
                    Tip: Reduce CPCs via negatives & creative tests; improve site CVR via LP/CRO for outsized gains.
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Ad Preview */}
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-3">Google-style Ad Preview</h5>
                  <Form>
                    <Row className="g-3">
                      {ad.headlines.map((h, idx)=>(
                        <Col sm={12} key={idx}>
                          <Form.Group>
                            <Form.Label className="small">Headline {idx+1}</Form.Label>
                            <Form.Control
                              value={ad.headlines[idx]}
                              onChange={(e)=>{
                                const v=[...ad.headlines]; v[idx]=e.target.value;
                                setAd(a=>({...a, headlines:v}));
                              }}
                              maxLength={30}
                            />
                            <div className="small mt-1">{ad.headlines[idx]?.length || 0}/30</div>
                          </Form.Group>
                        </Col>
                      ))}
                      {ad.descriptions.map((d, idx)=>(
                        <Col sm={12} key={idx}>
                          <Form.Group>
                            <Form.Label className="small">Description {idx+1}</Form.Label>
                            <Form.Control
                              as="textarea" rows={2}
                              value={ad.descriptions[idx]}
                              onChange={(e)=>{
                                const v=[...ad.descriptions]; v[idx]=e.target.value;
                                setAd(a=>({...a, descriptions:v}));
                              }}
                              maxLength={90}
                            />
                            <div className="small mt-1">{ad.descriptions[idx]?.length || 0}/90</div>
                          </Form.Group>
                        </Col>
                      ))}
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Display path</Form.Label>
                          <Form.Control
                            value={ad.path}
                            onChange={(e)=>setAd(a=>({...a, path:e.target.value}))}
                            maxLength={30}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Final URL</Form.Label>
                          <Form.Control
                            value={ad.finalUrl}
                            onChange={(e)=>setAd(a=>({...a, finalUrl:e.target.value}))}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>

                  {/* Preview card */}
                  <div className="mt-3 p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
                    <a href={ad.finalUrl || "#"} className="text-decoration-none">
                      <div className="small" style={{ color: "#1a0dab" }}>
                        {[ad.headlines[0], ad.headlines[1], ad.headlines[2]].filter(Boolean).join(" | ") || "Your Headline"}
                      </div>
                    </a>
                    <div className="small" style={{ color: "#006621" }}>
                      {ad.finalUrl?.split("/")[2] || "www.example.com"} / {ad.path || ""}
                    </div>
                    <div className="small" style={{ color: "#4d5156" }}>
                      {ad.descriptions.filter(Boolean).join(" ")}
                    </div>
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
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Plans for every spend level</h2>
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
                    <Button variant="outline-secondary" onClick={openProposal}>
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

      {/* CONTACT / CTA */}
      <section style={sectionAlt}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={7}>
              <h2 className="fw-semibold display-6" style={headline}>
                Ready to scale profitable acquisition?
              </h2>
              <p style={subText}>
                Get a quick plan with targets for CPC, CPA, and ROAS—plus first-week tests.
              </p>
              <Button size="lg" variant="dark" onClick={openProposal}>
                Get PPC Proposal <i className="bi bi-arrow-right ms-2" />
              </Button>
              <Button size="lg" className="ms-2" variant="outline-secondary" onClick={handleDownloadPlan}>
                Download sample plan
              </Button>
            </Col>
            <Col lg={5}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-2">First-week test ideas</h5>
                  <ul className="small mb-0" style={{ color: "#475569" }}>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Exact vs Phrase query isolation</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>3 hooks × 3 creatives matrix on Meta</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>LP headline + CTA A/B</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Audience exclusions for brand protection</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Budget pacing guardrail (day 1–7)</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Proposal Modal */}
      <Modal show={showProposal} onHide={() => setShowProposal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>PPC Plan Request — {brand}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitProposal}>
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
                  <Form.Label className="small">Website / App URL</Form.Label>
                  <Form.Control type="url" placeholder="https://yourdomain.com" required />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Monthly ad budget (₹)</Form.Label>
                  <Form.Control type="number" min={0} />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Primary goal</Form.Label>
                  <Form.Select defaultValue="Sales / ROAS">
                    {["Sales / ROAS","Leads / CPL","App Installs","Brand/Awareness"].map((g)=>(
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
            <Button variant="secondary" onClick={() => setShowProposal(false)}>Cancel</Button>
            <Button type="submit" variant="dark" disabled={submitting}>
              {submitting ? "Submitting…" : "Request Plan"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Alerts */}
      {planMsg && (
        <div style={{ position: "fixed", bottom: 12, right: 12, zIndex: 1060 }}>
          <Alert variant="success" className="shadow-sm border">{planMsg}</Alert>
        </div>
      )}
      <Footer />
    </>
  );
  // ...existing code...
  return (
    <>
      <Header />
      {/* ...existing JSX... */}
      {/* All your main JSX goes here, including the Modal, Alerts, etc. */}
      <Footer />
    </>
  );
}
