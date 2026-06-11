# APW Stage 11 - Builder Stop Rules v0.2

## Purpose

This artifact defines the conditions that require the APW Stage 12 Implementation Builder to stop and escalate instead of continuing implementation by assumption.

---

## Mandatory Stop Rules

The builder must stop and escalate when any of the following occur:

| Stop condition | Required response |
|---|---|
| Repo binding is not `APGI-cmy/apgi-public-website` | Stop all writes and ask CS2 to reselect APW. |
| Required source artifact is missing | Record the gap and request disposition. |
| Source artifacts conflict | Record the conflict and request Foreman / CS2 decision. |
| Implementation would require unapproved backend, database, auth, CRM, LMS admin, private API, or contact-form processing | Stop and request scope decision. |
| Route or slug expectations conflict | Stop and resolve against Architecture / QA catalog. |
| Public config values are missing when evidence is required | Record blocker and request configuration. |
| Evidence cannot be produced for a claimed green item | Keep item RED or exceptioned; do not mark green. |
| Build, validation, or CI output is absent | Record unavailable status honestly. |
| Vercel deployment evidence is unavailable when required | Record blocker; do not treat deployability as proven. |
| Current public site shows 404 or scaffold behavior during Stage 12 | Treat as RED until corrected and evidenced. |
| PR #11 scaffold is treated as product baseline | Stop and restate that PR #11 is scaffold reference only. |

---

## Escalation Record

Each stop event must record:

- source or evidence item affected;
- why the builder stopped;
- proposed resolution options;
- CS2 / Johan disposition when available;
- whether implementation can continue safely.

---

## Evidence Rule

No requirement may be closed by intent, inference, or deployability alone. Stage 12 must provide evidence or record an unresolved exception.
