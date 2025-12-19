// import React, { useState } from "react";
// import { Box, List, ListItemButton, ListItemText, IconButton, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const Sidebar = ({ onNavigate }) => {
//   const [open, setOpen] = useState(true);

//   return (
//     <Box
//       sx={{
//         width: { xs: open ? 200 : 0, sm: 200 },
//         transition: "width 0.3s",
//         bgcolor: "#6b0000",
//         color: "#ffcb99",
//         minHeight: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
//         <Typography variant="h6" sx={{ flex: 1 }}>
//           Hugo AI
//         </Typography>
//         <IconButton
//           sx={{ display: { sm: "none" } }}
//           onClick={() => setOpen(!open)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Box>

//       <List>
//         <ListItemButton onClick={() => onNavigate("dashboard")}>
//           <ListItemText primary="Dashboard" />
//         </ListItemButton>
//         <ListItemButton onClick={() => onNavigate("chefs")}>
//           <ListItemText primary="Chefs" />
//         </ListItemButton>
//         <ListItemButton onClick={() => onNavigate("violations")}>
//           <ListItemText primary="Violations" />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemText, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ role, userEmail }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: { xs: open ? 200 : 0, sm: 200 },
        transition: "width 0.3s",
        bgcolor: "#6b0000",
        color: "#ffcb99",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Typography variant="h6" sx={{ flex: 1 }}>
          Hugo AI
        </Typography>
        <IconButton
          sx={{ display: { sm: "none" } }}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <List>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        {/* <ListItemButton onClick={() => navigate("/chefs")}> */}
        {/* <ListItemButton onClick={() => navigate("/chefs", { state: { role, userEmail } })}>
          <ListItemText primary="Chefs" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/violations")}>
          <ListItemText primary="Violations" />
        </ListItemButton> */}
        {/* <ListItemButton onClick={() => navigate("/live-monitoring")}>
          <ListItemText primary="Live Monitoring" />
        </ListItemButton> */}

      </List>
    </Box>
  );
};

export default Sidebar;
