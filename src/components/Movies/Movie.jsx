// import React from "react";
import {Box} from "../Box";
import {Error} from "../Error";
import {List} from "../List";
import { MovieItem } from "./MovieItem";
import { Spiner } from "../Spiner";


// eslint-disable-next-line react/prop-types
export function Movie({isLoading}) {
  return (
    <Box>
      <Error />
      {isLoading &&<Spiner/>}
      <List className="list-movies">
        <MovieItem />
      </List>
    </Box>
  );
}
