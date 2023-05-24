import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Grid, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./container/home";
import Login from "./container/login";
import SignUp from "./container/signup";
import Search from "./container/search";
import Refer from "./container/refering";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/refer" element={<Refer/>}/>
    </Routes>
  );
}

export default App;
