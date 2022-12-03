import React, { useEffect, useState } from "react";

export default function PosterMovie(props) {
  const movieImg = props.img;
  const [source, setSource] = useState();
  const [loading, setLoading] = useState(false);

  console.log(movieImg);

  return (
    <div>
      <img src={movieImg} alt="" />
    </div>
  );
}
