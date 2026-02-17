# QA Report: Sergio Elmer Cancan Estares (#43)

**Date:** 2026-02-16
**URL:** https://cofoundy.github.io/portfolio-sergio-cancan/
**Template:** creativo/smooth-dark (Next.js)
**Status:** PASS

## Data Validation
- [x] Name matches source — "Sergio Cancan Estares" on page matches Sheet/CV
- [x] Email matches source — sergiocancane@gmail.com in Contact section and social links
- [x] Job title matches source — "AI Engineer & Soft Robotics Researcher" consistent with CV (AI Engineer @ Rimac + UTEC researcher)
- [x] Companies listed exist in CV — Rimac Seguros, BCP/Culqi confirmed
- [x] Education matches source — UTEC, Ing. Mecatrónica confirmed
- [x] Publications match source — IEEE LARS 2024, Frontiers in Robotics and AI, Springer BTSym 2021 (all 3 confirmed)
- [x] Certifications match source — Stanford, Duke, AWS mentioned in bio match CV
- [x] No hallucinated data detected

## Clean Deploy
- [x] No "Powered by" / "Made with" / "Built with" visible text
- [x] No "View source" / "View on GitHub" / "Fork this" template links
- [x] No "Lorem ipsum" / "Your name here" / "[placeholder]" text
- [x] No template watermarks (no Vercel badge, no Next.js logo visible)
- [x] No "Diego", "phongna.dev", or "NAPTheDev" template artifacts
- [x] No broken links showing "#" or "javascript:void(0)" as visible text
- [x] No "undefined" or "null" visible in content (only in JS runtime payload, not rendered)

## Technical Health
- [x] CSS loads — HTTP 200 (6133721064391c56.css, 15,988 bytes)
- [x] Avatar image loads — HTTP 200 (avatar.jpg, 79,319 bytes)
- [x] Favicon loads — HTTP 200 (favicon.png, 87,925 bytes)
- [x] Project SVGs load:
  - genai-agents.svg — HTTP 200 (1,392 bytes)
  - chatbot.svg — HTTP 200 (1,085 bytes)
  - soft-robotics.svg — HTTP 200 (1,241 bytes)
  - mlops.svg — HTTP 200 (2,054 bytes)
- [x] Side-project SVGs load:
  - publication.svg — HTTP 200 (497 bytes)
  - engineering.svg — HTTP 200 (404 bytes)
- [x] Social icon SVGs load:
  - email.svg — HTTP 200
  - github.svg — HTTP 200
  - linkedin.svg — HTTP 200

## Links Verification
- [x] Email link: mailto:sergiocancane@gmail.com (correct)
- [x] GitHub link: https://github.com/sergiocanes (correct)
- [x] LinkedIn link: https://www.linkedin.com/in/sergio-cancan (correct)
- [x] Frontiers DOI link: https://doi.org/10.3389/frobt.2023.1289074 (real DOI)
- [x] MLOps GitHub repo link: https://github.com/sergiocanes/mlops_project_lab (correct)

## Design/Theme Checks
- [x] Arctic blue accent (#38bdf8) used in buttons (Demo buttons, email CTA, input focus glow)
- [x] Dark theme — bg-dark applied to body
- [x] Content in Spanish (es) as specified
- [x] HTML lang="es" set correctly
- [x] OpenGraph and Twitter meta tags present with correct data
- [x] basePath correctly set to /portfolio-sergio-cancan
- [x] Static export mode configured (output: "export")

## Content Sections Verified
- [x] Intro — "Sergio" hero text with arctic blue outline animation
- [x] Who Am I — Bio paragraph with avatar photo
- [x] Skills — 12 tech skills (Python, MATLAB, Rust, JS, R, C++, Docker, AWS, GCP, Git, SQL, TensorFlow)
- [x] Main Projects — 4 projects (GenAI Agents, Chatbots, Soft Robotics, MLOps)
- [x] Publications & More — 3 publications + KON Team
- [x] Contact — Email CTA + social links (Email, GitHub, LinkedIn)

## Issues Found
None.

## Notes
- Screenshot not captured (no browser automation tool available in this environment). Visual QA recommended via manual browser check.
- The 404 page is properly configured with Spanish text ("Pagina No Encontrada").
- Loading state includes a spinner with "Cargando portafolio..." text.
- Framer Motion animations configured for intro sequence.
- Locomotive Scroll integrated for smooth scrolling effects.
