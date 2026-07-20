# Meridian Property Management — Website

A marketing and rental-listing website for a residential property management company, built with React, TypeScript, Tailwind CSS, and Vite.

## Pages

- **Home** — hero, stats, featured rentals, services overview, testimonials
- **Properties** — filterable/sortable listing grid (type, bedrooms, price, sort)
- **Property Detail** — full listing info, amenities, and a tour-request form
- **Services** — owner services, resident services, and the leasing process
- **About** — company story, mission, values, and team
- **Contact** — contact form, office info, and emergency maintenance line

## Placeholder content

All company details (name, phone, address, email) live in `src/data/company.ts`, and all rental listings live in `src/data/properties.ts`. Both currently hold realistic **placeholder** data — swap in the real company's information before deploying. Property photos are generated gradient placeholders (`src/components/PropertyImage.tsx`); replace with real photography when available.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint      # run oxlint
```

## Stack

- React 19 + TypeScript
- React Router 7
- Tailwind CSS 4
- Vite
- lucide-react icons
