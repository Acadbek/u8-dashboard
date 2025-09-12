import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import Events from "./pages/events";
import Sidebar from "./components/sidebar";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={7} spacing={10}>
        <Grid size={1}>
          <Sidebar />
        </Grid>
        <Grid size={6}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App;
