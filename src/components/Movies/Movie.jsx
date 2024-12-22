
function Movie() {
  return (
    <li>
    <img
      src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
      alt={`movie.Title poster`}
    />
    <h3>movie.Title</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>2007</span>
      </p>
    </div>
  </li>
  )
}

export default Movie