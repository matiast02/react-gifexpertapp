import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <div className="card-grid">
      {loading && <p>Loading</p>}
      <h3>{category}</h3>
      {data.map((img) => (
        <GifGridItem key={img.id} {...img}></GifGridItem>
      ))}
    </div>
  );
};
