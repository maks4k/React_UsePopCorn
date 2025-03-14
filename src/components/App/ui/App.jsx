import { Navbar } from "../../Nav";

import { MovieBlock } from "../../Movies";

import { WatchedBlock } from "../../Watched";
import { useGetMovie } from "../model/useGetMove";

// import { getMovies } from "../Api";

// // import {debounce} from "lodash";
// import { useEffect, useRef, useState } from "react";
// import { use } from "react";

//там же варинат с дебаунс фукнцией
//  const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

//варинат с дебаунс функцией из библиотеки lodash
// export function App() {
//   const [numResults,setnumResults]=useState(0);

//   const searchHandler = debounce(async (value) => {
//   const data = await getMovies(value);
//   console.log(data);

//   setnumResults( data?.totalResults || 0)
//   }, 2000); // Дебаунс на 2000 миллисекунд
//     // Хук useEffect
//   useEffect(() => {
//       // Очистка функции debounce
//   return () => {
//     searchHandler.cancel();
//       };
//     }, [searchHandler]);
//     return (
//       <>
//         <Navbar onSearch={searchHandler} numResults={numResults}/>
//         <main className="main">
//         <Movie/>
//          <Watched/>
//         </main>
//       </>
//     );
//   }

export function App() {
const{
  searchHandler,numResults,isLoading,isError,movies,activeMovie,setIsActiveMovie
}= useGetMovie();//имортировли кастомный хук
  return (
    <>
      <Navbar onSearch={searchHandler} numResults={numResults} />
      <main className="main">
        <MovieBlock isLoading={isLoading} isError={isError} movies={movies} activeMovie={activeMovie} setIsActiveMovie={setIsActiveMovie}/>
        <WatchedBlock id={activeMovie} onSetIsActiveMovie={setIsActiveMovie} />
      </main>
    </>
  );
}
