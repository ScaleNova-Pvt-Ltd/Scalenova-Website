# ScaleNova Website — OrangeHost Automated CI/CD Deployment Guide

This document explains the automated deployment architecture connecting the **GitHub Repository** (`https://github.com/ScaleNova-Pvt-Ltd/Scalenova-Website`) to **OrangeHost Web Hosting (`/home/scalenov/public_html`)**.

---

## 1. Deployment Architecture Overview

```
[Developer / AI Agent]
         │
         ▼  (git push origin main)
[GitHub Repository (main branch)]
         │
         ▼  (Triggers GitHub Actions)
[.github/workflows/deploy.yml]
    ├── Step 1: Verify Essential Website Files Exist
    ├── Step 2: Validate JavaScript Syntax Across All Modules (node -c)
    ├── Step 3: Verify Asset References in index.html
    ├── Step 4: Verify Deployment Configuration Secrets
    └── Step 5: Sync Files to OrangeHost public_html (FTP / FTPS)
         │
         ▼
[OrangeHost FTP Server: ftp.scalenovasys.com]
         │
         └── / (restricted to /home/scalenov/public_html) ──► https://scalenovasys.com
```

---

## 2. Configured GitHub Repository Secrets

The repository utilizes encrypted GitHub Actions Secrets configured under **Settings → Secrets and variables → Actions**:

| Secret Name | Description | Value / Purpose |
| :--- | :--- | :--- |
| `FTP_HOST` | FTP Server Hostname | `ftp.scalenovasys.com` |
| `FTP_USERNAME` | Restricted FTP Account Username | `githubdeploy@scalenovasys.com` |
| `FTP_PASSWORD` | Restricted FTP Account Password | *(Secure encrypted credential)* |
| `FTP_PORT` | FTP Port Number | `21` |

> [!SECURITY NOTICE]
> Passwords and credentials are never hardcoded in source code or output to GitHub Actions logs. GitHub Secrets ensure end-to-end encrypted pipeline execution.

---

## 3. Directory Mapping

The dedicated FTP user `githubdeploy@scalenovasys.com` is configured with its home directory set to:
`/home/scalenov/public_html`

Therefore, the GitHub Action deploys into `server-dir: /`, which directly synchronizes the repository website files into the live document root.

---

## 4. Pre-Deployment Validation

Before attempting to sync files via FTP, GitHub Actions automatically executes:
1. **File Verification**: Ensures `index.html`, CSS, JS modules, subpages, `sitemap.xml`, and `robots.txt` are present.
2. **Syntax Compilation**: Compiles all 11 JavaScript modules via `node -c` to ensure zero runtime syntax breaks.
3. **Link Verification**: Checks that all local stylesheets and scripts referenced in `index.html` resolve to actual files.
4. **Secret Guarding**: Checks that `FTP_HOST`, `FTP_USERNAME`, and `FTP_PASSWORD` are present before attempting to connect.

---

## 5. Excluded Development Artifacts

The deployment step explicitly excludes non-production files from being synced to `public_html`:
- `.git/` & `.git*`
- `.github/` workflows
- `docs/` documentation
- `README.md`
- `.gitignore`
- `.DS_Store`

---

## 6. Rollback Strategy

If a change needs to be reverted:
```bash
git revert HEAD
git push origin main
```
GitHub Actions will automatically validate the previous commit and restore the stable files to OrangeHost within ~45 seconds.
