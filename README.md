# ScaleNova Website

> **ScaleNova Private Limited** — *One platform for every business need.*
> Unified Business Operating System (CRM, ERP, HR, Projects, Finance) for Growing Indian MSMEs.

Official Website: [https://scalenovasys.com](https://scalenovasys.com)

---

## 🏛️ Architecture & Directory Structure

This repository contains the production website for ScaleNova, built using a clean, modular static architecture with zero runtime build overhead for blazing fast performance and 100% compatibility with OrangeHost static web hosting (`public_html`).

```
Scalenova-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml         # Automated GitHub Actions deployment to OrangeHost
├── assets/
│   └── logo.png               # Official ScaleNova Logo
├── css/
│   ├── style.css              # Design tokens, typography, dark/light theme, keyframe animations
│   └── components.css         # Modals, drawers, pricing toggle, blog typography, form inputs
├── js/
│   ├── config.js              # Centralized configuration (contact info, pricing, social, backend URL)
│   ├── features-data.js       # 6 feature rich detail datasets with workflows & scaling outcomes
│   ├── plans-data.js          # Core, Growth, Elite OS plan deep-dive specifications
│   ├── careers-data.js        # Remote-first culture, perks & benefits, 5 job role specifications
│   ├── affiliate-data.js      # 20% recurring monthly revenue share partner program structure
│   ├── blog-data.js           # 8 in-depth, practical MSME technology articles
│   ├── pricing.js             # Reactive Monthly vs. Yearly pricing engine with 2-months-free logic
│   ├── modal-engine.js        # Accessible SPA drawer & modal manager with URL hash routing
│   ├── forms-service.js       # Reusable form submission service (Demo, Career, Affiliate, Newsletter)
│   ├── 3d-hero.js             # Lightweight Three.js node lattice visualizer with mouse parallax
│   └── app.js                 # App initialization, theme switcher, mobile drawer, dynamic rendering
├── files/
│   └── Logo (1).jpg           # High-resolution backup brand asset
├── docs/
│   └── DEPLOYMENT.md          # Comprehensive OrangeHost deployment guide & cPanel setup
├── index.html                 # Master semantic HTML shell with full SEO & ARIA compliance
├── sitemap.xml                # Search engine XML sitemap
├── robots.txt                 # Search engine crawler directives
├── .gitignore                 # Exclusion rules for secrets, OS metadata, and temp files
└── README.md                  # Project overview and documentation
```

---

## 💎 Key Features

* **3D Visual Experience**: Lightweight, performant Three.js cybernetic data lattice with mouse parallax, adaptive mobile density, and `prefers-reduced-motion` compliance.
* **Interactive 6 Feature Drawers**: Expandable right-hand SPA drawers for CRM, ERP, HR, Cloud Security, Projects, and Executive BI with workflows, problem breakdowns, and automation triggers.
* **Reactive Pricing Engine**: Dynamic Monthly / Annual toggle:
  * **Core OS**: ₹3,299/mo + GST (₹32,990/yr — 2 Months Free)
  * **Growth OS**: ₹11,999/mo + GST (₹1,19,990/yr — 2 Months Free)
  * **Elite OS**: ₹24,599/mo + GST (₹2,45,990/yr — 2 Months Free)
* **Dedicated OS Plans Breakdown**: Comprehensive comparison detailing target audience, setup journeys, training & support scopes, and upgrade paths.
* **Careers Portal**: Remote-first culture, company perks, 5 job specs, and interactive application drawer with client-side resume validation (PDF/DOC/DOCX, max 5 MB).
* **Affiliate Programme**: 20% recurring monthly revenue share with no revenue cap, 4-step roadmap, earnings examples, and partner application form.
* **8 MSME Blog Articles**: In-depth, practical guides with full SPA reading modal, reading time, and social sharing.
* **Streamlined Demo Request**: Clean, single-form conversion journey with validation and Google Apps Script / webhook integration readiness.
* **Official Contact**:
  * Phone: `+91 7801049178`
  * Email: `info@scalenovasys.com`
  * WhatsApp: `https://wa.me/917801049178`
  * GSTIN: `37ABUCS4883M1Z5`

---

## 🚀 Local Development & Preview

Run a simple local HTTP server:

```bash
# Python 3
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📦 Automated Deployment to OrangeHost

Deployments are automated via GitHub Actions on every push to the `main` branch:
See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for full cPanel FTP setup and GitHub Secrets instructions.
