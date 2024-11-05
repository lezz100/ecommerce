import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/Ecommerce_Frontend_Assets/Assets/all_product";
import dropdown_icon from "../Components/Assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

// 1. Remove duplicate context creation
export const ShopContext = createContext();

// 2. Correct props destructuring
export const ShopContextProvider = ({ children, category }) => {
  // Changed props to {children, category}
  const [state, setState] = useState({
    /* initial state */
  });

  // 3. Add null check for products filtering
  const filteredProducts = all_products.filter((item) =>
    category ? item.category === category : true
  );

  return (
    <div className="shopcategory">
      <ShopContext.Provider value={{ state, setState }}>
        {/* 4. Use children instead of props */}
        {children}
        {/* <img src={props.banner} alt="" className="shopcategory-banner" /> */}

        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>

        <div className="shopcategory-products">
          {/* 5. Use filtered products with proper error handling */}
          {filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      </ShopContext.Provider>
    </div>
  );
};

export default ShopContextProvider;
