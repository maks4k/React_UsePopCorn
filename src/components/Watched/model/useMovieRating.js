import { useEffect, useState } from "react";

export function useMovieRating(id,ratedMovies) {
  const [rating, setRating] = useState(0); //основной рейтинг(временный)
  let MovieIndex = ratedMovies?.findIndex((movie) => movie.id === id);
  //если isлодинг отрисуй спинер иначе отрису дискрипшен-дитаилс
  useEffect(() => {
    setRating(0);
  }, [id]); //юсэфект для того что бы сбрасывались звездочки при нажатие на другой фильм(типо если приходит другое id*фильм)
  return {
    rating,
    MovieIndex,
    setRating
  };
}
