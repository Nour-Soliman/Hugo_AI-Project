// src/Pages/Home.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const buttonsLeft = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Video Analysis", path: "/video-analysis" },
    { label: "Chefs", path: "/chef-performance" },
  ];

  const buttonsRight = [
    { label: "Live Monitoring", path: "/live-monitoring" },
    { label: "Chefs Reports", path: "/chefs-reports" }, // ✅ تم تعديل الاسم والمسار
    { label: "Settings", path: "/settings" },
  ];

  const renderButtons = (buttonsArray) =>
    buttonsArray.map((btn) => (
      <Button
        key={btn.label}
        variant="contained"
        sx={{
          fontWeight: "bold",
          width: "100%",
          py: 6,
          fontSize: "1.3rem",
          backgroundColor: "#ffcb99",
          color: "#9d0706",
          borderRadius: "15px",
          "&:hover": { backgroundColor: "#b68866" },
        }}
        onClick={() => navigate(btn.path)}
      >
        {btn.label}
      </Button>
    ));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 8,
        backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Welcome Text */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: "80px",
          color: "#ffcb99",
          mb: 8,
          textAlign: "center",
        }}
      >
        Welcome
      </Typography>

      {/* Buttons Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: "900px",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {/* Left Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: { xs: "100%", sm: "30%" } }}>
          {renderButtons(buttonsLeft)}
        </Box>

        {/* Right Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5, width: { xs: "100%", sm: "30%" } }}>
          {renderButtons(buttonsRight)}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;


