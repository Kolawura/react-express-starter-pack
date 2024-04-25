import React from "react";
import { useState, useEffect } from "react";
import "./Customers.css"

function Customers() {
  const [customers, setCustormers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then((res) => res.json())
      .then((customers) => {
        setCustormers(customers)});
    return () => {};
  }, []);
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((data) => {
         return <li key={data.id}>
            {data.firstName} {data.lastName}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Customers;
