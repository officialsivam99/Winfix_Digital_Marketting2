import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FiCode,
  FiLayout,
  FiTrendingUp,
  FiPenTool,
  FiCpu,
  FiVideo
} from "react-icons/fi";

const items = [
  {
    icon: <FiCode size={28} />,
    title: "Web Development",
    text:
      "Developing user-friendly, responsive websites that employ cutting-edge technology and creativity to realize your vision.",
  },
  {
    icon: <FiLayout size={28} />,
    title: "UI/UX Design",
    text:
      "Creating attractive websites that engage viewers while highlighting your brand’s distinct individuality.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Search Engine Optimization",
    text:
      "Improving your online presence through effective SEO techniques that increase traffic and search engine rankings.",
  },
  {
    icon: <FiPenTool size={28} />,
    title: "Graphic Design",
    text:
      "Creating high-quality leads using targeted techniques to attract and convert prospective clients.",
  },
  {
    icon: <FiCpu size={28} />,
    title: "AI Automation",
    text:
      "CRM systems that streamline interactions and boost business growth help to optimize customer connections.",
  },
  {
    icon: <FiVideo size={28} />,
    title: "Video Editing",
    text:
      "Increasing visibility and ROI through tailored Google Ads campaigns that promote visitors and conversions.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section style={styles.wrap}>
      <Container>
        {/* Heading */}
        <div style={styles.headingWrap}>
          <h2 style={styles.kicker}>What We Do</h2>
          <p style={styles.subtitle}>
            We Make Automations that <span style={{ whiteSpace: "nowrap" }}>lead and inspire</span>
          </p>
          <span style={styles.rule} />
        </div>

        {/* Grid */}
        <Row className="g-4">
          {items.map((it, idx) => (
            <Col key={idx} md={6} lg={4} className="d-flex align-items-center">
              <Card style={styles.card} className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
                <div style={styles.iconBadge}>{it.icon}</div>
                <Card.Body style={{ paddingTop: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Card.Title style={styles.cardTitle}>{it.title}</Card.Title>
                  <Card.Text style={styles.cardText}>{it.text}</Card.Text>
                  <Button
                    variant="warning"
                    style={styles.cta}
                    className="mt-2"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

/* ============ Styles ============ */
const styles = {
  wrap: {
    // soft theme gradient using your colors
    background:
      "linear-gradient(180deg, rgba(32,1,34,0.95) 0%, rgba(111,0,0,0.4) 100%)",
    padding: "64px 0",
  },
  headingWrap: {
    textAlign: "center",
    marginBottom: 36,
  },
  kicker: {
    margin: 0,
    fontWeight: 800,
    fontSize: "28px",
    color: "#ffb84d", // warm golden like the reference
  },
  subtitle: {
    margin: "8px 0 10px",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 500,
  },
  rule: {
    display: "inline-block",
    height: 3,
    width: 72,
    backgroundColor: "#ffb84d",
    borderRadius: 999,
  },

  card: {
    borderRadius: 18,
    border: "1px solid #f1f1f3",
    background: "#ffffff",
    paddingTop: 18,
    boxShadow: "0 8px 26px rgba(0,0,0,0.06)",
    transition: "transform .25s ease, box-shadow .25s ease",
  },

  iconBadge: {
    width: 56,
    height: 56,
    borderRadius: 14,
    margin: "8px 16px 0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // soft peach tile like the screenshot
    background:
      "linear-gradient(180deg, #ffe9dd 0%, #fff4ec 100%)",
    color: "#1c1c1c",
    boxShadow: "0 6px 16px rgba(255,138,61,0.2)",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#2a2a2a",
    marginBottom: 8,
  },
  cardText: {
    color: "#555",
    lineHeight: 1.6,
    minHeight: 84, // keeps rows even like the reference
  },

  cta: {
    backgroundColor: "#ff8a3d",
    borderColor: "#ff8a3d",
    color: "#fff",
    fontWeight: 600,
    borderRadius: 10,
    padding: "10px 16px",
    boxShadow: "0 8px 20px rgba(255,138,61,0.35)",
  },
};
