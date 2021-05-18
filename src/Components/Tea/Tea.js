import React from "react";
import "./style.css";
import { useState } from "react";

import bbtea from "./bubble-tea.svg";
import blueb from "./blueberry.svg";
import lychee from "./lychee.svg";
import mango from "./mango.svg";

const menu = [
  {
    name: "Lychee Tree",
    price: 12,
    ingredients: "Strawberry and Lychee White Tea",
    img: lychee
  },
  {
    name: "Blue Bird",
    price: 9,
    ingredients: "Lychee, and Blueberry Black Tea",
    img: blueb
  },
  {
    name: "Sunrise",
    price: 10,
    ingredients: "Strawberry and Mango White Tea",
    img: mango
  },

  {
    name: "Thai Milk Tea",
    price: 8,
    ingredients: "Milk, Tea mix and Black pearls",
    img: bbtea
  }
];

export function Tea() {
  const [total, setTotal] = useState(0);

  const handleAdd = (e) => {
    let itemPrice = Number.parseFloat(e.target.value);
    let finalBill = total + itemPrice;
    setTotal(finalBill);
  };

  const handleDecrement = (e) => {
    let itemPrice = Number.parseFloat(e.target.value);
    let finalBill = total - itemPrice;
    return finalBill >= 0 ? setTotal(finalBill) : total;
  };

  const handleClick = () => {
    setTotal(0);
  };

  return (
    <>
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="tea-menu">
            <p>
              <img src={item.img} alt="tea" />
              {item.name}
            </p>
            <p>R$ {item.price}</p>
            <button value={item.price} onClick={handleDecrement}>
              -
            </button>
            <button value={item.price} onClick={handleAdd}>
              +
            </button>
          </li>
        ))}
      </ul>
      <section className="bill">
        <p>Total price: </p>
        <span>R$ {total}</span>
        <br />
        <button onClick={handleClick}>Pay Bill</button>
      </section>
    </>
  );
}
