# 🚢 Infrastructure, Docker & Hosting Checklist

- [ ] **Dockerization**: 
    - Create/Update the `Dockerfile` using multi-stage builds.
    - Update `docker-compose.yml`.
- [ ] **Security - Environment Variables**: 
    - Ensure all secrets are in `.env` or `.env.local`.
    - **CRITICAL**: Verify `.gitignore` includes all `.env` files to prevent leak to repository.
- [ ] **Security - Attack Protection**:
    - Implement **XSS (Cross-Site Scripting)** protection (e.g., sanitizing inputs, CSP headers).
    - Implement **Injection Attack** prevention (e.g., parameterized queries, ORM safety).
- [ ] **SSL Certificate**: Verify sitewide enforcement (HSTS) and no Mixed Content.
- [ ] **Cloudflare CDN**:
    - Enable **Proxy (Orange Cloud)**.
    - Enable **Auto Minify** and **Rocket Loader**.
    - Set "Always Use HTTPS" Page Rule.
- [ ] **Performance Audit**: Test for **Interaction to Next Paint (INP)** < 200ms.