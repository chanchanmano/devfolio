import { Bing, MongoDB, MySQL, NodeJs, Python, React, Solidity } from "developer-icons";

export const PROJECTS = [
  {
    title: "Drug Supply Chain on Decentralized Network",
    content:
      "Web3 App using React, Node.js & Solidity to secure drug supply chains; awarded Best Project at college and published in IJEECS (2024) for its impact on combating counterfeit drugs.",
    expandedContent: `Developed a decentralized web3 application to secure drug supply chains using React, Node.js, and Solidity. Designed smart contracts for tamper-proof tracking and integrated MetaMask, Ganache, and MongoDB. The system improves transparency and reduces counterfeit risks in pharmaceutical logistics. Recognized as Best Project by MMCOE’s IT Department in 2023. Published in the Indonesian Journal of Electrical Engineering and Computer Science (Vol. 33, Issue 1, 2024).`,
    icons: [NodeJs, React, Solidity, MongoDB],
  },
  {
    title: "QR-Based Healthcare Access System",
    content: `Developed a QR-based system to simplify hospital admissions by bypassing manual registration steps. Built using Python, Tkinter, OpenCV, and SQLite for fast and efficient patient intake.`,
    expandedContent: `
    Built a QR-based healthcare access system to streamline patient registration at hospitals and clinics. The system eliminates time-consuming clerical procedures by enabling patients to check in using scannable QR codes, ensuring faster access to medical attention. Developed using Python, with a GUI built in Tkinter, and integrated with OpenCV for QR code scanning and SQLite for backend data management. The project emphasizes improving operational efficiency in healthcare settings through simple, effective tech solutions.`,
    icons: [Python, MySQL],
  },
  {
    title: "A.L.A.N (Advanced Logic and Associative Neural-net)",
    content: `Built a modular assistant prototype with wake word detection (Porcupine), speech-to-text (Whisper), text-to-speech (Edge TTS), and LLM-based response generation (Groq Mixtral via LangChain), and session-based memory.`,
    expandedContent: `Designed an extensible architecture using ports/adapters to allow future swap-in of different STT, TTS, and wake word engines. Long-term goal: extend ALAN with self-triggering routines (e.g., reminders, notes, autonomous task checks) and a persistent memory layer.`,
    icons: [MongoDB, NodeJs, React],
  },


//   {
//     title: "",
//     content: "content",
//     expandedContent: "",
//     icons: [],
//   },
];
