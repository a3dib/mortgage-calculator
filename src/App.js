import Navbar from "./components/Navbar";
import Sliderselect from "./components/Sliderselect";
import Tenur from "./components/Tenur";
import Result from "./components/Result";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="xl">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Sliderselect />
          <Tenur />
        </Grid>
        <Grid item xs={12} md={6}>
          <Result />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
