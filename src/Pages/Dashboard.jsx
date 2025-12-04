// const role = localStorage.getItem("role");
// const userId = localStorage.getItem("userId");
// // export default Dashboard;
// import React, { useState, useMemo } from "react";
// import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import KPICard from "../components/KPICard";
// import ViolationsTable from "../components/ViolationsTable";
// import ChefList from "../components/ChefList";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
// import { saveAs } from "file-saver";
// import * as XLSX from "xlsx";

// const mockKPIs = [
//   { title: "Total Chefs", value: 12, delta: 2 },
//   { title: "Active Cameras", value: 5, delta: 0 },
//   { title: "Total Violations", value: 24, delta: -5 },
//   { title: "Avg Compliance", value: "88%", delta: 1 },
// ];

// const mockChart = [
//   { time: "08:00", violations: 1 },
//   { time: "09:00", violations: 3 },
//   { time: "10:00", violations: 2 },
//   { time: "11:00", violations: 5 },
//   { time: "12:00", violations: 4 },
//   { time: "13:00", violations: 2 },
// ];

// const mockViolations = [
//   { time: "2025-10-09 11:00", chef: "Chef Ahmed", type: "No Mask", camera: "Cam-1", severity: "High" },
//   { time: "2025-10-09 10:42", chef: "Chef Sara", type: "No Gloves", camera: "Cam-2", severity: "Medium" },
//   { time: "2025-10-09 09:12", chef: "Chef Ali", type: "Touching Face", camera: "Cam-3", severity: "Low" },
// ];

// const mockChefs = [
//   { id: 1, name: "Chef Ahmed", avatar: "", compliance: 92 },
//   { id: 2, name: "Chef Sara", avatar: "", compliance: 85 },
//   { id: 3, name: "Chef Ali", avatar: "", compliance: 72 },
// ];

// export default function Dashboard() {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [violations, setViolations] = useState(mockViolations);

//   const exportCSV = (rows) => {
//     // export CSV via XLSX
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Violations");
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
//   };

//   const onNavigate = (key) => setActiveSection(key);

//   const chartData = useMemo(() => mockChart, []);

//   // فلترة الداتا حسب نوع المستخدم
// const filteredViolations = role === "admin"
//   ? violations
//   : violations.filter(v => v.chefId == userId);

// const filteredChefs = role === "admin"
//   ? mockChefs
//   : mockChefs.filter(c => c.id == userId);

// const filteredKPIs = role === "admin"
//   ? mockKPIs
//   : [
//       {
//         title: "Your Violations",
//         value: filteredViolations.length,
//         delta: 0
//       },
//       {
//         title: "Your Compliance",
//         value: filteredChefs[0]?.compliance + "%",
//         delta: 0
//       }
//     ];


//     return (
//   <Box sx={{ display: "flex" }}>
//     <Sidebar onNavigate={onNavigate} />
//     <Box sx={{ flex: 1 }}>
//       <Topbar title="Main Dashboard" onLogout={() => window.location.href = "/"} />

//       <Box sx={{ p: 3 }}>
//         <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
//           {filteredKPIs.map((k) => (
//             <KPICard key={k.title} {...k} />
//           ))}
//         </Stack>

//         <Grid container spacing={2}>
//           <Grid item xs={12} md={8}>
//             <Paper sx={{ p: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
//                 Violations Timeline
//               </Typography>
//               <ResponsiveContainer width="100%" height={220}>
//                 <LineChart data={chartData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="time" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="violations" stroke="#667EEA" strokeWidth={3} />
//                 </LineChart>
//               </ResponsiveContainer>

//               <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                 <Button variant="outlined" onClick={() => exportCSV(violations)}>
//                   Export Violations (Excel)
//                 </Button>

//                 {role === "admin" && (
//                   <Button
//                     variant="contained"
//                     sx={{ background: "#191725", "&:hover": { background: "#333" } }}
//                     onClick={() => {
//                       const newV = {
//                         time: new Date().toISOString(),
//                         chef: "Chef New",
//                         type: "No Mask",
//                         camera: "Cam-4",
//                         severity: "Medium",
//                         chefId: 1,
//                       };
//                       setViolations((s) => [newV, ...s]);
//                     }}
//                   >
//                     Simulate Violation
//                   </Button>
//                 )}
//               </Box>
//             </Paper>

//             <Box sx={{ mt: 2 }}>
//               <ViolationsTable rows={filteredViolations} />
//             </Box>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             {role === "admin" && <ChefList chefs={filteredChefs} />}

//             <Paper sx={{ mt: 2, p: 2 }}>
//               <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
//                 Activity Summary
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 Active time: 6h 42m
//               </Typography>
//               <Typography variant="body2">Idle time: 1h 12m</Typography>
//               <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>
//                 Top Violators
//               </Typography>
//               <ul>
//                 <li>Chef Ali — 7 violations</li>
//                 <li>Chef Sara — 5 violations</li>
//               </ul>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   </Box>
// );
// }

//     <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//   <Button variant="outlined" onClick={() => exportCSV(violations)}>
//     Export Violations (Excel)
//   </Button>

