import React, { useEffect, useState } from "react";
import { getAllCategories, fetchProducts} from "./api";
import Header from "./Header";
import UpperInfo from "./UpperInfo";
import {ShoppingDiv} from "./ShoppingDiv";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 99999 });
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === '') {
      setSearchResults([]);
    } else {
      handleSearch();
    }
  };

  const categories = getAllCategories(products);
  
  // Filter products by category, price range, and sort option
  const filterProducts = (category, minPrice, maxPrice, sortOption) => {
    let filtered = products;
  
    // Filter by category
    if (category !== '') {
      filtered = filtered.filter((product) => product.category === category);
    }
  
    // Filter by price range
    if (minPrice !== '' && maxPrice !== '') {
      filtered = filtered.filter(
        (product) =>
          product.price >= Number(minPrice) && product.price <= Number(maxPrice)
      );
    }
    
    // Sort products based on sort option
    let sorted = [...filtered];
    switch (sortOption) {
      case "priceLowToHigh":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sorted.sort((a, b) => b.price - a.price);
        break;
      // Add more sorting options here if needed
      default:
        break;
    }

    setSortOption(sortOption)
    setFilteredProducts(sorted);
    setSelectedCategory(category);
    setPriceRange({ min: minPrice, max: maxPrice });
  };
  

  useEffect(() => {
    // fetchAllProducts();
    fetchProducts(setProducts,setFilteredProducts);
  }, []);

  return (
    <div>
      <Header searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchResults={searchResults}
              setSearchResults ={setSearchResults}
              handleSearch={handleSearch}
              handleInputChange={handleInputChange}/>
      <UpperInfo />
      <ShoppingDiv
        products={products}
        categories={categories}
        setFilteredProducts={setFilteredProducts}
        selectedCategory={selectedCategory}
        setSelectedCategory ={setSelectedCategory}
        setPriceRange={setPriceRange}
        filterProducts={filterProducts}
        priceRange={priceRange}
        filteredProducts={filteredProducts}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
    </div>
  );
};

export default App;
