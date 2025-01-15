import { jeansImages, formalShirtImages, casualShirtImages, premiumImages, trendingImages, getUniqueRandomImages } from './product-images';

export const collections = {
  denim: [
    {
      id: 'c1',
      name: 'Classic Blue Jeans',
      price: 2899,
      image: jeansImages[0],
      category: 'jeans',
      brand: 'Levi\'s'
    },
    // Add more denim products...
  ],
  formal: [
    {
      id: 'f1',
      name: 'White Business Shirt',
      price: 1899,
      image: formalShirtImages[0],
      category: 'shirts',
      brand: 'Van Heusen'
    },
    // Add more formal products...
  ],
  casual: [
    {
      id: 'cas1',
      name: 'Denim Casual Shirt',
      price: 2199,
      image: casualShirtImages[0],
      category: 'shirts',
      brand: 'Levi\'s'
    },
    // Add more casual products...
  ],
  trending: [
    {
      id: 't1',
      name: 'Slim Fit Black Jeans',
      price: 2499,
      image: trendingImages[0],
      category: 'jeans',
      brand: 'Pepe'
    },
    // Add more trending products...
  ],
  premium: [
    {
      id: 'p1',
      name: 'Designer Denim Jacket',
      price: 4999,
      image: premiumImages[0],
      category: 'jackets',
      brand: 'Levi\'s Premium'
    },
    // Add more premium products...
  ]
};

// Generate products for each collection with unique images
const generateProducts = (baseProducts, count, images) => {
  const products = [];
  const styles = ['Slim', 'Regular', 'Relaxed', 'Skinny', 'Straight', 'Boot Cut', 'Tapered'];
  const colors = ['Blue', 'Black', 'Grey', 'White', 'Navy', 'Light Blue', 'Dark Blue'];
  const washes = ['Light Wash', 'Medium Wash', 'Dark Wash', 'Stone Wash', 'Acid Wash'];
  const fits = ['Classic Fit', 'Modern Fit', 'Slim Fit', 'Regular Fit', 'Relaxed Fit'];
  
  // Get unique random images for this collection
  const uniqueImages = getUniqueRandomImages(images, count);
  
  for (let i = 0; i < count; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const style = styles[Math.floor(Math.random() * styles.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const wash = washes[Math.floor(Math.random() * washes.length)];
    const fit = fits[Math.floor(Math.random() * fits.length)];
    
    products.push({
      ...baseProduct,
      id: `${baseProduct.id}_${i}`,
      name: `${style} ${color} ${baseProduct.category === 'jeans' ? wash + ' Jeans' : fit + ' Shirt'}`,
      price: Math.floor(baseProduct.price * (0.8 + Math.random() * 0.4)), // Price variation ±20%
      image: uniqueImages[i] // Use unique image for each product
    });
  }
  return products;
};

// Generate products for each collection with appropriate images
Object.keys(collections).forEach(key => {
  const images = {
    denim: jeansImages,
    formal: formalShirtImages,
    casual: casualShirtImages,
    trending: trendingImages,
    premium: premiumImages
  };
  collections[key] = generateProducts(collections[key], 120, images[key]);
});

// Generate new arrivals with a mix of different images
export const newArrivals = [
  ...generateProducts(collections.denim.slice(0, 2), 10, jeansImages),
  ...generateProducts(collections.formal.slice(0, 2), 10, formalShirtImages),
  ...generateProducts(collections.casual.slice(0, 2), 10, casualShirtImages)
];
