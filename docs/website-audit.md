# ScaleNova Website — Baseline & Architecture Audit

## 1. Audit Overview

- **Repository**: ScaleNova-Pvt-Ltd/Scalenova-Website
- **Working Branch**: feature/business-os-refinement
- **Baseline Commit**: 702abe2
- **Architecture**: Vanilla HTML5, CSS3 (Tailwind CDN + custom design tokens), Modular ES6+ JavaScript, Three.js 3D lattice, HTML5 SPA overlays/drawers with hash routing.
- **Deployment Platform**: OrangeHost static hosting (public_html) via GitHub Actions (.github/workflows/deploy.yml).

---

## 2. Directory Structure & Asset Map

Scalenova-Website/
├── .github/workflows/deploy.yml   # OrangeHost automated FTP deployment
├── assets/                        # Brand logos, icons, vector art
├── css/
│   ├── style.css                  # Keyframe animations, design tokens, dark/light themes
│   └── components.css             # Drawer overlays, pricing toggle, modal containers
├── js/
│   ├── config.js                  # Centralized configuration (contact, pricing, social)
│   ├── features-data.js           # Visual feature ecosystem datasets
│   ├── plans-data.js              # Core OS, Growth OS, Elite OS deep-dive specifications
│   ├── careers-data.js            # Careers portal roles and culture pillars
│   ├── affiliate-data.js          # Partner network revenue share structure
│   ├── blog-data.js               # MSME insights articles
│   ├── pricing.js                 # Reactive Monthly / Annual billing engine
│   ├── modal-engine.js            # SPA modal & drawer hash-routing manager
│   ├── forms-service.js           # Reusable form submission & UTM tracking service
│   ├── 3d-hero.js                 # Three.js cybernetic data lattice
│   └── app.js                     # Main application bootstrap
├── docs/                          # Architecture & operational standards documentation
├── index.html                     # Semantic HTML5 shell with structured JSON-LD schema
├── robots.txt                     # Crawler directives
└── sitemap.xml                    # XML Sitemap

---

## 3. Preserved Systems

1. **Zero-Build Overhead Architecture**: Retained Vanilla JS/CSS for 100% OrangeHost static hosting compatibility and sub-second page loads.
2. **Three.js Cybernetic Lattice**: Kept lightweight mouse-parallax 3D canvas layer with prefers-reduced-motion accessibility support.
3. **Hash-Based SPA Overlay Engine**: Maintained deep-link hash routing (#careers, #blog, #contact, #plan/core, etc.).
4. **Form Integration Readiness**: Kept client-side validation, resume file checks, and Google Apps Script / webhook integration.

---

## 4. Key Refinements Applied

1. **Business OS Positioning**: Updated positioning to ScaleNova Business OS — One System Every Business Needs.
2. **Pricing Architecture Alignment**: Updated Core OS (Rs 4,899), Growth OS (Rs 13,699), and Elite OS (Rs 35,799) with zero feature duplication.
3. **Navigation & Popup UI Fix**: Removed dead right navigation arrows across all modal overlays and replaced top navigation with a unified Back control.
4. **Frappe/ERPNext Technology Positioning**: Positioned underlying Frappe and ERPNext technology appropriately in a dedicated platform section.
5. **Legal & Compliance Update**: Strengthened Privacy Policy, Terms, and Refund Policy to clearly define technical scope without unsupported ROI or revenue guarantees.
