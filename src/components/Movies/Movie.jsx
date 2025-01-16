// import React from "react";
import { Box } from "../Box/Box";
import { Error } from "../Erorr/Error";
import { List } from "../List/List";
import { MovieItem } from "./MovieItem";
import { Spiner } from "../Spiner";

// eslint-disable-next-line react/prop-types
export function Movie({ isLoading, isError }) {
  return (
    <Box>
      {isError && <Error />}
      {isLoading && (
        <div className="spiner__wrapper">
          <Spiner />
        </div>
      )}
      <List className="list-movies">
        <MovieItem />
      </List>
    </Box>
  );
}
