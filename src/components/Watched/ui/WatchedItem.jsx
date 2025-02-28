import React from 'react'

export function WatchedItem({movie}) {
  return (
    <li>
    <img
      src={movie.poster}
      alt={`movie.Title poster`}
    />
    <h3>{movie.title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.rating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime}</span>
      </p>
    </div>
  </li>
  )
}

// export default Watched