//   {role === "admin" && (
//     <Button
//       variant="contained"
//       sx={{ background: "#191725", "&:hover": { background: "#333" } }}
//       onClick={() => {
//         const newV = {
//           time: new Date().toISOString(),
//           chef: "Chef New",
//           type: "No Mask",
//           camera: "Cam-4",
//           severity: "Medium",
//           chefId: 1
//         };
//         setViolations((s) => [newV, ...s]);
//       }}
//     >
//       Simulate Violation
//     </Button>
//   )}
// </Box>

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Sidebar onNavigate={onNavigate} />
//       <Box sx={{ flex: 1 }}>
//         <Topbar title="Main Dashboard" onLogout={() => window.location.href = "/"} />

//         <Box sx={{ p: 3 }}>
//           <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
//             {/* {mockKPIs.map((k) => (
//               <KPICard key={k.title} {...k} />
//             ))} */}
//             {filteredKPIs.map((k) => (
//               <KPICard key={k.title} {...k} />
//             ))}

//           </Stack>

//           <Grid container spacing={2}>
//             <Grid item xs={12} md={8}>
//               <Paper sx={{ p: 2 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="violations" stroke="#667EEA" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                   <Button variant="outlined" onClick={() => exportCSV(violations)}>Export Violations (Excel)</Button>
//                   <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={() => {
//                     // simulate adding new violation
//                     const newV = { time: new Date().toISOString(), chef: "Chef New", type: "No Mask", camera: "Cam-4", severity: "Medium" };
//                     setViolations((s) => [newV, ...s]);
//                   }}>Simulate Violation</Button>
//                 </Box>
//               </Paper>
//               <Box sx={{ mt: 2 }}>
//                 {/* <ViolationsTable rows={violations} /> */}
//                 <ViolationsTable rows={filteredViolations} />

//               </Box>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               {/* <ChefList chefs={mockChefs} /> */}
//               {role === "admin" && <ChefList chefs={filteredChefs} />}

//               <Paper sx={{ mt: 2, p: 2 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Activity Summary</Typography>
//                 <Typography variant="body2" sx={{ mt: 1 }}>Active time: 6h 42m</Typography>
//                 <Typography variant="body2">Idle time: 1h 12m</Typography>
//                 <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>Top Violators</Typography>
//                 <ul>
//                   <li>Chef Ali — 7 violations</li>
//                   <li>Chef Sara — 5 violations</li>
//                 </ul>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// src/Pages/Dashboard.jsx
// 

// import React, { useState, useMemo } from "react";
// import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import KPICard from "../components/KPICard";
// import ViolationsTable from "../components/ViolationsTable";
// import ChefList from "../components/ChefList";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { saveAs } from "file-saver";
// import * as XLSX from "xlsx";

// // Mock Data
// const mockKPIs = [
//   { title: "Total Chefs", value: 12, delta: 2 },
//   { title: "Active Cameras", value: 5, delta: 0 },
//   { title: "Total Violations", value: 24, delta: -5 },
//   { title: "Avg Compliance", value: "88%", delta: 1 },
// ];

// const mockChart = [
//   { time: "08:00", violations: 1 },
//   { time: "09:00", violations: 3 },
//   { time: "10:00", violations: 2 },
//   { time: "11:00", violations: 5 },
//   { time: "12:00", violations: 4 },
//   { time: "13:00", violations: 2 },
// ];

// const mockViolations = [
//   { id: 1, time: "2025-10-09 11:00", chef: "Chef Ahmed", chefEmail: "chef1@example.com", type: "No Mask", camera: "Cam-1", severity: "High" },
//   { id: 2, time: "2025-10-09 10:42", chef: "Chef Sara", chefEmail: "chef2@example.com", type: "No Gloves", camera: "Cam-2", severity: "Medium" },
//   { id: 3, time: "2025-10-09 09:12", chef: "Chef Ali", chefEmail: "chef3@example.com", type: "Touching Face", camera: "Cam-3", severity: "Low" },
// ];

// const mockChefs = [
//   { id: 1, name: "Chef Ahmed", email: "chef1@example.com", avatar: "", compliance: 92 },
//   { id: 2, name: "Chef Sara", email: "chef2@example.com", avatar: "", compliance: 85 },
//   { id: 3, name: "Chef Ali", email: "chef3@example.com", avatar: "", compliance: 72 },
// ];

// export default function Dashboard() {
//   const location = useLocation();
//   const { role, userEmail } = location.state || {};

//   const [violations, setViolations] = useState(mockViolations);

//   const exportCSV = (rows) => {
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Violations");
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
//   };

//   const chartData = useMemo(() => mockChart, []);

//   // فلترة Violations حسب الدور
//   const filteredViolations = role === "admin"
//     ? violations
//     : violations.filter(v => v.chefEmail === userEmail);

//   // فلترة ChefList حسب الدور
//   const filteredChefs = role === "admin"
//     ? mockChefs
//     : mockChefs.filter(c => c.email === userEmail);

//   // فلترة KPIs حسب الدور (موظف يشوف بياناته فقط)
//   const filteredKPIs = role === "admin"
//     ? mockKPIs
//     : mockKPIs.map(k => {
//         if (k.title === "Total Chefs") return { ...k, value: 1 }; // الموظف يشوف نفسه فقط
//         if (k.title === "Total Violations") return { ...k, value: filteredViolations.length }; // فقط مخالفاته
//         return k;
//       });

