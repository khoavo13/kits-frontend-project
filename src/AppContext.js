import axios from "axios";
import {createContext, useEffect, useState } from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const url = "https://66a07bab7053166bcabb8e1a.mockapi.io/students";
  const fetchData = () => {
    axios
      .get(url)
      .then(function (res) {
        setProducts(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addCart = (id) => {
    const product_add_cart = products.find(item => item.id === id)

    setCart([...cart, product_add_cart])
  }
  
  return (
    <AppContext.Provider value={{ count, setCount, cart, addCart }}>
      {children}
    </AppContext.Provider>
  );
};
