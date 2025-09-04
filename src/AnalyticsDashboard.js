import React, { useMemo, useState } from "react";
// import Header from "./components/header";
import {
  Container, Row, Col, Card, Button, Badge, Stack,
  Form, Modal, Table, Alert, Accordion
} from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";

export default function AnalyticsService({
  brand = "Digi Spark",
  onPrimaryCTA,      // optional callback for main CTA
  onDownloadReport,  // optional callback for sample report
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
  const chip = {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#f8fafc",
    color: "#111827",
    fontSize: 12,
    border: "1px solid #e5e7eb",
  };
  const listTick = { color: "#198754" };

  /* ============== Dynamic Data ============== */
  const hero = {
    title: `Analytics & Measurement — ${brand}`,
    subtitle:
      "GA4 + GSC + ad platforms + CRM — ek jagah par clean tracking, attribution, and revenue reporting. Hum setup, QA, dashboards, aur growth experiments own karte hain.",
    bullets: [
      { icon: "bi-activity", text: "Event model & conversions (GA4)" },
      { icon: "bi-diagram-3", text: "Attribution & UTMs that don’t break" },
      { icon: "bi-graph-up-arrow", text: "Dashboards for revenue, ROAS, LTV" },
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  };

  const kpis = [
    { label: "Data Completeness", value: 96, trend: [62,68,70,77,81,90,96] },
    { label: "Attribution Coverage", value: 92, trend: [55,60,66,72,78,86,92] },
    { label: "Reporting Latency (hrs)", value: 2.1, trend: [8,7,5.5,4,3.2,2.6,2.1], invert: true },
    { label: "Decision Velocity (days)", value: 1.0, trend: [5,4,3,2,1.6,1.2,1.0], invert: true },
  ];

  const services = [
    {
      icon: "bi-sliders2",
      title: "GA4 Event Architecture",
      desc: "Business-aligned events, parameters, and conversions with naming conventions.",
      points: ["Spec & map", "Enhanced e-com", "Cross-domain"],
    },
    {
      icon: "bi-shield-check",
      title: "Tracking & QA",
      desc: "Tag Manager, pixels, consent, server-side tagging and automated QA.",
      points: ["GTM containers", "S2S tagging", "Consent mode v2"],
    },
    {
      icon: "bi-diagram-3",
      title: "Attribution",
      desc: "UTMs, channel rules, offline imports, and MMM-style scorecards.",
      points: ["UTM guardrails", "Offline conv", "Data-driven views"],
    },
    {
      icon: "bi-window",
      title: "Dashboards",
      desc: "Looker Studio dashboards with rev/ROAS, funnels, cohorts, LTV.",
      points: ["Rev/Spend", "Funnels", "Cohorts"],
    },
    {
      icon: "bi-database",
      title: "Data Pipeline",
      desc: "GAds/GSC/Meta → BigQuery → modeled tables → dashboards.",
      points: ["BigQuery", "DBT-style models", "Cost blends"],
    },
    {
      icon: "bi-clipboard2-data",
      title: "Insights & Experiments",
      desc: "Weekly insights; A/B backlog; CRO & creative test loops.",
      points: ["Weekly readouts", "A/B backlog", "Impact notes"],
    },
  ];

  const process = [
    { title: "Audit", icon: "bi-search", text: "Setup audit, gaps, data quality scoring, roadmap." },
    { title: "Implement", icon: "bi-tools", text: "Events/pixels, UTMs, consent, server-side, imports." },
    { title: "Model", icon: "bi-diagram-2", text: "Blended cost, funnels, cohorts, LTV slices in BQ." },
    { title: "Visualize", icon: "bi-bar-chart", text: "Looker dashboards with KPIs and alerts." },
    { title: "Iterate", icon: "bi-arrow-repeat", text: "Weekly insights + experiments → compounding wins." },
  ];

  const toolstack = [
    { name: "GA4", icon: "bi-bar-chart" },
    { name: "Google Tag Manager", icon: "bi-braces" },
    { name: "Google Ads / Meta", icon: "bi-bullseye" },
    { name: "Search Console", icon: "bi-search" },
    { name: "BigQuery", icon: "bi-hdd-network" },
    { name: "Looker Studio", icon: "bi-window" },
    { name: "Server-side GTM", icon: "bi-cloud" },
    { name: "Hotjar/Clarity", icon: "bi-eye" },
  ];

  const caseStudies = [
    {
      title: "D2C — Ad spend 15% down, Rev +24%",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "ROAS", value: "3.8×" },
        { label: "Spend", value: "−15%" },
        { label: "Rev", value: "+24%" },
      ],
      summary: "Server-side tagging, UTM cleanup, Looker revenue board, creative test loop.",
    },
    {
      title: "SaaS — SQL quality up 29%",
      image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "CPL", value: "−21%" },
        { label: "SQL rate", value: "+29%" },
        { label: "Time-to-insight", value: "−68%" },
      ],
      summary: "Event model + offline conv import + funnel dashboards.",
    },
    {
      title: "Marketplace — Cohorts fixed",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
      metrics: [
        { label: "M3 Retention", value: "+11pp" },
        { label: "Churn", value: "−9pp" },
        { label: "CAC", value: "−13%" },
      ],
      summary: "Cohort modeling in BQ, journey email nudges, attribution rules.",
    },
  ];

  const plans = [
    {
      name: "Starter Analytics",
      price: "₹25,000 one-time",
      desc: "GA4/GTM audit + fixes + basic dashboards.",
      highlights: ["Event spec", "UTM guardrails", "1 dashboard"],
      cta: "Get Starter",
      popular: false,
    },
    {
      name: "Growth Analytics",
      price: "₹59,000/mo",
      desc: "Server-side, Looker suite, weekly insights.",
      highlights: ["S2S tagging", "Blended cost", "3 dashboards + alerts"],
      cta: "Scale with Us",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Multi-brand, SLAs, modeling & governance.",
      highlights: ["BQ modeling", "Data contracts", "SLA & security"],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  // Replace the old faqs with this
const faqs = [
  {
    q: "Can you connect GA4, ad platforms, and our CRM?",
    a: "Yes. We connect GA4 with Google Ads/Meta and your CRM or offline conversions to build revenue-aligned reporting and attribution."
  },
  {
    q: "Do we need server-side tagging?",
    a: "It’s recommended for higher spend or privacy-sensitive brands. Server-side tagging reduces data loss and improves attribution quality."
  },
  {
    q: "How many dashboards do we get?",
    a: "The Growth plan includes three Looker Studio dashboards (Acquisition, Revenue, Cohorts). We can add more on request."
  },
  {
    q: "How long until we go live?",
    a: "Starter typically 1–2 weeks. Growth 3–4 weeks including QA, validation, and handover/training."
  }
];


  /* ============== UI State & Handlers ============== */
  const [hoverIdx, setHoverIdx] = useState(null);
  const [showPlan, setShowPlan] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [reportMsg, setReportMsg] = useState("");

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
      setReportMsg("Thanks! Your analytics plan will be shared in 24 hours.");
      setTimeout(() => setReportMsg(""), 3000);
    }, 900);
  };
  const handleDownloadReport = () => {
    if (onDownloadReport) onDownloadReport();
    setReportMsg("Sample analytics report downloaded.");
    setTimeout(() => setReportMsg(""), 2500);
  };

  /* ============== Helpers ============== */
  const Spark = ({ data = [], color = "#111827", w = 120, h = 36 }) => {
    if (!data.length) return null;
    const min = Math.min(...data), max = Math.max(...data);
    const pad = 4;
    const xStep = (w - pad * 2) / (data.length - 1 || 1);
    const y = (v) => {
      if (max === min) return h / 2;
      const t = (v - min) / (max - min);
      return h - pad - t * (h - pad * 2);
    };
    const points = data.map((v, i) => `${pad + i * xStep},${y(v)}`).join(" ");
    return (
      <svg width={w} height={h}>
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={points}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  /* ============== ROI Uplift Calculator ============== */
  const [roi, setRoi] = useState({
    monthlyRevenue: 1200000,  // ₹
    adSpend: 400000,          // ₹
    baseCVR: 2.2,             // %
    upliftCVR: 15,            // % improvement via analytics/CRO
    reduceCAC: 8,             // % CAC reduction via better attribution
  });

  const roiOut = useMemo(() => {
    const rev = +roi.monthlyRevenue || 0;
    const spend = +roi.adSpend || 0;
    const roasBase = spend ? rev / spend : 0;
    const revUplift = rev * (+roi.upliftCVR / 100);
    const newRev = rev + revUplift;
    const newSpend = spend * (1 - (+roi.reduceCAC / 100));
    const roasNew = newSpend ? newRev / newSpend : 0;
    return {
      roasBase: roasBase.toFixed(2),
      roasNew: roasNew.toFixed(2),
      revUplift: Math.round(revUplift),
      newSpend: Math.round(newSpend),
      deltaRoas: (roasNew - roasBase).toFixed(2),
    };
  }, [roi]);

  /* ============== Attribution Mixer ============== */
  const [attr, setAttr] = useState({
    lastClick: 40, dataDriven: 35, firstClick: 25
  });
  const totalAttr = attr.lastClick + attr.dataDriven + attr.firstClick;
  const normalized = {
    lastClick: Math.round((attr.lastClick / totalAttr) * 100),
    dataDriven: Math.round((attr.dataDriven / totalAttr) * 100),
    firstClick: Math.round(100 - (attr.lastClick / totalAttr) * 100 - (attr.dataDriven / totalAttr) * 100),
  };
  const roasImpact = useMemo(() => {
    // toy model: better models (dataDriven/firstClick) add lift
    const lift = (normalized.dataDriven * 0.01 * 0.2) + (normalized.firstClick * 0.01 * 0.1);
    return (1 + lift).toFixed(2); // x multiplier
  }, [normalized]);

  /* ===================== Render ===================== */
  return (
    <>
      {/* HERO */}
      <Header />
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <div className="d-flex gap-2 flex-wrap">
                <Badge style={thinBadge}>GA4</Badge>
                <Badge style={thinBadge}>Attribution</Badge>
                <Badge style={thinBadge}>Looker</Badge>
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
                  Request Analytics Plan <i className="bi bi-arrow-right ms-2" />
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
                    alt="Analytics dashboard"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Card>
            </Col>
          </Row>

          {/* KPI + Sparklines */}
          <Row className="g-3 text-center mt-4">
            {kpis.map((k, i) => (
              <Col xs={6} md={3} key={i}>
                <Card style={cardLite(false)}>
                  <Card.Body className="py-3">
                    <div className="small" style={subText}>{k.label}</div>
                    <div className="fs-5 fw-semibold">
                      {typeof k.value === "number" ? (k.invert ? k.value : `${k.value}${k.label.includes("%") ? "" : (k.label.includes("hrs") || k.label.includes("days")) ? "" : "%"}`
                      ) : k.value}
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                      <Spark data={k.trend} color={k.invert ? "#b45309" : "#111827"} />
                    </div>
                  </Card.Body>
                </Card>
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
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Clean data → Confident decisions</h2>
            <p style={subText}>Event models, tagging, attribution, pipelines, dashboards, and weekly insights.</p>
          </div>

          <Row className="g-4">
            {services.map((s, i) => (
              <Col md={6} lg={4} key={i}>
                <Card
                  style={cardLite(hoverIdx===i)}
                  onMouseEnter={()=>setHoverIdx(i)}
                  onMouseLeave={()=>setHoverIdx(null)}
                  className="h-100"
                >
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="d-inline-flex align-items-center justify-content-center text-white"
                           style={{ background: "#111827", borderRadius: 10, padding: 8 }}>
                        <i className={`bi ${s.icon}`} />
                      </div>
                      <Card.Title className="mb-0 fs-5">{s.title}</Card.Title>
                    </div>
                    <Card.Text className="small" style={subText}>{s.desc}</Card.Text>
                    <Stack direction="horizontal" gap={2} className="flex-wrap mt-2">
                      {s.points.map((p, idx)=> <span key={idx} style={chip}>{p}</span>)}
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PROCESS + TOOLSTACK + PIPELINE */}
      <section style={section}>
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <div className="mb-3">
                <Badge style={thinBadge}>How we work</Badge>
                <h2 className="mt-2 fw-semibold fs-1" style={headline}>From events to revenue</h2>
                <p style={subText}>Audit → Implement → Model → Visualize → Iterate. Every week, measurable progress.</p>
              </div>
              <Row className="g-3">
                {process.map((p, i)=>(
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
                {toolstack.map((t,i)=>(
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

          {/* Pipeline visual */}
          <Card style={{ ...cardLite(false), marginTop: 24 }}>
            <Card.Body>
              <h6 className="fw-semibold mb-3">Data pipeline (high level)</h6>
              <Row className="g-3 text-center">
                {[
                  { t: "Sources", i: "bi-cloud-arrow-down", d: "GA4, Ads, GSC, CRM" },
                  { t: "Ingest", i: "bi-gear", d: "APIs / S2S / ETL" },
                  { t: "Warehouse", i: "bi-hdd-network", d: "BigQuery modeled tables" },
                  { t: "BI", i: "bi-window", d: "Looker Studio dashboards" },
                  { t: "Actions", i: "bi-rocket-takeoff", d: "Alerts, tests, budgets" },
                ].map((n, idx)=>(
                  <Col key={idx} xs={6} md={2}>
                    <div className="d-flex flex-column align-items-center">
                      <div className="d-inline-flex align-items-center justify-content-center text-white"
                           style={{ background: "#111827", borderRadius: 12, width: 54, height: 54 }}>
                        <i className={`bi ${n.i}`} />
                      </div>
                      <div className="mt-2 fw-medium">{n.t}</div>
                      <div className="small text-secondary">{n.d}</div>
                    </div>
                    {idx < 4 && <i className="bi bi-arrow-right short-arrow d-none d-md-inline-block" style={{ margin: "0 8px" }} />}
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* CALCULATORS */}
      <section style={sectionAlt}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>Business Impact</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>ROI uplift + Attribution impact</h2>
            <p style={subText}>Estimate how better analytics affects revenue, spend, and ROAS.</p>
          </div>

          <Row className="g-4">
            {/* ROI Uplift */}
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-3">ROI Uplift Calculator</h5>
                  <Form>
                    <Row className="g-3">
                      <Col sm={6}><Form.Group>
                        <Form.Label className="small">Monthly revenue (₹)</Form.Label>
                        <Form.Control type="number" min={0}
                          value={roi.monthlyRevenue}
                          onChange={(e)=>setRoi(v=>({...v, monthlyRevenue:+e.target.value}))}/>
                      </Form.Group></Col>
                      <Col sm={6}><Form.Group>
                        <Form.Label className="small">Ad spend (₹)</Form.Label>
                        <Form.Control type="number" min={0}
                          value={roi.adSpend}
                          onChange={(e)=>setRoi(v=>({...v, adSpend:+e.target.value}))}/>
                      </Form.Group></Col>
                      <Col sm={4}><Form.Group>
                        <Form.Label className="small">Base CVR %</Form.Label>
                        <Form.Control type="number" step="0.1" min={0}
                          value={roi.baseCVR}
                          onChange={(e)=>setRoi(v=>({...v, baseCVR:+e.target.value}))}/>
                      </Form.Group></Col>
                      <Col sm={4}><Form.Group>
                        <Form.Label className="small">CVR uplift %</Form.Label>
                        <Form.Control type="number" step="0.1" min={0}
                          value={roi.upliftCVR}
                          onChange={(e)=>setRoi(v=>({...v, upliftCVR:+e.target.value}))}/>
                      </Form.Group></Col>
                      <Col sm={4}><Form.Group>
                        <Form.Label className="small">Reduce CAC %</Form.Label>
                        <Form.Control type="number" step="0.1" min={0}
                          value={roi.reduceCAC}
                          onChange={(e)=>setRoi(v=>({...v, reduceCAC:+e.target.value}))}/>
                      </Form.Group></Col>
                    </Row>
                  </Form>

                  <Table responsive bordered size="sm" className="mt-3 align-middle">
                    <thead className="table-light">
                      <tr><th>ROAS (current)</th><th>ROAS (with analytics)</th><th>Revenue uplift</th><th>New spend</th><th>Δ ROAS</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{roiOut.roasBase}×</td>
                        <td>{roiOut.roasNew}×</td>
                        <td>₹{roiOut.revUplift.toLocaleString()}</td>
                        <td>₹{roiOut.newSpend.toLocaleString()}</td>
                        <td>{roiOut.deltaRoas}×</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            {/* Attribution Mixer */}
            <Col lg={6}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-3">Attribution Mixer</h5>
                  <div className="small" style={subText}>Adjust model weights to see expected ROAS change (toy model).</div>
                  <Row className="g-3 mt-2">
                    <Col xs={12}>
                      <Form.Label className="small">Last Click: {normalized.lastClick}%</Form.Label>
                      <Form.Range min={10} max={70} value={attr.lastClick}
                        onChange={(e)=>setAttr(v=>({...v, lastClick:+e.target.value}))}/>
                    </Col>
                    <Col xs={12}>
                      <Form.Label className="small">Data-Driven: {normalized.dataDriven}%</Form.Label>
                      <Form.Range min={10} max={70} value={attr.dataDriven}
                        onChange={(e)=>setAttr(v=>({...v, dataDriven:+e.target.value}))}/>
                    </Col>
                    <Col xs={12}>
                      <Form.Label className="small">First Click: {normalized.firstClick}%</Form.Label>
                      <Form.Range min={5} max={60} value={attr.firstClick}
                        onChange={(e)=>setAttr(v=>({...v, firstClick:+e.target.value}))}/>
                    </Col>
                  </Row>
                  <div className="mt-3 p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
                    <div className="small"><strong>Normalized Mix:</strong> Last {normalized.lastClick}% • Data-Driven {normalized.dataDriven}% • First {normalized.firstClick}%</div>
                    <div className="small text-success mt-1"><i className="bi bi-graph-up-arrow me-1" />Expected ROAS multiplier: <strong>{roasImpact}×</strong></div>
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
                    <img src={cs.image} alt={cs.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fs-5">{cs.title}</Card.Title>
                    <Stack direction="horizontal" gap={2} className="flex-wrap mb-2">
                      {cs.metrics.map((m, idx)=>(<span key={idx} style={chip}>{m.label}: {m.value}</span>))}
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
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Plans for every stage</h2>
          </div>
          <Row className="g-4">
            {plans.map((pl, i)=>(
              <Col md={6} lg={4} key={i}>
                <Card
                  style={{ ...cardLite(false), border: pl.popular ? "1px solid #111827" : "1px solid rgba(0,0,0,.08)" }}
                  className="h-100"
                >
                  <Card.Body>
                    {pl.popular && <span className="badge text-bg-dark rounded-pill mb-2">Most Popular</span>}
                    <Card.Title className="fs-5">{pl.name}</Card.Title>
                    <div className="h2 mt-1">{pl.price}</div>
                    <Card.Text className="small" style={subText}>{pl.desc}</Card.Text>
                    <ul className="small" style={{ color: "#475569" }}>
                      {pl.highlights.map((h, idx)=>(
                        <li key={idx} className="mb-1">
                          <i className="bi bi-check2-circle me-2" style={listTick} />{h}
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
      <section style={section}>
        <Container>
          <div className="text-center mb-4">
            <Badge style={thinBadge}>FAQ</Badge>
            <h2 className="mt-2 fw-semibold fs-1" style={headline}>Answers to common questions</h2>
          </div>
          <Accordion className="mx-auto" style={{ maxWidth: 920 }}>
            {faqs.map((f, i)=>(
              <Accordion.Item eventKey={String(i)} key={i}>
                <Accordion.Header>{f.q}</Accordion.Header>
                <Accordion.Body className="text-secondary small">{f.a}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* CTA */}
      <section style={sectionAlt}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={7}>
              <h2 className="fw-semibold display-6" style={headline}>
                Ready to make smarter, faster decisions?
              </h2>
              <p style={subText}>
                We’ll set up tracking, fix attribution, model your data, and ship dashboards that move revenue.
              </p>
              <Button size="lg" variant="dark" onClick={openPlan}>
                Request Analytics Plan <i className="bi bi-arrow-right ms-2" />
              </Button>
              <Button size="lg" className="ms-2" variant="outline-secondary" onClick={handleDownloadReport}>
                Download sample report
              </Button>
            </Col>
            <Col lg={5}>
              <Card style={cardLite(false)} className="h-100">
                <Card.Body>
                  <h5 className="fw-semibold mb-2">Launch checklist</h5>
                  <ul className="small mb-0" style={{ color: "#475569" }}>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Event spec & naming</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>GA4 + GTM + consent</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>UTM guardrails & rules</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Server-side tagging (optional)</li>
                    <li><i className="bi bi-check2-circle me-2" style={listTick}/>Looker dashboards & alerts</li>
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
          <Modal.Title>Analytics Plan Request — {brand}</Modal.Title>
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
                  <Form.Label className="small">Website/App</Form.Label>
                  <Form.Control type="url" placeholder="https://yourdomain.com" required />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Primary goal</Form.Label>
                  <Form.Select defaultValue="Revenue visibility">
                    {["Revenue visibility","ROAS accuracy","Data quality","Cohorts/LTV","All of the above"].map(g=>(
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group>
                  <Form.Label className="small">Monthly ad spend (₹)</Form.Label>
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
      {reportMsg && (
        <div style={{ position: "fixed", bottom: 12, right: 12, zIndex: 1060 }}>
          <Alert variant="success" className="shadow-sm border">{reportMsg}</Alert>
        </div>
      )}
      <Footer />
    </>
  );
}
