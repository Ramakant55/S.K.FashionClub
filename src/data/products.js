export const products = {
  jeans: [
    {
      id: 'j1',
      name: 'Levi\'s 511 Slim Fit',
      price: 1999,
      brand: 'Levi\'s',
      category: 'jeans',
      type: 'men',
      sizes: ['30', '32', '34', '36'],
      colors: ['Blue', 'Black', 'Grey'],
      image: '/images/products/jeans/levis-511.jpg'
    },
    {
      id: 'j2',
      name: 'Wrangler Regular Fit',
      price: 1799,
      brand: 'Wrangler',
      category: 'jeans',
      type: 'men',
      sizes: ['30', '32', '34', '36'],
      colors: ['Dark Blue', 'Black'],
      image: '/images/products/jeans/wrangler-regular.jpg'
    },
    {
      id: 'j3',
      name: 'Pepe Jeans London Slim',
      price: 2499,
      brand: 'Pepe',
      category: 'jeans',
      type: 'men',
      sizes: ['28', '30', '32', '34'],
      colors: ['Light Blue', 'Dark Blue'],
      image: '/images/products/jeans/pepe-slim.jpg'
    },
    // Add more jeans...
  ],
  shirts: [
    {
      id: 's1',
      name: 'Peter England Formal Shirt',
      price: 999,
      brand: 'Peter England',
      category: 'shirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Light Blue', 'Pink'],
      image: '/images/products/shirts/pe-formal.jpg'
    },
    {
      id: 's2',
      name: 'Allen Solly Casual Shirt',
      price: 1299,
      brand: 'Allen Solly',
      category: 'shirts',
      type: 'men',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Blue', 'White', 'Grey'],
      image: '/images/products/shirts/allensolly-casual.jpg'
    },
    {
      id: 's3',
      name: 'Van Heusen Slim Fit',
      price: 1499,
      brand: 'Van Heusen',
      category: 'shirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Sky Blue'],
      image: '/images/products/shirts/vanheusen-slim.jpg'
    },
    // Add more shirts...
  ],
  tshirts: [
    {
      id: 't1',
      name: 'US Polo Assn Basic Tee',
      price: 799,
      brand: 'US Polo',
      category: 'tshirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy'],
      image: '/images/products/tshirts/uspolo-basic.jpg'
    },
    {
      id: 't2',
      name: 'Puma Sports T-Shirt',
      price: 899,
      brand: 'Puma',
      category: 'tshirts',
      type: 'men',
      sizes: ['M', 'L', 'XL'],
      colors: ['Red', 'Black', 'Grey'],
      image: '/images/products/tshirts/puma-sports.jpg'
    },
    {
      id: 't3',
      name: 'Nike Dri-FIT',
      price: 1299,
      brand: 'Nike',
      category: 'tshirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Blue'],
      image: '/images/products/tshirts/nike-drifit.jpg'
    },
    // Add more t-shirts...
  ]
};

// Popular brands available in store
export const brands = [
  'Levi\'s',
  'Wrangler',
  'Pepe',
  'Peter England',
  'Allen Solly',
  'Van Heusen',
  'US Polo',
  'Puma',
  'Nike',
  'Adidas',
  'Raymond',
  'Park Avenue',
  'Flying Machine',
  'Monte Carlo',
  'Jack & Jones'
];

// Store Details
export const storeDetails = {
  name: 'S.K. Fashion Club',
  owner: 'Sunil Sheoran',
  address: {
    street: 'Opposite Post Office',
    landmark: 'Near Kisan Tent House',
    city: 'Sadulpur',
    area: 'Rajgarh',
    state: 'Rajasthan',
    country: 'India'
  },
  contact: {
    mobile: '8708716387',
    whatsapp: '8708716387',
    email: 'skfashionclub@gmail.com'
  },
  businessHours: {
    monday: '7:00 AM - 7:00 PM',
    tuesday: '7:00 AM - 7:00 PM',
    wednesday: '7:00 AM - 7:00 PM',
    thursday: '7:00 AM - 7:00 PM',
    friday: '7:00 AM - 7:00 PM',
    saturday: '7:00 AM - 7:00 PM',
    sunday: '8:00 AM - 7:00 PM'
  },
  features: [
    'Latest Fashion Trends',
    'Premium Brands',
    'Affordable Prices',
    'Quality Assurance',
    'Expert Tailoring Services',
    'Size Alterations',
    'Home Delivery Available',
    'Easy Returns',
    'Festival Offers',
    'Seasonal Discounts'
  ],
  categories: [
    'Men\'s Wear',
    'Formal Wear',
    'Casual Wear',
    'Party Wear',
    'Traditional Wear',
    'Sports Wear',
    'Winter Collection',
    'Summer Collection'
  ],
  services: [
    'Personal Styling',
    'Bulk Orders',
    'Gift Wrapping',
    'Express Delivery',
    'Customization',
    'Membership Program'
  ],
  paymentMethods: [
    'Cash',
    'UPI',
    'Credit Card',
    'Debit Card',
    'Net Banking',
    'EMI Available'
  ],
  socialMedia: {
    facebook: 'fb.com/skfashionclub',
    instagram: 'instagram.com/skfashionclub',
    whatsapp: '8708716387'
  }
};
