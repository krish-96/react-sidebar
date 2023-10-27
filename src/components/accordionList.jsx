import React, { useId } from "react";
import features from "./homeFeatures";

export default function AccordionsList() {
  const uniqueKey = useId();
  return (
    <div className="accordion" id="accordionExample">
      {features.map((feature, index) => {
        return (
          <div className="accordion-item" key={`${uniqueKey}_${index}`}>
            <h2 className="accordion-header" id={`heading_${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse_${index}`}
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {feature.heading}
              </button>
            </h2>
            <div
              id={`collapse_${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading_${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{feature.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