//   const simulateViolation = () => {
//     const newV = {
//       id: violations.length + 1,
//       time: new Date().toISOString(),
//       chef: "Chef New",
//       chefEmail: "chef1@example.com",
//       type: "No Mask",
//       camera: "Cam-4",
//       severity: "Medium",
//     };
//     setViolations((s) => [newV, ...s]);
//   };

//   return (
//     <Box sx={{ display: "flex" ,minHeight: "100vh", backgroundColor:"#ffcb99"
// ,
//     }}>
//       <Sidebar />
//       <Box sx={{ flex: 1  }}>
//         <Topbar title="Main Dashboard" onLogout={() => window.location.href = "/"} />

//         <Box sx={{ p: 3 }}>
//           <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
//             {filteredKPIs.map((k) => (
//               <KPICard key={k.title} {...k} />
//             ))}
//           </Stack>

//           <Grid container spacing={2}>
//             <Grid item xs={12} md={8}>
//               <Paper sx={{ p: 2 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="violations" stroke="#667EEA" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
//                   <Button variant="outlined" onClick={() => exportCSV(filteredViolations)}>Export Violations (Excel)</Button>
//                   {role === "admin" && (
//                     <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={simulateViolation}>
//                       Simulate Violation
//                     </Button>
//                   )}
//                 </Box>
//               </Paper>

//               <Box sx={{ mt: 2 }}>
//                 <ViolationsTable rows={filteredViolations} />
//               </Box>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <ChefList chefs={filteredChefs} />
//               <Paper sx={{ mt: 2, p: 2 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Activity Summary</Typography>
//                 <Typography variant="body2" sx={{ mt: 1 }}>Active time: 6h 42m</Typography>
//                 <Typography variant="body2">Idle time: 1h 12m</Typography>
//                 {role === "admin" && (
//                   <>
//                     <Typography variant="body2" sx={{ mt: 2, fontWeight: 700 }}>Top Violators</Typography>
//                     <ul>
//                       <li>Chef Ali — 7 violations</li>
//                       <li>Chef Sara — 5 violations</li>
//                     </ul>
//                   </>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// import React, { useState, useMemo } from "react";
// import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import KPICard from "../components/KPICard";
// import ViolationsTable from "../components/ViolationsTable";
// import ChefList from "../components/ChefList";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { saveAs } from "file-saver";
// import * as XLSX from "xlsx";

// // Mock Data
// const mockKPIs = [
//   { title: "Total Chefs", value: 12, delta: 2 },
//   { title: "Active Cameras", value: 5, delta: 0 },
//   { title: "Total Violations", value: 24, delta: -5 },
//   { title: "Avg Compliance", value: "88%", delta: 1 },
// ];

// const mockChart = [
//   { time: "08:00", violations: 1 },
//   { time: "09:00", violations: 3 },
//   { time: "10:00", violations: 2 },
//   { time: "11:00", violations: 5 },
//   { time: "12:00", violations: 4 },
//   { time: "13:00", violations: 2 },
// ];

// const mockViolations = [
//   { id: 1, time: "2025-10-09 11:00", chef: "Chef Ahmed", chefEmail: "chef1@example.com", type: "No Mask", camera: "Cam-1", severity: "High" },
//   { id: 2, time: "2025-10-09 10:42", chef: "Chef Sara", chefEmail: "chef2@example.com", type: "No Gloves", camera: "Cam-2", severity: "Medium" },
//   { id: 3, time: "2025-10-09 09:12", chef: "Chef Ali", chefEmail: "chef3@example.com", type: "Touching Face", camera: "Cam-3", severity: "Low" },
// ];

// const mockChefs = [
//   { id: 1, name: "Chef Ahmed", email: "chef1@example.com", avatar: "", compliance: 92 },
//   { id: 2, name: "Chef Sara", email: "chef2@example.com", avatar: "", compliance: 85 },
//   { id: 3, name: "Chef Ali", email: "chef3@example.com", avatar: "", compliance: 72 },
// ];

// export default function Dashboard() {
//   const location = useLocation();
//   const { role, userEmail } = location.state || {};

//   const [violations, setViolations] = useState(mockViolations);

//   const exportCSV = (rows) => {
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Violations");
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
//   };

//   const chartData = useMemo(() => mockChart, []);

//   const filteredViolations = role === "admin"
//     ? violations
//     : violations.filter(v => v.chefEmail === userEmail);

//   const filteredChefs = role === "admin"
//     ? mockChefs
//     : mockChefs.filter(c => c.email === userEmail);

//   const simulateViolation = () => {
//     const newV = {
//       id: violations.length + 1,
//       time: new Date().toISOString(),
//       chef: "Chef New",
//       chefEmail: "chef1@example.com",
//       type: "No Mask",
//       camera: "Cam-4",
//       severity: "Medium",
//     };
//     setViolations((s) => [newV, ...s]);
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Sidebar />
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column"  }}>
//         <Topbar title="Hugo AI Monitoring Dashboard" onLogout={() => window.location.href = "/"} />

//         <Box sx={{ p: { xs: 2, sm: 3 } }}>
//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
//             {mockKPIs.map((k) => (
//               <KPICard key={k.title} {...k} />
//             ))}
//           </Stack>

