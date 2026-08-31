# ScaleNova Website — GitHub Workflow & Deployment Standard

## 1. Branching Strategy

- **main**: Production deployment branch connected to OrangeHost static hosting via FTP GitHub Action.
- **feature/business-os-refinement**: Safe working development branch for architecture updates and content refinements.

---

## 2. Automated Deployment Pipeline

Pushes to the main branch trigger .github/workflows/deploy.yml, which deploys the static files directly to OrangeHost public_html.
