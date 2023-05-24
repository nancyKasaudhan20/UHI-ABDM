import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" component={"h2"}>
        Welcome to Sevya
      </Typography>
      <Typography variant="h2" component={"h3"}>
        Services Offered
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 10,
        }}
      >
        {SERVICES.map((elem, index) => (
          <Grid
            item
            xs={4}
            key={index}
            sx={{
              border: "1px solid black",
            }}
          >
            <Typography>{elem.name}</Typography>
            <Typography>{elem.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const SERVICES = [
    {
      name: "name1",
      description: "descr",
    },
    {
      name: "name1",
      description: "descr",
    },
    {
      name: "name1",
      description: "descr",
    },
    {
      name: "name1",
      description: "descr",
    },
    {
      name: "name1",
      description: "descr",
    },
    {
      name: "name1",
      description: "descr",
    },
    {
      name: "name1",
      description: "descr",
    },
  ];

export default Home;
