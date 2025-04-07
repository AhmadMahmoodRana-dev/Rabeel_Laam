import { useState } from 'react';

const TrendingProductFIlters = ({ onClose, onApplyFilters }) => {
  const [activeCategory, setActiveCategory] = useState('Sort By');

  const [filterState, setFilterState] = useState({
    sortBy: 'recommended',
    fabric: [],
    price: '',
    size: [],
    color: [],
    brands: [],
    season: [],
    occasion: []
  });

  const categories = [
    'Sort By',
    'Fabric',
    'Price',
    'Size',
    'Color',
    'Brands',
    'Season',
    'Occasion'
  ];

  const sortOptions = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'best-selling', label: 'Best Selling' },
    { id: 'newest-first', label: 'Newest First' },
    { id: 'price-low-high', label: 'Price: Low To High' },
    { id: 'price-high-low', label: 'Price: High To Low' },
    { id: 'discount-high-low', label: 'Discount: High To Low' },
    { id: 'discount-low-high', label: 'Discount: Low To High' },
    { id: 'delivery-earliest-latest', label: 'Delivery: Earliest To Latest' },
    { id: 'delivery-latest-earliest', label: 'Delivery: Latest To Earliest' },
  ];

  const handleSortOptionClick = (optionId) => {
    setFilterState({
      ...filterState,
      sortBy: optionId,
    });
  };

  const handleResetFilters = () => {
    setFilterState({
      sortBy: 'recommended',
      fabric: [],
      price: '',
      size: [],
      color: [],
      brands: [],
      season: [],
      occasion: []
    });
    onClose();
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(filterState);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative h-[85vh] w-[90vw] max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex h-[calc(85vh-9rem)] overflow-hidden">
          {/* Sidebar */}
          <div className="w-[150px] overflow-y-auto border-r border-gray-100 bg-white">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full p-4 text-left text-sm font-medium hover:bg-gray-50 ${
                  activeCategory === category ? 'bg-gray-900 text-white' : 'text-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeCategory === 'Sort By' && (
              <div className="space-y-4">
                <h3 className="mb-2 text-lg font-medium">Sort By</h3>
                <div className="flex flex-wrap gap-2">
                  {sortOptions.slice(0, 3).map((option) => (
                    <button
                      key={option.id}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        filterState.sortBy === option.id
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      onClick={() => handleSortOptionClick(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {sortOptions.slice(3, 5).map((option) => (
                    <button
                      key={option.id}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        filterState.sortBy === option.id
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      onClick={() => handleSortOptionClick(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {sortOptions.slice(5, 7).map((option) => (
                    <button
                      key={option.id}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        filterState.sortBy === option.id
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      onClick={() => handleSortOptionClick(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {sortOptions.slice(7, 9).map((option) => (
                    <button
                      key={option.id}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        filterState.sortBy === option.id
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      onClick={() => handleSortOptionClick(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Placeholder for other filter categories */}
            {activeCategory !== 'Sort By' && (
              <div>
                <h3 className="mb-2 text-lg font-medium">{activeCategory}</h3>
                <p className="mt-2 text-gray-500">Filter options for {activeCategory} would appear here</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 flex w-full border-t border-gray-100 bg-white p-4">
          <button
            onClick={handleResetFilters}
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 mr-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Reset
          </button>
          <button
            onClick={handleApplyFilters}
            className="flex-1 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductFIlters;
