import {
  AWS,
  Django,
  Docker,
  Electron,
  ExpressJsLight,
  HTML5,
  JavaScript,
  JQuery,
  MongoDB,
  MySQL,
  NodeJs,
  Python,
  React,
  Redis,
} from "developer-icons";
import { motion } from "framer-motion";

const workExperience = [
  {
    company: "CrelioHealth",
    role: "SDE-II / SDE-I",
    duration: "Sept 2023 – July 2025",
    skills: [
      MySQL,
      Redis,
      MongoDB,
      Python,
      JavaScript,
      Django,
      React,
      Electron,
      Docker,
      AWS,
    ],
    description: [
      "Implemented a webhook retry system with DocumentDB, automated via AWS EventBridge.",
      "Developed secure DICOM image sharing via OTP-authenticated links using Django & React.",
      "Built a platform to allow Sample Rerun to allow labs to rerun samples and correct device results",
      "Created a Reflex Testing controller using Python, MySQL, and Redis for auto-addition of tests on certain thresholds.",
    ],
  },
  {
    company: "CrelioHealth",
    role: "Engineering Intern",
    duration: "Jan 2023 – Sept 2023",
    skills: [Python, JavaScript, Django, React],
    description: [
      "Built a Django-based Storage Manager handling 1M+ file uploads across the platform.",
      "Scoped and built logic to employ ability for user to attach images to bills as attachments.",
    ],
  },
  {
    company: "Outshade Digital Media",
    role: "Full Stack Developer Intern",
    duration: "Jan 2022 – March 2022",
    skills: [NodeJs, JQuery, ExpressJsLight, MySQL, HTML5, JavaScript],
    description: [
      "Built a client management system using Node.js, MySQL, and EJS.",
      "Engineered a calenderic reminder system to automate notification for payments.",
      "Developed a MERN-based clinic app with AWS S3 file uploads and appointment tracking.",
    ],
  },
];

const WorkExperienceTimeline = () => {
  return (
    <motion.p
      className=""
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="border-l-2 border-gray-300 ml-4">
        {workExperience.map((exp, idx) => (
          <div key={idx} className="mb-20 ml-6 relative">
            <div className="flex items-center mb-5 ml-6 relative">
              <div className="absolute -left-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
              <div className="text-sm text-gray-500 ml-2">{exp.duration}</div>
            </div>
            <div className="flex items-center">
              <h3 className="text-xl font-semibold">
                {exp.role} @ {exp.company}
              </h3>
              <div className="flex ml-8 space-x-5">
                {exp.skills?.map((Icon, index) => {
                  return <Icon size={20} key={index} />;
                })}
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.p>
  );
};

export default WorkExperienceTimeline;
