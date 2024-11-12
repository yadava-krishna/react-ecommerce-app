import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const productDetails = {
    1: { name: "Product 1", description: "Meet the new Galaxy S24 Ultra AI powered smartphone which has various features like circle to search, AI camera, Live Translate, Note Assist and much more.", price: "RS:1.40.000" },
    2: { name: "Product 2", description: "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. It was announced as the successor to the PlayStation 4 in April 2019, was launched on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, and was released worldwide a week later.", price: "RS:54.999" },
  };
  
  const product = productDetails[productId] || {};

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default ProductDetailPage;
