# Northstar — React + Vite

Northstar is now organized as a React application built with Vite. 
## Run locally

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
public/assets/img/       Original favicon and social preview image
src/
  components/
    chrome/              Navigation, skip link, and progress rail
    sections/            One JSX file per page scene, plus the journey ribbon
  hooks/                 React lifecycle integration
  legacy/                Original interaction and illustration modules
  styles/site.css        Original design system and animations
  App.jsx                Page composition
  main.jsx               React entry point
```

The page scenes and site chrome are authored as JSX components. Navigation, service accordions, and learning-path tabs are controlled by React; the legacy modules still provide the scroll-driven illustrations, demos, language switching, and contact form behavior.

