# Portfolio Website

A modern, responsive portfolio website built with Angular 17, featuring a clean design, dark mode, and smooth animations.

## 🚀 Features

- ✨ Modern Angular 17 standalone components
- 🎨 Beautiful, responsive design
- ⚡ Smooth animations and transitions
- 📱 Mobile-first responsive layout
- 🎯 SEO optimized
- 🚀 Fast performance
- 📝 Experience timeline
- 📧 Contact section
- 🔒 Security headers configured

## 🛠️ Tech Stack

- **Framework:** Angular 17
- **Language:** TypeScript
- **Styling:** CSS3 with CSS Variables
- **Hosting:** Netlify
- **Build Tool:** Angular CLI

## 📋 Prerequisites

- Node.js 18+ and npm
- Angular CLI (`npm install -g @angular/cli`)

## 🏃 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm start
```

Navigate to `http://localhost:4200/`

### 4. Build for production
```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/` directory.

## 📝 Customization

### Update Personal Information

Edit `src/app/services/portfolio-data.service.ts` to update:
- Personal details (name, title, bio, contact info)
- Projects
- Skills
- Work experience
- Education
- Social links

### Change Colors

Modify CSS variables in `src/styles.css`:
```css
:root {
  --primary-color: #6366f1;  /* Change to your preferred color */
  --secondary-color: #8b5cf6;
  /* ... other variables */
}
```

### Add Your Photo

Replace the placeholder in `src/app/components/hero/hero.component.html` with your actual photo:
```html
<div class="profile-placeholder">
  <img src="assets/images/nafiya.jpeg" alt="Nafiya" />
</div>
```

### Add Project Images

1. Add images to `src/assets/projects/`
2. Update image paths in `portfolio-data.service.ts`

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify Dashboard

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are already configured in `netlify.toml`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### Add Custom Domain

1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add custom domain"
3. Add your domain (e.g., `yourname.com`)
4. Update DNS settings at your domain registrar:
   - Add A record: `@` → `75.2.60.5`
   - Add CNAME: `www` → `your-site.netlify.app`
5. SSL certificate is automatic!

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation header
│   │   │   └── hero/            # Hero section
│   │   ├── models/              # TypeScript interfaces
│   │   ├── services/            # Data and theme services
│   │   ├── app.component.ts     # Main app component
│   │   ├── app.component.html   # All sections HTML
│   │   └── app.component.css    # All sections CSS
│   ├── assets/                  # Images and static files
│   ├── index.html
│   ├── main.ts
│   └── styles.css               # Global styles
├── netlify.toml                 # Netlify configuration
├── _redirects                   # Angular routing fix
├── angular.json
├── package.json
└── README.md
```

## 🎨 Sections

- **Header:** Sticky navigation with smooth scrolling
- **Hero:** Introduction with typing animation
- **About:** Personal information and bio
- **Skills:** Technical skills with progress bars
- **Experience:** Work history timeline
- **Projects:** Portfolio projects with filtering
- **Contact:** Contact information
- **Footer:** Copyright and scroll-to-top button

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with production configuration
- `npm test` - Run unit tests
- `npm run watch` - Build and watch for changes

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## 🔒 Security

- Content Security Policy headers
- XSS protection
- Clickjacking protection
- MIME type sniffing prevention

## 📈 Performance

- Lazy loading
- Optimized images
- Minified CSS/JS
- Tree shaking
- AOT compilation

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Routing Issues on Netlify
- Ensure `_redirects` file is in the root
- Check `netlify.toml` configuration

### Dark Mode Not Working
- Clear browser cache and localStorage
- Check browser console for errors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For issues or questions, please create an issue in the repository.

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using Angular 17**
