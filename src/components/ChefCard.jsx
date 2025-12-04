import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

export default function ChefCard({ name, email, role, image }) {
  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: "#6b0000",
        color: "#ffcb99",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        textAlign: "center",
      }}
    >
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: 90,
          height: 90,
          margin: "0 auto 10px",
          border: "3px solid #ffcb99",
        }}
      />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {email}
        </Typography>

        <Box
          sx={{
            mt: 1,
            px: 2,
            py: 0.5,
            borderRadius: "10px",
            backgroundColor: "#ffcb99",
            color: "#6b0000",
            display: "inline-block",
            fontWeight: 700,
          }}
        >
          {role}
        </Box>
      </CardContent>
    </Card>
  );
}
