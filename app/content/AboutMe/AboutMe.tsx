import { useState } from "react";
import DetailCard from "./DetailCard";

const PROFILE_DETAILS = [
  {
    label: "Based in",
    value: "Davis, CA, with prior experience across teams in India and remote product work.",
  },
  {
    label: "Recent role",
    value: "Software Engineer (SDE-II) at CrelioHealth from April 2023 to August 2025.",
  },
  {
    label: "Education",
    value: "M.S. Computer Science at UC Davis; B.E. in Information Technology from MMCOE, Pune University.",
  },
];

function AboutMe() {
  const [showProfessionalPhoto, setShowProfessionalPhoto] = useState(false);

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.55fr)]">
      <DetailCard />

      <aside className="surface-card p-5 sm:p-6">
        <button
          type="button"
          className="about-photo-button"
          aria-pressed={showProfessionalPhoto}
          aria-label={
            showProfessionalPhoto
              ? "Show the casual photo"
              : "Show the professional photo"
          }
          onClick={() => setShowProfessionalPhoto((current) => !current)}
        >
          <div
            className={`about-photo-flip ${
              showProfessionalPhoto ? "is-flipped" : ""
            }`}
          >
            <div className="about-photo-face">
              <img
                src="/aryan-capitol-casual.jpg"
                alt="Aryan Hamine standing in front of the California State Capitol"
                className="about-photo-face-image about-photo-face-image--casual"
              />
              <div className="about-photo-overlay">
                <span className="about-photo-hint">
                  Click to make me professional
                </span>
              </div>
            </div>

            <div className="about-photo-face about-photo-face--back">
              <img
                src="/Aryan passport.jpg"
                alt="Professional portrait of Aryan Hamine"
                className="about-photo-face-image about-photo-face-image--professional"
              />
              <div className="about-photo-overlay">
                <span className="about-photo-hint">
                  Click to bring the Capitol photo back
                </span>
              </div>
            </div>
          </div>
        </button>

        <div className="mt-5 grid gap-3">
          {PROFILE_DETAILS.map((detail) => (
            <div key={detail.label} className="metric-card">
              <p className="metric-label">{detail.label}</p>
              <p className="metric-value">{detail.value}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default AboutMe;
