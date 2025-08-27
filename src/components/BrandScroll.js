import React from "react";
import "./css.css";

// Brand logo icons
const brands = [
  require("../assets/img/icon/icon-1.png"),
  require("../assets/img/icon/icon-2.png"),
  require("../assets/img/icon/icon-3.png"),
  require("../assets/img/icon/icon-4.png"),
  require("../assets/img/icon/icon-5.png"),
  require("../assets/img/icon/icon-6.png"),
  require("../assets/img/icon/icon-7.png"),
  require("../assets/img/icon/icon-8.png"),
  require("../assets/img/icon/icon-9.png"),
  require("../assets/img/icon/icon-10.png"),
];

export default function BrandScroll() {
  return (
    <div className="brand-scroll-wrap">
      <div className="brand-scroll-track">
        {brands.concat(brands).map((src, i) => (
          <div className="brand-logo" key={i}>
            <img src={src} alt={`brand-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
