import React from "react";

export function Bill({ total, setTotal }) {
  const handleClick = () => {
    setTotal(0);
  };

  return (
    <>
      <p>Total: </p>
      <span>R$ {total}</span>
      <br />
      <button onClick={handleClick}>Pay Bill</button>
    </>
  );
}
