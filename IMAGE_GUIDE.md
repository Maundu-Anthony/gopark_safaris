# Image Organization Guide

## Folder Structure

The images for GoPark Safaris are organized into three main folders:

```
public/
└── images/
    ├── hero/           # Hero carousel images (landing page)
    ├── packages/       # Safari package card images
    ├── gallery/        # Gallery section images
    └── logo.jpg        # Company logo
```

## Image Folders

### 1. Hero Folder (`/public/images/hero/`)
**Purpose**: Images for the landing page carousel that rotates automatically

**Current Images**:
- `savannah.jpg` - Endless Savannahs
- `mara.jpg` - Maasai Mara Wildlife
- `amboseli.jpg` - Amboseli Elephants
- `migration.jpg` - The Great Migration

**Used in**: `src/pages/Hero.js`

**How to Add More**:
1. Add your image to `/public/images/hero/`
2. Edit `src/pages/Hero.js`
3. Add to the `heroImages` array:
```javascript
{
  url: '/images/hero/your-image.jpg',
  caption: 'Your Caption Here'
}
```

---

### 2. Packages Folder (`/public/images/packages/`)
**Purpose**: Thumbnail images displayed on safari package cards

**Current Images**:
- `mara.jpg` - Maasai Mara Classic
- `amboseli.jpg` - Amboseli Explorer
- `diani.jpg` - Coastal Paradise
- `migration.jpg` - Great Migration Safari
- `mount-kenya.jpg` - Mt. Kenya Adventure
- `lc.jpg` - Complete Kenya Safari

**Used in**: `src/pages/Packages.js`

**How to Add/Update**:
1. Add your image to `/public/images/packages/`
2. Edit `src/pages/Packages.js`
3. Update the package object:
```javascript
{
  title: 'Your Package',
  duration: '5 Days / 4 Nights',
  price: 'From $999',
  image: '/images/packages/your-image.jpg',
  features: [...]
}
```

---

### 3. Gallery Folder (`/public/images/gallery/`)
**Purpose**: Images displayed in the photo gallery with lightbox view

**Current Images**:
- `mara.jpg` - Majestic Lions in Maasai Mara
- `amboseli.jpg` - Elephant Herds in Amboseli
- `diani.jpg` - Coastal Paradise
- `migration.jpg` - Great Migration
- `mount-kenya.jpg` - Mount Kenya Trek
- `lc.jpg` - Serene Lake Views
- `savannah.jpg` - Golden Savannah Landscape

**Used in**: `src/pages/Gallery.js`

**How to Add More**:
1. Add your image to `/public/images/gallery/`
2. Edit `src/pages/Gallery.js`
3. Add to the `galleryImages` array:
```javascript
{ 
  src: '/images/gallery/your-image.jpg', 
  alt: 'Description', 
  caption: 'Your Caption' 
}
```

---

## Image Guidelines

### Recommended Specifications:

**Hero Images**:
- Resolution: 1920x1080px (Full HD) or higher
- Aspect Ratio: 16:9
- Format: JPG
- Max File Size: 500KB (optimized for fast loading)

**Package Images**:
- Resolution: 800x600px minimum
- Aspect Ratio: 4:3 or 16:9
- Format: JPG
- Max File Size: 200KB

**Gallery Images**:
- Resolution: 1200x800px minimum
- Format: JPG
- Max File Size: 300KB
- Good quality for lightbox viewing

### Optimization Tips:
1. Use tools like TinyPNG or ImageOptim to compress images
2. Keep file sizes reasonable for faster page loads
3. Use descriptive file names (e.g., `maasai-mara-sunset.jpg`)
4. Ensure images are properly lit and high quality
5. Landscape orientation preferred for most images

---

## File Naming Convention

✅ **Good Examples**:
- `maasai-mara-lions.jpg`
- `amboseli-elephants.jpg`
- `diani-beach-sunset.jpg`

❌ **Avoid**:
- `IMG_1234.jpg`
- `DSC00567.jpg`
- `photo.jpg`

---

## Quick Reference

| Component | Folder | Path Pattern |
|-----------|--------|---------------|
| Hero Carousel | `/public/images/hero/` | `/images/hero/filename.jpg` |
| Package Cards | `/public/images/packages/` | `/images/packages/filename.jpg` |
| Gallery | `/public/images/gallery/` | `/images/gallery/filename.jpg` |

---

## Common Tasks

### Adding a New Hero Slide:
1. Save image to `/public/images/hero/new-slide.jpg`
2. Open `src/pages/Hero.js`
3. Add to array:
```javascript
{
  url: '/images/hero/new-slide.jpg',
  caption: 'Your Amazing View'
}
```

### Replacing a Package Image:
1. Save new image to `/public/images/packages/`
2. Open `src/pages/Packages.js`
3. Update the `image` property:
```javascript
image: '/images/packages/new-package-image.jpg'
```

### Expanding the Gallery:
1. Save images to `/public/images/gallery/`
2. Open `src/pages/Gallery.js`
3. Add entries to `galleryImages` array

---

**Note**: After adding or modifying images, you may need to refresh your browser (Ctrl+F5 or Cmd+Shift+R) to clear the cache and see the changes.
