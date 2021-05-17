import React from "react";
import "./style.css";
import { useState } from "react";
import { Bill } from "../Bill/Bill";

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
  const [total, setTotal] = useState([0]);
  // console.log(`total: ${total}`);

  const handleAdd = (e) => {
    let initBill = +total;
    let addToBill = +e.target.value;
    let finalBill = initBill + addToBill;

    setTotal(finalBill);
  };

  return (
    <>
      <h2>Dokidoki Tea Shop</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="tea-menu">
            <p>
              <img src={item.img} alt="tea" />
              {item.name}
            </p>
            <p>{item.ingredients}</p>
            <p>R$ {item.price}</p>
            <button value={item.price} onClick={handleAdd}>
              Add
            </button>
          </li>
        ))}
      </ul>

      <section className="bill">
        <Bill total={total} setTotal={setTotal} />
      </section>
    </>
  );
}
