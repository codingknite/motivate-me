import React from "react";

export default function DisplayShoes({size}) {
  return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        {size && <h2>Found {filteredProducts.length} items </h2>}
      </section>
      <section id="products">{filteredProducts.map(renderProduct)}</section>
    </>
  );
}
