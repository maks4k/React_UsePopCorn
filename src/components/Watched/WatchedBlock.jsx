import React from "react";
import { Box } from "../Box/Box";
import { List } from "../List/List";
import { Details } from "./Details";
import { Summary } from "./Summary";
import { WatchedItem } from "./WatchedItem";
import {Spiner} from "../Spiner"

export function WatchedBlock({id}) {
  return (
    <Box>
      {/* детаилс не отрендариться если не придет id */}
     {id&&<Details id={id} />}
     {!id&&
     <>
      <Summary />
      <List>
        <WatchedItem />
      </List></>}
    </Box>
  );
}
