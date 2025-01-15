// Local images paths for better performance
export const jeansImages = [
  '/images/jeans/jeans-1.jpg',
  '/images/jeans/jeans-2.jpg',
  '/images/jeans/jeans-3.jpg',
  '/images/jeans/jeans-4.jpg',
  '/images/jeans/jeans-5.jpg',
  '/images/jeans/jeans-6.jpg',
  '/images/jeans/jeans-7.jpg',
  '/images/jeans/jeans-8.jpg',
  '/images/jeans/jeans-9.jpg',
  '/images/jeans/jeans-10.jpg'
];

// Formal shirts images from Pexels - Only clothing focused images
export const formalShirtImages = [
  '/images/formal/formal-1.jpg',
  '/images/formal/formal-2.jpg',
  '/images/formal/formal-3.jpg',
  '/images/formal/formal-4.jpg',
  '/images/formal/formal-5.jpg',
  '/images/formal/formal-6.jpg',
  '/images/formal/formal-7.jpg',
  '/images/formal/formal-8.jpg',
  '/images/formal/formal-9.jpg',
  '/images/formal/formal-10.jpg'
];

// Casual shirts images from Pexels - Only clothing focused images
export const casualShirtImages = [
  '/images/casual/casual-1.jpg',
  '/images/casual/casual-2.jpg',
  '/images/casual/casual-3.jpg',
  '/images/casual/casual-4.jpg',
  '/images/casual/casual-5.jpg',
  '/images/casual/casual-6.jpg',
  '/images/casual/casual-7.jpg',
  '/images/casual/casual-8.jpg',
  '/images/casual/casual-9.jpg',
  '/images/casual/casual-10.jpg'
];

// Premium clothing images from Pexels - Only clothing focused images
export const premiumImages = [
  '/images/premium/premium-1.jpg',
  '/images/premium/premium-2.jpg',
  '/images/premium/premium-3.jpg',
  '/images/premium/premium-4.jpg',
  '/images/premium/premium-5.jpg',
  '/images/premium/premium-6.jpg',
  '/images/premium/premium-7.jpg',
  '/images/premium/premium-8.jpg',
  '/images/premium/premium-9.jpg',
  '/images/premium/premium-10.jpg'
];

// Trending clothing images - Mix of best images from other categories
export const trendingImages = [
  ...jeansImages.slice(0, 3),
  ...formalShirtImages.slice(0, 3),
  ...casualShirtImages.slice(0, 2),
  ...premiumImages.slice(0, 2)
];

// Function to get unique random images from an array
export const getUniqueRandomImages = (images, count) => {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, images.length));
};
