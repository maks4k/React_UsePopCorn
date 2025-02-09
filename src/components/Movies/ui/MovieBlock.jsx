// import React from "react";
import { Box } from "../../Box/ui/Box";
import { Error } from "../../Error/ui/Error";
import { List } from "../../List/ui/List";
import { MovieItem } from "./MovieItem";
import { Spiner } from "../../Spiner";

// eslint-disable-next-line react/prop-types
export function MovieBlock({
  isLoading,
  isError,
  movies,
  activeMovie,
  setIsActiveMovie,
}) {
  return (
    <Box>
      {isError && <Error />}
      {isLoading && (
        <div className="spiner__wrapper">
          <Spiner />
        </div>
      )}
      <List className="list-movies">
        {movies &&
          movies.map((item) => (
            <MovieItem
              movie={item}
              key={item.imdbID}
              isActive={activeMovie === item.imdbID ? true : false}
              setIsActiveMovie={setIsActiveMovie}
            />
          ))}
        {/* прошлись масивом для вывода всех фильмо на экран через компонент мувиайтем*/}
      </List>
    </Box>
  );
}
