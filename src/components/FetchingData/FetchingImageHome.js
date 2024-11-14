import React from "react";
import WomenInProgramming from "../../assets/imgHome/WomenInProgramming.jpg";

export default function FetchingImageHome() {
  return (
    <div className="image-home">
      <img
        src={WomenInProgramming}
        /* src={"https://source.unsplash.com/random/400x250/?Women & Computer"} */
        alt="Women in Programming"
      />
    </div>
  );
}
