import { getAllCourses } from 'content/courses/getCourses';
import React, { createContext, useContext } from 'react';

const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
  const { data: products } = getAllCourses();
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
