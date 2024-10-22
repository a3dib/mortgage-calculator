import { Grid2 } from "@mui/material";
import Navbar from "./components/Navbar";
import Sliderselect from "./components/Sliderselect";
import Tenur from "./components/Tenur";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Grid2 container spacing={2}>
        <Grid2 item>
          <Sliderselect/>
          <Tenur/>
        </Grid2>
        <Grid2 item>
          <Result/>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
