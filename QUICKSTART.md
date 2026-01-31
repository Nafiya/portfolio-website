# Quick Start - Portfolio Website

Get your portfolio running in 5 minutes!

## 🚀 Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open browser at http://localhost:4200
```

## ✏️ Customize Your Portfolio

### 1. Update Personal Information

Edit `src/app/services/portfolio-data.service.ts`:

```typescript
// Line 11-19: Update your personal info
personalInfo = {
  name: 'Your Name',              // ← Change this
  title: 'Full Stack Developer',   // ← Change this
  bio: 'Your bio here...',         // ← Change this
  email: 'your@email.com',         // ← Change this
  phone: '+1 (555) 123-4567',      // ← Change this
  location: 'Your City, Country',  // ← Change this
  resumeUrl: 'assets/resume.pdf'
};
```

### 2. Add Your Projects

In the same file, update the `projects` array (around line 32):

```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Project description...',
  technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
  image: 'assets/projects/project.png',
  github: 'https://github.com/you/project',
  demo: 'https://demo.com',
  featured: true,
  category: 'Full Stack'
}
```

### 3. Update Your Skills

Update skills array (around line 110):

```typescript
{ name: 'Angular', level: 90, category: 'frontend' },
{ name: 'Your Skill', level: 85, category: 'backend' },
```

### 4. Add Your Experience

Update experience array (around line 134):

```typescript
{
  id: 1,
  company: 'Company Name',
  position: 'Your Position',
  period: 'Jan 2023 - Present',
  description: 'What you did...',
  current: true
}
```

### 5. Change Social Links

Update socialLinks array (around line 22):

```typescript
{ name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
{ name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
```

## 🎨 Customize Colors

Edit `src/styles.css` (around line 3):

```css
:root {
  --primary-color: #6366f1;    /* Change to your brand color */
  --secondary-color: #8b5cf6;
}
```

## 📁 Add Project Images

1. Add your project screenshots to `src/assets/projects/`
2. Update image paths in `portfolio-data.service.ts`

## 🚢 Deploy to Netlify (FREE)

```bash
# 1. Build for production
npm run build:prod

# 2. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 3. Deploy on Netlify
# Go to netlify.com
# Click "New site from Git"
# Select your repository
# Click "Deploy site"
# Done! Your site is live!
```

### Add Custom Domain (Optional)

1. Buy domain from Porkbun, Namecheap (~$9/year)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Update DNS settings at your registrar
4. SSL is automatic!

## 📝 Files You'll Edit

| File | Purpose |
|------|---------|
| `src/app/services/portfolio-data.service.ts` | **Main file to edit** - All your data |
| `src/styles.css` | Change colors and fonts |
| `src/assets/` | Add your images and resume |

## 🎯 Key Sections

Your portfolio includes:

1. **Hero** - Your name, title, bio, and CTA buttons
2. **About** - Detailed information about you
3. **Skills** - Technical skills with progress bars
4. **Experience** - Work history timeline
5. **Projects** - Portfolio projects with filtering
6. **Contact** - Your contact information

## 🔧 Development Commands

```bash
npm start              # Start dev server
npm run build:prod     # Build for production
npm test              # Run tests
```

## 💡 Tips

- Keep project descriptions under 2-3 sentences
- Update skills as you learn new technologies
- Add real project screenshots for better visuals
- Test on mobile devices (responsive design included)
- Keep your GitHub and demo links updated

## 🆘 Need Help?

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Angular Docs**: https://angular.io

## ✅ Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Update personal info
- [ ] Add your projects
- [ ] Update skills and experience
- [ ] Change social media links
- [ ] Add project images
- [ ] Test locally (`npm start`)
- [ ] Push to GitHub
- [ ] Deploy to Netlify
- [ ] Add custom domain (optional)

---

**You're all set! Your portfolio will be live in minutes! 🎉**
