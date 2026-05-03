export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export const services = [
  {
    id: 1,
    title: 'Residential Cleaning',
    // icon: '🏠',
    description: 'Professional home cleaning tailored to your family\'s needs.',
    features: [
      'Weekly, bi-weekly, or monthly service',
      'Customized cleaning plans',
      'Eco-friendly products available',
      'Flexible scheduling',
      'Trusted with your home',
    ],
    pricing: [
      { tier: 'Starter', price: '$99', description: 'Basic home cleaning' },
      { tier: 'Standard', price: '$149', description: 'Comprehensive cleaning' },
      { tier: 'Premium', price: '$199', description: 'Deep clean + extras' },
    ],
  },
  {
    id: 2,
    title: 'Commercial Cleaning',
    // icon: '🏢',
    description: 'Keep your workplace clean, professional, and productive.',
    features: [
      'Office spaces & workplaces',
      'Retail locations',
      'Medical facilities',
      'Multi-unit properties',
      'Flexible scheduling (after-hours available)',
    ],
    pricing: [
      { tier: 'Small', price: 'Custom Quote', description: 'Up to 2,000 sq ft' },
      { tier: 'Medium', price: 'Custom Quote', description: '2,000 - 5,000 sq ft' },
      { tier: 'Large', price: 'Custom Quote', description: '5,000+ sq ft' },
    ],
  },
  {
    id: 3,
    title: 'Deep Clean',
    // icon: '⚡',
    description: 'Thorough, intensive cleaning—from corners to baseboards.',
    features: [
      'Complete interior detail',
      'Carpet & upholstery cleaning',
      'Window & blind cleaning',
      'Grout & tile restoration',
      'Move-in/move-out ready',
    ],
    pricing: [
      { tier: 'Small Home', price: '$299', description: 'Up to 1,500 sq ft' },
      { tier: 'Medium Home', price: '$499', description: '1,500 - 3,000 sq ft' },
      { tier: 'Large Home', price: '$799', description: '3,000+ sq ft' },
    ],
  },
  {
    id: 4,
    title: 'Move-In/Move-Out',
    // icon: '📦',
    description: 'Leave your old space spotless; move into a fresh environment.',
    features: [
      'Post-move cleanup',
      'Pre-move deep clean',
      'Arrival-ready preparation',
      'Turnover cleaning',
      'Detailed walk-through',
    ],
    pricing: [
      { tier: 'Standard', price: '$299', description: 'Standard property' },
      { tier: 'Large', price: '$499', description: 'Large property' },
      { tier: 'Enterprise', price: 'Custom Quote', description: 'Multi-unit/complex' },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    category: 'kitchens',
    text: 'Feral2Fresh completely transformed my kitchen. The grease, grime, and buildup from years of cooking—gone in a single day. The attention to detail is incredible, and they treated my home with such respect.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Lee',
    role: 'Office Manager',
    category: 'offices',
    text: 'Our office has never looked better. Professional, reliable, and on schedule every time. The team handles our monthly deep cleans with exceptional efficiency and care.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer Smith',
    role: 'Property Manager',
    category: 'commercial',
    text: 'Alanna and her team handle our multi-property portfolio with remarkable consistency. They\'re detail-oriented, professional, and always go the extra mile.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Homeowner',
    category: 'living',
    text: 'We were overwhelmed after renovations left our living room in disaster. Feral2Fresh not only cleaned everything, but organized it beautifully. Incredible service!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Restaurant Owner',
    category: 'offices',
    text: 'Professional cleaning for our restaurant kitchen. They understand food service standards and execute flawlessly every time.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Michael Thompson',
    role: 'Homeowner',
    category: 'kitchens',
    text: 'The move-in clean they provided when we bought our home was thorough and reasonably priced. We\'ve hired them for regular maintenance ever since.',
    rating: 5,
  },
];

export const beforeAfterGallery = [
  {
    category: 'kitchens',
    title: 'Kitchen Transformation',
    description: 'Heavy grease buildup on cabinets and appliances removed. Pristine, professional finish.',
  },
  {
    category: 'kitchens',
    title: 'Deep Kitchen Clean',
    description: 'Complete backsplash and stovetop restoration. Sparkling results.',
  },
  {
    category: 'living',
    title: 'Living Room Refresh',
    description: 'Carpet cleaning, furniture treatment, and full detail work.',
  },
  {
    category: 'living',
    title: 'Pre-Move Cleaning',
    description: 'Entire rental prepared for new residents. Move-ready clean.',
  },
  {
    category: 'offices',
    title: 'Office Deep Clean',
    description: 'Daily turnover, carpet cleaning, desk and conference room detail.',
  },
  {
    category: 'commercial',
    title: 'Commercial Property',
    description: 'Multi-unit complex maintained to highest standards.',
  },
];

export const testimonialCategories = [
  { value: 'all', label: 'All Testimonials' },
  { value: 'kitchens', label: 'Kitchens' },
  { value: 'living', label: 'Living Spaces' },
  { value: 'offices', label: 'Offices & Commercial' },
];

export const serviceTypes = [
  { value: 'residential', label: 'Residential Cleaning' },
  { value: 'commercial', label: 'Commercial Cleaning' },
  { value: 'deep-clean', label: 'Deep Clean' },
  { value: 'move-in-out', label: 'Move-In/Out' },
];

export const propertySizes = [
  { value: 'small', label: 'Small (Under 1000 sq ft)' },
  { value: 'medium', label: 'Medium (1000-2500 sq ft)' },
  { value: 'large', label: 'Large (2500-5000 sq ft)' },
  { value: 'extra-large', label: 'Extra Large (5000+ sq ft)' },
];

export const contactInfo = {
  email: 'lanadavis@feral2fresh.com',
  phone: '(806) 560-0783',
  phoneHref: '+8065600783',
  hours: [
    { label: 'Monday - Friday', value: '8:00 AM - 6:00 PM' },
    { label: 'Saturday', value: '10:00 AM - 4:00 PM' },
    { label: 'Sunday', value: 'By Appointment' },
  ],
  serviceAreas: [
    'Serving the greater metropolitan area',
    'Residential & Commercial Properties',
  ],
  socialLinks: [
    // { label: 'Facebook', href: '#' },
    // { label: 'Instagram', href: '#' },
  ],
};

