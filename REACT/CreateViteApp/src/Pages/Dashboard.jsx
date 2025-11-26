import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const[data,setData]=useState([]);
  useEffect(() => {
    async function fetchData() {
      const serverresponse = await fetch("https://fakestoreapi.com/products");
      console.log("Server Response:", serverresponse);

      const jsonresponse= await serverresponse.json();
      console.log("Parsed Data:", jsonresponse);
      setData(jsonresponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h2>Data could not fetch</h2>
      ) : (
        <div>
          <h2 style={{ textAlign: "center", position: "relative", left: "33%" }}>Home Dashboard</h2>
          {data.map((item) => (
            <div key={item.id} style={{ border: "1px solid white", marginLeft: "600px", padding: "10px", width: "300px", textAlign: "center" }}>
              <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button style={{ padding: "5px 10px", backgroundColor: "purple", color: "white", border: "none", borderRadius: "5px" }}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

};

export default Dashboard;
