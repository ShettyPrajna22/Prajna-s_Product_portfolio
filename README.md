# Prajna Shetty — Product Portfolio Website

React + Vite portfolio site for Product Manager / Product Owner applications.

## What is included

- Elegant purple, blue and black visual system
- Responsive one-page portfolio
- Recruiter-friendly sections: positioning, case studies, experience, skills and contact
- PDF artifacts included in `public/assets`
- Preview images generated from the uploaded PDFs in `public/previews`
- Static build ready for Vercel, Netlify, Render, GitHub Pages or any static host

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL shown in your terminal, usually:

```bash
http://localhost:5173
```

Do not open `index.html` directly in the browser. Vite apps need the dev server or a static deployment build.

## Build for deployment

```bash
npm run build
npm run preview
```

## Files to personalize before deploying

Edit `src/main.jsx`:

- Replace `https://your-portfolio-link.com` with the final deployed portfolio link
- Add any missing project links if you publish separate case-study pages
- Review phone number, email and LinkedIn
- Adjust wording if targeting Product Owner vs Product Manager roles

## Deployment notes

For Vercel or Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
