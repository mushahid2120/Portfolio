# CUSTOMIZATION GUIDE

This file contains all the places you need to update with your personal information.

## 1. CONTACT INFORMATION

**File: `src/components/Contact.jsx`**

Replace these values:
```javascript
// Line ~15: Email
'mushahid.dev@example.com' → your-email@example.com

// Line ~20: Phone
'+91 (123) 456-7890' → your-phone-number

// Line ~24: LinkedIn
'https://linkedin.com/in/mushahid-developer' → your-linkedin-url

// Line ~28: GitHub
'https://github.com/mushahid2120' → your-github-url
```

## 2. NAVBAR SOCIAL LINKS

**File: `src/components/Navbar.jsx`** (if adding social links to navbar)

## 3. HERO SECTION

**File: `src/components/Hero.jsx`**

Update:
- [ ] Profile photo URL (line ~100)
- [ ] GitHub URL (line ~50)
- [ ] LinkedIn URL (line ~57)
- [ ] Email link (line ~64)

Replace:
```javascript
// Line 100: Profile Image
src="https://via.placeholder.com/400x400?text=Profile+Photo"
// → Replace with your public image URL (e.g., imgur, cloudinary, etc.)
```

## 4. PROJECTS SECTION

**File: `src/components/Projects.jsx`**

For each project (6 projects total), update:
- [ ] `title` - Project name
- [ ] `description` - Project description
- [ ] `technologies` - Tech stack used
- [ ] `image` - Project screenshot URL
- [ ] `liveLink` - Live demo URL
- [ ] `githubLink` - GitHub repository URL
- [ ] `highlights` - Key features/highlights

Example format:
```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Detailed description of what your project does...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  image: 'https://your-image-url.com/project1.png',
  liveLink: 'https://your-live-demo.com',
  githubLink: 'https://github.com/yourusername/repo-name',
  highlights: ['Feature 1', 'Feature 2', 'Feature 3']
}
```

## 5. EDUCATION SECTION

**File: `src/components/Education.jsx`**

Update education details:
- [ ] `degree` - Your degree (e.g., "Bachelor of Engineering")
- [ ] `field` - Your field (e.g., "Mechanical Engineering")
- [ ] `institution` - Your college name
- [ ] `year` - Graduation year
- [ ] `cgpa` - Your CGPA
- [ ] `description` - Brief description

Update certifications:
- [ ] 3 certification/learning items with title, issuer, description

## 6. BLOG SECTION

**File: `src/components/Blog.jsx`**

Update:
- [ ] Blog post titles
- [ ] Blog excerpts
- [ ] Blog dates
- [ ] Blog links (point to your actual blog posts on Hashnode)
- [ ] Category tags

Replace placeholder:
```javascript
link: 'https://mushahid.hashnode.dev'
// → Point to actual blog post URL
```

## 7. ABOUT SECTION

**File: `src/components/About.jsx`**

Update:
- [ ] Educational background text
- [ ] Professional summary
- [ ] Career highlights

## 8. HTML METADATA

**File: `index.html`**

Update:
- [ ] `<title>` - Page title (currently: "Mushahid | Full-Stack Developer & AI Engineer")
- [ ] `<meta name="description">` - SEO description
- [ ] `<meta name="theme-color">` - Browser theme color

Example:
```html
<title>Your Name | Full-Stack Developer & AI Engineer</title>
<meta name="description" content="Your custom description here" />
```

## 9. SOCIAL LINKS (MULTIPLE LOCATIONS)

Replace across all files:
- [ ] `https://github.com/mushahid2120` → your GitHub
- [ ] `https://linkedin.com/in/mushahid-developer` → your LinkedIn
- [ ] `https://mushahid.hashnode.dev` → your Hashnode blog
- [ ] Email address → your email
- [ ] Phone number → your phone

## 10. SKILLS SECTION

**File: `src/components/Skills.jsx`**

You can customize:
- [ ] Skill categories (Frontend, Backend, etc.)
- [ ] Individual skills in each category
- [ ] Proficiency percentages

## 11. FOOTER

**File: `src/components/Footer.jsx`**

Update:
- [ ] Brand name "Mushahid" → your name
- [ ] Social media links
- [ ] Quick links

## QUICK CHECKLIST

- [ ] Replace all placeholder images with real images
- [ ] Update all email addresses
- [ ] Update all phone numbers
- [ ] Update all social media links
- [ ] Update all project information
- [ ] Update education information
- [ ] Update blog links
- [ ] Update hero section text
- [ ] Update about section text
- [ ] Test all links (especially external URLs)
- [ ] Update browser tab title and meta tags

## IMAGE RECOMMENDATIONS

For best results, use these image dimensions:

- Profile Photo: 400x400px (JPG or PNG)
- Project Images: 500x300px (JPG or PNG)
- Logo/Avatar: Preferably square 100x100px+

## HOSTING IMAGES

Free options:
- Imgur (imgur.com)
- Cloudinary (cloudinary.com)
- GitHub (store in repo, use raw content URL)
- Vercel/Netlify (include in project)

Example URL format:
```
https://img.shields.io/badge/...
https://imgur.com/xxxxxx.png
https://cloudinary.com/...
```

## FORM SUBMISSION

The contact form currently uses `mailto:` which opens the user's email client. To add a backend:

1. Create a backend endpoint (Node.js, Python, etc.)
2. Replace the `handleSubmit` function in `Contact.jsx`
3. Add environment variables for backend URL

Example:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch(import.meta.env.VITE_API_URL + '/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
}
```

## COLORS & CUSTOMIZATION

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#0F172A',      // Main background
  secondary: '#1E293B',    // Secondary background
  accent: '#3B82F6',       // Primary accent (blue)
  accent2: '#8B5CF6',      // Secondary accent (purple)
}
```

## FINAL DEPLOYMENT STEPS

1. Update all information above
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy to Netlify/Vercel/GitHub Pages
5. Test all links on live site
6. Share with potential employers/clients!

---

**Questions?** Check the README.md for more information.
