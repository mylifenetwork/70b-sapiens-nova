# Enrolment Backend Plan

## Current Frontend Flow
- Entry points to enrolment are `/checkout` links from home and programme pages.
- The form currently runs fully on client side and generates a `mailto:` URL.
- No backend endpoint is called, so there is no server-side validation, persistence, or spam control.

## Google Sheet Feasibility
### What is feasible now
- Posting directly from browser to Google Apps Script Web App is technically possible.

### Why it is not recommended in current architecture
- This project is configured as static export (`next.config.mjs` has `output: 'export'`), so there is no trusted server runtime.
- Any browser-only integration exposes endpoint details and cannot safely protect secrets.
- Browser direct write has weak abuse protection and limited auditability for enrolment data.

## SQL Workbench Preparation Completed
- Added canonical submission shape in `app/checkout/submission.ts`.
- Added initial MySQL schema in `sql-workbench-enrollments.sql`.
- Added SQL validation/mapping helpers in `lib/enrolments.ts`.
- Added MySQL pool helper in `lib/mysql.ts`.
- Added setup checklist in `SQL_WORKBENCH_SETUP.md`.

## Next Implementation Steps
1. Provision MySQL and run `sql-workbench-enrollments.sql` via SQL Workbench.
2. Deploy a backend service (Next.js server mode, Cloud Run, or similar) with `POST /api/enrolments`.
3. Add validation (zod/joi), rate limiting, and CAPTCHA.
4. Update `/checkout` submit flow to `fetch('/api/enrolments')` and keep mail fallback if API fails.
5. Add admin exports/reporting and status updates (new/verified/contacted/closed).
