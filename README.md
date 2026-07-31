# CARE DENTAL CLINIC — DR. D.S. KUNDU

A cinematic, dark-luxury React single-page application built for Care Dental Clinic.

## Tech Stack
- React 19
- Vite
- Tailwind CSS v4
- Framer Motion for animations
- Lucide React for icons

## Key Features
- **Cinematic Design**: Obsidian black base with warm gold accents.
- **Scroll Animations**: Reveal effects on scroll via Framer Motion.
- **WhatsApp Integration**: A central `whatsapp.ts` utility safely constructs WhatsApp booking links pre-filled with form details or selected services.
- **Interactive UI**: Custom cursor trail (desktop), animated trust counters, service hover states, and smooth parallax.

## Setup Instructions

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Design Notes
- The site adheres to a strict "no faces" rule as requested, keeping imagery focused on modern clinic equipment to maintain a premium feel.
- Fonts and colors are mapped directly in Tailwind CSS v4's `@theme` directive in `src/index.css`.
