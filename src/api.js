
export const fetchProducts = async (setProducts,setFilteredProducts) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getAllCategories = (products) => {
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  return uniqueCategories;
};



// Add more API functions as needed
