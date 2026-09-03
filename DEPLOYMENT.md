# ScaleNova Production Website Deployment Framework

## Production Architecture

The ScaleNova production website is deployed automatically via:

```text
GitHub Repository (ScaleNova-Pvt-Ltd/Scalenova-Website)
       ↓
`main` branch (Production Source of Truth)
       ↓
GitHub Pages
       ↓
scalenovasys.com (Apex Domain: 185.199.108.153 / 109 / 110 / 111)
       ↓
www.scalenovasys.com (CNAME: hemanthranam.github.io)
```

## Standard Deployment Workflow

Any website change pushed to `main` is automatically built and deployed to production:

```bash
git add .
git commit -m "feat: update website content"
git push origin main
```

## Critical Production Rules
1. **`main` = Production**: Do not maintain divergent production branches. `main` is the sole source of truth.
2. **No FTP or Manual Hosting**: The website is hosted entirely on GitHub Pages. Do not use OrangeHost or FTP for website hosting.
3. **OrangeHost Separation**: OrangeHost is exclusively used for email and related non-website services (MX, SPF, DKIM, cPanel, webmail, app subdomains).
4. **Pre-Push Validation**: Always verify mobile responsiveness, asset links, and HTTPS integrity before pushing to `main`.
