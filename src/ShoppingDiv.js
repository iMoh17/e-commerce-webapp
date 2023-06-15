import React from "react";
import ItemsGridDisplay from "./ItemsGridDisplay";
import "./ShoppingDiv.css";

export function FilterCategory(props) {
  console.log(props);
  console.log(props.categories);
  return (
    <div className="filter-category">
      <h2>Product Categories</h2>
      {props.categories.map((category, index) => (
        <button className="category"
          key={index}
          onClick={() =>
            props.filterProducts(
              category,
              props.priceRange.min,
              props.priceRange.max,
              props.sortOption
            )
          }
        >
          {category}
        </button>
      ))}
      <button className="filter-category-clear-button"
        onClick={() => {
          props.setFilteredProducts(props.products);
          props.setSelectedCategory("");
        }}
      >
        Clear Filter
      </button>
      
    </div>
  );
}

export function FilterPrice(props) {
    const handleClearFilter = () => {
        props.setPriceRange({ min: '', max: '' });
        props.filterProducts(props.selectedCategory, '', '', props.sortOption);
      };

  return (
    <div className="filter-price">
      <h2>Filter by Price Range</h2>
      <input
        type="number"
        placeholder="Minimum price"
        value={props.priceRange.min}
        onChange={(e) =>
          props.setPriceRange({ ...props.priceRange, min: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Maximum price"
        value={props.priceRange.max}
        onChange={(e) =>
          props.setPriceRange({ ...props.priceRange, max: e.target.value })
        }
      />
      <button
        onClick={() =>
          props.filterProducts(
            props.selectedCategory,
            props.priceRange.min,
            props.priceRange.max,
            props.sortOption
          )
        }
      >
        Apply Filter
      </button>
      <button
        onClick={() => handleClearFilter()}>
        Clear Filter
      </button>
      {props.priceRange.min > 0 && props.priceRange.max > 0 && (
        <p>
          Price range: ${props.priceRange.min} - $
          {props.priceRange.max}
        </p>
      )}
    </div>
  );
}

function Sort(props) {
  return (
    <div className="sort-option">
  <select className="select-style" value={props.sortOption} onChange={(e) =>
          {props.filterProducts(
            props.selectedCategory,
            props.priceRange.min,
            props.priceRange.max,
            e.target.value
          );

        }}>
  <option value="">Sort by...</option>
        <option value="priceLowToHigh">Price (Low to High)</option>
        <option value="priceHighToLow">Price (High to Low)</option>
  </select>
</div>
  );
}

export function ShoppingDiv(props) {
  return (
    <div className="ShoppingDiv-container">
      <div className="filters">
      <Sort className="sort-option"
          sortOption={props.sortOption}
          filteredProducts={props.filteredProducts}
          selectedCategory={props.selectedCategory}
          setFilteredProducts={props.setFilteredProducts}
          setSortOption={props.setSortOption}
          priceRange={props.priceRange}
          filterProducts={props.filterProducts}
        ></Sort>

        <FilterCategory className="filter-categories"
          products={props.products}
          categories={props.categories}
          setFilteredProducts={props.setFilteredProducts}
          selectedCategory={props.selectedCategory}
          setSelectedCategory={props.setSelectedCategory}
          filterProducts={props.filterProducts}
          priceRange={props.priceRange}
          sortOption={props.sortOption}
        ></FilterCategory>
        <FilterPrice className="filter-price"
          products={props.products}
          selectedCategory={props.selectedCategory}
          setFilteredProducts={props.setFilteredProducts}
          priceRange={props.priceRange}
          setPriceRange={props.setPriceRange}
          filterProducts={props.filterProducts}
          sortOption={props.sortOption}
        ></FilterPrice>
      </div>
      <ItemsGridDisplay products={props.filteredProducts} />
    </div>
  );
}
