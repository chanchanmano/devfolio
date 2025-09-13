# Devfolio 🚀

A simple, fast, and customizable **developer portfolio** built with **React + Vite + TypeScript + React Router**.  
I created this to showcase my **About Me, Work Experience, Skills, and Projects**, and decided to open-source it so anyone can use it as a template for their own portfolio.

---

## ✨ Features
- ⚡ **Fast build and HMR** with Vite
- 🎨 **Responsive design** – mobile & desktop ready
- 🗂️ **Modular content structure** – About Me, Work Experience, Skills, Projects
- 🔗 **Dynamic routing** via React Router
- 🐳 **Docker support** for easy containerized deployment
- 🚀 Deployable anywhere (GitHub Pages, Vercel, Netlify, etc.)

---

## 📂 Project Structure
```

aryan\_dev\_portfolio/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── README.md
├── app/
│   ├── app.css
│   ├── content/
│   │   ├── AboutMe/        # About section
│   │   ├── Misc/           # Miscellaneous section
│   │   ├── Projects/       # Projects showcase
│   │   ├── Skills/         # Skills listing
│   │   ├── WorkEx/         # Work experience
│   │   └── reusable/       # Reusable UI components
│   ├── landing/            # Landing page components
│   ├── routes/             # Route definitions
│   ├── root.tsx            # App root
│   └── routes.ts           # Routing config
├── public/                 # Static assets
├── react-router.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── package-lock.json

````

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/chanchanmano/aryan_dev_portfolio.git
cd aryan_dev_portfolio
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🎨 Customization

All portfolio content is modular and organized under the `app/content/` folder.

* **About Me** → `app/content/AboutMe/`
* **Work Experience** → `app/content/WorkEx/`
* **Skills** → `app/content/Skills/`
* **Projects** → `app/content/Projects/`
* **Landing Page** → `app/landing/`

Update the constants, text, and styles in these directories to personalize your portfolio.

---

## 🌐 Deployment

This project works out of the box with:

* **Vercel**
* **Netlify**
* **GitHub Pages**
* **Dockerized servers**

For GitHub Pages:

```bash
npm run build
```

Then serve the `dist/` folder.

---

## 🤝 Contributing

This is primarily a template, but feel free to fork and extend it. PRs are welcome if you add cool features or improvements!

---

## 📜 License

MIT License © \ARYAN HAMINE
Free to use, modify, and share.

---

---

