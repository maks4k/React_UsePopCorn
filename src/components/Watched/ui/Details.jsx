import { Error } from "../../Error";
import { Spiner } from "../../Spiner";
import { StarRating } from "../ui/StarRating/StarRating";
import { useGetMovieDescription } from "../model/useGetMovieDescription";
import { useMovieRating } from "../model/useMovieRating";


export function Details({ id,onResetVisibale }) {
  const { description, isLoading, errorMsg } = useGetMovieDescription(id); //кастомный хук???
  const { rating, ratedMovies, MovieIndex, setRatedMovies, setRating } =
    useMovieRating(id);//кастомный хук с рейтингом
    
  return isLoading ? (
    <div className="spiner__wrapper">
      <Spiner />
    </div>
  ) : errorMsg ? (
    <Error msg={errorMsg} />
  ) : (
    <div className="details">
      <header>
        <button className="btn-back" onClick={()=>onResetVisibale(null)}>&larr;</button>
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
          {MovieIndex == -1 && (
            <StarRating rating={rating} setRating={setRating} />
          )}
          {!!rating && MovieIndex == -1 && (
            <button
              onClick={() => {
                setRatedMovies((prevMovies) => [
                  ...prevMovies,
                  { id: id, rating: rating },
                ]);
              }}
              className="btn-add"
            >
              + Add to list
            </button>
          )}
          {MovieIndex !== -1 && (
            <p>
              You rated with movie
              {ratedMovies[MovieIndex]?.rating}
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
