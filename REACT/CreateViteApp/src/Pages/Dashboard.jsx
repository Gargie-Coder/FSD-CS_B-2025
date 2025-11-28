import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const serverresponse = await fetch("https://fakestoreapi.com/products");
      const jsonresponse = await serverresponse.json();
      setData(jsonresponse);
    }
    fetchData();
  }, []);

  function shoppingCart(item) {
    alert(item.title);
    setCart((prev) => [...prev, item]);  
    setPrice((prev) => prev + item.price); 

  }

  return (
    <div>
      {data.length === 0 ? (
        <h2>Data could not fetch</h2>
      ) : (
        <div>
          <h2 style={{ textAlign: "center", position: "relative", left: "33%" }}>
            Home Dashboard
          </h2>

          
          <h3 style={{ textAlign: "center" }}>
            Cart Items: {cart.length}
          </h3>
          <h3 style={{ textAlign: "center" }}>
            Total Price: ${price.toFixed(2)}
          </h3>

          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid white",
                marginLeft: "600px",
                padding: "10px",
                width: "300px",
                textAlign: "center"
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>

              <button
                onClick={() => shoppingCart(item)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "purple",
                  color: "white",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
