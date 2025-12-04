// import React from "react";
// import { Card, CardContent, Typography, Box } from "@mui/material";

// const KPICard = ({ title, value, delta }) => {
//   return (
//     <Card
//       sx={{
//         backgroundColor: "#191725",
//         color: "#fff",
//         borderRadius: 3,
//         padding: 2,
//         boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
//         transition: "transform 0.3s ease, box-shadow 0.3s ease",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
//         },
//       }}
//     >
//       <CardContent>
//         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#b68866" }}>
//           {title}
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "baseline",
//             justifyContent: "space-between",
//             mt: 1,
//           }}
//         >
//           <Typography variant="h4" sx={{ fontWeight: "bold" }}>
//             {value}
//           </Typography>

//           <Typography
//             variant="body2"
//             sx={{
//               color: delta >= 0 ? "#00e676" : "#ff1744",
//               fontWeight: "bold",
//             }}
//           >
//             {"%"+delta >= 0 ? "+" + delta +"%" : delta}
//           </Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default KPICard;

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const KPICard = ({ title = "Unknown KPI", value = 0, delta }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#191725",
        color: "#fff",
        borderRadius: 3,
        padding: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#b68866" }}>
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {value}
          </Typography>

          {delta !== undefined && (
            <Typography
              variant="body2"
              sx={{
                color: delta >= 0 ? "#00e676" : "#ff1744",
                fontWeight: "bold",
              }}
            >
              {delta >= 0 ? `+${delta}%` : `${delta}%`}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default KPICard;
