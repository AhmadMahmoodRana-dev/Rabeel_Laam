import { useState } from 'react';
import TrendingProductFIlters from './TrendingProductFilters';
import TrendingProductCard from "./TrendingProductCard"
import image1 from '../../assets/unstiched (1).png';
import image2 from '../../assets/unstiched (2).png';
import image3 from '../../assets/unstiched (3).png';
import image4 from '../../assets/unstiched (4).png';
import image5 from '../../assets/unstiched (5).png';
import image6 from '../../assets/unstiched (6).png';
import image7 from '../../assets/unstiched (7).png';
import image8 from '../../assets/unstiched (8).png';
// Mock product data
const mockProducts = [
  {
    id: 1,
    name: 'Agha Jaan • CELINE',
    price: 9999,
    originalPrice: 33330,
    discount: 70,
    img: image1,
    express:true,
},
{
  id: 2,
  name: 'Agha Jaan • CELINE',
  price: 9999,
  originalPrice: 33330,
  discount: 70,
  img: image2,
  express:true,
},
{
    id: 3,
    name: 'Agha Jaan • CELINE',
    price: 9999,
    originalPrice: 33330,
    discount: 70,
    img: image3,
    express:true,
},
{
  id: 4,
  name: 'Agha Jaan • CELINE',
  price: 9999,
  originalPrice: 33330,
  discount: 70,
  img: image4,
  express:true,
},

{
    id: 5,
    name: 'Agha Jaan • CELINE',
    price: 9999,
    originalPrice: 33330,
    discount: 70,
    img: image5,
    express:true,
},
{
    id: 6,
    name: 'Agha Jaan • CELINE',
    price: 9999,
    originalPrice: 33330,
    discount: 70,
    img: image6,
    express:true,
},
{
    id: 7,
    name: 'Agha Jaan • CELINE',
    price: 9999,
    originalPrice: 33330,
    discount: 70,
    img: image7,
    express:true,
},
{
    id: 8,
    name: 'Agha Jaan • CELINE',
    price: 9999,
    originalPrice: 33330,
    discount: 70,
    img: image8,
    express:true,
},

];

// Sort label mappings
const sortOptionLabels = {
  'recommended': 'Recommended',
  'best-selling': 'Best Selling',
  'newest-first': 'Newest First',
  'price-low-high': 'Price: Low To High',
  'price-high-low': 'Price: High To Low',
  'discount-high-low': 'Discount: High To Low',
  'discount-low-high': 'Discount: Low To High',
  'delivery-earliest-latest': 'Delivery: Earliest To Latest',
  'delivery-latest-earliest': 'Delivery: Latest To Earliest',
};

function TrendingProducts() {
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState(null);
  const [products, setProducts] = useState(mockProducts);

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);

    const sortedProducts = [...mockProducts];

    switch (filters.sortBy) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest-first':
        // Handle sort by newest
        break;
      case 'best-selling':
        // Handle sort by best selling
        break;
      default:
        // Default sort
        break;
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="mx-auto w-full">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Product Catalog</h1>

        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => setShowFilter(true)}
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Show Filters
          </button>

          {activeFilters && (
            <div className="text-sm text-gray-600">
              <span className="font-medium">Active Sort: </span>
              {sortOptionLabels[activeFilters.sortBy] || 'None'}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {products.map((product) => (
            <TrendingProductCard product={product} />
          ))}
        </div>
      </div>

      {showFilter && (
        <TrendingProductFIlters
          onClose={handleCloseFilter}
          onApplyFilters={handleApplyFilters}
        />
      )}
    </div>
  );
}

export default TrendingProducts;
