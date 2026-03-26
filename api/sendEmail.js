import nodemailer from 'nodemailer';

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
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

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

    // Email to owner (Alanna Manning)
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

    // Send email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request from ${name}`,
      html: ownerEmailContent,
      replyTo: email,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Quote Request Received - Feral2Fresh',
      html: clientEmailContent,
    });

    // Close the transporter
    transporter.close();

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
