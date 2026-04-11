# Akademika Semesta Nusantara — Website

An international research and advocacy institute advancing **gender justice through Islamic scholarship**.

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero carousel with program updates, focus areas, impact stats, publications |
| **Profile** | `profile.html` | History timeline, vision/mission, core values, team |
| **Programs** | `program.html` | Filterable program listing (Research, Advocacy, Fellowship, Dialogue) |
| **Publications** | `publication.html` | Filterable publication library with download links |
| **Contact** | `contact.html` | Contact form, office info, regional offices, social links |

## 📁 Project Structure

```
├── index.html                # Homepage
├── profile.html              # About / Profile page
├── program.html              # Programs listing
├── publication.html          # Publications library
├── contact.html              # Contact page
├── css/
│   ├── reset.css             # Modern CSS reset
│   ├── tokens.css            # Design tokens (colors, typography, spacing)
│   ├── main.css              # Global layout & utilities
│   ├── components.css        # Reusable UI components (nav, cards, footer, etc.)
│   ├── home.css              # Homepage-specific styles
│   └── pages.css             # Inner page styles (profile, program, publication, contact)
├── js/
│   ├── main.js               # Global scripts (nav, scroll reveal, counters)
│   ├── home.js               # Hero carousel with autoplay
│   ├── program.js            # Program tab filtering
│   ├── publication.js        # Publication type filtering
│   └── contact.js            # Form validation & submission
└── README.md
```

## 🎨 Brand

- **Primary Color**: `#0D6B4B` (Deep Green)
- **Accent Color**: `#C8A951` (Gold)
- **Display Font**: Playfair Display
- **Body Font**: Inter

## ⚡ Features

- ✅ Fully responsive (mobile-first)
- ✅ Hero carousel with autoplay, swipe, keyboard navigation
- ✅ Scroll reveal animations with staggered children
- ✅ Animated counters for impact statistics
- ✅ Interactive tab filtering on Programs & Publications
- ✅ Floating particles and geometric patterns
- ✅ Smooth page loading animation
- ✅ Mobile navigation with full-screen overlay
- ✅ Contact form with real-time validation
- ✅ WCAG 2.1 AA accessible (skip nav, focus states, reduced motion)
- ✅ SEO optimized (meta, OG, semantic HTML)

## 🚀 Deployment

This is a **static website** — no build step required.

### Option 1: Netlify
Drag the project folder to [Netlify Drop](https://app.netlify.com/drop).

### Option 2: Vercel
```bash
npx vercel deploy
```

### Option 3: GitHub Pages
Push to a GitHub repo and enable Pages in repository settings.

## 📝 Customization Notes

- Replace placeholder emoji icons with actual images in `assets/images/`
- Update partner logos with actual SVG/PNG assets
- Replace contact form action with Formspree, Netlify Forms, or custom backend
- Add Google Analytics / Plausible tracking snippet
- Update social media links in footer and contact page

---

© 2026 Akademika Semesta Nusantara
