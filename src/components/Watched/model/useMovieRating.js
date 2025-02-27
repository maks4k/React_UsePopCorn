import { useEffect, useState } from "react";

export function useMovieRating(id) {
  const [rating, setRating] = useState(0); //основной рейтинг(временный)
  const [ratedMovies, setRatedMovies] = useState([]); //пустой масив для каждого рейтинга
  let MovieIndex = ratedMovies?.findIndex((movie) => movie.id === id);
  //если isлодинг отрисуй спинер иначе отрису дискрипшен-дитаилс
  useEffect(() => {
    setRating(0);
  }, [id]); //юсэфект для того что бы сбрасывались звездочки при нажатие на другой фильм(типо если приходит другое id*фильм)
  return {
    rating,
    ratedMovies,
    MovieIndex,
    setRatedMovies,
    setRating
  };
}
