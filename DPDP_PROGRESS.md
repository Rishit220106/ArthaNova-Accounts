# DPDP Compliance Progress

## Scope
Auditing and implementing India Digital Personal Data Protection (DPDP) Act, 2023 readiness controls for the **ArthaNova Accounts** web platform (React/Vite frontend and Express/Node/MongoDB backend).

## Audit Date
September 6, 2026

## Branch
`compliance/dpdp` (Branch created locally; changes committed locally; **NOT PUSHED to remote repository**)

---

## Executive Summary

A comprehensive repository audit was conducted across frontend components, routing, forms, API service layers, backend controllers, models, validators, third-party integrations, security headers, logging mechanisms, and environment configurations.

Technical DPDP-readiness controls were successfully introduced, including:
1. Public **Privacy Notice** page (`/privacy`) with 18 required plain-language disclosures and prominent `LEGAL REVIEW REQUIRED` banners.
2. Public **Data Rights Request** portal (`/data-rights`) and protected backend API (`POST /api/data-rights`, `GET/PATCH /api/admin/data-rights`).
3. Explicit, **unticked-by-default consent controls** on data collection forms with separate purpose options (Service Enquiry Processing vs. Optional Marketing).
4. Server-side audit logging of consent records (`ConsentRecord` Mongoose model).
5. Global **Footer** updates pointing to Privacy Policy (`/privacy`), Terms (`/terms`), Data Rights (`/data-rights`), and publishing the Privacy/Grievance Officer contact (`amisampatacca@gmail.com`).
6. Dedicated **Data Protection & Privacy Clause** added to Terms of Service (`/terms`).
7. Technical **Breach Incident Runbook** created (`BREACH_RUNBOOK.md`) with 14 response steps and notification templates.
8. Complete **Security Gap Audit** identifying unverified CAPTCHA controls and data retention gaps.

> **LEGAL NOTICE**: All legal, policy, and statutory compliance language introduced in this update is marked with **"LEGAL REVIEW REQUIRED"** and constitutes implementation draft text pending review by qualified legal counsel.

---

## Personal Data Inventory

The following personal data collection points were identified in the codebase:

### Collection Point 1: Public Contact Consultation Form (`/contact`)
1. **Data collected**: Name (First & Last), Work Email, Company Name, Target Jurisdiction (UK/US/AU/Multiple), Services Required (multi-select array), Inquiry Message, optional Phone Number.
2. **Where collected**: Frontend Contact Page (`src/pages/Contact.tsx`).
3. **Purpose**: Evaluating corporate accounting requirements, responding to client consultation requests, establishing client-service communication.
4. **Whether required for service**: Yes (Name, Work Email, Services Required, and Message are necessary to respond to the inquiry).
5. **Whether consent is required/appropriate**: Yes (Affirmative explicit consent required prior to form submission; optional marketing consent separate).
6. **Storage location**: MongoDB Atlas database (`Contact` collection).
7. **Retention currently implemented**: Manual / Persistent in database. (*Retention/deletion automation not currently implemented — OPEN ITEM*).
8. **Third parties receiving it**: Resend Technologies (email notification dispatch to `ADMIN_EMAIL`), MongoDB Atlas (database hosting), Render (backend hosting).
9. **Deletion mechanism**: Admin API endpoint (`DELETE /api/admin/contact/:id`) and manual database purging upon Data Rights erasure request.
10. **Current compliance gap**: Automated data retention purge scheduler missing; CAPTCHA validation missing.

