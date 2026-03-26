# Feral2Fresh

A production-ready React SPA for Alanna Manning's residential and commercial cleaning business.

**Built with:** React + Vite, Redux Toolkit, Tailwind CSS, React Router, React Hook Form

**Backend:** Vercel serverless function with Nodemailer + Gmail SMTP

---

## Features

✅ **Modern React SPA** - Fast, responsive, production-ready  
✅ **Serverless Email** - Nodemailer via Gmail SMTP on Vercel  
✅ **Quote Management** - Real-time form validation & submission  
✅ **Responsive Design** - Mobile-first, Tailwind CSS  
✅ **Redux State** - Booking submissions & UI state management  
✅ **Toast Notifications** - User feedback on success/error  
✅ **Testimonials** - Client reviews & before/after gallery  
✅ **SEO Ready** - Meta tags & semantic HTML  

---

## Project Structure

```
feraltofresh/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Route pages
│   │   ├── store/           # Redux store
│   │   ├── features/        # Redux slices
│   │   ├── services/        # API services
│   │   ├── App.jsx          # Main app with routing
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Static assets
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind setup
│   ├── postcss.config.js    # PostCSS setup
│   ├── package.json
│   └── .env.example         # Environment variables example
├── api/
│   └── sendEmail.js         # Vercel serverless function
├── .env.example             # Root environment template
└── package.json             # Root workspace config
```

---

## Installation

### Prerequisites

- Node.js 16+ & npm
- Git (optional)
- Gmail account with App Password

### Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd feraltofresh
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd client && npm install
   cd ..
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env` in the root directory
   - Copy `client/.env.example` to `client/.env` in the client directory
   - Fill in your values:
     ```env
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     VITE_API_ENDPOINT=http://localhost:3000/api  # for local dev
     ```

4. **Get Gmail App Password**
   - Enable 2-Factor Authentication on your Gmail account
   - Visit [Google Account Security](https://myaccount.google.com/apppasswords)
   - Generate an App Password for "Mail" and "Windows"
   - Use this 16-character password in `EMAIL_PASS`

---

## Development

### Run Local Frontend

```bash
npm run dev
# or
cd client && npm run dev
```

The React app will start at `http://localhost:5173`

### Test Email Function Locally

For testing the serverless function locally, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

This will run both the frontend and API function locally.

---

## Building

### Production Build

```bash
npm run build
```

This creates an optimized build in `client/dist/`

### Preview Build

```bash
npm run preview
```

Serves the production build locally to test before deployment.

---

## Deployment

### Deploy to Vercel

#### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel auto-detects the project structure
4. Deploys frontend and API functions automatically

### Configure Environment Variables on Vercel

1. Go to **Project Settings → Environment Variables**
2. Add:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```
3. Redeploy for changes to take effect

### Deployed URLs

After deployment:
- **Frontend:** `https://your-project.vercel.app`
- **API:** `https://your-project.vercel.app/api/sendEmail`

---

## Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, quote form, services preview, testimonials |
| About | `/about` | Founder story, mission, values |
| Services | `/services` | Service details, pricing, features |
| Testimonials | `/testimonials` | Client reviews, before/after gallery |
| Contact | `/contact` | Contact info, FAQ, quote form |

---

## API Endpoint

### POST `/api/sendEmail`

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(123) 456-7890",
  "serviceType": "residential",
  "propertySize": "medium",
  "notes": "Optional notes"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Quote request sent successfully!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Failed to send quote request"
}
```

**Email Flow:**
- ✉️ Email sent to owner (Alanna Manning) with client details
- ✉️ Confirmation email sent to client
- Both formatted with HTML templates

---

## Components

### Layout
- **Navbar** - Navigation with mobile hamburger menu
- **Footer** - Links, contact info, social
- **Section** - Wrapper for page sections

### UI Elements
- **Button** - Variants: primary, secondary, outline
- **Card** - Reusable card component with hover effects
- **Input** - Form input with validation feedback
- **Spinner** - Loading state indicator
- **Toast** - Success/error notifications

### Forms
- **QuoteForm** - Full quote submission form with validation

---

## Redux State

### Slices

#### `bookingSlice`
```javascript
{
  submissions: [
    { name, email, phone, serviceType, propertySize, notes }
  ]
}
```

Actions: `addSubmission`, `clearSubmissions`

#### `uiSlice`
```javascript
{
  loading: boolean,
  success: string | null,
  error: string | null
}
```

Actions: `setLoading`, `setSuccess`, `setError`, `clearMessages`

---

## Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Global styles in `src/index.css`
- **Color Palette:**
  - Primary Green: `#10b981`
  - Secondary Blue: `#0ea5e9`
  - Dark: `#1f2937`
  - Light: `#f9fafb`

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `EMAIL_USER` | Yes | Gmail address for sending emails |
| `EMAIL_PASS` | Yes | Gmail App Password (16 characters) |
| `VITE_API_ENDPOINT` | No | API endpoint URL (defaults to `/api`) |

**Local Development:** Create `client/.env` and `.env` files  
**Production:** Configure through Vercel dashboard

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- ⚡ Vite for fast HMR
- 🎯 Code splitting with React Router
- 📦 Redux for efficient state management
- 🎨 Tailwind CSS for minimal CSS output
- 🚀 Vercel serverless for auto-scaling

---

## Security

✅ Form validation on client & server  
✅ CORS headers configured  
✅ Environment variables for secrets  
✅ No sensitive data in version control  
✅ Input sanitization  
✅ HTTPS on production  

---

## Troubleshooting

### Email not sending
- ✓ Check Gmail App Password is correct
- ✓ Verify 2FA is enabled on Gmail
- ✓ Check environment variables are set
- ✓ Look at Vercel function logs

### Forms not submitting
- ✓ Check browser console for errors
- ✓ Verify API endpoint URL is correct
- ✓ Check CORS headers in serverless function

### Build issues
- ✓ Delete `node_modules` and `.env` files
- ✓ Run `npm install` again
- ✓ Check Node version (16+)

---

## Development Notes

- **No TypeScript** - JavaScript only for simplicity
- **No backend server** - Vercel serverless only
- **Nodemailer + Gmail** - Required for email
- **Production-ready** - All best practices followed
- **Responsive** - Mobile-first design

---

## Future Enhancements

- Online booking system
- Payment integration
- Team member profiles
- Service area map
- Review submission form
- Image gallery
- Calendar integration

---

## Support

For questions or issues:
- Email: info@feral2fresh.com
- Phone: (123) 456-7890

---

## License

© 2026 Feral2Fresh. All rights reserved.

---

**Built with ❤️ by Alanna Manning**
