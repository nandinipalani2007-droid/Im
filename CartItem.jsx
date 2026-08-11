import React from "react";

const CartItem = ({ item, onIncrease, onDecrease }) => {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>

        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.id)}>-</button>

          <span>{item.quantity}</span>

          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>

        <p>
          Total: <strong>${itemTotal.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

const Cart = ({ cartItems, onIncrease, onDecrease }) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}

          <div className="cart-total">
            <h3>Total Cart Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
