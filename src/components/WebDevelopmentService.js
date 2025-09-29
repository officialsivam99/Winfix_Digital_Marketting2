import React, { useEffect, useRef, useState } from "react";
// import Header from "./header";
import Footer from "./footer";
import {
  Container, Row, Col, Card, Button, Badge, Form, Accordion, Stack,
} from "react-bootstrap";
import Header from "./header";

/**
 * WebDevelopmentService (React-Bootstrap Only)
 * USD version — prices & budget label updated
 */

export default function WebDevelopmentService({ brand = "Digi Spark", onPrimaryCTA }) {
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

  const hero = {
    title: `Build, Launch & Scale with ${brand}`,
    subtitle:
      "We craft fast, secure and SEO-ready websites, web apps and storefronts that convert. From UX to deployment—done right.",
    bullets: [
      { icon: "bi-rocket-takeoff-fill", text: "Launch in weeks, not months" },
      { icon: "bi-shield-lock-fill", text: "Enterprise-grade security & best practices" },
      { icon: "bi-graph-up-arrow", text: "Performance, SEO & analytics baked-in" },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  };

  const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "98%", label: "On-time Delivery" },
    { value: "<2s", label: "Avg. LCP on Launch" },
    { value: "40%+", label: "Avg. Conversion Uplift" },
  ];

  const services = [
    {
      icon: "bi-globe2",
      title: "Business Websites",
      desc: "Modern, blazing-fast sites with clean UI and strong brand storytelling.",
      points: ["Landing pages", "Company sites", "Microsites"],
    },
    {
      icon: "bi-braces-asterisk",
      title: "Web Apps (MERN/Next)",
      desc: "Scalable apps with auth, dashboards, roles, and real-time features.",
      points: ["MERN/Next.js", "REST/GraphQL", "Realtime/Socket"],
    },
    {
      icon: "bi-hdd-network",
      title: "APIs & Backends",
      desc: "Solid Node/Express backends, integrations, and secure data flows.",
      points: ["Node/Express", "MongoDB/Postgres", "Integrations"],
    },
    {
      icon: "bi-phone",
      title: "Headless & eCommerce",
      desc: "Headless storefronts with great UX and conversion-focused flows.",
      points: ["Stripe/Checkout", "Headless CMS", "Shopify/Custom"],
    },
    {
      icon: "bi-shield-check",
      title: "Security & Compliance",
      desc: "Hardened configs, audits, and best practices from day zero.",
      points: ["OWASP basics", "Auth & RBAC", "Policies/Terms"],
    },
    {
      icon: "bi-layers",
      title: "CMS & Content Ops",
      desc: "Editable sections, SEO meta, blogs, and localization pipelines.",
      points: ["Headless CMS", "SEO schema", "i18n"],
    },
  ];

  const process = [
    { title: "Discovery & Strategy", icon: "bi-diagram-3", text: "We align on goals, ICP, success metrics, and scope." },
    { title: "UX/UI & Content", icon: "bi-chat-dots", text: "Wireframes, high-fidelity UI, and content structure." },
    { title: "Build & Integrate", icon: "bi-code-slash", text: "Component-driven dev, APIs, payment, analytics, CMS." },
    { title: "QA & Launch", icon: "bi-shield-lock", text: "Perf, accessibility, device matrix, SEO, and go-live." },
    { title: "Scale & Optimize", icon: "bi-lightning-charge", text: "A/B tests, CRO, feature roadmap, and observability." },
  ];

  const portfolio = [
    {
      title: "SaaS Analytics Dashboard",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
      tags: ["Next.js", "Stripe", "Postgres"],
      href: "#",
    },
    {
      title: "Headless eCommerce Store",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
      tags: ["React", "Stripe", "Headless CMS"],
      href: "#",
    },
    {
      title: "Corporate Website Revamp",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
      tags: ["Vite", "Tailwind", "SEO"],
      href: "#",
    },
  ];

  // ---- USD PRICING ----
  const plans = [
    {
      name: "Starter Site",
      price: "$330",
      desc: "Launch-ready 5-7 page website for new brands and SMEs.",
      highlights: ["Responsive UI", "Contact forms", "Basic SEO", "Analytics"],
      cta: "Get Starter",
      popular: false,
    },
    {
      name: "Growth Web App",
      price: "$1,011",
      desc: "Custom Next/MERN app with CMS & integrations.",
      highlights: ["Auth & roles", "Dashboards", "Headless CMS", "Stripe/Payments"],
      cta: "Scale with Us",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Complex systems, security reviews, SLOs and support.",
      highlights: ["SLA/SLO", "SAST/DAST", "Audit & logging", "Perf budgets"],
      cta: "Talk to Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Simple sites ship in 2–4 weeks. Web apps are 6–10 weeks depending on scope and integrations.",
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes. We offer retainers for maintenance, new features, CRO, and SEO improvements.",
    },
    {
      q: "Which stacks do you use?",
      a: "React/Next for frontends, Node/Express for APIs, MongoDB/Postgres for data, and Bootstrap for UI.",
    },
    {
      q: "Can you migrate my existing site?",
      a: "We frequently migrate from WordPress/Wix to modern stacks while preserving SEO and redirects.",
    },
  ];

  const handleCTA = () => {
    if (onPrimaryCTA) return onPrimaryCTA();
    if (typeof window !== "undefined" && window.jivo_api?.open) {
      try {
        window.jivo_api.open();
        return;
      } catch {/* ignore */}
    }
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-light">
      <Header />
      {/* ===== HERO ===== */}
      <section className="py-5" ref={heroRef}>
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="d-flex gap-2 flex-wrap">
                <Badge bg="white" text="dark" className="border">Full-stack</Badge>
                <Badge bg="white" text="dark" className="border">SEO-ready</Badge>
                <Badge bg="white" text="dark" className="border">Pixel-perfect</Badge>
              </div>

              <h1 className="mt-3 display-5 fw-semibold">{hero.title}</h1>
              <p className="lead text-muted">{hero.subtitle}</p>

              <ul className="list-unstyled small text-secondary mt-3">
                {hero.bullets.map((b, i) => (
                  <li key={i} className="d-flex align-items-center mb-2">
                    <i className={`${b.icon} me-2 text-success`} />
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 d-flex flex-wrap gap-2">
                <Button variant="dark" size="lg" onClick={handleCTA}>
                  Start a Project <i className="bi bi-arrow-right ms-2" />
                </Button>
                <Button variant="outline-secondary" size="lg" href="#portfolio">
                  View Portfolio
                </Button>
                <Badge bg="dark" className="rounded-pill d-inline-flex align-items-center gap-2 p-2">
                  <i className="bi bi-shield-check" /> Free strategy call
                </Badge>
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
                  <img
                    src={hero.image}
                    alt="Design & code preview"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky CTA */}
      {showSticky && (
        <div
          className="position-fixed start-50 translate-middle-x bottom-0 pb-3"
          style={{ zIndex: 1040, width: "min(960px, 100%)" }}
        >
          <Card className="shadow-lg border-0 rounded-4 mx-3">
            <Card.Body className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <span className="small text-secondary">
                Ready to build? Get a free roadmap in 24 hours.
              </span>
              <Button variant="dark" onClick={handleCTA}>
                Start a Project <i className="bi bi-arrow-right ms-2" />
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}

      {/* ===== SERVICES ===== */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">
              What we do
            </Badge>
            <h2 className="mt-2 fw-semibold fs-1">Full-stack services that ship</h2>
            <p className="text-muted">
              Pick exactly what you need or let us handle end-to-end.
              Every engagement follows our proven process and quality checklist.
            </p>
          </div>

          <Row className="g-4">
            {services.map((s, i) => (
              <Col sm={6} lg={4} key={i}>
                <Card className="h-100 shadow-sm border-0 rounded-4">
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="bg-dark text-white d-inline-flex align-items-center justify-content-center rounded-3 p-2">
                        <i className={`${s.icon}`} />
                      </div>
                      <Card.Title className="mb-0 fs-5">{s.title}</Card.Title>
                    </div>
                    <Card.Text className="text-muted small">{s.desc}</Card.Text>
                    <Stack direction="horizontal" gap={2} className="flex-wrap">
                      {s.points.map((p, idx) => (
                        <span
                          key={idx}
                          className="badge bg-light text-dark border rounded-pill"
                        >
                          {p}
                        </span>
                      ))}
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">
              How we work
            </Badge>
            <h2 className="mt-2 fw-semibold fs-1">A transparent, iterative process</h2>
            <p className="text-muted">
              We keep you in the loop with weekly demos, clear milestones, and async updates.
            </p>
          </div>

          <Row className="g-4">
            {process.map((step, i) => (
              <Col md={6} lg={4} xl={2} key={i}>
                <Card className="h-100 rounded-4 shadow-sm border-0 position-relative">
                  <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-white text-dark border">
                    {i + 1}
                  </span>
                  <Card.Body className="text-center">
                    <div
                      className="bg-dark text-white d-inline-flex align-items-center justify-content-center rounded-circle p-2 mb-2"
                      style={{ width: 40, height: 40 }}
                    >
                      <i className={`${step.icon}`} />
                    </div>
                    <Card.Title className="fs-6">{step.title}</Card.Title>
                    <Card.Text className="small text-muted">{step.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">
              Selected work
            </Badge>
            <h2 className="mt-2 fw-semibold fs-1">Recent launches</h2>
          </div>

          <Row className="g-4">
            {portfolio.map((p, i) => (
              <Col md={6} lg={4} key={i}>
                <a href={p.href} className="text-decoration-none text-reset">
                  <Card className="h-100 rounded-4 shadow-sm border-0">
                    <div className="ratio ratio-16x9">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fs-5">{p.title}</Card.Title>
                      <Stack direction="horizontal" gap={2} className="flex-wrap">
                        {p.tags.map((tg, idx) => (
                          <span
                            key={idx}
                            className="badge bg-light text-dark border rounded-pill"
                          >
                            {tg}
                          </span>
                        ))}
                      </Stack>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">
              Transparent pricing
            </Badge>
            <h2 className="mt-2 fw-semibold fs-1">Plans for every stage</h2>
          </div>

          <Row className="g-4">
            {plans.map((pl, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className={`h-100 rounded-4 shadow-sm ${pl.popular ? "border border-dark" : "border-0"}`}>
                  <Card.Body>
                    {pl.popular && (
                      <span className="badge text-bg-dark rounded-pill mb-2">
                        Most Popular
                      </span>
                    )}
                    <Card.Title className="fs-5">{pl.name}</Card.Title>
                    <div className="h2 mt-1">{pl.price}</div>
                    <Card.Text className="small text-muted">{pl.desc}</Card.Text>
                    <ul className="small text-secondary ps-3">
                      {pl.highlights.map((h, idx) => (
                        <li key={idx} className="mb-1">
                          <i className="bi bi-check2-circle text-success me-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline-secondary" onClick={handleCTA}>
                      {pl.cta} <i className="bi bi-arrow-right ms-2" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">
              Customer love
            </Badge>
            <h2 className="mt-2 fw-semibold fs-1">Results that speak</h2>
          </div>

          <Row className="g-4">
            {[
              {
                text: `${brand} rebuilt our site and conversions jumped 52% in the first month.`,
                author: "Ananya Sharma",
                role: "Founder, KyoMart",
              },
              {
                text: "Super clean code, quick releases, and great communication. We finally ship fast.",
                author: "Rahul Verma",
                role: "CTO, FinGrid",
              },
              {
                text: "From UX to analytics, everything was thought through. Highly recommended!",
                author: "Emily Wilson",
                role: "CMO, BrightLabs",
              },
            ].map((t, i) => (
              <Col md={6} lg={4} key={i}>
                <Card className="h-100 rounded-4 shadow-sm border-0">
                  <Card.Body>
                    <blockquote className="small text-secondary">“{t.text}”</blockquote>
                    <div className="mt-3 small fw-medium">
                      {t.author}{" "}
                      <span className="text-muted fw-normal">— {t.role}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <Badge bg="secondary" className="bg-opacity-10 text-secondary">
              FAQ
            </Badge>
            <h2 className="mt-2 fw-semibold fs-1">Answers to common questions</h2>
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

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Badge bg="secondary" className="bg-opacity-10 text-secondary">
                Get in touch
              </Badge>
              <h2 className="mt-2 fw-semibold fs-1">Tell us about your project</h2>
              <p className="text-muted">
                Share your goals, timelines, and constraints—we'll reply with a mini-roadmap and quote.
              </p>
              <Row xs={2} className="g-2 small text-secondary">
                <Col>
                  <i className="bi bi-check2-circle text-success me-2" />
                  24-hour response
                </Col>
                <Col>
                  <i className="bi bi-check2-circle text-success me-2" />
                  Weekly demos
                </Col>
                <Col>
                  <i className="bi bi-check2-circle text-success me-2" />
                  Transparent pricing
                </Col>
                <Col>
                  <i className="bi bi-check2-circle text-success me-2" />
                  NDA on request
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Card className="rounded-4 shadow-sm border-0">
                <Card.Body>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCTA();
                    }}
                  >
                    <Row className="g-3">
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Full name</Form.Label>
                          <Form.Control required />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Work email</Form.Label>
                          <Form.Control type="email" required />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          <Form.Label className="small">Company</Form.Label>
                          <Form.Control />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group>
                          {/* UPDATED: currency label */}
                          <Form.Label className="small">Budget (USD)</Form.Label>
                          <Form.Control type="number" min={0} />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label className="small">What are you building?</Form.Label>
                          <Form.Control as="textarea" rows={5} required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button type="submit" variant="dark" className="mt-3">
                      Get Proposal <i className="bi bi-arrow-right ms-2" />
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="py-5 bg-dark text-white">
        <Container className="text-center">
          <h2 className="fw-semibold display-6">Ready to ship something great?</h2>
          <p className="text-white-50">
            We’ll help you plan, design, build and launch with speed and confidence.
          </p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <Button variant="light" onClick={handleCTA}>
              Start a Project <i className="bi bi-arrow-right ms-2" />
            </Button>
            <Button variant="outline-light" href="#portfolio">
              Explore Work
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