### Collection Point 2: Data Rights Request Portal (`/data-rights`)
1. **Data collected**: Full Name, Email Address, Request Type (Access, Correction, Erasure, Withdrawal of Consent, Grievance), Request Details, optional Reference Identifier.
2. **Where collected**: Data Rights Page (`src/pages/DataRights.tsx`).
3. **Purpose**: Fulfilling statutory data principal rights requests under DPDP Act.
4. **Whether required for service**: Yes (Necessary to locate and process the user's data record).
5. **Whether consent is required/appropriate**: Yes (Explicit authorization confirmation required).
6. **Storage location**: MongoDB Atlas database (`DataRightsRequest` collection).
7. **Retention currently implemented**: Persistent until request lifecycle completion.
8. **Third parties receiving it**: Render (hosting), MongoDB Atlas (database).
9. **Deletion mechanism**: Manual database administration.
10. **Current compliance gap**: Automated identity verification step to be formalized by legal/ops team.

### Collection Point 3: Server-Side Consent Audit Trail
1. **Data collected**: User Email, Purpose (`contact_enquiry`, `marketing_communications`, `data_rights_request`), Consent Status (`true`), Policy Version (`2026-09-01`), Source Form, Contact ObjectId Reference.
2. **Where collected**: Backend Controllers (`contactController.js`, `dataRightsController.js`).
3. **Purpose**: Maintaining auditable proof of consent as required by data fiduciary obligations under the DPDP Act.
4. **Storage location**: MongoDB Atlas (`ConsentRecord` collection).
5. **Retention currently implemented**: Retained alongside associated contact records for audit compliance.

### Collection Point 4: Technical & Administrative Data
1. **Data collected**: Admin authentication JWT tokens stored in browser `localStorage` (`arthanov_admin_jwt_token`), Admin password hashes (bcrypt), Security PIN hashes (bcrypt), IP address & User-Agent in HTTP request logs (`morgan`).
2. **Where collected**: Admin Auth Controller (`authController.js`), API middleware.
3. **Purpose**: Authentication, session security, rate limiting, abuse prevention.

---

## Third-Party Services

| Service | Purpose | Data shared | Essential? | Consent required? | Current state |
|---|---|---|---|---|---|
| **Resend** | Transactional Email Service | Name, Email, Company, Country, Services, Inquiry Message | Yes (Infra Processor) | No (Data Processor under contract) | **ACTIVE** in `backend/src/services/emailService.js` |
| **MongoDB Atlas** | Database Hosting | Contact records, Consent records, Data rights requests, Admin credentials | Yes (Infra Provider) | No (Data Processor under contract) | **ACTIVE** (Encrypted DB clusters) |
| **Render** | Backend Application Hosting | Transiting API HTTP payloads and headers | Yes (Hosting Provider) | No (Data Processor under contract) | **ACTIVE** (`arthanova-accounts.onrender.com`) |
| **Cloudflare / Web Host** | Frontend Web Hosting & CDN | Static web assets and public routes | Yes (Hosting Provider) | No (Data Processor under contract) | **ACTIVE** (`arthanovaccounts.com`) |
| **Google Analytics / Trackers** | Analytics | N/A | No | Yes (If used) | **NONE DETECTED** (Not installed) |
| **Meta / LinkedIn Pixel** | Marketing / Retargeting | N/A | No | Yes (If used) | **NONE DETECTED** (Not installed) |
| **CAPTCHA (Turnstile/reCAPTCHA)** | Spam Protection | N/A | Security | No | **NOT IMPLEMENTED** (CRITICAL SECURITY GAP) |

---

## Consent Implementation

- **Unticked Checkboxes**: Updated `src/pages/Contact.tsx` so all consent controls are unchecked (`false`) by default.
- **Separate Purposes**:
  - Checkbox 1 (Required): `[ ] I agree that ArthaNova Accounts may process the information I provide to respond to my enquiry, as described in the Privacy Notice.`
  - Checkbox 2 (Optional Marketing): `[ ] I would like to receive marketing updates, regulatory news, and professional insights from ArthaNova Accounts.`
- **Frontend Validation**: Submission is prevented if the required enquiry processing consent box is unchecked.
- **Backend Validation**: `contactValidator.js` and `contactController.js` validate `consentGiven === true` and reject invalid/missing consent payloads with `400 Bad Request`.
- **Auditable Records**: Successful form submissions automatically create an immutable `ConsentRecord` entry in MongoDB containing email, purpose, policy version, timestamp, and reference ID.

---

## Privacy Notice

- **Route**: `/privacy` (`src/pages/Privacy.tsx`)
- **Status**: **DONE** (Draft text implemented matching design system)
- **Features**:
  - Prominent banner: `LEGAL REVIEW REQUIRED — Implementation Draft Pending Final Counsel Review`.
  - Comprehensive 18-point disclosures covering: Fiduciary identity, data types, collection methods, necessary vs consent processing, retention criteria, third-party processors, security measures, statutory data principal rights, grievance officer contact, and policy revision mechanism.
  - Verified Grievance Contact: `amisampatacca@gmail.com`.

---

## Data Rights

- **Route**: `/data-rights` (`src/pages/DataRights.tsx`)
- **Backend Endpoint**: `POST /api/data-rights`
- **Status**: **DONE**
- **Supported Statutory Request Types**:
  1. Access Personal Data
  2. Correction of Inaccurate Data
  3. Erasure / Deletion of Personal Data
  4. Withdrawal of Consent
  5. Privacy Grievance Redressal
- **Security Safeguards**:
  - Visible warning: *"Do not submit passwords, payment details, bank credentials, authentication PINs, or other sensitive credentials through this form."*
  - Dedicated Mongoose model `DataRightsRequest.js` storing requests safely.
  - Protected Admin API endpoints (`GET /api/admin/data-rights`, `PATCH /api/admin/data-rights/:id`) requiring JWT authentication middleware (`protect`).
  - **NO public GET endpoint** exists for data rights requests.

---

## Grievance Mechanism

The Privacy & Data Protection Grievance Contact (`amisampatacca@gmail.com`) is published clearly across four primary locations:
1. Global Footer (`src/components/layout/Footer.tsx`)
2. Privacy Notice Page (`/privacy`)
3. Data Rights Request Page (`/data-rights`)
4. Terms of Service Page (`/terms`)

---

## Terms Changes

- **Route**: `/terms` (`src/pages/Terms.tsx`)
- **Status**: **DONE**
- **Details**: Added Section 3 (*Personal Data Protection & Privacy*) covering DPDP Act alignment, Privacy Notice reference, user responsibilities against submitting sensitive credentials, data principal rights portal link, and security standards. Marked with `LEGAL REVIEW REQUIRED`.

---

## Consent Banner

- **Status**: **NOT REQUIRED FOR CURRENT DETECTED TRACKING**
- **Finding**: Inspection of the codebase confirmed **no non-essential tracking cookies or third-party analytics scripts** (such as Google Analytics, Meta Pixel, Hotjar, or Clarity) are present. The application only uses `localStorage` for administrative authentication session tokens (`arthanov_admin_jwt_token`).
- **Policy Decision**: No consent banner is deployed because no non-essential trackers exist. If non-essential trackers are added in the future, an explicit opt-in banner ("Accept All", "Reject Non-Essential", "Manage Preferences") must be implemented prior to script loading.

---

## Security Audit

### 1. CAPTCHA Security Gap Audit
- **Status**: **CRITICAL SECURITY GAP**
- **Findings**: CAPTCHA widget is **NOT implemented** on frontend contact or data rights forms. The backend has rate limiting (`express-rate-limit`), but bot submissions can reach the database and trigger Resend email notifications.
- **Recommendation**: Implement Cloudflare Turnstile or Google reCAPTCHA v3 with mandatory server-side token validation.

### 2. Encryption Audit
- **Status**: **PARTIAL**
- **Findings**:
  - Production transport is encrypted over HTTPS (TLS 1.2+).
  - Passwords and Security PINs are properly hashed using `bcryptjs`.
  - Database data at rest relies on MongoDB Atlas cloud volume encryption; field-level application encryption for contact messages is not implemented.

### 3. HTTPS Audit
- **Status**: **PASSED**
- **Findings**: Production base URL configured to `https://arthanova-accounts.onrender.com/api` and client domain `https://arthanovaccounts.com`. No HTTP production endpoints detected.

### 4. Secrets Audit
- **Status**: **PASSED**
- **Findings**: `.env` and `backend/.env` are properly listed in `.gitignore`. No raw MongoDB connection strings, JWT secrets, or Resend API keys were found hardcoded in git-tracked source files.

---

## Breach Runbook

- **File Created**: `BREACH_RUNBOOK.md`
- **Status**: **DONE**
- **Contents**:
  - 14-step operational procedure (Detect, Record, Contain, Assess, Preserve Evidence, Identify Data, Identify Users, Risk Assessment, Internal Escalation, Legal Review, Regulatory Notification, User Notification, Remediation, Post-Incident Review).
  - Notification Template A: Board / Management Incident Notice (Target: 72-hour internal escalation — `LEGAL REVIEW REQUIRED`).
  - Notification Template B: Affected User Notice.
  - Notification Template C: Regulatory / Authority Notice (`LEGAL REVIEW REQUIRED`).

---

## Decisions Made

1. **Policy Version**: Standardized on `2026-09-01`.
2. **Consent State**: Default to `false` for all checkboxes. Require explicit user interaction.
3. **Storage Strategy**: Store server-side `ConsentRecord` and `DataRightsRequest` in MongoDB Atlas under separate schemas.
4. **Administrative Protection**: Data rights requests and contact inquiries accessible only via authenticated JWT endpoints (`protect` middleware).

---

## Lawyer Review Required

The following matters require formal review and sign-off by qualified legal counsel:

- [ ] Verification of Data Fiduciary / Controller legal entity registration and registered corporate address.
- [ ] Legal basis determination (Consent vs. Necessary Processing for contractual steps) for contact inquiries.
- [ ] Exact wording of Privacy Notice (`/privacy`) and Terms Data Protection Clause (`/terms`).
- [ ] Statutory retention period schedules under Indian tax and accounting laws.
- [ ] International data transfer legal mechanisms (India to UK/US/Australia infrastructure).
- [ ] Data Processor contracts and Data Processing Agreements (DPAs) with Resend, Render, and MongoDB Atlas.
- [ ] Data Principal rights fulfillment workflows and verification procedures.
- [ ] Statutory breach notification rules, thresholds, and timelines under DPDP regulations.
- [ ] Grievance officer designation and formal response SLA timelines.
- [ ] Evaluation of Significant Data Fiduciary (SDF) status applicability.

---

## Open Technical Items

1. **CAPTCHA Implementation**: Add Cloudflare Turnstile to `/contact` and `/data-rights` with backend secret verification.
2. **Automated Retention Purge Job**: Implement a cron worker script to automatically purge expired contact submissions and consent records based on legal retention schedules.
3. **Field-Level Encryption**: Evaluate field-level encryption for sensitive message fields stored in MongoDB.

---

## Open Business / Policy Items

1. Confirm official corporate registration address for publication in Privacy Notice.
2. Formally appoint and document Grievance Officer role within company organization chart.
3. Establish operational SLA for responding to data rights requests.

---

## Testing Performed

1. **Production Build Test**: Executed `npm run build` — compiled cleanly with zero TypeScript / JSX errors.
2. **Route Resolution**: Verified `/privacy`, `/terms`, `/data-rights`, `/contact` route mounting in `src/App.tsx`.
3. **Form Validation Logic**: Tested required fields, email format, and unchecked consent validation.
4. **Footer Link Integrity**: Verified Footer links point to `/privacy`, `/terms`, `/data-rights`, and display Grievance email.
5. **Git Safety Check**: Confirmed `.env` files and node_modules are ignored and no secrets are committed.

---

## Files Changed

### Created Files:
- `src/constants/privacy.ts`
- `src/pages/Privacy.tsx`
- `src/pages/Terms.tsx`
- `src/pages/DataRights.tsx`
- `src/services/dataRightsService.ts`
- `backend/src/models/ConsentRecord.js`
- `backend/src/models/DataRightsRequest.js`
- `backend/src/controllers/dataRightsController.js`
- `backend/src/validators/dataRightsValidator.js`
- `backend/src/routes/dataRightsRoutes.js`
- `BREACH_RUNBOOK.md`
- `DPDP_PROGRESS.md`

### Modified Files:
- `src/App.tsx`
- `src/components/layout/Footer.tsx`
- `src/pages/Contact.tsx`
- `src/services/contactService.ts`
- `backend/src/controllers/contactController.js`
- `backend/src/validators/contactValidator.js`
- `backend/src/routes/adminRoutes.js`
- `backend/src/routes/api.js`

---

## Git Status

- **Current Branch**: `compliance/dpdp`
- **Working Tree**: Clean (all changes committed locally)
- **Remote Push Status**: **NOT PUSHED** (Preserved strictly on local `compliance/dpdp` branch as required)
