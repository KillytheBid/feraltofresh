export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { name, email, phone, serviceType, propertySize, notes } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !serviceType || !propertySize) {
    return res.status(400).json({
      message: 'Missing required fields',
    });
  }

  try {
    // Mailgun API configuration
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const mailgunUrl = `https://api.mailgun.net/v3/${domain}/messages`;

    // Helper function to send email via Mailgun
    const sendMailgunEmail = async (to, subject, html) => {
      const formData = new URLSearchParams();
      formData.append('from', `Feral2Fresh <noreply@${domain}>`);
      formData.append('to', to);
      formData.append('subject', subject);
      formData.append('html', html);

      const response = await fetch(mailgunUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Mailgun error: ${error}`);
      }

      return response.json();
    };

    // Map service type to display name
    const serviceTypeMap = {
      residential: 'Residential Cleaning',
      commercial: 'Commercial Cleaning',
      'deep-clean': 'Deep Clean',
      'move-in-out': 'Move-In/Out Cleaning',
    };

    const propertySizeMap = {
      small: 'Small (Under 1000 sq ft)',
      medium: 'Medium (1000-2500 sq ft)',
      large: 'Large (2500-5000 sq ft)',
      'extra-large': 'Extra Large (5000+ sq ft)',
    };

    // Email recipient override via env (default for all outgoing mail)
    const fixedRelayEmail = process.env.NOTIFY_EMAIL;

    // Email to owner (or all copies for development/testing)
    const ownerEmail = process.env.OWNER_EMAIL || fixedRelayEmail;
    const ownerEmailContent = `
      <h2>New Quote Request from Feral2Fresh Website</h2>
      <hr>
      <h3>Client Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h3>Service Details:</h3>
      <p><strong>Service Type:</strong> ${serviceTypeMap[serviceType] || serviceType}</p>
      <p><strong>Property Size:</strong> ${propertySizeMap[propertySize] || propertySize}</p>
      
      <h3>Additional Notes:</h3>
      <p>${notes || 'No additional notes provided'}</p>
      
      <hr>
      <p><em>Reply to this client as soon as possible to provide a personalized quote.</em></p>
    `;

    // Email to client (confirmation)
    const clientEmailContent = `
      <h2>Quote Request Received - Feral2Fresh</h2>
      <p>Hi ${name},</p>
      <p>Thank you for requesting a quote from Feral2Fresh! We've received your information and will get back to you within 24 hours with a personalized estimate.</p>
      
      <h3>Your Quote Details:</h3>
      <p><strong>Service Type:</strong> ${serviceTypeMap[serviceType] || serviceType}</p>
      <p><strong>Property Size:</strong> ${propertySizeMap[propertySize] || propertySize}</p>
      
      ${notes ? `<p><strong>Your Notes:</strong> ${notes}</p>` : ''}
      
      <h3>What's Next?</h3>
      <ol>
        <li>Alanna Manning will review your request</li>
        <li>You'll receive a personalized quote via email</li>
        <li>We'll coordinate scheduling at your convenience</li>
      </ol>
      
      <p>If you have any questions, feel free to reach out to us at <strong>(123) 456-7890</strong> or <strong>info@feral2fresh.com</strong></p>
      
      <p>From Feral to Fresh—we look forward to transforming your space!</p>
      <p><strong>Feral2Fresh Team</strong></p>
    `;

    // Send email to owner/test inbox
    await sendMailgunEmail(ownerEmail, `New Quote Request from ${name}`, ownerEmailContent);

    // Send confirmation email to client (also forwarded to fixed relay for auditing)
    await sendMailgunEmail(fixedRelayEmail, 'Quote Request Received - Feral2Fresh', clientEmailContent);

    return res.status(200).json({
      success: true,
      message: 'Quote request sent successfully. Check your email for confirmation.',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send quote request. Please try again later.',
      error: error.message,
    });
  }
}
