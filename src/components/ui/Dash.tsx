"use client";

import * as React from "react";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Task from "./Task";
import Typography from "@mui/material/Typography";
import { defaultTasks } from "../../app/utils/data";
import { useState } from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const DashBox = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",

  width: "300px",
  height: "250px",
  backgroundColor: "gray",
  borderRadius: "10px",
  marginLeft: "125px",
}));
const DashListCont = styled("ul")(({}) => ({
  marginLeft: "40px",
}));
const DashTaskList = styled("li")(({}) => ({
  listStyleType: "none",
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album({}) {
  const [tasks, setTasks] = useState(defaultTasks.All);
  // const [currentTask, setCurrentTask] = useState();
  const [taskId, setTaskId] = useState(1);
  const renderTasks = () => {
    return tasks.map((task) => (
      <div key={task.id}>
        <h4>{task.description}</h4>
        <div>
          <h4>{task.completed}</h4>
        </div>
      </div>
    ));
  };
  console.log({ tasks });
  console.log("renderTasks", renderTasks());
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "transparent",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              fontWeight={600}
              color="text.secondary"
              gutterBottom
            >
              Dashboard
            </Typography>
            <Typography
              variant="h4"
              fontWeight={500}
              marginLeft={5}
              color="text.secondary"
              paragraph
            >
              Good morning, Sarah Lily
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Daily review</Button>
              <Button variant="outlined">Statistics</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <DashBox>
            <Typography variant="h4" sx={{ pl: 8, pt: 1.2 }}></Typography>
            <br />
            <DashListCont>{renderTasks()}</DashListCont>
            <Button>
              <Typography paragraph>Go to Collection</Typography>
            </Button>
          </DashBox>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
