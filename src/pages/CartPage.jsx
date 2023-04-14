import React, { useEffect } from "react";
import "../static/style.css";
import "../static/movieList.css";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { IconButton } from "@mui/material";
import { useCartContext } from "../contexts/CartContext";

export function CartPage() {
  const { cart, deleteProductFromCart, getCart } = useCartContext();
  useEffect(() => {
    getCart();
  }, []);
  //   console.log(cart);
  return (
    <div id="gradient-background">
      <div className="parent">
        <div className="mainMovies">
          <div className="mainMoviesTitle"> Likes: </div>
          <div className="mainMoviesList">
            {cart.movies.length > 0 ? (
              cart.movies.map((item) => (
                <div key={item.id} className="cards">
                  <img
                    src={item.posterIMAGE}
                    alt="posterIMAGE"
                    className="mainMoviesIMG"
                  />
                  <span className="cards__title">{item.title}.</span>
                  <div className="subscribe">Подписка</div>
                  <IconButton
                    onClick={() => deleteProductFromCart(item.id)}
                    color="error"
                  >
                    <HeartBrokenIcon />
                  </IconButton>
                </div>
              ))
            ) : (
              <div>Корзина пуста</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
