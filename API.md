# API Documentation

## Serverless Function: sendEmail

Base URL: `/api/sendEmail`

Deployed location: `https://your-project.vercel.app/api/sendEmail`

---

## Endpoint

### POST `/api/sendEmail`

Handles quote requests from the frontend and sends emails to both the business owner and the client.

---

## Request

### Method
`POST`

### Content-Type
`application/json`

### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Client's full name (min 2 characters) |
| `email` | string | Yes | Client's email address (valid email format) |
| `phone` | string | Yes | Client's phone number (10+ characters) |
| `serviceType` | string | Yes | Service type: `residential`, `commercial`, `deep-clean`, `move-in-out` |
| `propertySize` | string | Yes | Property size: `small`, `medium`, `large`, `extra-large` |
| `notes` | string | No | Additional notes about the cleaning request |

### Example Request

```bash
curl -X POST https://your-project.vercel.app/api/sendEmail \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "(123) 456-7890",
    "serviceType": "residential",
    "propertySize": "medium",
    "notes": "First-time customer, looking for weekly service"
  }'
```

### JavaScript Fetch Example

```javascript
const response = await fetch('/api/sendEmail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(123) 456-7890',
    serviceType: 'residential',
    propertySize: 'medium',
    notes: 'Additional notes here',
  }),
});

const data = await response.json();
```

---

## Response

### Success Response (200)

```json
{
  "success": true,
  "message": "Quote request sent successfully. Check your email for confirmation."
}
```

### Error Response (400 - Validation Error)

```json
{
  "message": "Missing required fields"
}
```

### Error Response (405 - Method Not Allowed)

```json
{
  "message": "Method not allowed"
}
```

### Error Response (500 - Server Error)

```json
{
  "success": false,
  "message": "Failed to send quote request. Please try again later.",
  "error": "Error details here"
}
```

---

## Email Flow

### 1. Owner Email

**Recipient:** `EMAIL_USER` (configured in environment)

**Subject:** `New Quote Request from {name}`

**Content Includes:**
- Client name
- Client email
- Client phone
- Service type
- Property size
- Additional notes
- Reply-To: Client's email

**Purpose:** Alert owner of new business inquiry

### 2. Client Confirmation Email

**Recipient:** Client's email address

**Subject:** `Quote Request Received - Feral2Fresh`

**Content Includes:**
- Confirmation message
- Service type requested
- Property size selected
- Next steps
- Contact information
- Call-to-action

**Purpose:** Confirm receipt and set expectations

---

## Service Type Mapping

| Value | Display Name |
|-------|--------------|
| `residential` | Residential Cleaning |
| `commercial` | Commercial Cleaning |
| `deep-clean` | Deep Clean |
| `move-in-out` | Move-In/Out Cleaning |

---

## Property Size Mapping

| Value | Display Name |
|-------|--------------|
| `small` | Small (Under 1000 sq ft) |
| `medium` | Medium (1000-2500 sq ft) |
| `large` | Large (2500-5000 sq ft) |
| `extra-large` | Extra Large (5000+ sq ft) |

---

## Status Codes

| Code | Meaning | Resolution |
|------|---------|-----------|
| 200 | Success | Request processed successfully |
| 400 | Bad Request | Check all required fields are present |
| 405 | Method Not Allowed | Only POST requests allowed |
| 500 | Server Error | Check environment variables, retry later |

---

## Environment Variables

Required for function to work:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Important Notes

- `EMAIL_USER`: Gmail address that sends and receives emails
- `EMAIL_PASS`: 16-character App Password (NOT your Gmail password)
- Both must be configured in Vercel dashboard

### Get App Password

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows"
3. Copy the generated 16-character password
4. Never use your actual Gmail password

---

## Rate Limiting

By default, there is no rate limiting. For production, consider:

1. **Add rate limiting middleware** (Vercel Enterprise)
2. **Implement database tracking** of submissions
3. **Use third-party service** (e.g., Firebase)

Example rate limit configuration (future):
- Max 10 requests per IP per hour
- 100 requests per day max

---

## CORS Headers

Function includes CORS headers for all origins:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS, PATCH, DELETE, POST, PUT
Access-Control-Allow-Headers: X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version
```

---

## Error Handling

### Validation Errors

Missing or invalid requirements:
```json
{
  "message": "Missing required fields"
}
```

Check that all fields are provided and valid.

### SMTP Errors

Email sending failure:
```json
{
  "success": false,
  "message": "Failed to send quote request. Please try again later.",
  "error": "SMTP error details"
}
```

**Troubleshoot:**
- Verify EMAIL_USER and EMAIL_PASS in Vercel
- Check Gmail App Password is correct
- Ensure 2FA is enabled on Gmail
- Verify EMAIL_PASS is 16 characters

---

## Security

✅ Input validation on all fields  
✅ CORS headers configured  
✅ Environment variables for secrets  
✅ No sensitive data logged  
✅ HTTPS enforced in production  
✅ Serverless isolation  

---

## Monitoring

### Vercel Dashboard

1. Go to **Functions** tab
2. Click `sendEmail`
3. View:
   - Invocation logs
   - Error counts
   - Response times
   - Memory usage

### Log Inspection

```bash
# Using Vercel CLI
vercel logs api/sendEmail
```

### Error Tracking

Errors are logged to Vercel with context:
- Event timestamp
- Request payload (sanitized)
- Error message
- Stack trace

---

## Rate Limits (Self-Imposed)

Implement on frontend to prevent abuse:

```javascript
// Prevent rapid submissions
let lastSubmit = 0;
const RATE_LIMIT = 5000; // 5 seconds

const canSubmit = () => {
  const now = Date.now();
  if (now - lastSubmit < RATE_LIMIT) {
    return false;
  }
  lastSubmit = now;
  return true;
};
```

---

## Testing

### Local Testing

```bash
# Start development server
vercel dev

# Test with curl
curl -X POST http://localhost:3000/api/sendEmail \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com",...}'
```

### Production Testing

1. Visit deployed site
2. Fill quote form
3. Submit
4. Check email inbox
5. Verify both emails received

---

## Deployment

### Update Function

1. Modify `/api/sendEmail.js`
2. Commit and push
3. Vercel auto-deploys
4. Function URL unchanged

### Update Environment Variables

1. Vercel dashboard → Settings → Environment Variables
2. Update values
3. Click "Redeploy" button
4. Function uses new values

---

## Troubleshooting

### 500 Error on Submit

**Check:**
- EMAIL_USER set in Vercel?
- EMAIL_PASS set and is 16 characters?
- 2FA enabled on Gmail?
- App Password correct?

**Fix:**
```bash
vercel env list
# Update if needed
vercel redeploy
```

### CORS Error on Frontend

**Check:**
- Function deployed?
- API endpoint correct?
- Browser allowing requests?

**Fix:**
- Check browser console for actual error
- Verify API URL in frontend
- Clear browser cache
- Try incognito window

### Email Not Received

**Check:**
- Function executed (check logs)
- Your inbox spam folder
- Gmail forwarding rules
- App Password hasn't changed

### Slow Response Time

Check Vercel function logs for:
- Cold start (first request slower)
- Email sending latency
- Network delays

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Nodemailer Docs:** https://nodemailer.com
- **Gmail App Passwords:** https://myaccount.google.com/apppasswords
- **Function Logs:** Vercel Dashboard → Functions

---

**Last Updated:** 2026-03-25  
**Maintained by:** Feral2Fresh Development Team
