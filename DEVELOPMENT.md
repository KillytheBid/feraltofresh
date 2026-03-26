# Local Development Guide

## Prerequisites

- **Node.js 16+** - [Download](https://nodejs.org/)
- **npm** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Gmail Account** with 2FA enabled

## Setup

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Create Environment Files

**Root directory** - Create `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
```

**client directory** - Create `client/.env`:
```env
VITE_API_ENDPOINT=http://localhost:3000/api
```

### 3. Get Gmail App Password

1. Enable 2-Factor Authentication on Gmail
2. Visit [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows"
4. Copy the 16-character password
5. Paste into `.env` file as `EMAIL_PASS`

## Development Server

### Option 1: Frontend Only (Quick Start)

```bash
npm run dev
```

This starts the React dev server at `http://localhost:5173`

**Note:** Email submissions will fail without the API running. Use for UI development only.

### Option 2: Full Stack (Frontend + API)

```bash
npm install -g vercel
vercel dev
```

This runs both:
- Frontend: `http://localhost:3000`
- API: `http://localhost:3000/api/sendEmail`

Both frontend and serverless function work together.

## Development Workflow

### Frontend Development

```bash
cd client
npm run dev
```

- Hot Module Replacement (HMR) enabled
- Changes reflect instantly
- No page refresh needed

### Testing Email Function

1. Start full stack: `vercel dev`
2. Fill out quote form on website
3. Submit
4. Check email inbox
5. View logs in terminal

### Building for Production

```bash
npm run build
```

Creates optimized build in `client/dist/`

### Preview Production Build

```bash
npm run preview
```

Serves production build at `http://localhost:4173`

## Project Structure

```
src/
├── components/
│   ├── Button.jsx         # Reusable button
│   ├── Card.jsx          # Card wrapper
│   ├── Input.jsx         # Form input
│   ├── Spinner.jsx       # Loading indicator
│   ├── Toast.jsx         # Notifications
│   ├── Navbar.jsx        # Navigation bar
│   ├── Footer.jsx        # Footer
│   ├── Section.jsx       # Section wrapper
│   └── QuoteForm.jsx     # Main quote form
├── pages/
│   ├── Home.jsx          # Home page
│   ├── About.jsx         # About page
│   ├── Services.jsx      # Services page
│   ├── Testimonials.jsx  # Testimonials page
│   └── Contact.jsx       # Contact page
├── store/
│   └── index.js          # Redux store setup
├── features/
│   ├── bookingSlice.js   # Booking reducer
│   └── uiSlice.js        # UI reducer
├── services/
│   └── emailService.js   # Email API calls
├── App.jsx               # Main App component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run full stack (frontend + API)
vercel dev

# Install dependencies
npm install

# Update dependencies
npm update
```

## Debugging

### Check Redux State

Install Redux DevTools browser extension:
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmjabmlblmhcbdcjlhbmbkfdlcekstns)
- [Firefox](https://addons.mozilla.org/firefox/addon/reduxdevtools/)

### Console Debugging

```javascript
// In any page/component
import { useSelector } from 'react-redux';
const state = useSelector(state => state);
console.log('Full state:', state);
```

### Network Requests

1. Open Developer Tools (F12)
2. Go to Network tab
3. Submit quote form
4. Check request to `/api/sendEmail`
5. View response and status

## Troubleshooting

### "Cannot find module" errors

**Solution:**
```bash
rm -rf node_modules client/node_modules
npm install
cd client && npm install && cd ..
```

### Email not sending

Check:
- `.env` file has correct `EMAIL_USER` and `EMAIL_PASS`
- Gmail App Password is 16 characters
- 2FA enabled on Gmail
- Vercel dev server running (`vercel dev`)

### Port already in use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process (macOS/Linux)
kill -9 <PID>

# Kill process (Windows)
taskkill /PID <PID> /F
```

### Vite warnings

These are normal and don't affect development:
```
⚠️ [plugin:vite:import-analysis] ...
```

Ignore these or run: `npm run build` to check for actual errors.

## Performance Tips

1. **Use React DevTools** - [Install extension](https://react-devtools-tutorial.vercel.app/)
2. **Check bundle size** - `npm run build` shows size
3. **Monitor network** - Use DevTools Network tab
4. **Lighthouse audits** - DevTools → Lighthouse

## VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier** - Code formatter
- **ESLint** - Code linter
- **Redux DevTools**

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "Add feature"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request on GitHub
# Submit and merge
```

## Environment Variables

### Development (.env)

```env
EMAIL_USER=dev-email@gmail.com
EMAIL_PASS=dev-app-password
```

### Client (.env)

```env
VITE_API_ENDPOINT=http://localhost:3000/api
```

### Production (Vercel)

Set via Vercel dashboard:
- Settings → Environment Variables
- EMAIL_USER
- EMAIL_PASS

## Testing Form Submission

### Quick Test

1. Run `vercel dev`
2. Go to `http://localhost:3000`
3. Fill quote form:
   - Name: Test User
   - Email: your-email@example.com
   - Phone: 1234567890
   - Service: Residential Cleaning
   - Size: Medium
4. Submit
5. Check inbox for emails

## Performance Metrics

Track with Vercel Analytics:

```javascript
// In production, Vercel auto-tracks:
- Page load time
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
```

## Next Steps

1. ✅ Set up environment
2. ✅ Run dev server
3. ✅ Make code changes
4. ✅ Test quote form
5. ✅ Deploy to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment.
