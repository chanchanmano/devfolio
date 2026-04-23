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
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.55fr)]">
      <DetailCard />

      <aside className="surface-card p-5 sm:p-6">
        <img
          src="/Aryan passport.jpg"
          alt="Portrait of Aryan Hamine"
          className="aspect-[4/5] w-full rounded-[20px] object-cover"
        />
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
