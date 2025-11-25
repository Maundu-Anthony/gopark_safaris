# GoPark Safaris - Quick Start Guide

## Prerequisites
- Node.js and Yarn installed
- Two terminal windows/tabs

## How to Run the Application

### Terminal 1 - JSON Server (Backend)
```bash
yarn server
```
This starts the JSON server on http://localhost:3001 for testimonials data.

### Terminal 2 - React App (Frontend)
```bash
yarn start
```
This starts the React development server on http://localhost:3000

## Testing the Features

Once both servers are running, open http://localhost:3000 and test:

### ✅ Implemented Features:

1. **Hero Carousel** - Home page rotates through 4 safari images every 5 seconds
   - Manual navigation with left/right arrows
   - Dot indicators at the bottom
   - Image captions

2. **WhatsApp Button** - Floating button at bottom right
   - Click to open WhatsApp chat

3. **Booking Modal** - Click "Book Now" buttons
   - Form for booking safaris
   - Date selection and package selection

4. **Testimonials** - Live data from db.json
   - Star ratings
   - Client reviews
   - Fetched from http://localhost:3001/testimonials

5. **FAQ Section** - Accordion-style FAQs
   - Click to expand/collapse
   - 8 common questions with answers

6. **Gallery Lightbox** - Click any gallery image
   - Full-screen view
   - Keyboard navigation (arrows, escape)
   - Image counter

7. **Sticky Book Button** - Appears on scroll
   - Quick access to booking modal

8. **Scroll Animations** - Sections fade in on scroll
   - Smooth transitions

## Component Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── ServiceCard.js
│   ├── PackageCard.js
│   ├── GalleryImage.js
│   ├── WhatsAppButton.js
│   ├── BookingModal.js
│   ├── StickyBookButton.js
│   └── GalleryLightbox.js
├── pages/
│   ├── Hero.js (with carousel)
│   ├── About.js
│   ├── Services.js
│   ├── Packages.js
│   ├── Gallery.js (with lightbox)
│   ├── Testimonials.js (fetches from db.json)
│   ├── FAQ.js (accordion)
│   └── Contact.js
├── hooks/
│   └── useScrollAnimation.js
└── App.js
```

## Customization

### Add More Testimonials
Edit `db.json` and add to the testimonials array:
```json
{
  "id": 7,
  "name": "Your Name",
  "location": "City, Country",
  "rating": 5,
  "comment": "Your review here",
  "date": "2025-01-15"
}
```

### Change Hero Images
Edit `src/pages/Hero.js` heroImages array

### Modify FAQ Questions
Edit `src/pages/FAQ.js` faqs array

### Update Contact Info
Edit `src/components/Footer.js` and `src/pages/Contact.js`

## Color Palette (Tailwind)
- `warm-khaki`: #F4F1EA
- `safari-olive`: #4B5320
- `sunset-orange`: #D9702F
- `dark-leather`: #3E3328

## Troubleshooting

**Testimonials not showing?**
- Make sure json-server is running on port 3001
- Check browser console for fetch errors

**Images not loading?**
- Ensure all images are in the correct folders:
  - Hero carousel: `/public/images/hero/`
  - Package cards: `/public/images/packages/`
  - Gallery images: `/public/images/gallery/`
- Check image file names match exactly

**Port already in use?**
- Kill the process: `lsof -ti:3000 | xargs kill` (React)
- Kill the process: `lsof -ti:3001 | xargs kill` (JSON server)

## Production Build
```bash
yarn build
```
Creates optimized production build in `/build` folder
