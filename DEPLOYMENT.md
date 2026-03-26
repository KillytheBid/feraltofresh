# Feral2Fresh Deployment Guide

## Quick Start Deployment to Vercel

This project is configured to deploy to Vercel with zero additional setup required.

---

## Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **Gmail Setup**
   - Enable 2-Factor Authentication
   - Generate App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Save the 16-character password

---

## Deployment Steps

### Method 1: Git Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/feraltofresh.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to **Settings → Environment Variables**
   - Add:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-16-char-app-password
     ```
   - Click "Save"

4. **Deploy**
   - Vercel auto-detects the project structure
   - Frontend and API deploy automatically
   - Your project is live!

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Select "Y" to link to existing project or create new
   - Vercel detects the structure automatically
   - Follow prompts to configure

4. **Add Environment Variables**
   ```bash
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel redeploy
   ```

---

## Post-Deployment

### 1. Verify Deployment

Visit your Vercel project URL:
- `https://your-project.vercel.app`

### 2. Test Email Function

1. Go to Contact page or fill quote form
2. Submit a test quote
3. Check email inbox for:
   - Owner email (to EMAIL_USER)
   - Client confirmation email

### 3. Configure Custom Domain (Optional)

In Vercel dashboard:
1. **Settings → Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate auto-generated

### 4. Set Up Analytics (Optional)

- Enable Web Analytics in Vercel dashboard
- Monitor traffic and performance

---

## Project Structure Detection

Vercel automatically detects:

```
feraltofresh/
├── client/              ← Framework: Next.js/Vite/React detected
│   ├── package.json
│   └── vite.config.js
├── api/                 ← Serverless functions
│   └── sendEmail.js
└── README.md
```

**No configuration needed** - Vercel handles it all.

---

## Environment Variables on Vercel

### Required Variables

| Variable | Value | Environment |
|----------|-------|-------------|
| `EMAIL_USER` | your-email@gmail.com | Production |
| `EMAIL_PASS` | 16-char app password | Production |

### Optional Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_ENDPOINT` | `/api` | API endpoint (auto in production) |

---

## Monitoring & Logs

### View Function Logs

1. Vercel dashboard → **Functions**
2. Click `sendEmail`
3. View recent invocations and errors

### Monitor Performance

- **Analytics** - Traffic, response times, errors
- **Deployments** - View build and deployment status
- **Logs** - Function invocation logs

---

## Troubleshooting Deployment

### Build Fails

**Error:** `Cannot find module 'vite'`

**Solution:**
```bash
cd client
npm install
cd ..
vercel redeploy
```

### Email Function Not Working

**Check 1:** Environment variables set?
```bash
vercel env list
```

**Check 2:** Gmail App Password correct?
- Visit [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Regenerate if needed
- Update in Vercel dashboard
- Redeploy: `vercel redeploy`

**Check 3:** Function logs
- Vercel dashboard → Functions → sendEmail
- Look for error messages

### CORS Issues

The serverless function includes CORS headers for all origins.

If still seeing CORS errors:
1. Clear browser cache
2. Try incognito window
3. Check Vercel function logs

### Frontend Not Loading

**Check:** Vite build output
```bash
cd client
npm run build
```

If errors, fix locally first before redeploying.

---

## Continuous Deployment

Once connected to GitHub:

- **Auto-deploy on push** to main branch
- **Preview deployments** for pull requests
- **Rollback** to previous versions anytime
- **Environment-specific variables** (staging/production)

---

## Performance Tips

1. **Optimize Images** - Use WebP format
2. **Code Splitting** - React Router already handles this
3. **Minification** - Vite handles automatically
4. **Caching** - Vercel CDN caches static assets
5. **Lighthouse** - Run audits regularly

---

## Security Checklist

- ✅ Environment variables secure
- ✅ No secrets in version control
- ✅ HTTPS enabled by default
- ✅ CORS properly configured
- ✅ Input validation server-side
- ✅ Rate limiting (configure in Vercel settings)

---

## Updating & Redeploying

### Deploy Latest Changes

```bash
# If using GitHub
git add .
git commit -m "Your message"
git push  # Auto-deploys to Vercel

# If using Vercel CLI
vercel
```

### Update Dependencies

```bash
npm update
cd client
npm update
cd ..
git add .
git commit -m "Update dependencies"
git push
```

---

## Domain Configuration

### Add Custom Domain

1. Vercel dashboard → **Settings → Domains**
2. Enter your domain name
3. Add DNS records (Vercel provides instructions)
4. SSL/TLS auto-configured

### Email Forwarding (Optional)

If using custom domain for email:
1. Configure DNS records
2. Set up mail forwarding or mailbox
3. Update `EMAIL_USER` in Vercel environment

---

## Backup & Migration

### Export Data

- Vercel stores deployment history
- Database/emails not stored (serverless)
- Keep local `.env` exports

### Migrate Away from Vercel

1. Export environment variables
2. Re-deploy to alternative (AWS, Netlify, etc.)
3. Update DNS if custom domain

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Community:** [vercel.com/community](https://vercel.com/community)
- **Status:** [status.vercel.com](https://status.vercel.com)

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test quote form → email
3. ✅ Add custom domain (optional)
4. ✅ Set up Google Analytics
5. ✅ Configure email notifications
6. ✅ Train team on form submissions

---

**Your Feral2Fresh website is live!** 🎉
