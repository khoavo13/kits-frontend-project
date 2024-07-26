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
    const res = products.find(item => item.id === id)
    const index = cart.findIndex(item => item.id === id)
    if (index >= 0) {
      let newCart = cart
      newCart[index].quantity++;
      setCart(newCart)
    }
    else {
      setCart([...cart, {...res, quantity: 1}])
    }
  }

  const deleteCart = (id) => {
    setCart(cart.filter(item => item.id !==id))
  }

  const updateById = (id, flag) => {
    const index = cart.findIndex(item => item.id === id)
    let newCart = cart
    if (flag == 0){
      if (newCart[index].quantity > 1){
        newCart[index].quantity--;
      }
    }
    else {
      newCart[index].quantity++;
    }
    setCart([...newCart])
  }
  
  return (
    <AppContext.Provider value={{ count, setCount, cart, addCart, deleteCart , updateById}}>
      {children}
    </AppContext.Provider>
  );
};