//           <Grid container spacing={2}>
//             <Grid item xs={12} md={8}>
//               <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2 ,background: "#b68866" }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="violations" stroke="#000000" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, mt: 2 , color:"#000000"}}>
//                   <Button variant="outlined" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={() => exportCSV(filteredViolations)}>Export Violations (Excel)</Button>
//                   {role === "admin" && (
//                     <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={simulateViolation}>
//                       Simulate Violation
//                     </Button>
//                   )}
//                 </Box>
//               </Paper>

//               <ViolationsTable rows={filteredViolations} />
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <ChefList chefs={filteredChefs} />
//               <Paper sx={{ mt: 2, p: { xs: 2, sm: 3 } , backgroundColor: "#6b0000"}}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 800 , color:"#ffcb99" }}>Activity Summary</Typography>
//                 <Typography variant="body2" sx={{ mt: 1 }}>Active time: 6h 42m</Typography>
//                 <Typography variant="body2">Idle time: 1h 12m</Typography>
//                 {role === "admin" && (
//                   <>
//                     <Typography variant="body2" sx={{ mt: 2, fontWeight: 800 ,color:"#ffcb99" }}>Top Violators</Typography>
//                     <ul>
//                       <li>Chef Ali — 7 violations</li>
//                       <li>Chef Sara — 5 violations</li>
//                     </ul>
//                   </>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// import React, { useState, useMemo } from "react";
// import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import KPICard from "../components/KPICard";
// import ViolationsTable from "../components/ViolationsTable";
// import ChefList from "../components/ChefList";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { saveAs } from "file-saver";
// import * as XLSX from "xlsx";

// // Mock Data
// const mockKPIs = [
//   { title: "Total Chefs", value: 12, delta: 2 },
//   { title: "Active Cameras", value: 5, delta: 0 },
//   { title: "Total Violations", value: 24, delta: -5 },
//   { title: "Avg Compliance", value: "88%", delta: 1 },
// ];

// const mockViolations = [
//   { id: 1, time: "2025-10-09 11:00", chef: "Chef Ahmed", chefEmail: "chef1@example.com", type: "No Mask", camera: "Cam-1", severity: "High" },
//   { id: 2, time: "2025-10-09 10:42", chef: "Chef Sara", chefEmail: "chef2@example.com", type: "No Gloves", camera: "Cam-2", severity: "Medium" },
//   { id: 3, time: "2025-10-09 09:12", chef: "Chef Ali", chefEmail: "chef3@example.com", type: "Touching Face", camera: "Cam-3", severity: "Low" },
// ];

// const mockChefs = [
//   { id: 1, name: "Chef Ahmed", email: "chef1@example.com", avatar: "", compliance: 92 },
//   { id: 2, name: "Chef Sara", email: "chef2@example.com", avatar: "", compliance: 85 },
//   { id: 3, name: "Chef Ali", email: "chef3@example.com", avatar: "", compliance: 72 },
// ];

// export default function Dashboard() {
//   const location = useLocation();
//   const { role, userEmail } = location.state || {};

//   const [violations, setViolations] = useState(mockViolations);

//   // فلترة البيانات حسب الدور
//   const filteredViolations = role === "admin"
//     ? violations
//     : violations.filter(v => v.chefEmail === userEmail);

//   const filteredChefs = role === "admin"
//     ? mockChefs
//     : mockChefs.filter(c => c.email === userEmail);

//   // KPIs ديناميكية
//   const KPIs = useMemo(() => {
//     const totalChefs = filteredChefs.length;
//     const activeCameras = new Set(filteredViolations.map(v => v.camera)).size;
//     const totalViolations = filteredViolations.length;
//     const avgCompliance = filteredChefs.length > 0
//       ? Math.round(filteredChefs.reduce((acc, c) => acc + c.compliance, 0) / filteredChefs.length) + "%"
//       : "0%";
//     return [
//       { title: "Total Chefs", value: totalChefs },
//       { title: "Active Cameras", value: activeCameras },
//       { title: "Total Violations", value: totalViolations },
//       { title: "Avg Compliance", value: avgCompliance },
//     ];
//   }, [filteredChefs, filteredViolations]);

//   // Chart ديناميكي
//   const chartData = useMemo(() => {
//     const hourlyCounts = {};
//     filteredViolations.forEach(v => {
//       const hour = new Date(v.time).getHours();
//       hourlyCounts[hour] = (hourlyCounts[hour] || 0) + 1;
//     });
//     const data = [];
//     for (let i = 0; i <= 23; i++) {
//       data.push({ time: `${i}:00`, violations: hourlyCounts[i] || 0 });
//     }
//     return data;
//   }, [filteredViolations]);

//   // Top Violators
//   const topViolators = useMemo(() => {
//     if (role !== "admin") return [];
//     const counts = {};
//     filteredViolations.forEach(v => {
//       counts[v.chef] = (counts[v.chef] || 0) + 1;
//     });
//     return Object.entries(counts)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 5)
//       .map(([chef, count]) => ({ chef, count }));
//   }, [filteredViolations, role]);

