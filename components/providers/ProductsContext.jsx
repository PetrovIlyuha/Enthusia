import { getAllCourses } from 'content/courses/getCourses';
import { createContext, useContext, useState } from 'react';

const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
  const { data: products } = getAllCourses();
  const [orderProduct, setOrderProduct] = useState({})

  const selectProduct = (product) => {
    setOrderProduct(product);
  }
  return (
    <ProductsContext.Provider value={{products, orderProduct, selectProduct}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};

export default ProductsProvider;
