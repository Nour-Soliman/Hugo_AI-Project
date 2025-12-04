import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ChefCard from "../components/ChefCard";
import { getChefs, getViolations } from "../api/api"; // جلب المخالفات أيضاً

export default function ChefsPage() {
  const location = useLocation();
  const { role, userEmail } = location.state || {};

  const [chefs, setChefs] = useState([]);
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const chefsData = await getChefs();
      const violationsData = await getViolations();
      setChefs(chefsData);
      setViolations(violationsData);
    };
    fetchData();
  }, []);

  // فلترة الشيفات حسب الدور
  const visibleChefs =
    role === "admin"
      ? chefs
      : chefs.filter((c) => c.email === userEmail);

  // فلترة الشيفات اللي عندهم مخالفات
  const chefsWithViolations = visibleChefs.filter((chef) =>
    violations.some((v) => v.chefEmail === chef.email)
  );

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        minHeight: "100vh",
        backgroundColor: "#ffcb99",
        // backgroundImage: 'url("/src/assets/photo_2025-11-29_02-52-48.jpg")', // غيري المسار
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
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
        Chefs with Violations
      </Typography>

      {chefsWithViolations.length > 0 ? (
        <Grid container spacing={4}>
          {chefsWithViolations.map((chef) => (
            <Grid item key={chef.id} xs={12} sm={6} md={4} lg={3}>
              <ChefCard
                name={chef.name}
                email={chef.email}
                role={chef.role || "Employee"}
                image={chef.avatar || "/default-avatar.png"}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          sx={{ color: "#191725", textAlign: "center", mt: 4 }}
        >
          No chefs with violations.
        </Typography>
      )}
    </Box>
  );
}

