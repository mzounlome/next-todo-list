import * as React from "react";

import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

export default function Task() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
}
