import React from "react";
import { useRouter } from "next/router";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";
import MovieBigCard from "../../components/MovieBigCard";

function movie() {
  const router = useRouter();
  const movieId = router.query;
  console.log(movieId);
  const movie = {
    id: "1",
    title: "Avengers Endgame",
    summary:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    pic:
      "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    year: "2019",
  };
  return (
    <div>
      <MovieBigCard movie={movie} />
    </div>
  );
}

export default movie;
