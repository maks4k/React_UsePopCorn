import React from "react";
import { Box } from "../Box/Box";
import { List } from "../List/List";
import { Details } from "./Details";
import { Summary } from "./Summary";
import { WatchedItem } from "./WatchedItem";

export function Watched() {
  return (
    <Box>
      <Details />
      <Summary />
      <List>
        <WatchedItem />
      </List>
    </Box>
  );
}
