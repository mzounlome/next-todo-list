import * as React from "react";

import { IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";

import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const AppBarRight = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginLeft: "900px",
  width: "300px",
  height: "70px",
}));

export default function DashboardNav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" color="transparent" open={open}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon color="info" />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <Link href="/">Zoun</Link>
        </Typography>
        <AppBarRight>
          <IconButton>
            <LibraryAddIcon color="info" />
          </IconButton>
          <IconButton>
            <SearchIcon color="info" />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon color="info" />
          </IconButton>
          <IconButton>
            <SearchIcon color="info" />
          </IconButton>
        </AppBarRight>
      </Toolbar>
    </AppBar>
  );
}
