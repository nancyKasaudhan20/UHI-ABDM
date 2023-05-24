import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getHospitals } from "../api/user";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const HOSPITAL_TOKEN = "646bbeba08a096208f4561a1";

export function MediaCard({ name, contact_number, onClick }) {
  return (
    <Card sx={{margin: 5, cursor: 'pointer'}} onClick={onClick}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contact_number}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Search() {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await getHospitals(HOSPITAL_TOKEN);
      setHospitals(data);
    }
    getData();
  }, []);
  return (
    <Box>
      <Typography
        sx={{
          margin: 10,
        }}
        component={"h2"}
        variant="h2"
      >
        Hospital Searching
      </Typography>
      {hospitals.map(({ name, contact_number }) => (
        <MediaCard name={name} contact_number={contact_number} />
      ))}
    </Box>
  );
}
export default Search;
