import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
  Alert,
} from "react-bootstrap";

export default function WeekCalendarSection({
  data,
  title = "A week in your calendar",
  subtitle = "Smart mix of formats + platforms for reach, retention, and conversions.",
}) {
  // ---------- Demo data (override by passing `data` prop) ----------
  const sampleCalendar =
    data ||
    [
      {
        day: "Mon",
        post: "Reel: Problem → Outcome (Hook)",
        platform: "Instagram",
        type: "Reel",
        goal: "Top-funnel reach",
        bestTime: "6–8 PM",
        kpi: "Watch-time",
        tags: ["Hook-first", "Face cam", "Native captions"],
        status: 100,
      },
      {
        day: "Tue",
        post: "Carousel: 5 Tips",
        platform: "LinkedIn",
        type: "Carousel",
        goal: "Demand gen",
        bestTime: "11 AM–1 PM",
        kpi: "Saves",
        tags: ["Value pack", "Story arc"],
        status: 100,
      },
      {
        day: "Wed",
        post: "UGC: Unboxing / Review",
        platform: "YouTube Shorts",
        type: "UGC",
        goal: "Trust & Proof",
        bestTime: "7–9 PM",
        kpi: "Avg. view %",
        tags: ["Creator-led", "Real use"],
        status: 80,
      },
      {
        day: "Thu",
        post: "Meme/Trend Remix",
        platform: "Instagram",
        type: "Meme",
        goal: "Shareability",
        bestTime: "8–9 PM",
        kpi: "Shares",
        tags: ["Trend adapt", "On-brand"],
        status: 60,
      },
      {
        day: "Fri",
        post: "Founder Story Snippet",
        platform: "Facebook",
        type: "Reel",
        goal: "Affinity",
        bestTime: "6–7 PM",
        kpi: "Comments",
        tags: ["Founder POV", "Behind-the-scenes"],
        status: 90,
      },
      {
        day: "Sat",
        post: "Testimonial Cutdown",
        platform: "YouTube",
        type: "Testimonial",
        goal: "MOFU",
        bestTime: "5–7 PM",
        kpi: "Clicks",
        tags: ["Social proof", "CTA end-card"],
        status: 70,
      },
      {
        day: "Sun",
        post: "Poll/Question",
        platform: "Instagram",
        type: "Story",
        goal: "Engagement",
        bestTime: "7–9 PM",
        kpi: "Replies",
        tags: ["Interactive", "Low-lift"],
        status: 50,
      },
    ];

  // ---------- State ----------
  const [showBrief, setShowBrief] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const [duplicateMsg, setDuplicateMsg] = useState("");
  const [hovered, setHovered] = useState(null);

  // ---------- Handlers ----------
  const handleViewBrief = (post) => {
    setActivePost(post);
    setShowBrief(true);
  };

  const handleDuplicate = (post) => {
    setDuplicateMsg(`Duplicated: ${post.day} • ${post.platform} — ${post.post}`);
    // You can actually push into state list here if you manage calendar state outside
    setTimeout(() => setDuplicateMsg(""), 2500);
  };

  // ---------- Icon helpers ----------
  const detectTypeIcon = (type, post) => {
    const t = (type || (post?.includes("Reel") ? "Reel" : "Post")).toLowerCase();
    if (t.includes("reel") || t.includes("story")) return "bi-camera-reels-fill";
    if (t.includes("carousel")) return "bi-view-stacked";
    if (t.includes("ugc")) return "bi-people-fill";
    if (t.includes("meme")) return "bi-emoji-laughing";
    if (t.includes("testimonial")) return "bi-chat-quote-fill";
    return "bi-file-earmark-play";
  };

  const detectPlatformIcon = (p) => {
    const s = (p || "").toLowerCase();
    if (s.includes("instagram")) return "bi-instagram";
    if (s.includes("linkedin")) return "bi-linkedin";
    if (s.includes("youtube")) return "bi-youtube";
    if (s.includes("facebook")) return "bi-facebook";
    if (s.includes("twitter") || s.includes("x")) return "bi-twitter";
    if (s.includes("pinterest")) return "bi-pinterest";
    return "bi-share";
  };

  // ---------- Inline styles ----------
  const sectionWrap = {
    padding: "56px 0",
    background: "#ffffff",
  };

  const headerWrap = {
    textAlign: "center",
    marginBottom: 20,
  };

  const subtitleStyle = {
    color: "#6b7280",
    maxWidth: 800,
    margin: "8px auto 0",
  };

  const badgeTint = {
    backgroundColor: "rgba(108,117,125,0.1)",
    color: "#6c757d",
    border: "1px solid #e5e7eb",
  };

  const cardBase = (isHovered) => ({
    height: "100%",
    borderRadius: 16,
    border: "1px solid rgba(0,0,0,.08)", // thin outline
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(246,248,252,.85), rgba(255,255,255,.92))",
    backdropFilter: "blur(6px)",
    boxShadow: isHovered
      ? "0 12px 28px rgba(16,24,40,.16)"
      : "0 6px 18px rgba(16,24,40,.08)",
    transform: `translateY(${isHovered ? "-3px" : "0"})`,
    transition: "box-shadow .18s ease, transform .18s ease, border-color .18s ease",
  });

  const headerBar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background:
      "radial-gradient(120% 120% at 0% 0%, rgba(0,0,0,.04), transparent 60%)",
    borderBottom: "1px solid rgba(0,0,0,.06)",
  };

  const pillDay = {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    background: "#0f172a",
    color: "#fff",
    fontSize: 12,
    fontWeight: 650,
    letterSpacing: 0.2,
  };

  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 10px",
    borderRadius: 999,
    background: "#f3f4f6",
    color: "#111827",
    fontSize: 12,
    border: "1px solid #e5e7eb",
  };

  const chipsWrap = {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
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

  const metaRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    fontSize: 13,
  };

  const metaLeft = { color: "#6b7280" };
  const metaRight = { color: "#111827" };

  const progressWrap = {
    marginTop: 6,
  };

  const progressLabelRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 12,
    marginBottom: 4,
    color: "#6b7280",
  };

  const progressOuter = {
    width: "100%",
    height: 10,
    borderRadius: 999,
    overflow: "hidden",
    background: "#e5e7eb",
  };

  const stepRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    fontSize: 12,
    color: "#6b7280",
  };

  const stepItem = (done) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontWeight: done ? 600 : 400,
    color: done ? "#111827" : "#6b7280",
  });

  const stepDot = (done) => ({
    width: 8,
    height: 8,
    borderRadius: 999,
    border: `2px solid ${done ? "#111827" : "#d1d5db"}`,
    background: done ? "#111827" : "#ffffff",
  });

  const footerBtns = {
    display: "flex",
    gap: 8,
    padding: "0 16px 12px",
  };

  const alertWrap = {
    position: "fixed",
    bottom: 12,
    right: 12,
    zIndex: 1060,
  };

  // ---------- Render ----------
  return (
    <section style={sectionWrap}>
      <Container>
        <div style={headerWrap}>
          <Badge style={badgeTint}>Content rhythm</Badge>
          <h2 className="mt-2 fw-semibold fs-1" style={{ letterSpacing: "-0.3px" }}>
            {title}
          </h2>
          <p style={subtitleStyle}>{subtitle}</p>
        </div>

        <Row className="g-4">
          {sampleCalendar.map((c, i) => {
            const typeIcon = detectTypeIcon(c.type, c.post);
            const platformIcon = detectPlatformIcon(c.platform);
            const status = c.status ?? 80;

            return (
              <Col md={6} lg={4} key={i}>
                <Card
                  style={cardBase(hovered === i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Header bar */}
                  <div style={headerBar}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={pillDay}>{c.day}</span>
                      <span style={pill}>
                        <i className={`${platformIcon} me-1`} />
                        {c.platform}
                      </span>
                    </div>
                    <span style={pill}>
                      <i className={`${typeIcon} me-1`} />
                      {c.type || (c.post?.includes("Reel") ? "Reel" : "Post")}
                    </span>
                  </div>

                  {/* Body */}
                  <Card.Body style={{ padding: 16 }}>
                    <Card.Title className="fs-6 mb-2" style={{ marginBottom: 8 }}>
                      {c.post}
                    </Card.Title>

                    <div
                      className="small"
                      style={{ color: "#6b7280", marginBottom: 12 }}
                    >
                      {c.objective || "Objective"} •{" "}
                      <span style={{ color: "#111827", fontWeight: 500 }}>
                        {c.goal || "Engagement & Reach"}
                      </span>
                    </div>

                    {/* Chips */}
                    <div style={chipsWrap}>
                      {(c.tags || ["Hook-first", "Native format", "Strong CTA"]).map(
                        (t, idx) => (
                          <span key={idx} style={chip}>
                            {t}
                          </span>
                        )
                      )}
                    </div>

                    {/* Best time + KPI */}
                    <div style={metaRow}>
                      <span style={metaLeft}>
                        <i className="bi bi-clock me-1" />
                        Best time:{" "}
                        <strong style={{ color: "#111827" }}>
                          {c.bestTime || "6–8 PM"}
                        </strong>
                      </span>
                      <span style={metaRight}>
                        <i className="bi bi-bullseye me-1 text-success" />
                        {c.kpi || "Save rate"}
                      </span>
                    </div>

                    {/* Progress */}
                    <div style={progressWrap}>
                      <div style={progressLabelRow}>
                        <span>Production</span>
                        <span style={{ color: "#111827", fontWeight: 600 }}>
                          {status}%
                        </span>
                      </div>
                      <div style={progressOuter}>
                        <div
                          style={{
                            width: `${status}%`,
                            height: "100%",
                            background: "#111827",
                          }}
                        />
                      </div>

                      {/* Sub-steps */}
                      <div style={stepRow}>
                        {["Draft", "Edit", "Approve", "Publish"].map((step, idx2) => {
                          const threshold = (idx2 + 1) * 25;
                          const done = status >= threshold;
                          return (
                            <span key={idx2} style={stepItem(done)}>
                              <span style={stepDot(done)} />
                              {step}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </Card.Body>

                  {/* Footer buttons */}
                  <div style={footerBtns}>
                    <Button
                      size="sm"
                      variant="dark"
                      onClick={() => handleViewBrief(c)}
                    >
                      View Brief <i className="bi bi-arrow-right ms-1" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => handleDuplicate(c)}
                    >
                      Duplicate
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Brief Modal */}
      {activePost && (
        <Modal show={showBrief} onHide={() => setShowBrief(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {activePost.day} • {activePost.platform}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 className="fw-semibold mb-2">{activePost.post}</h6>
            <p className="small text-secondary mb-3">
              {activePost.goal
                ? `Objective: ${activePost.goal}`
                : "Objective: Brand awareness"}
            </p>
            <ul className="small" style={{ paddingLeft: 18 }}>
              {(activePost.tags || ["Hook-first", "Native format"]).map((t, i) => (
                <li key={i}>
                  <i className="bi bi-check2-circle text-success me-2" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="small mt-3">
              <i className="bi bi-clock me-1" /> Best time:{" "}
              {activePost.bestTime || "6–8 PM"}
            </div>
            <div className="small">
              <i className="bi bi-bullseye me-1 text-success" /> KPI:{" "}
              {activePost.kpi || "Engagement"}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowBrief(false)}>
              Close
            </Button>
            <Button variant="dark" onClick={() => setShowBrief(false)}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Duplicate confirmation */}
      {duplicateMsg && (
        <div style={alertWrap}>
          <Alert variant="success" className="shadow-sm border">
            {duplicateMsg}
          </Alert>
        </div>
      )}
    </section>
  );
}
