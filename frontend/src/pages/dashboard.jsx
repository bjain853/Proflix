import React from "react";
import MovieRow from "../components/MovieRow";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid } from "@material-ui/core";


const Movies = [
  {
    id: "1",
    genre: "action",
    movies: [
      {
        id: "1",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://static.toiimg.com/photo/msid-71453797/71453797.jpg?217918",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "2",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "3",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "4",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "5",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "6",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "7",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "8",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "9",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "10",
        title: "Avengers Endgame",
        summary:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
    ],
  },
  {
    id: "2",
    genre: "action",
    movies: [
      {
        id: "1",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://static.toiimg.com/photo/msid-71453797/71453797.jpg?217918",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "2",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "3",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "4",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "5",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "6",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "7",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "8",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "9",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "10",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
    ],
  },
  {
    id: "3",
    genre: "action",
    movies: [
      {
        id: "1",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://static.toiimg.com/photo/msid-71453797/71453797.jpg?217918",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "2",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "3",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "4",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "5",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "6",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "7",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "8",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "9",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "10",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
    ],
  },
  {
    id: "4",
    genre: "action",
    movies: [
      {
        id: "1",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://static.toiimg.com/photo/msid-71453797/71453797.jpg?217918",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "2",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "3",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "4",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "5",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "6",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "7",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "8",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "9",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "10",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
    ],
  },
  {
    id: "5",
    genre: "action",
    movies: [
      {
        id: "1",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://static.toiimg.com/photo/msid-71453797/71453797.jpg?217918",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "2",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "3",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "4",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "5",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "6",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "7",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "8",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "9",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
      {
        id: "10",
        title: "Avengers Endgame",
        summary: "djanajdncakjncjkaxncjanajXLA",
        pic:
          "https://i.pinimg.com/originals/01/3b/ad/013bad0fd4243ea3f39722520ae4755c.jpg",
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      },
    ],
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
    lineHeight: "0.5rem",
    display: "flex",
    flexWrap:"nowrap",
  },
});

export default function dashboard() {
  // Movies.map((item) => {
  //   console.log(item["genre"], item["movies"]);
  // });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        {Movies.map((movieObj) => (
          <Grid item xs={12}>
            <MovieRow movieObj={movieObj} key={movieObj.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
