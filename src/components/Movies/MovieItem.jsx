// eslint-disable-next-line react/prop-types
export function MovieItem({movie}) {
  return (
    <li>
      <img
        // eslint-disable-next-line react/prop-types
        src={movie.Poster} 
        // eslint-disable-next-line react/prop-types
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

// export default Movie
