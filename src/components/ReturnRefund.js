// src/pages/ReturnRefund.jsx
import React, { useEffect, useMemo, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function ReturnRefund() {
  const brandName = "My Digital Rise";
  const websiteHost = "mydigitalrise.com";
  const websiteUrl = "https://mydigitalrise.com";
  const contactEmail = "info@mydigitalrise.com";
  const lastUpdated = "September 04, 2025";

  const sections = useMemo(
    () => [
      { id: "top", label: "Return & Refund Policy" },
      { id: "interpretation", label: "Interpretation & Definitions" },
      { id: "cancellation", label: "Service Cancellation Rights" },
      { id: "conditions", label: "Refund Conditions" },
      { id: "exceptions", label: "Exceptions" },
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
    <>
      <Header />
      {/* ...existing Return & Refund content... */}
      <div className="container py-5">
        <h1>Return & Refund Policy</h1>
        <p>Thank you for choosing {brandName}. Please review our policy below.</p>
        <div className="meta">
          <span className="chip">Last updated: {lastUpdated}</span>
          <span className="chip">{brandName}</span>
        </div>
        <div className="note">
          Summary: Service fees are generally non-refundable once work has commenced or been delivered. If you are dissatisfied, please contact us within 7 days of delivery for review.
        </div>
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          Words with initial capital letters have meanings defined under the following conditions. The same meanings apply regardless of singular or plural usage.
        </p>
        <h3>Definitions</h3>
        <ul>
          <li>
            <strong>Company</strong> (referred to as “the Company”, “We”, “Us” or “Our”) refers to {brandName}.
          </li>
          <li>
            <strong>Services</strong> refer to the digital marketing, web development, and related services offered by the Company.
          </li>
          <li>
            <strong>Order</strong> means a request by you to purchase Services from us.
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
        <h2>Service Cancellation Rights</h2>
        <p>
          You may request to cancel a service by contacting us at{" "}
          <a className="ext" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          . Cancellations are subject to the terms outlined in your service agreement or proposal. Work that has already been completed or is in progress may be billed accordingly.
        </p>
        <h2>Refund Conditions</h2>
        <ul>
          <li>
            <strong>Digital Services:</strong> Due to the nature of digital marketing and web development services, we do not offer refunds for services that have already been delivered or for work that has commenced.
          </li>
          <li>
            <strong>Advance Payments:</strong> Any advance payments or deposits made to initiate a project are non-refundable, unless otherwise specified in your agreement.
          </li>
          <li>
            <strong>Unsatisfactory Service:</strong> If you are dissatisfied with the service provided, please contact us within 7 days of project delivery. We will review your concerns and, at our discretion, may offer a partial refund or additional revisions to address the issue.
          </li>
        </ul>
        <h2>Exceptions</h2>
        <p>
          Refunds may be considered in exceptional cases where:
        </p>
        <ul>
          <li>The service was not delivered as described in the agreement.</li>
          <li>There was a technical error or failure on our part that prevented service delivery.</li>
        </ul>
        <h2>Contact Us</h2>
        <p>If you have any questions about our Return & Refund Policy, please contact us:</p>
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
      </div>
      <Footer />
    </>
  );
}
