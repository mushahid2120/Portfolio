# 🚀 Mushahid - Professional Portfolio

A sophisticated, design-system-based portfolio website showcasing full-stack development and AI engineering work. Built with React, Vite, and a custom CSS design system.

## ✨ Features

- **Elegant Design System** - Custom CSS variables with cyan, amber, and monospace typography
- **Blueprint Grid Background** - Architect-inspired visual design
- **Project Showcase** - 6 featured projects with images, logos, and links
- **Skills Grid** - Organized by category with tags (Core, Applied, Support)
- **Blog Integration** - Direct link to Hashnode technical writing
- **Contact Form** - Email form with smooth submission
- **Responsive Design** - Mobile-first approach with semantic breakpoints
- **Reveal Animations** - Intersection Observer-based scroll animations
- **Dark Theme** - Eye-friendly dark mode with monospace accents

## 📋 Sections

1. **Navigation** - Sticky nav with brand mark and links
2. **Hero** - Headline, CTA buttons, photo frame, title block
3. **Projects** - 6 projects split into 3 flagship + 3 AI work
4. **Skills** - 4 skill categories (Frontend, Backend, AI, Tooling)
5. **Blog** - Feature link to Hashnode blog
6. **About** - Background and education block
7. **Contact** - Email form and footer with social links

## 🎨 Design System

### Colors
```css
--bg: #0b1420              /* Main background */
--bg-2: #0f1c2c            /* Secondary background */
--card: #101d2d            /* Card background */
--cyan: #63c7d9            /* Primary accent */
--amber: #e8a659           /* Secondary accent */
--ink: #e8edf1             /* Primary text */
--ink-soft: #8fa3b3        /* Secondary text */
--ink-faint: #5c7181       /* Tertiary text */
```

### Fonts
- `Space Grotesk` - Headings (narrow, bold look)
- `Inter` - Body text (legible, clean)
- `JetBrains Mono` - Labels, meta, code

## 🛠 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **CSS Variables** - Design system
- **Intersection Observer** - Scroll animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Customization

### 1. Update Contact Information

**File:** `src/components/Contact.jsx`

```javascript
// Change email address
<a className="btn solid" href="mailto:your.email@example.com">Email me</a>
```

Replace `your.email@example.com` with your actual email.

### 2. Add Profile Photo

**File:** `src/components/Hero.jsx`

```javascript
<img src="https://via.placeholder.com/400x400?text=Mushahid" alt="Mushahid" />
```

Replace with your image URL (recommend 400x400px square image).

### 3. Update Project Information

**File:** `src/data/projects.js`

Each project has:
```javascript
{
  id: 1,
  index: '01',
  name: 'Project Name',
  description: 'Project description...',
  type: 'full-stack', // or 'ai'
  tags: ['Tech1', 'Tech2'],
  image: 'https://your-image-url.png', // 600x220px recommended
  logo: 'https://your-logo-url.png',   // Optional
  links: {
    live: 'https://live-url.com',
    source: 'https://github-link.com'
  }
}
```

### 4. Update Social Links

Search and replace across components:
- `https://github.com/mushahid2120` → your GitHub
- `https://mushahid.hashnode.dev/` → your Hashnode blog
- `your.email@example.com` → your email

**Files to update:**
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Blog.jsx`

### 5. Customize Theme Colors

**File:** `src/index.css`

Update the CSS variables in `:root`:
```css
:root {
  --cyan: #63c7d9;        /* Change primary accent */
  --amber: #e8a659;       /* Change secondary accent */
  --ink: #e8edf1;         /* Change text color */
}
```

### 6. Update Education Section

**File:** `src/components/About.jsx`

```javascript
<div className="edu-title">B.Tech, Mechanical Engineering</div>
<div className="edu-sub">Dr. B. C. Roy Engineering College</div>
<div className="edu-stat">
  <span className="k">Graduated</span>
  <span className="v">2023</span>
</div>
<div className="edu-stat">
  <span className="k">CGPA</span>
  <span className="v">8.65 / 10</span>
</div>
```

## 🖼️ Image Guidelines

### Profile Photo (Hero Section)
- Dimensions: 400x400px (square)
- Format: JPG or PNG
- Placement: High-quality headshot or professional photo

### Project Images (Projects Section)
- Dimensions: 600x220px
- Format: JPG or PNG
- Content: Screenshot or design mockup of the project

### Project Logos (Optional)
- Dimensions: 48x48px
- Format: PNG with transparency
- Purpose: Visual identifier for the project

## 📎 Image Hosting

Free options:
- **Imgur** - https://imgur.com (free image hosting)
- **Cloudinary** - https://cloudinary.com (free tier included)
- **GitHub** - Host in repo and use raw content URL
- **Vercel** - Include in public folder

Example URLs:
```javascript
image: 'https://imgur.com/xxxxxx.jpg'
logo: 'https://cloudinary.com/xxxxxx.png'
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub
# Import repo in Vercel (auto-detects Vite)
```

### Netlify
```bash
npm run build
# Connect GitHub repo
# Set build command: npm run build
# Set publish directory: dist
```

### GitHub Pages
```bash
npm run build
npm install -D gh-pages
```

## ✅ Pre-Deployment Checklist

- [ ] Profile photo uploaded and linked
- [ ] Email address updated in Contact form
- [ ] All project links verified
- [ ] Social media links updated
- [ ] Blog link to Hashnode working
- [ ] Project images all loading
- [ ] Mobile responsive check
- [ ] Links tested on live site
- [ ] Meta description updated in index.html
- [ ] Page title updated in index.html

## 📝 Content Tips

### Project Descriptions
- Start with category (e.g., "A full-stack marketplace...")
- Keep to 1-2 sentences
- Highlight unique aspects
- List technologies used

### Hero Title
- Use `<em>` tags to accent key phrases
- Keep concise but descriptive
- Focus on value proposition

### Skills
- Organize by competency level (Core, Applied, Support)
- List 5-6 items per category
- Use consistent naming

## 🎯 Performance

- Lazy animations with Intersection Observer
- Minimal CSS (~500 lines)
- No framework bloat
- Fast page load times
- SEO-optimized HTML

## 🔐 Security

- No sensitive data in code
- Form sends via mailto (client-side only)
- For backend form handling, add:

```javascript
// In handleSubmit
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 860px
- Desktop: > 860px

## 🐛 Troubleshooting

### Images not loading
- Check URL format (http:// or https://)
- Verify image dimensions
- Test in incognito mode (clear cache)

### Form not working
- Ensure email is valid
- Browser allows mailto links
- For backend, implement API endpoint

### Layout issues
- Clear browser cache (Ctrl+Shift+Del)
- Check viewport meta tag in index.html
- Test on DevTools device emulation

---

**Built with ❤️ using React + Design System**

Questions? Check the source code or reach out via the contact form!
