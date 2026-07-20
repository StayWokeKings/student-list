# Meridian Property Management — Website

A responsive marketing website for a residential & commercial property management company, built as static HTML/CSS/JS (no build step, no dependencies).

## Pages

- `index.html` — Home: hero, search, featured listings, services overview, stats, testimonials
- `properties.html` — Property listings with a For Rent / For Sale filter
- `services.html` — Service details, onboarding steps, FAQ
- `about.html` — Company story, values, team, timeline
- `contact.html` — Contact form, office info, map embed

## Structure

```
css/style.css   shared stylesheet (design tokens, layout, components)
js/main.js      nav toggle, property filter, FAQ accordion, contact form handling
*.html          pages (each includes an inline SVG icon sprite, no external icon library)
```

## Customizing

This ships with placeholder branding ("Meridian Property Management") and sample listings so it can be previewed immediately. To make it a real site:

1. **Branding** — replace "Meridian Property Management" in the `<title>`, `.brand` markup, and footer across all pages; swap the favicon/logo mark in the header.
2. **Contact info** — update phone/email/address in the topbar, footer, and `contact.html` (including the Google Maps embed URL).
3. **Listings** — replace the sample `.property-card` entries in `index.html` and `properties.html` with real properties. Each card needs a status of `rent` or `sale` set via `data-property-status` for the filter to work.
4. **Photos** — property cards currently use flat SVG illustrations (`pm-1`…`pm-6` gradient classes) instead of photography, since this build has no external image source. Swap the `.property-media` contents for `<img>` tags once you have real photos.
5. **Contact form** — the form in `contact.html` is front-end only (`js/main.js`); wire the `#contact-form` submit handler to your backend or a form service (e.g. Formspree) to actually deliver messages.

## Running locally

No build tooling required — open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
