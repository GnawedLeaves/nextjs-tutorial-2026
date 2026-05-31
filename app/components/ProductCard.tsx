"use client";

import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div
      className={`${styles.card} p-4 font-bold bg-blue-500 w-fit rounded-sm text-white-400 hover:bg-indigo-500 transition duration-300 hover:cursor-pointer`}
    >
      Product Card
    </div>
  );
};
export default ProductCard;
