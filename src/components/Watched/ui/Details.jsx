// import { useEffect, useState } from "react";
// import { getMovieDescription } from "../../App/Api";
import { Error } from "../../Error";
import { Spiner } from "../../Spiner";
import { StarRating } from "../ui/StarRating/StarRating";
import { useGetMovieDescription } from "../model/useGetMovieDescription";
import { useState } from "react";

export function Details({ id }) {
  const [rating, setRating] = useState(0); //основной рейтинг
  const [movies, setMovies] = useState([]); //пустой масив для каждого рейтинга
  const { description, isLoading, errorMsg } = useGetMovieDescription(id); //кастомный хук???
  let MovieIndex = movies?.findIndex((movie) => movie.id === id);
  //если isлодинг отрисуй спинер иначе отрису дискрипшен-дитаилс
  return isLoading ? (
    <div className="spiner__wrapper">
      <Spiner />
    </div>
  ) : errorMsg ? (
    <Error msg={errorMsg} />
  ) : (
    <div className="details">
      <header>
        <button className="btn-back">&larr;</button>
        <img src={description?.Poster} />
        <div className="details-overview">
          <h2>{description?.Title}</h2>
          <p>
            {description?.Released} &bull; {description?.Runtime}
          </p>
          <p>{description?.Genre}</p>
          <p>
            <span>⭐️</span>
            {description?.imdbRating}IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
       
          <StarRating rating={rating} setRating={setRating} />
          {!!rating && (
            <button
              onClick={() => {
                setMovies((prevMovies) => [
                  ...prevMovies,
                  { id: id, rating: rating },
                ]);
              }}
              className="btn-add"
            >
              + Add to list
            </button>
          )}
          {(MovieIndex!==-1) && (
            <p>
              You rated with movie
              {movies[MovieIndex]?.rating}
              <span>⭐️</span>
            </p>
          )}
        </div>
        <div className="details-overview">
          <p>
            <em>{description?.Plot}</em>
          </p>
          <p>Starring actors: {description?.Actors}</p>
          <p>Directed by: {description?.Director}</p>
        </div>
      </section>
    </div>
  );
}
