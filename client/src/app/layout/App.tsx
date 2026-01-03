import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./NavBar";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";

function App() {
  const location = useLocation();

  return (
    <Box sx={{ backgroundColor: "#eeeeee", minHeight: "100vh" }}>
      <ScrollRestoration />
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <Container maxWidth="xl" sx={{ pt: 14 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
