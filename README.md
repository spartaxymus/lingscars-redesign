# LINGsCARS Homepage Redesign

A responsive homepage redesign created for the ASU TWC 501 Design Revision assignment. The project applies contrast, repetition, alignment, and proximity to make vehicle-leasing information easier to scan and use while retaining the recognizable LINGsCARS color palette.

## Project goals

- Establish a clear visual hierarchy for the page introduction, featured offer, and search form.
- Consolidate car or van and personal or business choices within one form.
- Present lease terms together using consistent components.
- Improve navigation, contact information, spacing, and responsive behavior.
- Preserve the brand's blue, pink, yellow, and navy color system without allowing decorative elements to compete with primary tasks.

## Design changes

### Contrast

The featured offer uses a dark panel, while the search form uses a white surface. Pink identifies primary actions and active navigation states. Yellow is reserved for the featured-offer label and contact-link interaction states.

### Repetition

Form controls repeat the same label placement, height, border, radius, and spacing. Lease terms share a consistent treatment, and navigation and contact links have repeatable default, hover, active, and keyboard-focus states.

### Alignment

The desktop header aligns the logo, primary navigation, and Account action across three clear positions. The mobile layout centers the contact strip and replaces the desktop navigation with a 44-pixel menu button and structured side drawer.

### Proximity

Related offer details are grouped together. The search form places each label directly above its control, and the benefits section separates supporting information from the primary leasing task.

## Responsive and accessible behavior

- Desktop layout at 1440 pixels with a two-column featured area.
- Mobile layout below 900 pixels with stacked content and a slide-out menu.
- Visible labels for every form control.
- Keyboard-visible focus treatments.
- Semantic navigation, form, and section markup.
- Alternative text for the featured vehicle image.
- Motion is limited to short interface transitions.

## Run locally

From this project directory, start any static web server. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Files

- `index.html` contains the complete responsive page.
- `nissan-x-trail-featured-v2.png` is the featured vehicle asset.
- `design-preview.png` provides a static preview for the repository.

## Design file

The supporting component library, foundations, responsive utilities, and desktop and mobile screens are available in the [Figma design](https://www.figma.com/design/mOOIoKbulIeEGdDdze9Hi3).

## Course context

This is an educational redesign produced for TWC 501 Fundamentals of Technical Communication at Arizona State University. LINGsCARS and its identifying marks belong to their respective owner. This project is not affiliated with or endorsed by LINGsCARS.
