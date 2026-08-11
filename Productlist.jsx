import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Indoor Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 20,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 4,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 18,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 5,
    name: "Money Plant",
    category: "Low Maintenance Plants",
    price: 12,
    image: "https://images.unsplash.com/photo-1614594575928-ae7b7c4f7c76"
  },
  {
    id: 6,
    name: "Spider Plant",
    category: "Low Maintenance Plants",
    price: 14,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          backgroundColor: "#2e7d32",
          color: "white"
        }}
      >
        <h2>e-plantShopping</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            Products
          </Link>

          <Link
            to="/cart"
            style={{ color: "white", textDecoration: "none" }}
          >
            Cart ({cartQuantity})
          </Link>
        </div>
      </nav>

      {/* Product Listing */}
      <div style={{ padding: "30px" }}>
        <h1>Paradise Nursery</h1>
        <p>Choose the best plants for your home and garden.</p>

        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                marginBottom: "30px"
              }}
            >
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      padding: "15px",
                      textAlign: "center"
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />

                    <h3>{plant.name}</h3>

                    <p>Price: ${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded(plant.id)}
                      style={{
                        padding: "10px 20px",
                        cursor: isAdded(plant.id)
                          ? "not-allowed"
                          : "pointer"
                      }}
                    >
                      {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
