# LawBey Library — social posters

Three branded Instagram-size posters (1080×1080) plus story/portrait variants (1080×1920) announcing what the LawBey Library actually holds.

Source is HTML/CSS so type stays real, selectable, and editable. PNGs are rendered from these files — do not typeset statute titles in image generators.

## Series

| # | File | Theme |
|---|---|---|
| 01 | `src/01-new-this-weekend.html` | New this weekend — questions people were already asking |
| 02 | `src/02-civic.html` | Everyday civic already in LawBey |
| 03 | `src/03-carta.html` | CARTA finance / corporate headline acts |

Shared chrome: Statute Lines mark + LawBey wordmark (Cormorant + amber italic *Bey*), amber rule, DM Mono kicker, `beta.lawbey.com` footer. Identity tokens from `lawbey-logo-system.html` (ink `#111827`, amber `#C8922A` / `#E0AE52`, teal `#1B6068` on CARTA only).

Square is the primary post. Stories keep the same type hierarchy with more leading — skip a story export if a later edit makes it sparse or cramped.

## Exports

Rendered PNGs live in `export/`:

- `01-new-this-weekend-1080.png` / `01-new-this-weekend-story.png`
- `02-civic-1080.png` / `02-civic-story.png`
- `03-carta-1080.png` / `03-carta-story.png`

Re-render:

```bash
node docs/social/library-drop/render.mjs
```

Requires Chrome at `/usr/local/bin/google-chrome` (or set `CHROME_PATH`) and `puppeteer-core` (the script installs it under `/tmp` if needed).

## Suggested captions (paste-ready)

**01 — New this weekend**

People were already asking LawBey about family, rent, crime, immigration, work disputes, NIB, and VAT. Those statutes are in the Library this weekend — so answers can be grounded in the text. One Tax Bahamas is a login (BIN / Inland Revenue), not a new levy. Ask at beta.lawbey.com

**02 — Everyday civic**

The civic set people already used on LawBey: the Constitution of The Bahamas, the Employment Act, Firearms, Road Traffic, domestic violence protection orders, consumer protection, and data protection. Still the default for jobs, rights, guns, and the road. beta.lawbey.com

**03 — CARTA**

The financial/corporate stack LawBey already carried — Companies, IBC, banks and trust, securities, investment funds, DARE digital assets, trustees and foundations, plus financial transactions reporting. Headline acts only. beta.lawbey.com

## On the graphics

- Graphic 1 frames One Tax as an Inland Revenue **login**, not a tax. Optional DMTT footnote: large MNE groups only, not a Nassau shop.
- Correct spelling: The Bahamas; chapter numbers as given in the handoff.

## Explicitly excluded

Do **not** add these to this drop:

- Planning and Subdivision / Hotels / Airbnb (parked)
- Real Property Tax (parked with property)
- Court procedure / CPR, defamation, quieting titles
- DMTT except the Graphic 1 footnote
- CARTA’s 141 markdown part files — headline acts only
