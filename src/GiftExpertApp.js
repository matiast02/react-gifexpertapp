import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GiftExpertApp() {
  const [categories, setCategories] = useState([""]);

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category}></GifGrid>;
        })}
      </ol>
    </div>
  );
}
