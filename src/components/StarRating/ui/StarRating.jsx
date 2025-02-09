import React from "react";
import { Star } from "./Star";

export function StarRating() {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {Array.from({ length: 10 }, (element,index) => (
            <Star key={index}/>
          ))}
        </div>
        <span
          style={{
            marginLeft: "5px",
            verticalAlign: "5px",
            color: "white",
          }}
        >
          0 / 10
        </span>
      </div>
    </div>
  );
}
