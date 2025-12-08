# GoPark Safaris Admin System

## Overview
The admin system allows you to manage your website content including packages, services, gallery images, and testimonials.

## Access the Admin Panel

### Login URL
Visit: `http://localhost:3000/admin/login`

### Default Credentials
- **Email:** `admin@goparksafaris.com`
- **Password:** `admin123`

⚠️ **IMPORTANT:** Change these credentials in `/src/contexts/AuthContext.js` before deploying to production!

## Features

### 1. Package Management
- ✅ Add new safari packages
- ✅ Edit existing packages
- ✅ Delete packages
- ✅ Set package details (title, duration, price, features, images)

### 2. Services Management
- 📋 View current services
- 🔧 (Future: Add/Edit/Delete services)

### 3. Gallery Management
- ✅ Add new images to gallery
- ✅ Delete images
- ✅ Set image captions and alt text

### 4. Testimonials Management
- 📋 (Future: Manage customer testimonials)

## How to Use

### Managing Packages

1. **Login** to the admin panel
2. Navigate to the **Packages** tab
3. Click **"+ Add New Package"** to create a new package
4. Fill in the form:
   - **Title:** Package name (e.g., "The Mara Classic")
   - **Duration:** Trip length (e.g., "3 Days / 2 Nights")
   - **Price:** Starting price (e.g., "From $450")
   - **Image URL:** Path to package image (e.g., "/images/packages/mara.jpg")
   - **Features:** List of package features (click "+ Add Feature" for more)
5. Click **"Save Package"**

### Editing a Package
1. Click the **"Edit"** button on any package card
2. Update the information
3. Click **"Save Package"**

### Deleting a Package
1. Click the **"Delete"** button on any package card
2. Confirm the deletion

## Data Storage

Currently, the admin system uses **localStorage** to store data. This means:
- ✅ Data persists in the browser
- ✅ Easy to set up and use
- ⚠️ Data is stored locally per browser
- ⚠️ Not suitable for multi-user scenarios

### Upgrading to a Real Database

For production use, you should integrate a backend API and database. The code is structured to make this easy:

1. Replace localStorage calls with API calls in:
   - `/src/components/admin/PackageManager.js`
   - `/src/components/admin/ServiceManager.js`
   - `/src/components/admin/GalleryManager.js`

2. Update the AuthContext to use real authentication:
   - `/src/contexts/AuthContext.js`

## Security Notes

### For Development
The current setup is perfect for testing and development.

### For Production
Before deploying, you MUST:

1. **Change Default Credentials**
   - Edit `/src/contexts/AuthContext.js`
   - Update the hardcoded email and password

2. **Implement Real Authentication**
   - Add a backend authentication system
   - Use JWT tokens or session-based auth
   - Hash passwords properly

3. **Use a Real Database**
   - Replace localStorage with API calls
   - Use PostgreSQL, MongoDB, or MySQL
   - Implement proper data validation

4. **Add Security Headers**
   - Implement CORS properly
   - Add rate limiting
   - Use HTTPS only

## File Structure

```
src/
├── contexts/
│   └── AuthContext.js          # Authentication logic
├── components/
│   ├── ProtectedRoute.js       # Route protection
│   └── admin/
│       ├── PackageManager.js   # Manage packages
│       ├── ServiceManager.js   # Manage services
│       ├── GalleryManager.js   # Manage gallery
│       └── TestimonialManager.js # Manage testimonials
└── pages/
    ├── AdminLogin.js           # Login page
    └── AdminDashboard.js       # Main admin dashboard
```

## Troubleshooting

### Can't Login?
- Check that you're using the correct credentials
- Clear browser cache and localStorage
- Check browser console for errors

### Changes Not Showing?
- Refresh the main website (not just the admin panel)
- Check browser localStorage (F12 → Application → Local Storage)
- Ensure you clicked "Save" after editing

### Lost Admin Access?
- Clear localStorage: 
  - F12 → Application → Local Storage → Clear
- The system will reset to default credentials

## Next Steps

1. **Test the System:** Add, edit, and delete packages
2. **Customize Credentials:** Change login details in AuthContext.js
3. **Add Images:** Upload package images to `/public/images/packages/`
4. **Consider Backend:** For production, implement a real backend API

## Support

For issues or questions, refer to the main project documentation or contact the development team.
