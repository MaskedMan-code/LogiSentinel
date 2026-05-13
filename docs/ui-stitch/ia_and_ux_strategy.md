# Secure Fleet Intelligence Agent - Information Architecture & UX Strategy

## Project Overview
An AI-powered diagnostic and privacy-safe operations platform for courier fleets. 
- **Enterprise Side:** High-density, data-driven dashboard for fleet managers. Desktop-first.
- **Driver Side:** High-visibility, touch-optimized assistant for drivers in the field. Mobile-first.

---

## 1. Enterprise Experience (Desktop)
**Primary Goal:** Real-time monitoring, AI-assisted troubleshooting, and secure fleet oversight.

### Screens:
1. **Login / Org Selection:** Secure entry with multi-tenant support.
2. **Overview Dashboard:** High-level metrics (Active Fleet, Critical Alerts, AI Insights).
3. **Fleet Health Summary:** Visualized diagnostic trends and vehicle distribution.
4. **Active Alerts & Incidents:** Prioritized log of vehicle issues with quick-action responses.
5. **Vehicle Detail Page:** Comprehensive telemetry, historical data, and maintenance logs.
6. **Manual Upload & Doc Library:** Knowledge base for AI training (PDF/CSV ingest).
7. **AI Diagnostics Chat:** Natural language interface for querying fleet manuals and telemetry.
8. **Privacy/Redaction Review:** AI-assisted masking of PII (names, faces in dashcam, etc.).
9. **Driver Activity & Messaging:** Real-time dispatch and safety monitoring.
10. **Reports & Export:** Custom CSV/PDF generation for compliance and performance.
11. **Settings & Governance:** RBAC, privacy policies, and system integration controls.

---

## 2. Driver Experience (Mobile)
**Primary Goal:** Safety, compliance, and guided troubleshooting with minimal distraction.

### Screens:
1. **Driver Login:** Simple, biometric-ready entry.
2. **Daily Route Summary:** Key milestones, route safety scores, and vehicle assignment.
3. **Vehicle Assigned:** Pre-trip inspection and vehicle health confirmation.
4. **Report Issue / Capture:** Multi-modal (photo/voice) diagnostic capture.
5. **Manual Lookup:** Driver-friendly access to quick-fix guides.
6. **AI Assistant:** Voice-first or simplified chat for immediate operational help.
7. **Service Checklist:** Step-by-step guided maintenance/safety checks.
8. **Privacy & Consent:** Clear disclosure of data tracking and redaction policies.
9. **Notification Center:** Priority operational alerts.
10. **Offline Fallback:** Cached essential data and local capture queue.

---

## 3. Visual & Technical Direction
- **Visual Style:** "Operational Premium." Deep blues (#0F172A), slate grays, and high-contrast status colors. 
- **Components:** Data-heavy tables, status chips, timeline components, AI "thinking" indicators, and citation badges for AI answers.
- **Implementation:** Designed for React + Tailwind. Focus on utility classes for density and flex/grid for responsive layouts.
- **Privacy Cues:** Subtle redaction patterns (blur/mask icons) and "Secure Data" badges to build trust.