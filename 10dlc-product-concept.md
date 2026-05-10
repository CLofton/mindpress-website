# 10DLC Express: AI-Powered 10DLC Registration Platform
## Product Concept Document — MindPress

**Version:** 1.0  
**Date:** May 2026  
**Author:** MindPress Product Team  
**Status:** Concept / Pre-MVP

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Market Opportunity](#market-opportunity)
3. [Product Vision](#product-vision)
4. [Core Features](#core-features)
5. [Technical Architecture](#technical-architecture)
6. [Revenue Model](#revenue-model)
7. [Competitive Landscape](#competitive-landscape)
8. [Competitive Advantages](#competitive-advantages)
9. [MVP Scope](#mvp-scope)
10. [Go-to-Market Strategy](#go-to-market-strategy)
11. [Risks & Mitigations](#risks--mitigations)
12. [Success Metrics](#success-metrics)

---

## 1. Problem Statement

### The 10DLC Mandate

As of February 3, 2025, **all businesses sending A2P (Application-to-Person) SMS messages in the United States must register through the 10DLC (10-Digit Long Code) system.** This involves:

1. **Brand Registration** — Registering the business entity with The Campaign Registry (TCR), including EIN verification, business details, and website validation.
2. **Campaign Registration** — Defining each messaging use case (marketing, 2FA, customer service, etc.) with detailed descriptions, sample messages, opt-in flows, and compliance documentation.
3. **Carrier Vetting** — Each major carrier (T-Mobile, AT&T, Verizon) independently reviews and approves campaigns through their own Direct Connect Aggregator (DCA) process.

### Specific Pain Points

**1. Complexity & Confusion**
- The process involves 40+ form fields across brand and campaign registration
- Terminology is opaque (CSP, CNP, DCA, TCR, CTIA — most business owners don't know what any of these mean)
- Requirements differ between carriers, creating a moving target
- Documentation requirements (privacy policy, terms of service, opt-in mechanisms) have specific clause-level requirements that aren't well-documented

**2. High Rejection Rates**
The 7 most common rejection reasons (per industry data):
- **Merge field variables** in sample messages (e.g., `{{contact.first_name}}` passed as-is)
- **Missing STOP/opt-out language** in sample messages
- **Vague campaign descriptions** that don't specify WHO receives messages, WHAT content, and HOW they opted in
- **Missing privacy policy non-sharing clause** ("No mobile information will be shared with third parties/affiliates for marketing/promotional purposes")
- **Pre-checked consent checkboxes** on opt-in forms
- **Incomplete Terms of Service SMS section** (must include all 6 required clauses: program identity, STOP opt-out, HELP keyword, carrier liability, message frequency, privacy policy cross-link)
- **Missing opt-in method specification** (must name exact mechanism: website form, QR code, paper form, keyword)

**3. Painful Timelines**
- Brand registration: 1-5 business days
- Campaign registration: 3-15 business days (sometimes longer)
- Rejection + resubmission cycle: adds 5-15 additional business days per attempt
- Total realistic timeline: **2-6 weeks** for first-time registrants
- Some businesses report 3+ rejection cycles before approval

**4. Financial Costs of Failure**
- Each campaign resubmission costs **$15.75** in TCR fees
- T-Mobile charges a **$250 non-use fee** for campaigns inactive for 60+ days (so delayed registrations that sit idle get penalized)
- Lost revenue from inability to send SMS during registration limbo
- Brand vetting for higher throughput costs an additional **$40**

**5. Ongoing Compliance Burden**
- Campaign "drift" — messages sent that don't match registered use case
- Carrier policy changes require re-registration or updates
- Multiple campaigns require separate registrations (marketing ≠ 2FA ≠ alerts)
- Each phone number must be associated with a registered campaign

### Who Feels This Pain?

- **SMBs** using platforms like GoHighLevel (GHL), HubSpot, or Salesforce for SMS
- **Marketing agencies** managing 10DLC for dozens of clients
- **SaaS companies** adding SMS features to their products
- **CPaaS resellers** onboarding business customers onto Twilio, Bandwidth, etc.
- **Healthcare, real estate, financial services** — regulated industries with complex compliance needs

---

## 2. Market Opportunity

### Market Size

- **33.2 million small businesses** in the United States (SBA, 2024)
- **~6.5 million businesses** actively use some form of business SMS/text messaging
- **U.S. SMS marketing market** valued at **$2.86 billion in 2023**, projected CAGR of **20.8%** through 2030 (Grand View Research)
- Every single business sending A2P SMS needs 10DLC registration — **this is a mandatory compliance market, not optional**

### Serviceable Addressable Market (SAM)

- ~2-3 million businesses that need 10DLC registration but haven't completed it or are struggling with it
- Average business needs 1.5-3 campaign registrations
- At $99-299 per registration, the SAM is **$200M-$900M annually**
- Recurring revenue from monitoring, compliance updates, and new campaign additions

### Market Tailwinds

- **Feb 2025 hard deadline** means carriers now block unregistered 10DLC traffic entirely
- **Growing SMS adoption** across industries (appointment reminders, 2FA, marketing)
- **Carrier enforcement tightening** — T-Mobile, AT&T, and Verizon are increasingly strict
- **GoHighLevel ecosystem** alone has 100,000+ agencies, each managing multiple sub-accounts
- **CTIA guidelines evolving** — businesses need ongoing compliance, not just one-time registration

---

## 3. Product Vision

### "10DLC Registration in Hours, Not Days"

**10DLC Express** is an AI-powered platform that transforms the painful, multi-week 10DLC registration process into a guided, intelligent experience that gets businesses approved in hours — not days or weeks.

### Core Value Proposition

> Give us your business URL and EIN. Our AI handles the rest — writing compliant campaign descriptions, generating proper sample messages, validating your privacy policy and terms of service, and submitting everything to TCR and carriers with pre-validated accuracy. First-time approval rate: 95%+.

### Design Principles

1. **Zero jargon** — Business owners never see "CSP," "DCA," or "CNP"
2. **AI-first, not form-first** — We ask simple questions and generate compliant answers
3. **Pre-validation, not post-rejection** — Catch every issue before submission
4. **Transparent status** — Real-time visibility into where your registration stands across all carriers
5. **One-click fixes** — When issues arise, AI suggests and applies corrections automatically

---

## 4. Core Features

### 4.1 AI Smart Form-Filling

**Input:** Business URL + EIN  
**Output:** Pre-populated brand registration with all 40+ fields completed

- Scrapes business website for company name, address, industry, description, contact info
- Cross-references EIN with IRS business database for legal entity validation
- Auto-detects business vertical and suggests appropriate use cases
- Pre-fills TCR brand registration fields with validated data
- Confidence scoring on each field — flags anything that needs human confirmation

### 4.2 Pre-Validation Engine

A rules engine that checks **80+ compliance criteria** before any submission:

- **Privacy Policy Scanner** — Checks for required non-sharing clause, SMS-specific section, contact information
- **Terms of Service Validator** — Verifies all 6 required SMS clauses are present
- **Sample Message Analyzer** — Detects merge fields, missing opt-out language, prohibited content
- **Website Validator** — Confirms working URL, SSL certificate, business information present, contact details visible
- **Opt-In Flow Checker** — Validates consent mechanism description matches actual website implementation
- **Campaign Description Scorer** — Ensures WHO/WHAT/HOW are explicitly stated
- **EIN Cross-Validation** — Confirms business name matches EIN records

Each check produces:
- ✅ Pass / ⚠️ Warning / ❌ Fail status
- Plain-English explanation of the issue
- One-click AI fix or guided resolution

### 4.3 Smart Campaign Description Writer

The #1 rejection cause is poorly written campaign descriptions. Our AI:

- Takes simple inputs: "What kind of messages do you send?" + "How do people sign up?"
- Generates TCR-compliant campaign descriptions that explicitly state:
  - WHO receives messages (specific audience description)
  - WHAT content they receive (specific message types)
  - HOW they opted in (exact mechanism with URL)
- Generates 5 compliant sample messages per campaign (with proper opt-out language, no merge fields)
- Adapts language to the specific use case (marketing vs. 2FA vs. customer service)
- A/B tested against known-approved descriptions for maximum approval probability

### 4.4 Rejection Auto-Fix

When a registration is rejected (it still happens ~5% of the time even with pre-validation):

- **Automatic rejection code parsing** — Maps TCR/carrier rejection codes to specific issues
- **AI-generated fix suggestions** — "Your campaign description was rejected for being too vague. Here's a rewritten version that addresses the specific feedback."
- **One-click resubmission** — Apply fix and resubmit without starting over
- **Learning loop** — Every rejection/approval pair improves our pre-validation engine
- **Rejection pattern database** — Accumulated knowledge of what carriers actually enforce vs. what's documented

### 4.5 Real-Time Status Monitoring Dashboard

- **Unified view** across TCR, T-Mobile, AT&T, and Verizon
- **Status timeline** — See exactly where each registration is in the pipeline
- **Proactive alerts** — Email/SMS/webhook notifications on status changes
- **SLA tracking** — How long each step is taking vs. expected timeline
- **Bulk management** — Agencies can manage 100+ client registrations from one dashboard
- **T-Mobile non-use fee monitoring** — Alerts before the 60-day inactivity window

### 4.6 Multi-Carrier Parallel Submission

- Submit to all carrier DCAs simultaneously (not sequentially)
- Track carrier-specific approval status independently
- Handle carrier-specific requirements automatically (T-Mobile vs. AT&T have different nuances)
- Automatic retry logic for transient failures
- Carrier throughput optimization — request appropriate message throughput based on use case

### 4.7 Compliance Toolkit

- **Privacy Policy Generator** — Generates SMS-compliant privacy policy section with all required clauses
- **Terms of Service Generator** — Creates compliant ToS with all 6 required SMS sections
- **Opt-In Widget** — Embeddable consent collection widget with proper checkbox behavior (unchecked by default, optional for marketing)
- **Compliance Audit** — Ongoing monitoring that your website still meets requirements

---

## 5. Technical Architecture

### 5.1 System Overview

```
┌─────────────────────────────────────────────────────────┐
│                    10DLC Express Platform                 │
├───────────────┬──────────────┬───────────────────────────┤
│  Web App (UI) │  AI Engine   │  Compliance Rules Engine   │
├───────────────┴──────────────┴───────────────────────────┤
│                   Core API Layer                         │
├──────────┬──────────┬──────────┬────────────────────────┤
│ TCR API  │ Carrier  │ Business │  Notification           │
│ Gateway  │ DCAs     │ Data APIs│  Service                │
└──────────┴──────────┴──────────┴────────────────────────┘
```

### 5.2 CSP Relationship (Critical)

To submit registrations to TCR, we must either:

**Option A: Become a CSP (Campaign Service Provider)**
- Register directly with TCR as a CSP
- Get assigned a CSP ID
- Full API access to TCR's CSP API (brand registration, campaign registration, campaign sharing with CNPs)
- **Pros:** Full control, lower per-transaction costs, direct carrier relationships
- **Cons:** Higher barrier to entry, requires carrier agreements, compliance obligations
- **Timeline:** 2-4 months to establish

**Option B: Partner with existing CSPs**
- White-label or API integration with existing CSPs (Twilio, Bandwidth, Sinch, Vonage, SignalWire)
- Submit registrations through their APIs
- **Pros:** Faster to market, leverages existing carrier relationships
- **Cons:** Dependent on partner, higher per-transaction costs, less control
- **This is the MVP approach**

**Option C: Hybrid**
- Launch with CSP partnerships (Option B)
- Apply for own CSP status in parallel
- Migrate to direct CSP access as volume grows

### 5.3 TCR API Integration

TCR provides a RESTful API for CSPs:

**Brand Registration Endpoints:**
- `POST /brand` — Register a new brand
- `GET /brand/{brandId}` — Get brand status
- `PUT /brand/{brandId}` — Update brand information
- `POST /brand/{brandId}/vet` — Request enhanced brand vetting ($40)

**Campaign Registration Endpoints:**
- `POST /campaign` — Register a new campaign
- `GET /campaign/{campaignId}` — Get campaign status/details
- `PUT /campaign/{campaignId}` — Update campaign
- `POST /campaign/{campaignId}/share` — Share campaign with CNP (Connectivity Partner)

**Key Data Objects:**
- Brand: legal name, DBA, EIN, entity type, country, vertical, website, stock info
- Campaign: use case, sub-use cases, description, sample messages (1-5), message flow, opt-in flow, opt-out keywords, help keywords, embedded links flag, embedded phone flag, number pool flag, age-gated flag, subscriber opt-in/out, auto-renewal

### 5.4 AI Engine

**Components:**
- **Business Data Extraction** — Web scraping + NLP to extract business info from websites
- **EIN Validation** — IRS FEIN lookup / SEC EDGAR for public companies
- **Campaign Description Generator** — Fine-tuned LLM trained on thousands of approved campaign descriptions
- **Sample Message Generator** — Generates compliant sample messages per use case
- **Pre-Validation Model** — ML model scoring registration likelihood of approval (trained on rejection/approval data)
- **Rejection Parser** — NLP model that maps rejection codes + free-text feedback to actionable fixes

**Training Data:**
- Publicly documented rejection reasons from TCR, carrier documentation
- Partner CSP anonymized approval/rejection data (aggregated)
- CTIA Messaging Principles and Best Practices guidelines
- Community-shared rejection patterns (forums, documentation)

### 5.5 Tech Stack

- **Frontend:** Next.js / React with dark-mode UI matching MindPress brand
- **Backend:** Node.js / Python FastAPI
- **Database:** PostgreSQL (registration data) + Redis (caching, queue)
- **AI/ML:** OpenAI GPT-4o / Claude for text generation, custom fine-tuned models for validation
- **Queue:** Bull/BullMQ for async registration processing
- **Monitoring:** Webhooks + polling for TCR/carrier status updates
- **Auth:** Clerk or Auth0 (SSO for agency accounts)
- **Hosting:** AWS / Vercel

---

## 6. Revenue Model

### 6.1 Per-Registration Pricing (Primary — MVP)

| Tier | Price | Includes |
|------|-------|----------|
| Single Brand + Campaign | $149 | AI form-filling, pre-validation, submission, monitoring |
| Additional Campaign (same brand) | $79 | Campaign-only registration |
| Brand Vetting Add-on | $59 | Enhanced vetting for higher throughput (includes $40 TCR fee) |
| Rejection Fix & Resubmit | $29 | AI-powered rejection analysis + fix + resubmission |

**Unit Economics:**
- TCR brand registration fee: ~$4/brand
- TCR campaign registration fee: ~$10-$15/campaign
- Carrier pass-through fees: ~$5-$10
- AI/compute costs: ~$2-5 per registration
- **Gross margin: 70-80%**

### 6.2 SaaS Subscription (Growth Phase)

| Plan | Price/mo | Features |
|------|----------|----------|
| Starter | $49/mo | 3 registrations/mo, dashboard, monitoring |
| Agency | $199/mo | 25 registrations/mo, bulk tools, sub-accounts, API |
| Enterprise | $499/mo | Unlimited registrations, white-label, dedicated support, custom integrations |

### 6.3 White-Label / API (Scale Phase)

For CPaaS providers, SaaS platforms, and agencies who want to embed 10DLC registration into their own products:

- **API access:** $0.50-2.00 per API call (registration submission)
- **White-label platform:** $2,000-5,000/mo licensing fee
- **Revenue share:** 20-30% of end-customer fees

### 6.4 Revenue Projections (Conservative)

| Timeframe | Monthly Revenue | Registrations/mo |
|-----------|----------------|-------------------|
| Month 1-3 (MVP) | $5K-15K | 50-100 |
| Month 4-6 | $25K-60K | 200-500 |
| Month 7-12 | $80K-200K | 800-2,000 |
| Year 2 | $300K-600K/mo | 3,000-6,000 |

---

## 7. Competitive Landscape

### 7.1 Current Solutions & Their Shortcomings

**Twilio**
- Offers 10DLC registration through their console
- **Shortcomings:** Generic forms with no guidance, no pre-validation, no AI assistance, slow approval times (5-15 business days), poor error messages on rejection, expensive per-message surcharges, support is slow for registration issues
- Twilio treats 10DLC as a compliance checkbox, not a product

**Bandwidth**
- Direct carrier connections, offers registration through API
- **Shortcomings:** Developer-focused, no self-service UI for non-technical users, limited guidance on campaign descriptions, no pre-validation tooling

**Sinch / MessageBird**
- Registration through platform
- **Shortcomings:** Similar form-based approach, no AI assistance, long wait times, limited visibility into carrier-specific status

**Vonage (Ericsson)**
- CSP with TCR integration
- **Shortcomings:** Complex onboarding, limited documentation for 10DLC specifically, enterprise-focused

**SignalWire**
- Claims fastest approval turnaround
- **Shortcomings:** Still a manual form process, smaller ecosystem, less documentation

**Easy A2P (easya2p.app)**
- Compliance checking tool for GHL users
- **Shortcomings:** Only checks — doesn't submit registrations, limited to GoHighLevel ecosystem, no AI form-filling, no end-to-end workflow

**Campaign Verify**
- Verification/audit tool
- **Shortcomings:** Focuses on auditing existing registrations, not streamlining new ones

### 7.2 Gap Analysis

No existing solution provides:
- ✅ AI-powered form completion from business URL + EIN
- ✅ Pre-submission validation against 80+ compliance rules
- ✅ AI-generated campaign descriptions optimized for approval
- ✅ Automated rejection diagnosis and one-click fix
- ✅ Unified multi-carrier status dashboard
- ✅ End-to-end guided experience for non-technical users
- ✅ Agency-scale bulk management tools

---

## 8. Competitive Advantages

### 8.1 Data Moat
Every registration that flows through our platform — approved or rejected — improves our AI models. Over time, we'll have the largest dataset of what gets approved and what gets rejected, creating an increasingly accurate pre-validation engine.

### 8.2 Speed Advantage
Pre-validation means dramatically fewer rejections. Fewer rejections means faster end-to-end registration. Target: **95%+ first-time approval rate** vs. industry average of ~60-70%.

### 8.3 Simplicity
The only solution where a business owner can go from "I need to register" to "I'm registered" without understanding TCR, CSPs, DCAs, or CTIA guidelines.

### 8.4 Agency Multiplier
One agency using our platform for 50 clients creates 50x the value and 50x the data, creating a powerful network effect in the agency/SMB ecosystem.

### 8.5 Compliance-as-a-Service
Registration is just the beginning. Ongoing compliance monitoring (website changes, policy updates, carrier rule changes) creates sticky recurring revenue.

---

## 9. MVP Scope

### Phase 1: MVP (Weeks 1-8)

**Core Flow:**
1. User enters business URL + EIN
2. AI extracts business data and pre-fills brand registration
3. User selects messaging use case from guided wizard
4. AI generates campaign description + sample messages
5. Pre-validation engine checks everything against 80+ rules
6. User reviews and confirms
7. Submission to TCR via partner CSP API
8. Status monitoring dashboard with email notifications

**Technical Requirements:**
- Web scraping service for business data extraction
- Integration with 1 partner CSP (likely Bandwidth or Sinch — more API-friendly than Twilio)
- GPT-4o / Claude API integration for text generation
- Pre-validation rules engine (rule-based, not ML — for v1)
- Basic dashboard (React/Next.js)
- PostgreSQL for registration data
- Email notification service (SendGrid/Resend)

**What's NOT in MVP:**
- Own CSP status (use partner CSP)
- White-label/API for third parties
- Compliance toolkit (policy/ToS generators)
- Rejection auto-fix (manual guidance for v1)
- Opt-in widget
- Bulk/agency features

### Phase 2: Growth (Weeks 9-16)

- Rejection auto-fix with AI
- Agency dashboard with sub-accounts
- Compliance toolkit (privacy policy generator, ToS generator)
- Multiple CSP integrations for redundancy
- Bulk registration tools (CSV upload)
- Webhook/API for status updates

### Phase 3: Scale (Weeks 17-24)

- Apply for own CSP status
- White-label platform for CPaaS providers
- Public API
- Advanced analytics (approval rates by industry, carrier response times)
- GoHighLevel / HubSpot integrations
- Opt-in widget builder
- Ongoing compliance monitoring service

---

## 10. Go-to-Market Strategy

### 10.1 Target Segments (Priority Order)

1. **GoHighLevel agencies** — Largest pain point, vocal community, 100K+ agencies
2. **Marketing agencies** managing SMS for clients
3. **SaaS companies** adding SMS to their product
4. **SMBs** doing their own 10DLC registration
5. **CPaaS resellers** (white-label opportunity)

### 10.2 Launch Strategy

**Pre-Launch (Weeks 1-4):**
- Build waitlist landing page (10dlc.html)
- Content marketing: "The Complete Guide to 10DLC Registration" (SEO play)
- Engage in GHL Facebook groups, SMS marketing communities
- Partner outreach to 2-3 CSPs for API access

**Beta Launch (Weeks 5-8):**
- Invite 20-50 beta users from waitlist
- Offer free registrations in exchange for feedback
- Iterate on AI quality and pre-validation accuracy
- Collect approval rate data for marketing

**Public Launch (Week 9+):**
- PR push with approval rate data ("95% first-time approval rate")
- Affiliate program for agencies (20% commission on referrals)
- YouTube content: "How to register 10DLC in 30 minutes" 
- Paid ads targeting "10DLC registration" and "A2P 10DLC rejected" keywords
- Partnership with GHL as marketplace integration

### 10.3 Content & SEO Strategy

Target keywords:
- "10DLC registration" (high intent)
- "A2P 10DLC rejected" (pain-point)
- "10DLC campaign description examples" (informational → conversion)
- "TCR registration help" (high intent)
- "10DLC compliance guide" (top-of-funnel)

Content pieces:
- Comprehensive 10DLC guide (pillar page)
- "7 Reasons Your 10DLC Gets Rejected" (mirrors common searches)
- "10DLC Registration Checklist" (lead magnet)
- "10DLC for [Industry]" series (healthcare, real estate, financial services)
- Video walkthroughs on YouTube

### 10.4 Pricing Strategy

Launch at **$99/registration** (introductory) to build volume and data, then increase to $149-199 as approval rates improve and brand strengthens. Free tier: pre-validation check only (no submission) — generates leads and demonstrates value.

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| TCR changes API/requirements | Medium | High | Maintain multiple CSP partnerships; monitor TCR announcements; build abstraction layer |
| CSP partner restricts access | Medium | High | Multi-CSP strategy from Phase 2; pursue own CSP status |
| Low first-time approval rate initially | High | Medium | Start with rule-based validation; iterate rapidly with real data; over-invest in campaign description quality |
| Carrier policy changes | Medium | Medium | Compliance monitoring service; automated alerts; rapid rule updates |
| Large CPaaS adds similar AI features | Medium | Medium | Move fast; build data moat; focus on agency/SMB segment they underserve |
| Regulatory changes to 10DLC system | Low | High | Diversify into toll-free and short code registration |

---

## 12. Success Metrics

### MVP Success Criteria (Month 3)

- **50+ registrations** processed
- **90%+ first-time approval rate** (vs. ~65% industry baseline)
- **< 4 hour average** time from start to TCR submission (user-side)
- **< 3 day average** total time to full carrier approval
- **NPS > 50** from beta users
- **$5K+ MRR**

### Growth Metrics (Month 6-12)

- **500+ registrations/month**
- **95%+ first-time approval rate**
- **3+ CSP integrations**
- **Agency tier adoption** (20%+ of revenue from agencies)
- **$50K+ MRR**
- **< 2 day average** total registration time

### Scale Metrics (Year 2)

- **2,000+ registrations/month**
- **Own CSP status** approved and operational
- **White-label customers** (3+)
- **$300K+ MRR**
- **Industry-recognized** approval rate data

---

## Appendix A: 10DLC Registration Flow (Current State)

```
Business Owner
    │
    ├─→ Choose CSP (Twilio, Bandwidth, etc.)
    │
    ├─→ Brand Registration (TCR)
    │     ├─ Legal business name, DBA
    │     ├─ EIN / Tax ID
    │     ├─ Business address
    │     ├─ Website URL
    │     ├─ Industry vertical
    │     ├─ Entity type (sole prop, LLC, corp)
    │     ├─ Stock exchange info (if public)
    │     └─ Contact information
    │     │
    │     └─→ TCR Review (1-5 business days)
    │           ├─ Approved → Brand Score assigned
    │           └─ Rejected → Fix & resubmit
    │
    ├─→ Campaign Registration (TCR)
    │     ├─ Use case selection
    │     ├─ Campaign description (WHO/WHAT/HOW)
    │     ├─ Sample messages (1-5)
    │     ├─ Message flow description
    │     ├─ Opt-in/opt-out mechanisms
    │     ├─ Help keyword support
    │     ├─ Privacy policy URL
    │     ├─ Terms of service URL
    │     └─ Various flags (embedded links, age-gated, etc.)
    │     │
    │     └─→ TCR + Carrier Review (3-15 business days)
    │           ├─ T-Mobile DCA review
    │           ├─ AT&T DCA review  
    │           ├─ Verizon DCA review
    │           ├─ Approved → Campaign active
    │           └─ Rejected → Fix & resubmit ($15.75 fee)
    │
    └─→ Number Assignment
          └─ Associate phone number(s) with approved campaign
```

## Appendix B: TCR Rejection Code Reference

Common rejection codes and their meanings:

- **501** — Campaign description too vague / missing required elements
- **502** — Sample messages contain prohibited content or formatting
- **503** — Privacy policy missing required SMS clauses
- **504** — Terms of service incomplete
- **505** — Opt-in mechanism not properly described
- **506** — Website not accessible or missing required information
- **507** — EIN mismatch with business name
- **508** — Prohibited use case
- **509** — Missing opt-out language in samples
- **510** — Pre-checked consent boxes detected

---

*This document is a living product concept. Updates will be made as market research continues and technical discovery progresses.*

*© 2026 MindPress AI — Confidential*
