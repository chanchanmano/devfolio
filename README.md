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


# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
