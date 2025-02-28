export function Summary({ ratedMovies }) {
  function countAvg(key) {
    if (key === "runtime")
      return (
        ratedMovies.reduce((sum, movie) => {
          return (
            sum +
            (key === "runtime" && movie[key] !== "N/A"
              ? parseInt(movie[key])
              :key==="runtime"?0
              : Number(movie[key]))
          );
        }, 0) / ratedMovies.length
      ).toFixed(2);
  }
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{ratedMovies.length>0?ratedMovies.length:0}</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{ratedMovies.length>0?countAvg("imdbRating"):0}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{ratedMovies.length>0?countAvg("rating"):0}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{ratedMovies.length>0?countAvg("runtime"):0}</span>
        </p>
      </div>
    </div>
  );
}
