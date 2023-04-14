import React, { createContext, useContext, useReducer } from "react";
import { notify } from "../components/Toastify";
import { ACTIONS } from "../utils/consts";

const cartContext = createContext();

export function useCartContext() {
  return useContext(cartContext);
}

const initState = {
  cart: {
    movies: [],
  },
  cartLength: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.cart:
      return { ...state, cart: action.payload };
    case ACTIONS.cartLength:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      movies: [],
    };
  }
  return data;
}

function CartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  function getCart() {
    let data = getDataFromLS();

    if (!data) {
      data = {
        movies: [],
      };
    }

    const quantity = data.movies.reduce((acc, item) => acc + item.count, 0);
    dispatch({
      type: ACTIONS.cartLength,
      payload: quantity,
    });
    dispatch({
      type: ACTIONS.cart,
      payload: data,
    });
  }

  function addProductToCart(product) {
    let data = getDataFromLS();
    if (!data) {
      data = {
        movies: [],
      };
    }
    data.movies.push({ ...product, count: 1, subPrice: +product.price });
    console.log(data);

    data.totalPrice = data.movies.reduce((acc, item) => acc + item.subPrice, 0);

    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("Successfully added to cart");
  }
  function deleteProductFromCart(id) {
    let data = getDataFromLS();
    data.movies = data.movies.filter((item) => item.id !== id);

    data.totalPrice = data.movies.reduce((acc, item) => acc + item.subPrice, 0);

    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("Successfully removed from cart");
  }

  //   function isAlreadyInCart(id) {
  //     const data = getDataFromLS();

  //     const isInCart = data.movies.some((item) => item.id === id);
  //     return isInCart;
  //   }

  function isAlreadyInCart(id) {
    const data = getDataFromLS();
    if (data && Array.isArray(data.movies)) {
      const isInCart = data.movies.some((item) => item.id === id);
      return isInCart;
    }
    return false;
    // const data = getDataFromLS();

    // const isInCart = data.movies.some((item) => item.id === id);
    // return isInCart;
  }

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }

  const value = {
    cart: state.cart,
    cartLength: state.cartLength,
    getCart,
    addProductToCart,
    deleteProductFromCart,
    isAlreadyInCart,
    clearCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export default CartContext;
