import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getHospitals } from "../api/user";
import { MediaCard } from "./search";
const HOSPITAL_TOKEN = "646bbeba08a096208f4561a1";

function Refer() {
  const [hospitals, setHospitals] = useState([]);
  const [hospital, setHospital] = useState(null);
  useEffect(() => {
    async function getData() {
      const { data } = await getHospitals(HOSPITAL_TOKEN);
      setHospitals(data);
    }
    getData();
  }, []);
  return (
    <Box>
        <Typography variant="h2" component={'h2'} sx={{margin:5}}>Refer to Hospital</Typography>
      <Box
        sx={{
          flex:1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          {hospitals.map(({ name, contact_number, _id }) => (
            <MediaCard
              name={name}
              contact_number={contact_number}
              onClick={() => {
                setHospital({ _id, name });
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
            <Typography variant="h6" component={'h6'} sx={{marginBottom:5, marginLeft: 5}}>Selected Hospital</Typography>
          {hospital && <MediaCard name={hospital?.name} />}
          <Button sx={{width: '100%', marginHorizontal: 5}}>Book a bed</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Refer;
