import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { getViolations } from "../api/api";

export default function ViolationsPage() {
  const location = useLocation();
  const { role, userEmail } = location.state || {};

  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getViolations();
      setViolations(data);
    };
    fetchData();
  }, []);

  const filteredViolations =
    role === "admin"
      ? violations
      : violations.filter(v => v.chefEmail === userEmail);

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "low": return "#a0d995";
      case "medium": return "#fdd835";
      case "high": return "#e53935";
      default: return "#b68866";
    }
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "#9d0706" ,
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}
      >
        Violations
      </Typography>

      {filteredViolations.length > 0 ? (
        <Grid container spacing={3}>
          {filteredViolations.map((v) => (
            <Grid item key={v.id} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: getSeverityColor(v.severity),
                  color: "#191725",
                  boxShadow: 3
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {v.type}
                </Typography>
                <Typography variant="body2">Chef: {v.chef}</Typography>
                <Typography variant="body2">Camera: {v.camera}</Typography>
                <Typography variant="body2">Time: {new Date(v.time).toLocaleString()}</Typography>
                <Typography variant="body2">Severity: {v.severity}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          sx={{ color: "#191725", textAlign: "center", mt: 4 }}
        >
          No violations available.
        </Typography>
      )}
    </Box>
  );
}



