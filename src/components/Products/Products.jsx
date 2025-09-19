import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa6";
import ProductCard from './ProductCard';

const Products = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform data to match expected format
      const transformedData = data.map((product, index) => ({
        id: product.id,
        img: product.image,
        title: product.title,
        price: `$${product.price}`,
        category: product.category,
        rating: product.rating.rate,
        aosDelay: (index * 100).toString()
      }));
      
      setProducts(transformedData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter products 
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch data
  useEffect(() => {
    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center">
            <p className="text-red-500">Error loading products: {error}</p>
            <button 
              onClick={fetchProducts}
              className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm font-bold text-primary dark:text-white/90">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold dark:text-white">Our Products</h1>
          <p className="text-xs text-gray-400">
            {searchTerm 
              ? `Showing ${filteredProducts.length} results for "${searchTerm}"`
              : "Discover our amazing collection of products from various categories"
            }
          </p>
        </div>
        {/* Body section */}
        {filteredProducts.length === 0 && searchTerm ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No products found matching "{searchTerm}"</p>
          </div>
        ) : (
          <ProductCard data={filteredProducts} />
        )}
      </div>
    </div>
  )
}

export default Products;