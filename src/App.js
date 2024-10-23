import { Container, Grid2 } from "@mui/material";
import Navbar from "./components/Navbar";
import Sliderselect from "./components/Sliderselect";
import Tenur from "./components/Tenur";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="xl">
      <Grid2 container spacing={2}>
        <Grid2 item md="{6}">
          <Sliderselect/>
          <Tenur/>
        </Grid2>
        <Grid2 item md="{6}">
          <Result/>
        </Grid2>
      </Grid2>
      </Container>
    </div>
  );
}

export default App;
