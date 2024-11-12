import React, { useState } from "react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: ""
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmittedData(formData);
    alert("Order Placed Successfully!");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <input
            type="text"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>

      {submittedData && (
        <div>
          <h2>Order Summary</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Payment Method:</strong> {submittedData.paymentMethod}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
