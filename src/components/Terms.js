// src/pages/Terms.jsx
import React, { useEffect, useMemo, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Terms() {
  const brandName = "My Digital Rise";
  const websiteHost = "mydigitalrise.com";
  const websiteUrl = "https://mydigitalrise.com";
  const contactEmail = "info@mydigitalrise.com";
  const lastUpdated = "September 04, 2025";

  const sections = useMemo(
    () => [
      { id: "top", label: "Terms & Conditions" },
      { id: "interpretation", label: "Interpretation & Definitions" },
      { id: "acknowledgment", label: "Acknowledgment" },
      { id: "links", label: "Links to Other Websites" },
      { id: "termination", label: "Termination" },
      { id: "liability", label: "Limitation of Liability" },
      { id: "asis", label: `"AS IS" & "AS AVAILABLE" Disclaimer` },
      { id: "law", label: "Governing Law" },
      { id: "disputes", label: "Disputes Resolution" },
      { id: "eu", label: "EU Users" },
      { id: "us", label: "US Legal Compliance" },
      { id: "severability", label: "Severability & Waiver" },
      { id: "translation", label: "Translation Interpretation" },
      { id: "changes", label: "Changes to These Terms" },
      { id: "contact", label: "Contact Us" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    document.title = `Terms & Conditions – ${brandName}`;
  }, []);

  useEffect(() => {
    const opts = { root: null, rootMargin: "0px 0px -65% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id));
    }, opts);
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
    <>
      <Header />
      <main className="terms-wrap">
        <style>{`
          :root{
            --bg:#0b1220;
            --card:#0f172a;
            --ink:#e2e8f0;
            --muted:#9aa6b2;
            --accent:#7c3aed; /* purple */
            --accent-2:#22c55e; /* green */
            --border:rgba(148,163,184,.18);
          }
          .terms-wrap{
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
          .top-link{ display:inline-block; margin-top:18px; font-size:14px; color:var(--ink); text-decoration:none; border-bottom:1px dashed var(--border); }
          .top-link:hover{ color:#fff; border-color:rgba(255,255,255,.35); }
        `}</style>

        {/* HERO */}
        <header className="hero" id="top">
          <div className="hero-inner">
            <h1>Terms and Conditions</h1>
            <p>Please read these terms and conditions carefully before using our Service.</p>
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
              <section id="top">
                <p>
                  These Terms and Conditions form the entire agreement between you and {brandName} regarding your use of
                  the website and services provided at{" "}
                  <a className="ext" href={websiteUrl} target="_blank" rel="noreferrer">
                    {websiteHost}
                  </a>.
                </p>
              </section>

              <section id="interpretation">
                <h2>Interpretation and Definitions</h2>

                <h3>Interpretation</h3>
                <p>
                  Words with initial capital letters have meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether they appear in singular or plural.
                </p>

                <h3>Definitions</h3>
                <ul>
                  <li>
                    <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control
                    with a party, where “control” means ownership of 50% or more of the shares, equity interest, or other
                    securities entitled to vote for election of directors or other managing authority.
                  </li>
                  <li>
                    <strong>Country</strong> refers to: New York, United States.
                  </li>
                  <li>
                    <strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement)
                    refers to {brandName}.
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone,
                    or a digital tablet.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong>Terms and Conditions</strong> (also referred as “Terms”) mean these Terms and Conditions that
                    {/* form the entire agreement between you and the Company regarding the use of the Service. This agreement
                    references the{" "}
                    <a
                      className="ext"
                      href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Free Terms and Conditions Generator
                    </a> */}
                    .
                  </li>
                  <li>
                    <strong>Third-party Social Media Service</strong> means any services or content provided by a
                    third-party that may be displayed, included or made available by the Service.
                  </li>
                  <li>
                    <strong>Website</strong> refers to {brandName}, accessible at{" "}
                    <a className="ext" href={websiteUrl} target="_blank" rel="noreferrer">
                      {websiteHost}
                    </a>
                    .
                  </li>
                  <li>
                    <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                    legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </section>

              <section id="acknowledgment">
                <h2>Acknowledgment</h2>
                <p>
                  These Terms govern your use of this Service and constitute a binding agreement between you and the
                  Company. Access or use of the Service signifies your acceptance of and compliance with these Terms. If
                  you disagree with any part, you may not access the Service.
                </p>
                <p>
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the
                  Service.
                </p>
                <p>
                  Your use of the Service is also conditioned on your acceptance of our{" "}
                  <a className="ext" href={`${websiteUrl}/privacy-policy`} target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                  , which describes how we collect, use, and disclose personal information.
                </p>
              </section>

              <section id="links">
                <h2>Links to Other Websites</h2>
                <p>
                  Our Service may contain links to third-party websites or services not owned or controlled by the
                  Company. We have no control over—and assume no responsibility for—the content, privacy policies, or
                  practices of any third-party websites or services.
                </p>
                <p>
                  You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly,
                  for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on
                  any such content, goods, or services available on or through any such websites or services. We strongly
                  advise you to read the terms and privacy policies of any third-party site you visit.
                </p>
              </section>

              <section id="termination">
                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use
                  the Service will cease immediately.
                </p>
              </section>

              <section id="liability">
                <h2>Limitation of Liability</h2>
                <p>
                  Notwithstanding any damages that you might incur, the entire liability of the Company and any of its
                  suppliers under any provision of these Terms and your exclusive remedy shall be limited to the amount
                  actually paid by you through the Service or 100 USD if you haven’t purchased anything through the
                  Service.
                </p>
                <p>
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be
                  liable for any special, incidental, indirect, or consequential damages whatsoever, even if advised of
                  the possibility of such damages and even if the remedy fails of its essential purpose. Some states do
                  not allow such limitations; in those states, liability will be limited to the greatest extent permitted
                  by law.
                </p>
              </section>

              <section id="asis">
                <h2>“AS IS” and “AS AVAILABLE” Disclaimer</h2>
                <p>
                  The Service is provided “AS IS” and “AS AVAILABLE” with all faults and defects without warranty of any
                  kind. To the maximum extent permitted by law, the Company disclaims all warranties, express or implied,
                  including merchantability, fitness for a particular purpose, title, non-infringement, and warranties
                  arising from course of dealing or usage of trade.
                </p>
                <p>
                  Without limiting the foregoing, the Company makes no representation that the Service will meet your
                  requirements; achieve intended results; be compatible with other software, systems, or services; operate
                  without interruption; be error-free; or that defects can or will be corrected. Some jurisdictions do not
                  allow certain exclusions—those exclusions will apply to the maximum extent enforceable.
                </p>
              </section>

              <section id="law">
                <h2>Governing Law</h2>
                <p>
                  The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and your use of
                  the Service. Your use may be subject to other local, state, national, or international laws.
                </p>
              </section>

              <section id="disputes">
                <h2>Disputes Resolution</h2>
                <p>
                  If you have any concern or dispute about the Service, you agree to first try to resolve the dispute
                  informally by contacting the Company.
                </p>
              </section>

              <section id="eu">
                <h2>For European Union (EU) Users</h2>
                <p>
                  If you are a European Union consumer, you will benefit from any mandatory provisions of the law of the
                  country in which you are resident.
                </p>
              </section>

              <section id="us">
                <h2>United States Legal Compliance</h2>
                <p>
                  You represent and warrant that (i) you are not located in a country subject to a U.S. government
                  embargo, or designated by the U.S. government as a “terrorist supporting” country, and (ii) you are not
                  listed on any U.S. government list of prohibited or restricted parties.
                </p>
              </section>

              <section id="severability">
                <h2>Severability and Waiver</h2>

                <h3>Severability</h3>
                <p>
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed
                  and interpreted to accomplish its objectives to the greatest extent possible, and the remaining
                  provisions will continue in full force and effect.
                </p>

                <h3>Waiver</h3>
                <p>
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation
                  shall not affect a party’s ability to exercise such right or require such performance at any time
                  thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </section>

              <section id="translation">
                <h2>Translation Interpretation</h2>
                <p>
                  These Terms may have been translated if we made them available to you on our Service. The original
                  English text shall prevail in case of a dispute.
                </p>
              </section>

              <section id="changes">
                <h2>Changes to These Terms and Conditions</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will make reasonable efforts to provide at least 30 days’ notice prior to new
                  terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p>
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound
                  by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the
                  website and the Service.
                </p>
              </section>

              <section id="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, you can contact us:</p>
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
      <Footer />
    </>
  );
}
