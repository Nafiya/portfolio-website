# Deployment Guide - Netlify

Complete guide to deploy your Angular portfolio to Netlify with a custom domain.

## 📋 Prerequisites

- GitHub account
- Netlify account (free at https://netlify.com)
- Custom domain (optional, from Porkbun/Namecheap/etc.)

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Code

```bash
# Make sure everything works locally
npm install
npm start

# Build for production to test
npm run build:prod

# Check that dist folder was created
ls dist/portfolio-website/browser
```

### Step 2: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Create GitHub repo and push
gh repo create portfolio-website --public --source=. --remote=origin --push
# Or manually create repo on GitHub and:
# git remote add origin https://github.com/yourusername/portfolio-website.git
# git push -u origin main
```

### Step 3: Deploy to Netlify

#### Option A: Via Netlify Dashboard (Recommended for Beginners)

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub
5. Select your `portfolio-website` repository
6. Build settings (should auto-detect from netlify.toml):
   - **Build command:** `npm run build:prod`
   - **Publish directory:** `dist/portfolio-website/browser`
   - **Node version:** 18
7. Click "Deploy site"
8. Wait 2-3 minutes for deployment

Your site will be live at: `https://random-name-12345.netlify.app`

#### Option B: Via Netlify CLI (For Advanced Users)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure a new site
# - Team: Select your team
# - Site name: your-portfolio (or leave blank for random)
# - Build command: npm run build:prod
# - Directory: dist/portfolio-website/browser

# Deploy to production
netlify deploy --prod
```

### Step 4: Add Custom Domain (Optional)

#### 4.1: Buy a Domain

Recommended registrars:
- **Porkbun** (~$9/year for .com) - Best value
- **Namecheap** (~$9/year for .com)
- **Cloudflare** (~$10/year for .com) - Best DNS

#### 4.2: Configure Domain in Netlify

1. In Netlify Dashboard, go to your site
2. Click "Domain settings"
3. Click "Add custom domain"
4. Enter your domain: `yourname.com`
5. Click "Verify" then "Add domain"
6. Netlify will show DNS configuration instructions

#### 4.3: Update DNS Settings

**For Apex Domain (yourname.com):**

At your domain registrar (Porkbun/Namecheap/etc.):

1. Go to DNS Management
2. Add these records:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: Auto or 3600
```

**For WWW Subdomain (www.yourname.com):**

```
Type: CNAME
Name: www
Value: your-site.netlify.app
TTL: Auto or 3600
```

**Alternative: Use Netlify DNS (Easier)**

1. In Netlify, click "Use Netlify DNS"
2. Note the nameservers (e.g., dns1.p01.nsone.net)
3. Go to your registrar
4. Update nameservers to Netlify's
5. Wait 24-48 hours for propagation

#### 4.4: Enable HTTPS (Automatic)

- Netlify automatically provisions SSL certificate
- Usually takes 5-10 minutes after DNS is configured
- Your site will be available at https://yourname.com

## ✅ Verification Checklist

- [ ] Site loads at Netlify URL
- [ ] All sections visible and working
- [ ] Dark mode toggle works
- [ ] Navigation links work
- [ ] Projects filter correctly
- [ ] Contact info is correct
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled

## 🔧 Common Issues & Fixes

### Issue: 404 on page refresh

**Solution:** Ensure `_redirects` file exists with:
```
/*    /index.html   200
```

Or check `netlify.toml` has:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Issue: Build fails on Netlify

**Solution:**
1. Check build command in `netlify.toml`
2. Verify Node version (should be 18)
3. Check build logs for specific errors
4. Try clearing cache: Site settings → Build & deploy → Clear cache and retry

### Issue: CSS/Styles not loading

**Solution:**
1. Check `angular.json` build configuration
2. Ensure `dist/portfolio-website/browser` is correct publish directory
3. Verify `styles.css` is included in build

### Issue: Custom domain not working

**Solution:**
1. Check DNS propagation: https://dnschecker.org
2. Wait 24-48 hours for full propagation
3. Verify DNS records are correct
4. Try clearing browser cache
5. Check Netlify domain status page

### Issue: Images not showing

**Solution:**
1. Ensure images are in `src/assets/` folder
2. Check image paths in `portfolio-data.service.ts`
3. Verify images are included in `angular.json` assets array
4. Use relative paths: `assets/projects/image.png`

## 🔄 Update Your Live Site

After making changes:

```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Netlify auto-deploys on push!
```

Netlify will automatically:
1. Detect the push
2. Run the build
3. Deploy the new version
4. Usually takes 1-3 minutes

## 📊 Monitoring & Analytics

### Enable Netlify Analytics (Optional, $9/month)

1. Go to Site settings → Analytics
2. Enable Netlify Analytics
3. View traffic, page views, bandwidth

### Add Google Analytics (Free)

1. Get GA4 tracking ID
2. Add to `src/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 Performance Optimization

Your site is already optimized with:
- ✅ Minified CSS/JS
- ✅ Tree shaking
- ✅ AOT compilation
- ✅ Lazy loading
- ✅ CDN delivery

To further optimize:
1. Use WebP images
2. Enable Netlify image optimization
3. Add service worker for offline support

## 💰 Cost Summary

| Item | Cost |
|------|------|
| Netlify Hosting | FREE |
| Custom Domain | ~$9-15/year |
| SSL Certificate | FREE (via Netlify) |
| **Total** | **$9-15/year** |

## 📱 Mobile Testing

Test on multiple devices:
- iPhone Safari
- Android Chrome
- iPad
- Various screen sizes

Use Chrome DevTools:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different devices

## 🆘 Get Help

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **Angular Docs:** https://angular.io/docs

## 🎉 Success!

Your portfolio is now live! Share it:
- Add to LinkedIn profile
- Include in resume
- Share on Twitter
- Add to GitHub profile

---

**Your portfolio is live at:**
- Netlify URL: `https://your-site.netlify.app`
- Custom domain: `https://yourname.com` (if configured)

**Next steps:**
1. Share your portfolio
2. Apply for jobs
3. Keep adding projects
4. Update content regularly

Good luck! 🚀
