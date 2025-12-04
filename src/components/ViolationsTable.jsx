// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

// export default function ViolationsTable({ rows = [] }) {
//   return (
//     <TableContainer component={Paper} sx={{ boxShadow: "none" , backgroundColor:"#b68866"}}>
//       <Typography variant="subtitle1" sx={{ p: 2, fontWeight: 700 }}>Recent Violations</Typography>
//       <Table>
//         <TableHead>
//           <TableRow >
//             <TableCell>Time</TableCell>
//             <TableCell>Chef</TableCell>
//             <TableCell>Type</TableCell>
//             <TableCell>Camera</TableCell>
//             <TableCell>Severity</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((r, i) => (
//             <TableRow key={i}>
//               <TableCell>{r.time}</TableCell>
//               <TableCell>{r.chef}</TableCell>
//               <TableCell>{r.type}</TableCell>
//               <TableCell>{r.camera}</TableCell>
//               <TableCell sx={{ color: r.severity === "High" ? "error.main" : r.severity === "Medium" ? "warning.main" : "success.main" }}>
//                 {r.severity}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function ViolationsTable({ rows = [] }) {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", backgroundColor: "#b68866" }}>
      <Typography variant="subtitle1" sx={{ p: 2, fontWeight: 700 }}>
        Recent Violations
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Chef</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Camera</TableCell>
            <TableCell>Severity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.time}</TableCell>
              <TableCell>{r.chef}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.camera}</TableCell>
              <TableCell
                sx={{
                  color:
                    r.severity === "High"
                      ? "error.main"
                      : r.severity === "Medium"
                      ? "warning.main"
                      : "success.main",
                }}
              >
                {r.severity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
