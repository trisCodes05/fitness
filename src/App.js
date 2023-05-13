import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExerciseDeets from './pages/ExerciseDeets'

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1536px" } }} m="auto">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/explore/exercise/:id"  element={<ExerciseDeets/>}/>
      </Routes>
    </Box>
  );
}

export default App;
