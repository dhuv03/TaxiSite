# GitHub Pages Setup Guide

## 🌐 Live Preview URL

Once GitHub Pages is enabled, your site will be accessible at:

**https://dhuv03.github.io/TaxiSite/**

## 📋 Setup Instructions

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/dhuv03/TaxiSite
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: Select **gh-pages** 
   - Folder: **/ (root)**
5. Click **Save**

### 2. Trigger the Deployment

The workflow will automatically run when you:
- Push to the `copilot/optimize-taxisite-performance` branch
- Manually trigger it from Actions tab

To manually trigger:
1. Go to **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the `copilot/optimize-taxisite-performance` branch
5. Click **Run workflow**

### 3. Wait for Deployment

- The deployment takes about 1-2 minutes
- Check the **Actions** tab to monitor progress
- Once complete, the site will be live at the URL above

### 4. Access Your Site

Visit: **https://dhuv03.github.io/TaxiSite/**

## 🔧 How It Works

The GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will:
1. Check out your code from the PR branch
2. Upload all files as a Pages artifact
3. Deploy to GitHub Pages
4. Make it accessible at the public URL

## 📱 Test the Site

Once deployed, you can test on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (open the URL on your phone)
- Tablet devices
- Developer tools (F12) for responsive testing

## 🔄 Updates

Every time you push changes to the `copilot/optimize-taxisite-performance` branch, the site will automatically redeploy with the latest changes.

## ⚠️ Important Notes

- First deployment may take a few extra minutes
- The site URL is public (anyone with the link can view it)
- GitHub Pages is free for public repositories
- The site serves static files only (HTML, CSS, JS, images)

## 🆘 Troubleshooting

If the site doesn't load:
1. Check Actions tab for deployment errors
2. Verify Pages is enabled in Settings
3. Confirm the workflow ran successfully
4. Wait 5-10 minutes for DNS propagation
5. Try accessing in an incognito/private window

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
