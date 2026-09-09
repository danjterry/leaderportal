# Website audit — response notes (saved Aug 3, 2026)

Boss's audit email reviewed against actual project files. Status: awaiting Dan's go-ahead.

## Verified & agreed — fix when approved
1. **Images (Priority 1)** — CONFIRMED. 12 photos over 6 MB each in site/assets: church-sign 18.6 MB, auditorium-wide 18.1, arrival-flags 18.0, baptism 17.7, kids-outside 16.2, parking-team 16.0, parking-arrival 15.8, bible-study 13.1, kids-playground 11.1, ministry-community 8.4, hero-preaching 6.7. "Minute of loading" is roughly accurate on cell (47 MB at 5–10 Mbps = 40–75s). Fix: compress all to WebP ~q80 sized to display width (like academy-hero.webp, 95 KB).
2. **og:image** — CONFIRMED. Points at 18 MB arrival-flags.jpg sitewide; link previews likely blank. Fix: assets/og-default.jpg 1200x630 <300 KB + width/height tags sitewide.
3. **Kingdom Builders canonical** — CONFIRMED. Says /kingdombuilders (no hyphen). One-line fix.
4. **Equip metadata** — CONFIRMED. No title/description/canonical/OG at all. Copy pattern from lifegroups.
5. **Contrast** — darken #8A8172 body text where on #FDFBF7.
6. **lang="en" + landmarks + skip link** — legit, cheap.
7. **Form labels/autocomplete + role=alert** — legit; helps mobile autofill.
8. **Form defaults** — "Bringing kids? No" + pre-selected Sunday silently record wrong data. Change to unselected + validation (pending Dan's OK).

## Push back
- **Leader portal gate:** soft gate is intentional — it's a "for leaders" signal, not security. Real docs live in shared drive behind Google auth. Netlify Identity = effort, no payoff. Same for staff hub (wayfinding page, not a vault).
- ~~{{ s.thumb }} bug~~ — he was RIGHT: placeholder row rendered before YouTube data loaded, firing a bogus request. Fixed Aug 3 (concede this one in the reply).
- **Analytics:** a request, not a bug. His call GA4 vs Plausible; needs an account on their side.
- **Fonts:** fallbacks chosen to look close; real fix = Adobe license (budget question).
- **Franklin/Brentwood naming:** deliberate branding, he agrees. Nothing to do.

## Open questions for Dan
1. OK to run image compression + og:image + canonical + equip metadata + accessibility pass now? (No decisions needed.)
2. Form defaults → unselected with validation?
3. URL cleanup (touches _redirects + every internal link) — now or next round?
4. Auto-generate Sunday date options from current date?