//   // Activity Summary ديناميكية
//   const activitySummary = useMemo(() => {
//     const workMinutes = 8 * 60; // 8 ساعات
//     return filteredChefs.map(c => {
//       const chefViolations = filteredViolations.filter(v => v.chefEmail === c.email).length;
//       const activeTime = chefViolations * 10; // كل مخالفة 10 دقائق
//       const idleTime = workMinutes - activeTime;
//       return {
//         chef: c.name,
//         active: `${Math.floor(activeTime / 60)}h ${activeTime % 60}m`,
//         idle: `${Math.floor(idleTime / 60)}h ${idleTime % 60}m`
//       };
//     });
//   }, [filteredChefs, filteredViolations]);

//   const exportCSV = (rows) => {
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Violations");
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
//   };

//   const simulateViolation = () => {
//     const newV = {
//       id: violations.length + 1,
//       time: new Date().toISOString(),
//       chef: filteredChefs[0]?.name || "Chef New",
//       chefEmail: filteredChefs[0]?.email || "chef1@example.com",
//       type: "No Mask",
//       camera: "Cam-4",
//       severity: "Medium",
//     };
//     setViolations((s) => [newV, ...s]);
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Sidebar />
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Topbar title="Hugo AI Monitoring Dashboard" onLogout={() => window.location.href = "/"} />

//         <Box sx={{ p: { xs: 2, sm: 3 } }}>
//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
//             {KPIs.map(k => <KPICard key={k.title} {...k} />)}
//           </Stack>

//           <Grid container spacing={2}>
//             <Grid item xs={12} md={8}>
//               <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2, background: "#b68866" }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="violations" stroke="#000000" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, mt: 2 }}>
//                   <Button variant="outlined" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={() => exportCSV(filteredViolations)}>Export Violations (Excel)</Button>
//                   {role === "admin" && (
//                     <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={simulateViolation}>
//                       Simulate Violation
//                     </Button>
//                   )}
//                 </Box>
//               </Paper>

//               <ViolationsTable rows={filteredViolations} />
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <ChefList chefs={filteredChefs} />
//               <Paper sx={{ mt: 2, p: { xs: 2, sm: 3 }, backgroundColor: "#6b0000" }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#ffcb99" }}>Activity Summary</Typography>
//                 {activitySummary.map(a => (
//                   <Box key={a.chef} sx={{ mt: 1 }}>
//                     <Typography variant="body2">{a.chef}</Typography>
//                     <Typography variant="body2">Active time: {a.active}</Typography>
//                     <Typography variant="body2">Idle time: {a.idle}</Typography>
//                   </Box>
//                 ))}
//                 {role === "admin" && topViolators.length > 0 && (
//                   <>
//                     <Typography variant="body2" sx={{ mt: 2, fontWeight: 800, color: "#ffcb99" }}>Top Violators</Typography>
//                     <ul>
//                       {topViolators.map(tv => <li key={tv.chef}>{tv.chef} — {tv.count} violations</li>)}
//                     </ul>
//                   </>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }





// import React, { useState, useEffect, useMemo } from "react";
// import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import KPICard from "../components/KPICard";
// import ViolationsTable from "../components/ViolationsTable";
// import ChefList from "../components/ChefList";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { saveAs } from "file-saver";
// import * as XLSX from "xlsx";
// import { getChefs, getViolations } from "../api/api"; // استدعاء API

// export default function Dashboard() {
//   const location = useLocation();
//   const { role, userEmail } = location.state || {};

//   const [chefs, setChefs] = useState([]);
//   const [violations, setViolations] = useState([]);

//   // ✅ جلب البيانات من API
//   useEffect(() => {
//     const fetchData = async () => {
//       const chefsData = await getChefs();
//       const violationsData = await getViolations();
//       setChefs(chefsData);
//       setViolations(violationsData);
//     };
//     fetchData();
//   }, []);

//   // فلترة البيانات حسب الدور
//   const filteredViolations = role === "admin"
//     ? violations
//     : violations.filter(v => v.chefEmail === userEmail);

//   const filteredChefs = role === "admin"
//     ? chefs
//     : chefs.filter(c => c.email === userEmail);

//   // KPIs ديناميكية
//   const KPIs = useMemo(() => {
//     const totalChefs = filteredChefs.length;
//     const activeCameras = new Set(filteredViolations.map(v => v.camera)).size;
//     const totalViolations = filteredViolations.length;
//     const avgCompliance = filteredChefs.length > 0
//       ? Math.round(filteredChefs.reduce((acc, c) => acc + c.compliance, 0) / filteredChefs.length) + "%"
//       : "0%";
//     return [
//       { title: "Total Chefs", value: totalChefs },
//       { title: "Active Cameras", value: activeCameras },
//       { title: "Total Violations", value: totalViolations },
//       { title: "Avg Compliance", value: avgCompliance },
//     ];
//   }, [filteredChefs, filteredViolations]);

//   // Chart ديناميكي
//   const chartData = useMemo(() => {
//     const hourlyCounts = {};
//     filteredViolations.forEach(v => {
//       const hour = new Date(v.time).getHours();
//       hourlyCounts[hour] = (hourlyCounts[hour] || 0) + 1;
//     });
//     const data = [];
//     for (let i = 0; i <= 23; i++) {
//       data.push({ time: `${i}:00`, violations: hourlyCounts[i] || 0 });
//     }
//     return data;
//   }, [filteredViolations]);

