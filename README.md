# LINGsCARS Homepage Redesign

A responsive front-end concept that reorganizes the LINGsCARS homepage around clearer vehicle-leasing decisions while preserving its energetic visual identity.

## Live website

**https://spartaxymus.github.io/lingscars-redesign/**

## Project overview

This redesign was created for the ASU TWC 501 Design Revision assignment. The original experience presents many promotional, navigational, and leasing elements at the same visual priority. This version creates a more predictable path:

1. Understand the featured offer.
2. Review its price and lease conditions.
3. Choose personal or business leasing.
4. Filter vehicles by make, model, body style, and budget.
5. Find support, quick links, and legal information.

## Design goals

- Establish a clear hierarchy across the introduction, offer, and search form.
- Consolidate repeated car, van, personal, and business choices.
- Keep related pricing and lease terms together.
- Create reusable visual rules for controls, cards, and interaction states.
- Improve navigation and content flow across desktop and mobile layouts.
- Retain the recognizable blue, pink, yellow, and navy palette.

## Design principles

### Proximity

Price, VAT status, contract length, initial rental, mileage, and vehicle details are grouped as one decision-ready offer.

### Alignment

The desktop layout uses stable columns and consistent edges. On smaller screens, the same content becomes a predictable single-column sequence.

### Contrast

The dark featured-offer panel and light search surface distinguish browsing from form completion. Pink identifies primary actions, while yellow is reserved for important offer cues.

### Repetition

Form fields, labels, buttons, cards, navigation items, and focus states reuse consistent spacing, sizing, borders, and radii.

## Responsive and accessibility considerations

- Responsive two-column and stacked layouts
- 44-pixel mobile navigation target
- Persistent visible labels for form controls
- Keyboard-visible focus treatments
- Semantic header, navigation, form, sections, and footer
- Descriptive alternative text for the featured vehicle
- Escape-key support for closing the mobile drawer
- Short transitions with no continuous motion

These implementation choices support accessibility, but they are not a claim of complete WCAG conformance. Formal assistive-technology and usability testing remain future validation work.

## Technology

- Semantic HTML5
- Modern CSS Grid and Flexbox
- Vanilla JavaScript
- GitHub Pages

The website has no dependencies or build step.

## Run locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Repository structure

```text
.
├── assets/
│   ├── css/main.css
│   ├── images/
│   │   ├── design-preview.png
│   │   └── nissan-x-trail-featured.png
│   └── js/navigation.js
├── docs/
│   ├── DESIGN-RATIONALE.md
│   └── ROADMAP.md
├── .gitignore
├── .nojekyll
├── index.html
└── README.md
```

## Design source

The foundations, components, utilities, and responsive screens are available in the [Figma design file](https://www.figma.com/design/mOOIoKbulIeEGdDdze9Hi3).

## Project status

The responsive homepage concept is implemented. Search controls and navigation links are interface demonstrations and are not connected to a production leasing system.

## Academic and brand notice

This is an educational redesign produced for TWC 501 Fundamentals of Technical Communication at Arizona State University. LINGsCARS and its identifying marks belong to their respective owner. This project is not affiliated with or endorsed by LINGsCARS.

## Author

Designed and developed by **Pratik Basu**.
