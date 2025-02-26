import { useState } from "react";
import { Star } from "./Star";

export function StarRating({rating,setRating}) {
 
  const [tempRating, setTempRating] = useState(rating); //фиксируем сколько звезд должно быть покрашенно

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
          {Array.from({ length: 10 }, (element, index) => (
            <Star
              key={index}
              fill={
                index < tempRating || index < rating ? "gold" : "transparent"
              }
              index={index}
              onHover={setTempRating}
              onMark={setRating}
            />
          ))}
        </div>
        <span
          style={{
            marginLeft: "5px",
            verticalAlign: "5px",
            color: "white",
          }}
        >
          {tempRating||rating}/ 10
        </span>
      </div>
    </div>
  );
}
