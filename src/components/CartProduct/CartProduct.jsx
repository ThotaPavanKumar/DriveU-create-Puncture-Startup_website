import React from 'react'
import { Button } from "antd/lib/radio";

export const CartProduct = ({ product, handleDelete }) =>  {
  const addToWishlist = (data) => {
    if (localStorage.getItem("WishList") === null) {
      localStorage.setItem("WishList", JSON.stringify([]));
    }

    let wishlistPro = JSON.parse(localStorage.getItem("WishList"));
    wishlistPro.push(data);
    localStorage.setItem("WishList", JSON.stringify(wishlistPro));
  };

  return (
    <div className="productCard">
      <div>
        <div>
          <img className="img" src={product.image} alt="product" />
        </div>
        <div>
          <div>{product.shopName}</div>
          <div>{product.ratings}</div>
        </div>
        <div>
          <Button onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </Button>
          <Button onClick={() => handleDelete(product)}>Delete</Button>
        </div>
      </div>
    </div>
  );
}
