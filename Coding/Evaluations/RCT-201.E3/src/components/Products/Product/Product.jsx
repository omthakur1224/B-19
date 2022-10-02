import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  getCartItems,
  removeItemFromCart,
  updateCartItem,
} from '../../../store/cart/cart.actions';

const Product = ({ id, name, description, cartProps }) => {
  const [cartCount, setcartCount] = useState(1);
  let [show, setShow] = useState(true);

  let dispatch = useDispatch();

  const handleAdd = (id) => {
    setShow(false);
    dispatch(addItemToCart({ productId: id, count: cartCount, id: id }));
  };

  const handleRemove = (id) => {
    setShow(true);
    dispatch(removeItemFromCart(id));
  };

  const handleUpdate = (id, typ) => {
    if (typ === 'inc') {
      setcartCount(cartCount + 1);
      dispatch(updateCartItem(id, { count: cartCount + 1 }));
    } else {
      setcartCount(cartCount - 1);
      dispatch(updateCartItem(id, { count: cartCount - 1 }));
    }
  };

  return (
    <div data-cy={`product-${id}`} style={{ border: '1px solid black' }}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {show ? (
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => handleAdd(id)}
        >
          Add to Cart
        </button>
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => handleUpdate(id, 'inc')}
          >
            +
          </button>
          <span data-cy="product-count">{cartCount}</span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => handleUpdate(id, 'dec')}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={() => handleRemove(id)}
          >
            Remove from Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
