import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sliderselect from "./components/Sliderselect";
import Tenur from "./components/Tenur";
import Result from "./components/Result";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";

function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.6,
    loanTerm: 5,
    interestRate: 5   
  })
 
  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="xl">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Sliderselect data={data} setData={setData}/>
          <Tenur data={data} setData={setData}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Result data={data}/>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
