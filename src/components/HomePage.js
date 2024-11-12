import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const products = [
    { id: 1, name: "Mobile", price: "RS:1.40.000", description: "Samsung Galaxy S24 Ultra" },
    { id: 2, name: "Gaming Console", price: "RS:54.999", description: "PlayStation 5 (PS5)" }
  ];

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
