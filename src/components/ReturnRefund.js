// src/pages/ReturnRefund.jsx
import React, { useEffect, useMemo, useState } from "react";

export default function ReturnRefund() {
  const brandName = "My Digital Rise";
  const websiteHost = "mydigitalrise.com";
  const websiteUrl = "https://mydigitalrise.com";
  const contactEmail = "info@mydigitalrise.com";
  const returnAddress = "New York, United States";
  const lastUpdated = "September 04, 2025";

  const sections = useMemo(
    () => [
      { id: "top", label: "Return & Refund Policy" },
      { id: "interpretation", label: "Interpretation & Definitions" },
      { id: "cancellation", label: "Your Order Cancellation Rights" },
      { id: "conditions", label: "Conditions for Returns" },
      { id: "returning", label: "Returning Goods" },
      { id: "gifts", label: "Gifts" },
      { id: "contact", label: "Contact Us" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    document.title = `Return & Refund Policy – ${brandName}`;
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { root: null, rootMargin: "0px 0px -65% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  const jump = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="rrp-wrap">
      <style>{`
        :root{
          --bg:#0b1220;
          --card:#0f172a;
          --ink:#e2e8f0;
          --muted:#9aa6b2;
          --accent:#7c3aed;
          --accent-2:#22c55e;
          --border:rgba(148,163,184,.18);
        }
        .rrp-wrap{
          background:
            radial-gradient(1200px 600px at 10% -10%, rgba(124,58,237,.20), transparent 40%),
            radial-gradient(900px 500px at 110% -20%, rgba(34,197,94,.18), transparent 38%),
            var(--bg);
          color:var(--ink); min-height:100vh;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }
        .hero{ padding:56px 20px 28px; border-bottom:1px solid var(--border); }
        .hero-inner{ max-width:1080px; margin:0 auto; display:grid; gap:12px; }
        .hero h1{ margin:0; font-size:40px; line-height:1.1; letter-spacing:-.02em; }
        .hero p{ margin:6px 0 0; color:var(--muted); }
        .meta{ display:inline-flex; gap:10px; align-items:center; margin-top:10px; color:var(--muted); font-size:14px; }
        .chip{ border:1px solid var(--border); padding:4px 10px; border-radius:999px; background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(0,0,0,.05)); }

        .grid{ max-width:1080px; margin:0 auto; padding:28px 20px 80px; display:grid; grid-template-columns:1fr; gap:24px; }
        @media(min-width:992px){ .grid{ grid-template-columns:260px 1fr; } }

        .toc{ position:sticky; top:16px; border:1px solid var(--border); background:rgba(2,6,23,.35); backdrop-filter:blur(8px); border-radius:14px; padding:16px; height:max-content; }
        .toc h4{ margin:0 0 8px; font-size:14px; color:var(--muted); font-weight:600; letter-spacing:.02em; }
        .toc a{ display:block; padding:8px 10px; border-radius:10px; color:var(--ink); text-decoration:none; font-size:15px; border:1px solid transparent; }
        .toc a:hover{ background:rgba(124,58,237,.08); border-color:rgba(124,58,237,.25); }
        .toc a.active{ background:rgba(124,58,237,.15); border-color:rgba(124,58,237,.35); }

        .doc{ border:1px solid var(--border); background:rgba(15,23,42,.65); border-radius:16px; overflow:hidden; }
        .doc-inner{ padding:22px 22px 10px; }
        section{ padding:6px 0 22px; border-bottom:1px dashed var(--border); }
        section:last-child{ border-bottom:0; padding-bottom:0; }

        h2{ margin:20px 0 8px; font-size:26px; letter-spacing:-.01em; }
        h3{ margin:16px 0 6px; font-size:18px; }
        p{ color:var(--ink); opacity:.92; margin:8px 0; }
        ul{ margin:10px 0 10px 20px; color:var(--ink); opacity:.92; }
        li{ margin:4px 0; }
        .ext{ color:#a5b4fc; text-decoration:underline; }
        .note{ margin:14px 0; padding:12px 14px; border:1px solid var(--border); border-radius:12px; background:linear-gradient(180deg, rgba(124,58,237,.10), rgba(124,58,237,.04)); font-size:14px; }
        .top-link{ display:inline-block; margin-top:18px; font-size:14px; color:var(--ink); text-decoration:none; border-bottom:1px dashed var(--border); }
        .top-link:hover{ color:#fff; border-color:rgba(255,255,255,.35); }
      `}</style>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-inner">
          <h1>Return and Refund Policy</h1>
          <p>Thank you for shopping at {brandName}. Please review our policy below.</p>
          <div className="meta">
            <span className="chip">Last updated: {lastUpdated}</span>
            <span className="chip">{brandName}</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="grid">
        {/* TOC */}
        <nav className="toc" aria-label="Table of contents">
          <h4>On this page</h4>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={jump(s.id)}
              className={activeId === s.id ? "active" : ""}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* DOCUMENT */}
        <article className="doc" aria-labelledby="top">
          <div className="doc-inner">
            {/* Intro */}
            <section id="top">
              <p>
                If, for any reason, you are not completely satisfied with a purchase, we invite you to review our policy
                on refunds and returns. These terms apply to any products you purchase from{" "}
                <a className="ext" href={websiteUrl} target="_blank" rel="noreferrer">
                  {websiteHost}
                </a>.
              </p>
              <div className="note">
                Summary: 7-day cancellation window from delivery; items must be in original packaging; some categories
                are non-returnable (see below). Refunds are processed within 14 days after we receive returned goods.
              </div>
            </section>

            {/* Interpretation & Definitions */}
            <section id="interpretation">
              <h2>Interpretation and Definitions</h2>

              <h3>Interpretation</h3>
              <p>
                Words with initial capital letters have meanings defined under the following conditions. The same
                meanings apply regardless of singular or plural usage.
              </p>

              <h3>Definitions</h3>
              <ul>
                <li>
                  <strong>Company</strong> (referred to as “the Company”, “We”, “Us” or “Our”) refers to {brandName}.
                </li>
                <li>
                  <strong>Goods</strong> refer to the items offered for sale on the Service.
                </li>
                <li>
                  <strong>Orders</strong> mean a request by you to purchase Goods from us.
                </li>
                <li>
                  <strong>Service</strong> refers to the Website.
                </li>
                <li>
                  <strong>Website</strong> refers to {brandName}, accessible at{" "}
                  <a className="ext" href={websiteUrl} target="_blank" rel="noreferrer">
                    {websiteHost}
                  </a>
                  .
                </li>
                <li>
                  <strong>You</strong> means the individual or entity accessing or using the Service.
                </li>
              </ul>
            </section>

            {/* Cancellation Rights */}
            <section id="cancellation">
              <h2>Your Order Cancellation Rights</h2>
              <p>
                You are entitled to cancel your order within <strong>7 days</strong> without giving any reason. The
                deadline is 7 days from the date you received the Goods or the date a third party (other than the
                carrier) appointed by you takes possession.
              </p>
              <p>You can inform us of your decision by:</p>
              <ul>
                <li>
                  Email:{" "}
                  <a className="ext" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </li>
              </ul>
              <p>
                We will reimburse you <strong>no later than 14 days</strong> from the day we receive the returned Goods,
                using the same means of payment you used for the order. You will not incur any fees for the
                reimbursement.
              </p>
            </section>

            {/* Conditions for Returns */}
            <section id="conditions">
              <h2>Conditions for Returns</h2>
              <p>To be eligible for a return, please ensure that:</p>
              <ul>
                <li>The Goods were purchased in the last 7 days, and</li>
                <li>The Goods are in the original packaging.</li>
              </ul>
              <p>The following Goods cannot be returned:</p>
              <ul>
                <li>Goods made to your specifications or clearly personalized.</li>
                <li>
                  Goods which by their nature are not suitable to be returned, deteriorate rapidly, or are past their
                  expiry date.
                </li>
                <li>Goods not suitable for return for health or hygiene reasons that were unsealed after delivery.</li>
                <li>Goods that, after delivery, are inseparably mixed with other items.</li>
              </ul>
              <p>
                We reserve the right to refuse returns that do not meet the above conditions at our sole discretion.
                Only regular-priced Goods may be refunded; sale items are not eligible, except where prohibited by
                applicable law.
              </p>
            </section>

            {/* Returning Goods */}
            <section id="returning">
              <h2>Returning Goods</h2>
              <p>
                You are responsible for the cost and risk of returning the Goods to us. Please send returns to this
                address:
              </p>
              <p>
                <strong>{returnAddress}</strong>
              </p>
              <p>
                We recommend using an insured, trackable mailing service. We cannot issue a refund without actual
                receipt of the Goods or proof of return delivery.
              </p>
            </section>

            {/* Gifts */}
            <section id="gifts">
              <h2>Gifts</h2>
              <p>
                If the Goods were marked as a gift and shipped directly to you, you’ll receive a gift credit for the
                value of your return. Once the returned product is received, a gift certificate will be mailed to you.
              </p>
              <p>
                If the Goods weren’t marked as a gift, or the gift giver had the order shipped to themselves to give to
                you later, we will send the refund to the gift giver.
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2>Contact Us</h2>
              <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
              <ul>
                <li>
                  By email:{" "}
                  <a className="ext" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </li>
              </ul>
              <a className="top-link" href="#top" onClick={jump("top")}>
                ↑ Back to top
              </a>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
