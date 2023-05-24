import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function MediaCard({ image, name, desc }) {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <CardMedia sx={{ height: 300 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Home() {
  return (
    <>
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
          Welcome to <bold>Sevya</bold>
        </Typography>
        <Typography variant="h2" component={"h3"}>
          Services Offered
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 10,
            margin: 10,
          }}
        >
          {SERVICES.map((elem, index) => (
            <Grid item xs={3} key={index}>
              <a href={elem?.url}>
              <MediaCard
                name={elem.name}
                desc={elem.description}
                image={elem.image}
                />
                </a>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

const SERVICES = [
  {
    name: "Find Hospitals",
    description: "",
    image: require("../images/2.png"),
    url: '/search'
  },
  {
    name: "Find doctors",
    description: "",
    image: require("../images/3.png"),
  },
  {
    name: "Teleconsultancy",
    description: "",
    image: require("../images/4.png"),
  },
  {
    name: "Find beds",
    description: "",
    image: require("../images/5.png"),
  },
  {
    name: "Labs",
    description: " ",
    image: require("../images/6.png"),
  },
  {
    name: "Telemedicine",
    description: "",
    image: require("../images/7.png"),
  },
  {
    name: "Donate blood/ organs",
    description: "",
    image: require("../images/8.png"),
  },
  {
    name: "Sevya stores",
    description: "",
    image: require("../images/9.png"),
  },
];

export default Home;