//   // Top Violators
//   const topViolators = useMemo(() => {
//     if (role !== "admin") return [];
//     const counts = {};
//     filteredViolations.forEach(v => {
//       counts[v.chef] = (counts[v.chef] || 0) + 1;
//     });
//     return Object.entries(counts)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 5)
//       .map(([chef, count]) => ({ chef, count }));
//   }, [filteredViolations, role]);

//   // Activity Summary ديناميكية
//   const activitySummary = useMemo(() => {
//     const workMinutes = 8 * 60; // 8 ساعات
//     return filteredChefs.map(c => {
//       const chefViolations = filteredViolations.filter(v => v.chefEmail === c.email).length;
//       const activeTime = chefViolations * 10; // كل مخالفة 10 دقائق
//       const idleTime = workMinutes - activeTime;
//       return {
//         chef: c.name,
//         active: `${Math.floor(activeTime / 60)}h ${activeTime % 60}m`,
//         idle: `${Math.floor(idleTime / 60)}h ${idleTime % 60}m`
//       };
//     });
//   }, [filteredChefs, filteredViolations]);

//   const exportCSV = (rows) => {
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Violations");
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
//   };

//   const simulateViolation = () => {
//     const newV = {
//       id: violations.length + 1,
//       time: new Date().toISOString(),
//       chef: filteredChefs[0]?.name || "Chef New",
//       chefEmail: filteredChefs[0]?.email || "chef1@example.com",
//       type: "No Mask",
//       camera: "Cam-4",
//       severity: "Medium",
//     };
//     setViolations((s) => [newV, ...s]);
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Sidebar role={role} userEmail={userEmail} />
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Topbar title="Hugo AI Monitoring Dashboard" onLogout={() => window.location.href = "/"} />

//         <Box sx={{ p: { xs: 2, sm: 3 } }}>
//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
//             {KPIs.map(k => <KPICard key={k.title} {...k} />)}
//           </Stack>

//           <Grid container spacing={2}>
//             <Grid item xs={12} md={8}>
//               <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2, background: "#b68866" }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="violations" stroke="#000000" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, mt: 2 }}>
//                   <Button variant="outlined" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={() => exportCSV(filteredViolations)}>Export Violations (Excel)</Button>
//                   {role === "admin" && (
//                     <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={simulateViolation}>
//                       Simulate Violation
//                     </Button>
//                   )}
//                 </Box>
//               </Paper>

//               <ViolationsTable rows={filteredViolations} />
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <ChefList chefs={filteredChefs} />
//               <Paper sx={{ mt: 2, p: { xs: 2, sm: 3 }, backgroundColor: "#6b0000" }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#ffcb99" }}>Activity Summary</Typography>
//                 {activitySummary.map(a => (
//                   <Box key={a.chef} sx={{ mt: 1 }}>
//                     <Typography variant="body2">{a.chef}</Typography>
//                     <Typography variant="body2">Active time: {a.active}</Typography>
//                     <Typography variant="body2">Idle time: {a.idle}</Typography>
//                   </Box>
//                 ))}
//                 {role === "admin" && topViolators.length > 0 && (
//                   <>
//                     <Typography variant="body2" sx={{ mt: 2, fontWeight: 800, color: "#ffcb99" }}>Top Violators</Typography>
//                     <ul>
//                       {topViolators.map(tv => <li key={tv.chef}>{tv.chef} — {tv.count} violations</li>)}
//                     </ul>
//                   </>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// import React, { useState, useEffect, useMemo } from "react";
// import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import KPICard from "../components/KPICard";
// import ViolationsTable from "../components/ViolationsTable";
// import ChefList from "../components/ChefList";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { saveAs } from "file-saver";
// import * as XLSX from "xlsx";
// import { getChefs, getViolations } from "../api/api"; // استدعاء API

// export default function Dashboard() {
//   const location = useLocation();
//   const { role, userEmail } = location.state || {};

//   const [chefs, setChefs] = useState([]);
//   const [violations, setViolations] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const chefsData = await getChefs();
//       const violationsData = await getViolations();
//       setChefs(chefsData);
//       setViolations(violationsData);
//     };
//     fetchData();
//   }, []);

//   const filteredViolations = role === "admin"
//     ? violations
//     : violations.filter(v => v.chefEmail === userEmail);

//   const filteredChefs = role === "admin"
//     ? chefs
//     : chefs.filter(c => c.email === userEmail);

//   const KPIs = useMemo(() => {
//     const totalChefs = filteredChefs.length;
//     const activeCameras = new Set(filteredViolations.map(v => v.camera)).size;
//     const totalViolations = filteredViolations.length;
//     const avgCompliance = filteredChefs.length > 0
//       ? Math.round(filteredChefs.reduce((acc, c) => acc + c.compliance, 0) / filteredChefs.length) + "%"
//       : "0%";
//     return [
//       { title: "Total Chefs", value: totalChefs },
//       { title: "Active Cameras", value: activeCameras },
//       { title: "Total Violations", value: totalViolations },
//       { title: "Avg Compliance", value: avgCompliance },
//     ];
//   }, [filteredChefs, filteredViolations]);

