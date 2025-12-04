import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper, Button } from "@mui/material";
import ChefsManagement from "../components/ChefsManagement";
import FormsManagement from "../components/FormsManagement";

export default function SettingsPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        minHeight: "100vh",
        backgroundColor: "#ffcb99",
      }}
    >
      {/* ======== HEADER BAR ======== */}
      <Paper
  sx={{
    backgroundColor: "#191725",
    color: "#ffcb99",
    p: 2,
    mb: 3,
    borderRadius: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    // ❌ هنشيل wrap علشان الزرارين يفضلوا جنب بعض
    flexWrap: "nowrap",

    // Responsive
    flexDirection: { xs: "column", sm: "row" }, 
    gap: { xs: 2, sm: 0 },
  }}
>
  {/* عنوان */}
  <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: { xs: "center", sm: "left" } }}>
    Settings
  </Typography>

  {/* الزرارين */}
  {/* <Box 
    sx={{ 
      display: "flex", 
      gap: 2, 
      flexDirection: "row",
      justifyContent: "center",
    }}
  > */}
    {/* <Button
      variant="contained"
      sx={{
        backgroundColor: "#b68866",
        "&:hover": { backgroundColor: "#9d0706" },
      }}
      onClick={() => window.location.reload()}
    >
      Refresh
    </Button> */}

    {/* <Button
      variant="contained"
      sx={{
        backgroundColor: "#b68866",
        "&:hover": { backgroundColor: "#9d0706" },
      }}
    >
      Action
    </Button>
  </Box> */}
</Paper>


      {/* ======== TABS ======== */}
      <Paper sx={{ mb: 4, backgroundColor: "#ffe5cc" }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          centered
          variant="fullWidth" // 🔥 عشان الريسبونسف يبقى ممتاز
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: "#9d0706", height: 4 },
          }}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#9d0706",
              fontWeight: "bold",
            },
            "& .MuiTab-root": {
              fontSize: { xs: "0.8rem", sm: "1rem" }, // 🔥 نص أصغر على الموبايل
            },
          }}
        >
          <Tab label="Chefs Management" />
          <Tab label="Forms Management" />
        </Tabs>
      </Paper>

      {/* ======== CONTENT ======== */}
      <Box>
        {tabIndex === 0 && <ChefsManagement />}
        {tabIndex === 1 && <FormsManagement />}
      </Box>
    </Box>
  );
}



