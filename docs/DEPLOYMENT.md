# ScaleNova Website — OrangeHost Automated CI/CD Deployment Guide

This document explains the automated deployment architecture connecting the **GitHub Repository** to **OrangeHost Web Hosting (`public_html`)**.

---

## 1. Deployment Architecture Overview

```
[Developer / AI Agent]
         │
         ▼  (git push)
[GitHub Repository (main branch)]
         │
         ▼  (Triggers GitHub Actions)
[.github/workflows/deploy.yml]
    ├── 1. Code checkout
    ├── 2. Syntax & module validation
    └── 3. Automated FTP/SFTP Sync
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

Add the following 4 secrets:

| Secret Name | Description | Example Value |
| :--- | :--- | :--- |
| `ORANGEHOST_FTP_SERVER` | OrangeHost FTP Hostname / Server IP | `ftp.scalenovasystems.com` or `cpanelXX.orangehost.com` |
| `ORANGEHOST_FTP_USERNAME` | cPanel / FTP Account Username | `deploy@scalenovasystems.com` |
| `ORANGEHOST_FTP_PASSWORD` | FTP Account Password | *(Your strong secret password)* |
| `ORANGEHOST_FTP_PORT` | FTP Port (Default: 21 for FTPS, 22 for SFTP) | `21` |
| `ORANGEHOST_FTP_PROTOCOL` | Connection Security (`ftps` or `sftp`) | `ftps` |

> [!SECURITY NOTE]
> Never commit passwords or FTP credentials directly into code or config files. GitHub Secrets keep your production credentials encrypted.

---

## 3. Creating a Dedicated Deployment FTP Account in cPanel

1. Log in to your **OrangeHost cPanel**.
2. Navigate to **Files → FTP Accounts**.
3. Create a new account:
   - **Login**: `deployer`
   - **Domain**: `scalenovasystems.com`
   - **Password**: Generate a strong random password.
   - **Directory**: Set strictly to `public_html` (or `public_html/subfolder` if testing in a staging directory).
4. Click **Create FTP Account**.
5. Copy the credentials into the GitHub Secrets configured above.

---

## 4. Branch Strategy & Safe Deployment Workflow

* **`main` Branch**: Production branch. Any push or merged PR immediately triggers the GitHub Action to sync files into `public_html/`.
* **Feature Branches** (`feature/blog-update`, `feature/pricing-change`): Use feature branches for ongoing development. Test locally before creating a Pull Request to `main`.

---

## 5. Rollback Strategy

If a faulty change is accidentally deployed to production:
1. Revert the commit on GitHub:
   ```bash
   git revert HEAD
   git push origin main
   ```
2. GitHub Actions will automatically re-run and restore the previous stable build to `public_html` within 45 seconds.

---

## 6. Local Testing Before Deployment

To preview the website locally on your computer:
* **Option 1 (Python)**:
  ```bash
  python3 -m http.server 8000
  ```
  Open `http://localhost:8000` in your browser.
* **Option 2 (VS Code / IDE)**:
  Use "Live Server" extension on `index.html`.
