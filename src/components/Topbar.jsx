import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Topbar = ({ title, onLogout }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#6b0000",
        color: "#ffcb99",
        p: 2,
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Button
        variant="contained"
        sx={{ background: "#ffcb99", color: "#191725", "&:hover": { background: "#b68866" } }}
        onClick={onLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Topbar;