//   const chartData = useMemo(() => {
//     const hourlyCounts = {};
//     filteredViolations.forEach(v => {
//       const hour = new Date(v.time).getHours();
//       hourlyCounts[hour] = (hourlyCounts[hour] || 0) + 1;
//     });
//     const data = [];
//     for (let i = 0; i <= 23; i++) {
//       data.push({ time: `${i}:00`, violations: hourlyCounts[i] || 0 });
//     }
//     return data;
//   }, [filteredViolations]);

//   const topViolators = useMemo(() => {
//     if (role !== "admin") return [];
//     const counts = {};
//     filteredViolations.forEach(v => {
//       counts[v.chef] = (counts[v.chef] || 0) + 1;
//     });
//     return Object.entries(counts)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 5)
//       .map(([chef, count]) => ({ chef, count }));
//   }, [filteredViolations, role]);

//   const activitySummary = useMemo(() => {
//     const workMinutes = 8 * 60;
//     return filteredChefs.map(c => {
//       const chefViolations = filteredViolations.filter(v => v.chefEmail === c.email).length;
//       const activeTime = chefViolations * 10;
//       const idleTime = workMinutes - activeTime;
//       return {
//         chef: c.name,
//         active: `${Math.floor(activeTime / 60)}h ${activeTime % 60}m`,
//         idle: `${Math.floor(idleTime / 60)}h ${idleTime % 60}m`
//       };
//     });
//   }, [filteredChefs, filteredViolations]);

//   const exportCSV = (rows) => {
//     const ws = XLSX.utils.json_to_sheet(rows);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Violations");
//     const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
//   };

//   const simulateViolation = () => {
//     const newV = {
//       id: violations.length + 1,
//       time: new Date().toISOString(),
//       chef: filteredChefs[0]?.name || "Chef New",
//       chefEmail: filteredChefs[0]?.email || "chef1@example.com",
//       type: "No Mask",
//       camera: "Cam-4",
//       severity: "Medium",
//     };
//     setViolations((s) => [newV, ...s]);
//   };

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Sidebar role={role} userEmail={userEmail} />
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         <Topbar title="Hugo AI Monitoring Dashboard" onLogout={() => window.location.href = "/"} />

//         <Box sx={{ p: { xs: 2, sm: 3 } }}>
//           {/* KPIs */}
//           <Stack
//             direction="row"
//             spacing={2}
//             sx={{ mb: 3, justifyContent: "space-around", flexWrap: "wrap" }}
//           >
//             {KPIs.map(k => (
//               <Paper
//                 key={k.title}
//                 sx={{ p: 2, textAlign: "center", backgroundColor: "#f6d9d1", flex: "1 1 150px", margin: "5px" }}
//               >
//                 <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{k.title}</Typography>
//                 <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{k.value}</Typography>
//               </Paper>
//             ))}
//           </Stack>

//           <Grid container spacing={2}>
//             {/* Left: Violations Chart + Table */}
//             <Grid item xs={12} md={8}>
//               <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2, background: "#b68866" }}>
//                 <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
//                 <ResponsiveContainer width="100%" height={220}>
//                   <LineChart data={chartData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="time" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="violations" stroke="#000000" strokeWidth={3} />
//                   </LineChart>
//                 </ResponsiveContainer>
//                 <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, mt: 2 }}>
//                   <Button variant="outlined" sx={{ background: "#191725", "&:hover": { background: "#333" }, color:"#ffe5cc" }} onClick={() => exportCSV(filteredViolations)}>Export Violations (Excel)</Button>
//                   {role === "admin" && (
//                     <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={simulateViolation}>
//                       Simulate Violation
//                     </Button>
//                   )}
//                 </Box>
//               </Paper>
//               <Paper sx={{ overflowX: "auto" }}>
//                 <ViolationsTable rows={filteredViolations} />
//               </Paper>
//             </Grid>

//             {/* Right: Chef List + Activity Summary */}
//             <Grid item xs={12} md={4}>
//               <ChefList chefs={filteredChefs} />
//               <Paper sx={{ mt: 2, p: { xs: 2, sm: 3 }, backgroundColor: "#f6d9d1"}}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#9d0706"  }}>Activity Summary</Typography>
//                 {activitySummary.map(a => (
//                   <Box key={a.chef} sx={{ mt: 1 }}>
//                     <Typography variant="body2">{a.chef}</Typography>
//                     <Typography variant="body2">Active time: {a.active}</Typography>
//                     <Typography variant="body2">Idle time: {a.idle}</Typography>
//                   </Box>
//                 ))}
//                 {role === "admin" && topViolators.length > 0 && (
//                   <>
//                     <Typography variant="body2" sx={{ mt: 2, fontWeight: 800, color: "#ffcb99" }}>Top Violators</Typography>
//                     <ul>
//                       {topViolators.map(tv => <li key={tv.chef}>{tv.chef} — {tv.count} violations</li>)}
//                     </ul>
//                   </>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// }









