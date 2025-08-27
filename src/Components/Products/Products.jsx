import React from "react";
import "./Products.css";

// Images
import almond from "../../assets/almonds.jpg";
import walnut from "../../assets/walnut.jpg";
import apricot from "../../assets/appricot.jpg"; // ✅ fixed typo
import pineNut from "../../assets/pinenuts.jpg";
import apple from "../../assets/apple.jpg";
import mulberry from "../../assets/Mulberries.jpg";

const Products = () => {
  const productList = [
    { id: 1, name: "Almonds", img: almond, desc: "Organic Gilgit almonds full of nutrition." },
    { id: 2, name: "Walnuts", img: walnut, desc: "Fresh crunchy walnuts from GB valleys." },
    { id: 3, name: "Apricots", img: apricot, desc: "Sun-dried apricots with rich flavor." },
    { id: 4, name: "Pine Nuts", img: pineNut, desc: "Rare Chilgoza pine nuts from GB." },
    { id: 5, name: "Apples", img: apple, desc: "Crisp and juicy apples from GB orchards." },
    { id: 6, name: "Mulberries", img: mulberry, desc: "Sweet dried mulberries from the mountains." },
  ];

  return (
    <section id="products" className="products-section">
      <h1>Local Dry Fruits</h1>
      <p className="subtitle">
        Taste the richness of Gilgit-Baltistan through its famous dry fruits 🍇🌰
      </p>

      <div className="products-container">
        {productList.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-img">
              <img src={item.img} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button className="product-btn">Get This</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
