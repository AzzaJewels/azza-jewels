import React from "react";
import Hero from "../components/Hero";  // Add this import
import Mission from "../components/Mission";  // Add this import
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "DesertGlow Necklace",
    carat: "18K",
    image: "/images/desertglow_necklace.jpg",
  },
  {
    name: "Sultan’s Touch Ring",
    carat: "21K",
    image: "/images/sultans_touch_ring.jpg",
  },
  {
    name: "Heritage Bloom Bangle",
    carat: "22K",
    image: "/images/heritage_bloom_bangle.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="container">
      <Hero />

      <section className="product-gallery">
        <h2>Our Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <Mission />
    </div>
  );
}