import React, { useState, useEffect, useMemo } from "react";
import { Box, Grid, Paper, Button, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import KPICard from "../components/KPICard";
import ViolationsTable from "../components/ViolationsTable";
import ChefList from "../components/ChefList";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { getChefs, getViolations } from "../api/api"; // استدعاء API

export default function Dashboard() {
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

  const filteredViolations = role === "admin"
    ? violations
    : violations.filter(v => v.chefEmail === userEmail);

  const filteredChefs = role === "admin"
    ? chefs
    : chefs.filter(c => c.email === userEmail);

  const KPIs = useMemo(() => {
    const totalChefs = filteredChefs.length;
    const activeCameras = new Set(filteredViolations.map(v => v.camera)).size;
    const totalViolations = filteredViolations.length;
    const avgCompliance = filteredChefs.length > 0
      ? Math.round(filteredChefs.reduce((acc, c) => acc + c.compliance, 0) / filteredChefs.length) + "%"
      : "0%";
    return [
      { title: "Total Chefs", value: totalChefs },
      { title: "Active Cameras", value: activeCameras },
      { title: "Total Violations", value: totalViolations },
      { title: "Avg Compliance", value: avgCompliance },
    ];
  }, [filteredChefs, filteredViolations]);

  const chartData = useMemo(() => {
    const hourlyCounts = {};
    filteredViolations.forEach(v => {
      const hour = new Date(v.time).getHours();
      hourlyCounts[hour] = (hourlyCounts[hour] || 0) + 1;
    });
    const data = [];
    for (let i = 0; i <= 23; i++) {
      data.push({ time: `${i}:00`, violations: hourlyCounts[i] || 0 });
    }
    return data;
  }, [filteredViolations]);

  const topViolators = useMemo(() => {
    if (role !== "admin") return [];
    const counts = {};
    filteredViolations.forEach(v => {
      counts[v.chef] = (counts[v.chef] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([chef, count]) => ({ chef, count }));
  }, [filteredViolations, role]);

  const activitySummary = useMemo(() => {
    const workMinutes = 8 * 60;
    return filteredChefs.map(c => {
      const chefViolations = filteredViolations.filter(v => v.chefEmail === c.email).length;
      const activeTime = chefViolations * 10;
      const idleTime = workMinutes - activeTime;
      return {
        chef: c.name,
        active: `${Math.floor(activeTime / 60)}h ${activeTime % 60}m`,
        idle: `${Math.floor(idleTime / 60)}h ${idleTime % 60}m`
      };
    });
  }, [filteredChefs, filteredViolations]);

  const exportCSV = (rows) => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Violations");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), "violations.xlsx");
  };

  const simulateViolation = () => {
    const newV = {
      id: violations.length + 1,
      time: new Date().toISOString(),
      chef: filteredChefs[0]?.name || "Chef New",
      chefEmail: filteredChefs[0]?.email || "chef1@example.com",
      type: "No Mask",
      camera: "Cam-4",
      severity: "Medium",
    };
    setViolations((s) => [newV, ...s]);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      <Sidebar role={role} userEmail={userEmail} />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar title="Hugo AI Monitoring Dashboard" onLogout={() => window.location.href = "/"} />

        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          {/* KPIs */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 3, justifyContent: "space-around", flexWrap: "wrap" }}
          >
            {KPIs.map(k => (
              <Paper
                key={k.title}
                sx={{ p: 2, textAlign: "center", backgroundColor: "#f6d9d1", flex: "1 1 150px", margin: "5px" }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>{k.title}</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{k.value}</Typography>
              </Paper>
            ))}
          </Stack>

          <Grid container spacing={2}>
            {/* Left: Violations Chart + Table */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 2, background: "#b68866" }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Violations Timeline</Typography>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="violations" stroke="#000000" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, mt: 2 }}>
                  <Button variant="outlined" sx={{ background: "#191725", "&:hover": { background: "#333" }, color:"#ffe5cc" }} onClick={() => exportCSV(filteredViolations)}>Export Violations (Excel)</Button>
                  {role === "admin" && (
                    <Button variant="contained" sx={{ background: "#191725", "&:hover": { background: "#333" } }} onClick={simulateViolation}>
                      Simulate Violation
                    </Button>
                  )}
                </Box>
              </Paper>
              <Paper sx={{ overflowX: "auto" }}>
                <ViolationsTable rows={filteredViolations} />
              </Paper>
            </Grid>

            {/* Right: Chef List + Activity Summary */}
            <Grid item xs={12} md={4}>
              <ChefList chefs={filteredChefs} />
              <Paper sx={{ mt: 2, p: { xs: 2, sm: 3 }, backgroundColor: "#f6d9d1"}}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#9d0706"  }}>Activity Summary</Typography>
                {activitySummary.map(a => (
                  <Box key={a.chef} sx={{ mt: 1 }}>
                    <Typography variant="body2">{a.chef}</Typography>
                    <Typography variant="body2">Active time: {a.active}</Typography>
                    <Typography variant="body2">Idle time: {a.idle}</Typography>
                  </Box>
                ))}
                {role === "admin" && topViolators.length > 0 && (
                  <>
                    <Typography variant="body2" sx={{ mt: 2, fontWeight: 800, color: "#ffcb99" }}>Top Violators</Typography>
                    <ul>
                      {topViolators.map(tv => <li key={tv.chef}>{tv.chef} — {tv.count} violations</li>)}
                    </ul>
                  </>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}  