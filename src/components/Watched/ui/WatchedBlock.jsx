import React, { useState } from "react";
import { Box } from "../../Box/ui/Box";
import { List } from "../../List/ui/List";
import { Details } from "./Details";
import { Summary } from "./Summary";
import { WatchedItem } from "./WatchedItem";
// import { Spiner } from "../../Spiner";

export function WatchedBlock({ id,onSetIsActiveMovie }) {
 
  return (
    <Box>
      {/* детаилс не отрендариться если не придет id */}
      {id &&<Details id={id} onResetVisibale={onSetIsActiveMovie}/>}
      {!id&&(
        <>
          <Summary />
          <List>
            <WatchedItem />
          </List>
        </>
      )}
    </Box>
  );
}
