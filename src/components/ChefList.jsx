// import React from "react";
// import { Card, CardContent, Typography, Box, Avatar, Button } from "@mui/material";

// const ChefCard = ({ name, role, image, email }) => {
//   return (
//     <Card
//       sx={{
//         backgroundColor: "#191725",
//         color: "#fff",
//         borderRadius: 3,
//         padding: 2,
//         width: 250,
//         textAlign: "center",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
//         },
//       }}
//     >
//       <Avatar
//         src={image}
//         alt={name}
//         sx={{
//           width: 80,
//           height: 80,
//           margin: "0 auto",
//           mb: 2,
//           border: "2px solid #b68866",
//         }}
//       />
//       <CardContent>
//         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#b68866" }}>
//           {name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
//           {role}
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#b68866",
//             color: "#191725",
//             "&:hover": { backgroundColor: "#9d0706", color: "#fff" },
//             fontWeight: "bold",
//             textTransform: "none",
//           }}
//           onClick={() => window.location = `mailto:${email}`}
//         >
//           Contact
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ChefCard;


import React from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";

const ChefCard = ({ name, role, image, email }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#191725",
        color: "#fff",
        borderRadius: 3,
        padding: 2,
        width: 250,
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
        },
      }}
    >
      <Avatar
        src={image || "/src/assets/default-avatar.png"} // صورة افتراضية لو الـ API ما رجعش صورة
        alt={name}
        sx={{
          width: 80,
          height: 80,
          margin: "0 auto",
          mb: 2,
          border: "2px solid #b68866",
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#b68866" }}>
          {name || "Unknown Chef"} {/* fallback لو الاسم مش موجود */}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
          {role || "Employee"} {/* fallback لو الدور مش موجود */}
        </Typography>
        {email && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#b68866",
              color: "#191725",
              "&:hover": { backgroundColor: "#9d0706", color: "#fff" },
              fontWeight: "bold",
              textTransform: "none",
            }}
            onClick={() => window.location = `mailto:${email}`}
          >
            Contact
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ChefCard;
