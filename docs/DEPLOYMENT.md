# ScaleNova Website — OrangeHost Automated CI/CD Deployment Guide

This document explains the automated deployment architecture connecting the **GitHub Repository** to **OrangeHost Web Hosting (`public_html`)**.

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
    ├── Step 4: Check GitHub Secrets Configuration
    └── Step 5: Sync Files to OrangeHost public_html (FTPS/FTP)
         │
         ▼
[OrangeHost Production Server]
         │
         └── public_html/ (Serves live website)
```

---

## 2. Required GitHub Repository Secrets

To enable automated deployments, navigate to your GitHub Repository:
**Settings → Secrets and variables → Actions → New repository secret**

Configure the following secrets using the credentials obtained from your OrangeHost account or cPanel:

| Secret Name | Description | Where to Find in OrangeHost / cPanel | Example Value |
| :--- | :--- | :--- | :--- |
| `ORANGEHOST_FTP_SERVER` | FTP Hostname / IP address | OrangeHost Welcome Email or cPanel **FTP Accounts** | `ftp.scalenovasystems.com` or `cpanelXX.orangehost.com` |
| `ORANGEHOST_FTP_USERNAME` | FTP Account Username | cPanel **FTP Accounts** (e.g. `deployer@scalenovasystems.com` or main cPanel user) | `deployer@scalenovasystems.com` |
| `ORANGEHOST_FTP_PASSWORD` | FTP Account Password | Created when creating the FTP Account in cPanel | *(Your secure password)* |
| `ORANGEHOST_FTP_PORT` *(Optional)* | FTP Connection Port | Default is `21` for FTPS | `21` |
| `ORANGEHOST_FTP_PROTOCOL` *(Optional)* | Transfer Protocol | Default is `ftps` (FTPS with TLS/SSL) | `ftps` |
| `ORANGEHOST_SERVER_DIR` *(Optional)* | Remote Server Directory | Default is `public_html/` (or `./` if FTP user root is already set to `public_html`) | `public_html/` or `./` |

> [!SECURITY NOTICE]
> Never hardcode or commit FTP passwords, hostnames, or credentials directly into code or documentation. GitHub Secrets keep your production credentials encrypted.

---

## 3. How to Create a Dedicated Deployment FTP Account in cPanel

1. Log in to your **OrangeHost cPanel**.
2. Go to **Files → FTP Accounts**.
3. Under **Add FTP Account**:
   - **Log in**: `deployer`
   - **Domain**: `scalenovasystems.com`
   - **Password**: Generate a strong, secure password (copy this).
   - **Directory**: 
     - If you set directory to `public_html`, set secret `ORANGEHOST_SERVER_DIR` to `./`.
     - If directory defaults to `/home/username/public_html`, set secret `ORANGEHOST_SERVER_DIR` to `public_html/`.
4. Click **Create FTP Account**.
5. Add the **Server**, **Username**, and **Password** into GitHub Secrets.

---

## 4. Pre-Deployment Validation

Before attempting to sync files via FTP, GitHub Actions automatically executes:
1. **File Verification**: Ensures `index.html`, CSS, JS modules, `sitemap.xml`, and `robots.txt` are present.
2. **Syntax Compilation**: Compiles all 11 JavaScript modules via `node -c` to ensure zero runtime syntax breaks.
3. **Link Verification**: Checks that all local stylesheets and scripts referenced in `index.html` resolve to actual files.
4. **Secret Guarding**: Checks that `ORANGEHOST_FTP_SERVER` is defined before attempting to connect.

---

## 5. Excluded Development Artifacts

The deployment step explicitly excludes non-production files from being synced to `public_html`:
- `.git/` & `.gitignore`
- `.github/` workflows
- `docs/` documentation
- `README.md`

---

## 6. Rollback Strategy

If a change needs to be reverted:
```bash
git revert HEAD
git push origin main
```
GitHub Actions will automatically validate the previous commit and restore the stable files to `public_html` within ~45 seconds.
