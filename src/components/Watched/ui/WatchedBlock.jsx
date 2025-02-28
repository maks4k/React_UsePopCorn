import { useState } from "react";
import { Box } from "../../Box/ui/Box";
import { List } from "../../List/ui/List";
import { Details } from "./Details";
import { Summary } from "./Summary";
import { WatchedItem } from "./WatchedItem";
// import { Spiner } from "../../Spiner";

export function WatchedBlock({ id,onSetIsActiveMovie }) {
  const [ratedMovies, setRatedMovies] = useState([]);
  return (
    <Box>
      {/* детаилс не отрендариться если не придет id */}
      {id &&<Details id={id} onResetVisibale={onSetIsActiveMovie} setRatedMovies={setRatedMovies}ratedMovies={ratedMovies} />}
      {!id&&(
        <>
          <Summary ratedMovies={ratedMovies} />
          <List>{ratedMovies?.map((movie)=>(  <WatchedItem movie={movie} key={movie.id} />))}  
          </List>
        </>
      )}
    </Box>
  );
}
