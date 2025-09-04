// src/pages/PrivacyPolicy.jsx
import React, { useEffect, useMemo, useState } from "react";

export default function PrivacyPolicy() {
  const brandName = "My Digital Rise";
  const websiteUrl = "https://mydigitalrise.com";
  const contactEmail = "info@mydigitalrise.com";
  const lastUpdated = "September 4, 2025";

  // IDs for headings to enable scroll-spy + TOC
  const sections = useMemo(
    () => [
      { id: "intro", label: "Privacy Policy" },
      { id: "interpretation-definitions", label: "Interpretation & Definitions" },
      { id: "collecting-using", label: "Collecting & Using Your Data" },
      { id: "retention", label: "Retention of Personal Data" },
      { id: "transfer", label: "Transfer of Personal Data" },
      { id: "delete", label: "Delete Your Personal Data" },
      { id: "disclosure", label: "Disclosure of Personal Data" },
      { id: "security", label: "Security of Personal Data" },
      { id: "children", label: "Children’s Privacy" },
      { id: "links", label: "Links to Other Websites" },
      { id: "changes", label: "Changes to this Policy" },
      { id: "contact", label: "Contact Us" },
    ],
    []
  );

  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    document.title = `Privacy Policy – ${brandName}`;
  }, []);

  useEffect(() => {
    // Scroll-spy: highlight TOC link for section in view
    const opts = { root: null, rootMargin: "0px 0px -65% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, opts);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  // Smooth scroll handler
  const handleJump = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="policy-wrapper">
      <style>{`
        :root {
          --bg: #0b1220;
          --card: #0f172a;
          --ink: #e2e8f0;
          --muted: #9aa6b2;
          --accent: #7c3aed;
          --accent-2: #22c55e;
          --border: rgba(148,163,184,.18);
        }
        .policy-wrapper {
          background: radial-gradient(1200px 600px at 10% -10%, rgba(124,58,237,.20), transparent 40%),
                      radial-gradient(900px 500px at 110% -20%, rgba(34,197,94,.18), transparent 38%),
                      var(--bg);
          color: var(--ink);
          min-height: 100vh;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }
        .hero {
          padding: 56px 20px 28px;
          border-bottom: 1px solid var(--border);
        }
        .hero-inner {
          max-width: 1080px; margin: 0 auto;
          display: grid; gap: 12px;
        }
        .hero h1 {
          margin: 0; font-size: 40px; line-height: 1.1; letter-spacing: -0.02em;
        }
        .hero p {
          margin: 6px 0 0; color: var(--muted);
        }
        .meta {
          display: inline-flex; gap: 10px; align-items: center;
          margin-top: 10px; color: var(--muted); font-size: 14px;
        }
        .chip {
          border: 1px solid var(--border); padding: 4px 10px; border-radius: 999px;
          background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(0,0,0,.05));
        }

        .content-area {
          max-width: 1080px; margin: 0 auto; padding: 28px 20px 80px;
          display: grid; grid-template-columns: 1fr; gap: 24px;
        }
        @media (min-width: 992px) {
          .content-area {
            grid-template-columns: 260px 1fr;
          }
        }

        .toc {
          position: sticky; top: 16px;
          border: 1px solid var(--border);
          background: rgba(2,6,23,.35);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 16px;
          height: max-content;
        }
        .toc h4 {
          margin: 0 0 8px; font-size: 14px; color: var(--muted); font-weight: 600; letter-spacing: .02em;
        }
        .toc a {
          display: block; padding: 8px 10px; border-radius: 10px;
          color: var(--ink); text-decoration: none; font-size: 15px;
          border: 1px solid transparent;
        }
        .toc a:hover {
          background: rgba(124,58,237,.08); border-color: rgba(124,58,237,.25);
        }
        .toc a.active {
          background: rgba(124,58,237,.15);
          border-color: rgba(124,58,237,.35);
        }

        .doc {
          border: 1px solid var(--border);
          background: rgba(15,23,42,.65);
          border-radius: 16px;
          overflow: hidden;
        }
        .doc-inner {
          padding: 22px 22px 10px;
        }
        .doc section {
          padding: 6px 0 22px;
          border-bottom: 1px dashed var(--border);
        }
        .doc section:last-child { border-bottom: 0; padding-bottom: 0; }

        h2 {
          margin: 20px 0 8px; font-size: 26px; letter-spacing: -.01em;
        }
        h3 {
          margin: 16px 0 6px; font-size: 18px; color: var(--ink);
        }
        p { color: var(--ink); opacity: .92; margin: 8px 0; }
        ul { margin: 10px 0 10px 20px; color: var(--ink); opacity: .92; }
        li { margin: 4px 0; }

        .note {
          margin: 14px 0;
          padding: 12px 14px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(34,197,94,.10), rgba(34,197,94,.04));
          color: var(--ink);
          font-size: 14px;
        }

        .top-link {
          display: inline-block; margin-top: 18px; font-size: 14px;
          color: var(--ink); text-decoration: none; border-bottom: 1px dashed var(--border);
        }
        .top-link:hover { color: #fff; border-color: rgba(255,255,255,.35); }

        .ext {
          color: #a5b4fc; text-decoration: underline;
        }
      `}</style>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-inner">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your
            information when you use the Service, and explains your rights and how the law protects you.
          </p>
          <div className="meta">
            <span className="chip">Last updated: {lastUpdated}</span>
            <span className="chip">{brandName}</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="content-area">
        {/* TOC */}
        <nav aria-label="Table of contents" className="toc">
          <h4>On this page</h4>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={handleJump(s.id)}
              className={activeId === s.id ? "active" : ""}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* DOCUMENT */}
        <article className="doc" aria-labelledby="intro">
          <div className="doc-inner">
            {/* Intro */}
            <section id="intro">
              <p>
                We use your personal data to provide and improve the Service. By using the Service, you agree to the
                collection and use of information in accordance with this Privacy Policy.
              </p>
              <div className="note">
                Tip: You can jump to any section using the Table of Contents on the left. Your place is auto-highlighted
                as you scroll.
              </div>
            </section>

            {/* Interpretation & Definitions */}
            <section id="interpretation-definitions">
              <h2>Interpretation and Definitions</h2>

              <h3>Interpretation</h3>
              <p>
                The words with initial capital letters have meanings defined under the following conditions. The
                following definitions shall have the same meaning regardless of whether they appear in singular or in
                plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li>
                  <strong>Account</strong> means a unique account created for you to access our Service or parts of our
                  Service.
                </li>
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control
                  with a party, where “control” means ownership of 50% or more of the shares, equity interest or other
                  securities entitled to vote for election of directors or other managing authority.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement)
                  refers to {brandName}.
                </li>
                <li>
                  <strong>Cookies</strong> are small files placed on your device by a website, containing details of
                  your browsing history among other uses.
                </li>
                <li>
                  <strong>Country</strong> refers to: New York, United States.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone
                  or a digital tablet.
                </li>
                <li>
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable
                  individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Website.
                </li>
                <li>
                  <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf
                  of the Company, including third parties we employ to facilitate the Service or analyze its usage.
                </li>
                <li>
                  <strong>Usage Data</strong> refers to data collected automatically, generated by the use of the
                  Service or from the Service infrastructure itself (for example, page visit duration).
                </li>
                <li>
                  <strong>Website</strong> refers to {brandName}, accessible at{" "}
                  <a className="ext" href={websiteUrl} target="_blank" rel="noreferrer">
                    mydigitalrise.com
                  </a>
                  .
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                  legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </section>

            {/* Collecting & Using */}
            <section id="collecting-using">
              <h2>Collecting and Using Your Personal Data</h2>

              <h3>Types of Data Collected</h3>

              <h3>Personal Data</h3>
              <p>
                While using our Service, we may ask you to provide certain personally identifiable information that can
                be used to contact or identify you. Personally identifiable information may include, but is not limited
                to:
              </p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>

              <h3>Usage Data</h3>
              <p>
                Usage Data is collected automatically when using the Service and may include your IP address, browser
                type and version, pages visited, time and date of visit, time spent on pages, unique device identifiers,
                and other diagnostic data. When you access the Service by or through a mobile device, we may collect
                similar information specific to your device and operating system.
              </p>

              <h3>Tracking Technologies and Cookies</h3>
              <p>
                We use Cookies and similar tracking technologies (beacons, tags, scripts) to track activity and store
                certain information to improve and analyze our Service.
              </p>
              <ul>
                <li>
                  <strong>Cookies or Browser Cookies</strong>: You can instruct your browser to refuse all Cookies or to
                  indicate when a Cookie is being sent. Without Cookies, some parts of the Service may not function.
                </li>
                <li>
                  <strong>Web Beacons</strong>: Certain sections of our Service and emails may contain web beacons
                  (clear gifs, pixel tags, single-pixel gifs) to count users or for related statistics and integrity
                  checks.
                </li>
              </ul>
              <p>
                Cookies can be “Persistent” (remain when you go offline) or “Session” (deleted when you close your
                browser). Learn more about cookies in this{" "}
                <a
                  className="ext"
                  href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
                  target="_blank"
                  rel="noreferrer"
                >
                  Free Privacy Policy article
                </a>
                .
              </p>

              <h3>Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Necessary / Essential Cookies</strong> (Session; administered by us): enable core features,
                  authentication, and fraud prevention.
                </li>
                <li>
                  <strong>Cookies Policy / Notice Acceptance</strong> (Persistent; administered by us): remember your
                  consent choices.
                </li>
                <li>
                  <strong>Functionality Cookies</strong> (Persistent; administered by us): remember preferences (e.g.,
                  login, language) for a more personal experience.
                </li>
              </ul>
              <p>
                For more information about your choices, see our Cookies Policy or the Cookies section of this Privacy
                Policy.
              </p>

              <h3>Use of Your Personal Data</h3>
              <p>The Company may use Personal Data for the following purposes:</p>
              <ul>
                <li>To provide and maintain our Service, including monitoring usage.</li>
                <li>To manage your Account as a registered user.</li>
                <li>
                  For the performance of a contract, including purchases or other agreements made through the Service.
                </li>
                <li>
                  To contact you by email, telephone, SMS, or push notifications regarding updates or information
                  related to functionalities, products, or services, including security updates.
                </li>
                <li>
                  To provide you with news, special offers, and general information about goods, services, and events
                  similar to those you already purchased or inquired about, unless you opt out.
                </li>
                <li>To attend and manage your requests to us.</li>
                <li>
                  For business transfers (merger, restructuring, sale of assets, etc.) where Personal Data may be among
                  transferred assets.
                </li>
                <li>For other purposes such as analytics, trend identification, and improving our Service.</li>
              </ul>

              <h3>Sharing Your Personal Information</h3>
              <p>We may share your personal information in the following situations:</p>
              <ul>
                <li>With Service Providers to monitor and analyze the use of our Service or to contact you.</li>
                <li>For business transfers as part of negotiations or transactions.</li>
                <li>With Affiliates (who must honor this Privacy Policy).</li>
                <li>With business partners to offer certain products, services, or promotions.</li>
                <li>
                  With other users when you share information in public areas, which may be publicly distributed
                  outside.
                </li>
                <li>With your consent for any other purpose.</li>
              </ul>
            </section>

            {/* Retention */}
            <section id="retention">
              <h2>Retention of Your Personal Data</h2>
              <p>
                We retain Personal Data only as long as necessary for the purposes set out in this Policy, and to comply
                with legal obligations, resolve disputes, and enforce agreements. Usage Data is generally retained for a
                shorter period unless required for security improvements or legal obligations.
              </p>
            </section>

            {/* Transfer */}
            <section id="transfer">
              <h2>Transfer of Your Personal Data</h2>
              <p>
                Your information may be processed at our operating offices and other locations where processing parties
                are located, meaning it may be transferred to and maintained on computers outside your jurisdiction
                where data protection laws may differ. We take reasonable steps to ensure secure treatment and no
                transfer occurs without adequate safeguards.
              </p>
            </section>

            {/* Delete */}
            <section id="delete">
              <h2>Delete Your Personal Data</h2>
              <p>
                You have the right to delete or request assistance deleting Personal Data we have collected. Where the
                Service provides tools to delete certain information, you may use them. You may also update or delete
                information through your account settings or by contacting us. We may need to retain certain information
                where we have a legal obligation or lawful basis.
              </p>
            </section>

            {/* Disclosure */}
            <section id="disclosure">
              <h2>Disclosure of Your Personal Data</h2>

              <h3>Business Transactions</h3>
              <p>
                If the Company is involved in a merger, acquisition, or asset sale, your Personal Data may be
                transferred. We will provide notice before any transfer becomes subject to a different policy.
              </p>

              <h3>Law Enforcement</h3>
              <p>
                Under certain circumstances, we may be required to disclose Personal Data if required to do so by law or
                in response to valid requests by public authorities.
              </p>

              <h3>Other Legal Requirements</h3>
              <p>We may disclose your Personal Data in good faith where necessary to:</p>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the Company’s rights or property</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of users or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </section>

            {/* Security */}
            <section id="security">
              <h2>Security of Your Personal Data</h2>
              <p>
                We strive to use commercially acceptable means to protect Personal Data, but no method of transmission
                over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* Children */}
            <section id="children">
              <h2>Children’s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13, and we do not knowingly collect personally
                identifiable information from them. If you are a parent or guardian and become aware that your child has
                provided us with Personal Data, please contact us so we can remove it. Where consent is required by law,
                we may require verifiable parental consent before collection and use.
              </p>
            </section>

            {/* Links */}
            <section id="links">
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to websites not operated by us. If you click a third-party link, you will
                be directed to that site. We strongly advise reviewing the privacy policy of every site you visit. We
                have no control over and assume no responsibility for their content, policies, or practices.
              </p>
            </section>

            {/* Changes */}
            <section id="changes">
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may update this Policy from time to time. We will notify you by posting the new Policy on this page,
                and, where appropriate, via email and/or a prominent notice on our Service prior to changes becoming
                effective. The “Last updated” date at the top of this page will be revised accordingly.
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, you can contact us:</p>
              <ul>
                <li>
                  By email:{" "}
                  <a className="ext" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </li>
              </ul>
              <a className="top-link" href="#top" onClick={handleJump("top")}>
                ↑ Back to top
              </a>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
