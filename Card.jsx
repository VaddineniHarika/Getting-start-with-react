import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [quantity, setQuantity] = useState(props.minimum);

  const descreaseQuantity = () => {
    quantity > 1 && quantity > props.minimum ? setQuantity(quantity - 1) : null;
  };

  return (
    <div className="card">
      <img src={props.url} alt="" />
      <div className="card-content">
        <h3>{props.name}</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          fugiat obcaecati cum reprehenderit velit ipsa maxime, maiores ea
          dolore, tenetur minus
        </p>
        <div className="quantity_container">
          <button onClick={() => setQuantity(quantity + 1)}>Add + 1</button>
          <span>{quantity}</span>
          <button onClick={() => descreaseQuantity()}>
            {quantity > props.minimum ? "Sub - 1" : "Disabled"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
