# QA notes

Checked 2026-09-08 against the running preview.

## Desktop ~1440px

- Header wordmark + nav + call button: pass
- Hero kitchen visible under overlay, CTAs and phone: pass
- Trust strip six cells: pass
- Service cards 2×2; bathroom uses contained first-party still (not upscaled cover): pass
- Work showcase real kitchens: pass
- Differentiation, process, secondary lists: pass
- Testimonials (first-party letters): pass
- Local + family-room photo: pass
- Final CTA + footer: pass
- No horizontal overflow
- Console: no errors on home

## Mobile ~390px

- Phone icon + menu; sheet navigates to Work: pass
- Hero wraps; CTAs stacked; tap targets ≥44px: pass
- Trust strip 2-col: pass
- Full-page capture 390×11073, no overflow
- Contact form honest demo copy after submit: pass

## `/outreach`

- Unlinked from nav/footer
- `noindex` meta
- robots.txt Disallow: /outreach
- Five capture files present and openable

## Production build

`npm run build` + typecheck run at end of this pass.
