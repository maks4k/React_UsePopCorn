// import { useEffect, useState } from "react";
// import { getMovieDescription } from "../../App/Api";
import {Error} from "../../Error"
import { Spiner } from "../../Spiner";
import { StarRating } from "../ui/StarRating/StarRating";
import { useGetMovieDescription } from "../model/useGetMovieDescription";

// eslint-disable-next-line react/prop-types
export function Details({id}) {
 const{description,isLoading,errorMsg}=useGetMovieDescription(id);
//если слодинг отрисуй спинер иначе отрису дискрипшен-дитаилс
console.log("Description:", description);
console.log("Is Loading:", isLoading);
  return isLoading ? (
    <div className="spiner__wrapper">
      <Spiner />
    </div>
  ) :errorMsg?<Error msg={errorMsg}/>
  : (
    <div className="details">
      {/* {id&&<Spiner/>} */}
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
      {/* <p>{avgRating}</p> */}

      <section>
        <div className="rating">
        <StarRating/>
          <button className="btn-add">+ Add to list</button>
          <p>
            You rated with movie 7 <span>⭐️</span>
          </p>
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

// export default Details;
