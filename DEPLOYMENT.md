# Netlify Deployment Guide

This guide will help you deploy your FirePath landing page to Netlify.

## Prerequisites

1. A Netlify account (free tier is sufficient)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Options

### Option 1: Deploy from Git (Recommended)

1. **Connect your repository to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose your Git provider and select your repository
   - Select the branch you want to deploy (usually `main` or `master`)

2. **Configure build settings:**
   - Build command: `npm run build:netlify`
   - Publish directory: `dist/public`
   - Node version: 18 (or latest LTS)

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - You'll get a random URL like `https://amazing-name-123456.netlify.app`

### Option 2: Manual Deploy

1. **Build your project locally:**
   ```bash
   npm install
   npm run build:netlify
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder to the deploy area
   - Your site will be deployed instantly

## Configuration Files

The following files have been created/configured for Netlify deployment:

### `netlify.toml`
- Build configuration
- Redirect rules for SPA routing
- Security headers
- Cache settings

### `public/_redirects`
- Handles client-side routing
- Ensures all routes are served by `index.html`

### `package.json`
- Added `build:netlify` script for frontend-only build

### `vite.config.ts`
- Updated to use the `public` directory for static assets
- Builds to `dist/public` directory

## Important Notes

### Frontend-Only Deployment
This is a pure frontend React application with no backend dependencies. The deployment is optimized for:
- Static site generation
- Client-side routing
- Fast loading times
- CDN distribution

### Environment Variables
If you need environment variables:
1. Go to your Netlify site dashboard
2. Navigate to Site settings > Environment variables
3. Add your variables (e.g., API keys, database URLs)

### Custom Domain
To use a custom domain:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Troubleshooting

### Build Failures
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Routing Issues
- The `_redirects` file should handle SPA routing
- If you have issues, check the redirect rules in `netlify.toml`

### Asset Loading
- Ensure all assets are in the `public` directory
- Check that Vite is copying assets correctly

## Next Steps

1. **Test your deployment** by visiting the provided Netlify URL
2. **Set up continuous deployment** by connecting your Git repository
3. **Configure custom domain** if needed
4. **Monitor your site** using Netlify's analytics and monitoring tools
5. **Optimize performance** with Netlify's built-in optimizations

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://community.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
