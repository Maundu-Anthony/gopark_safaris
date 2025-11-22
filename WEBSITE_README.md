# Go Park Safaris Website

A professional single-page application (SPA) for Go Park Safaris built with React and Tailwind CSS.

## Project Structure

```
gopark_safaris/
├── public/
│   ├── images/
│   │   └── gallery/          # Add your safari images here
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ServiceCard.js
│   │   ├── PackageCard.js
│   │   └── GalleryImage.js
│   ├── pages/                # Page sections
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Packages.js
│   │   ├── Gallery.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── tailwind.config.js
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **Modern UI**: Built with Tailwind CSS for a professional look
- **Interactive Components**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form for customer inquiries
- **Gallery**: Image gallery with hover effects (ready for your photos)

## Sections

1. **Hero** - Eye-catching landing section with call-to-action buttons
2. **About** - Company information and statistics
3. **Services** - Comprehensive list of safari services
4. **Packages** - Safari package offerings with pricing
5. **Gallery** - Photo gallery of safari experiences
6. **Contact** - Contact information and inquiry form
7. **Footer** - Company links and social media

## Adding Images

### Gallery Images

Add your safari images to the `/public/images/gallery/` folder with the following naming convention:
- `safari-1.jpg`
- `safari-2.jpg`
- `safari-3.jpg`
- etc.

The gallery is configured to display 9 images by default. You can add more by editing the `galleryImages` array in `src/pages/Gallery.js`.

### Package Images (Optional)

To add images to safari packages, place images in `/public/images/` and update the `packages` array in `src/pages/Packages.js`:

```javascript
{
  title: 'Maasai Mara Classic',
  image: '/images/maasai-mara.jpg',  // Add this line
  duration: '3 Days / 2 Nights',
  // ... rest of the package
}
```

### Hero Background (Optional)

To add a background image to the hero section, update `src/pages/Hero.js`:

```javascript
<section 
  id="home" 
  className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 mt-20"
  style={{backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
>
```

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Run Development Server

```bash
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
yarn build
```

## Customization

### Colors

The primary color is green (#16a34a). To change it, update the Tailwind classes in the components:
- `bg-green-600` → Background color
- `text-green-600` → Text color
- `hover:bg-green-700` → Hover states

### Content

Update text content in the respective page files:
- Company info: `src/pages/About.js`
- Services: `src/pages/Services.js`
- Packages: `src/pages/Packages.js`
- Contact details: `src/components/Footer.js` and `src/pages/Contact.js`

### Contact Information

Update the contact details in:
- `src/components/Footer.js`
- `src/pages/Contact.js`

Current contact info:
- Phone: +254 733 752 859
- Email: info@goparksafaris.co.ke

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS preprocessing

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

© 2025 Go Park Safaris. All rights reserved.

## Support

For questions or support, contact:
- Email: info@goparksafaris.co.ke
- Phone: +254 733 752 859
