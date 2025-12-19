// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TextField,
//   Button
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

// const mockData = [
//   { chef: "John Doe", violations: 3, type: "No Mask", date: "2025-11-28" },
//   { chef: "Jane Smith", violations: 2, type: "Wrong Uniform", date: "2025-11-28" },
//   { chef: "Mike Johnson", violations: 1, type: "No Mask", date: "2025-11-28" },
//   { chef: "Anna Lee", violations: 5, type: "Wrong Uniform", date: "2025-11-28" },
// ];

// const COLORS = ["#9d0706", "#b68866", "#ffcb99", "#191725", "#ffe5cc"];

// const ChefsReports = () => {
//   const [reports, setReports] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [refreshKey, setRefreshKey] = useState(0);

//   // Fetch Simulated Data
//   useEffect(() => {
//     setReports(mockData);
//   }, [refreshKey]);

//   // Filtering
//   const filteredReports = reports.filter(r =>
//     (filterChef === "" || r.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || r.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   // KPIs
//   const totalViolations = reports.reduce((acc, r) => acc + r.violations, 0);
//   const uniqueChefs = [...new Set(reports.map(r => r.chef))].length;
//   const mostViolationsChef = reports.reduce((max, r) => r.violations > max.violations ? r : max, {violations:0});

//   // ----------------------------
//   // 🔽 DOWNLOAD CSV FUNCTION
//   // ----------------------------
//   const handleDownload = () => {
//     const headers = ["Chef", "Violations", "Type", "Date"];
//     const rows = filteredReports.map(r => [r.chef, r.violations, r.type, r.date]);

//     let csvContent =
//       "data:text/csv;charset=utf-8," +
//       [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.href = encodedUri;
//     link.download = "chefs_reports.csv";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box sx={{ p: 3, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      
//       {/* Header */}
//       <Paper
//         sx={{
//           p: 2,
//           mb: 3,
//           backgroundColor: "#191725",
//           color: "#ffcb99",
//           borderRadius: 2,
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: 1
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Chefs Reports
//         </Typography>

//         <Box sx={{ display: "flex", gap: 2 }}>
//           {/* Refresh Button */}
//           <Button 
//             variant="contained" 
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={() => setRefreshKey(prev => prev + 1)}
//           >
//             Refresh
//           </Button>

//           {/* 🔽 DOWNLOAD BUTTON */}
//           <Button 
//             variant="contained" 
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={handleDownload}
//           >
//             Download Report
//           </Button>
//         </Box>
//       </Paper>

//       {/* KPIs */}
//       <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//         {[
//           { title: "Total Violations", value: totalViolations },
//           { title: "Unique Chefs", value: uniqueChefs },
//           { title: "Chef Most Violations", value: mostViolationsChef.chef }
//         ].map((kpi) => (
//           <Grid item xs={12} sm={5} md={3} key={kpi.title}>
//             <Paper
//               sx={{
//                 p: 4,
//                 textAlign: "center",
//                 backgroundColor: "#ffe5cc",
//                 color: "#191725",
//                 minHeight: "150px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
//                 {kpi.title}
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1 }}>{kpi.value}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Filters */}
//       <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <TextField
//           label="Filter by Chef"
//           value={filterChef}
//           onChange={e => setFilterChef(e.target.value)}
//           variant="outlined"
//           sx={{
//             "& .MuiOutlinedInput-root fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//             "&:hover fieldset": { borderColor: "#b68866" },
//             "&.Mui-focused fieldset": { borderColor: "#191725" },
//           }}
//         />

//         <TextField
//           label="Filter by Type"
//           value={filterType}
//           onChange={e => setFilterType(e.target.value)}
//           variant="outlined"
//           sx={{
//             "& .MuiOutlinedInput-root fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//             "&:hover fieldset": { borderColor: "#b68866" },
//             "&.Mui-focused fieldset": { borderColor: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => { setFilterChef(""); setFilterType(""); }}
//         >
//           Clear Filters
//         </Button>
//       </Box>

//       {/* Table */}
//       <Paper sx={{ mb: 4 }}>
//         <Table sx={{ backgroundColor:"#b68866" }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Chef</TableCell>
//               <TableCell>Violations</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredReports.map((r, idx) => (
//               <TableRow key={idx}>
//                 <TableCell>{r.chef}</TableCell>
//                 <TableCell>{r.violations}</TableCell>
//                 <TableCell>{r.type}</TableCell>
//                 <TableCell>{r.date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>

// {/* Charts */}
// <Grid
//   container
//   spacing={4} // 💡 نستخدم spacing=4 مرة أخرى (أو 6 إذا لم يفلح 4)
//   sx={{
//     // ✨ إضافة Flexbox Explicitly لضمان أن العناصر تلتف جنباً إلى جنب
//     display: "flex",
//     flexWrap: "wrap",
//     // -----------------------------------------------------------
//     justifyContent: "center",
//     alignItems: "center",
//     maxWidth: "1200px",
//     mx: "auto",
//     px: 2,
//   }}
// >

//   {/* Bar Chart */}
//   {/* 🔥 نستخدم md={6} لتأكيد أن كل عنصر يأخذ نصف المساحة (6+6=12) 
//       والـ spacing=4 سيهتم بالمسافة البينية.
//   */}
//   <Grid item xs={12} md={6} sx={{ mb: 5 }}>
//     <Paper
//       sx={{
//         p: 4,
//         backgroundColor: "#ffe5cc",
//         color: "#191725",
//         borderRadius: 3,
//         minHeight: 420,
//         width: "100%",
//       }}
//     >
//       <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.4rem", textAlign: "center" }}>
//         Violations per Chef
//       </Typography>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={filteredReports}>
//           <XAxis dataKey="chef" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="violations" fill="#9d0706" />
//         </BarChart>
//       </ResponsiveContainer>
//     </Paper>
//   </Grid>

//   {/* Pie Chart */}
//   {/* 🔥 نستخدم md={6} لضمان التوزيع جنباً إلى جنب */}
//   <Grid item xs={12} md={6} sx={{ mb: 5 }}>
//     <Paper
//       sx={{
//         p: 4,
//         backgroundColor: "#ffe5cc",
//         color: "#191725",
//         borderRadius: 3,
//         minHeight: 420,
//         width: "100%",
//       }}
//     >
//       <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.4rem", textAlign: "center" }}>
//         Violations by Type
//       </Typography>

//       <ResponsiveContainer width="100%" height={300}>
//         <PieChart>
//           <Pie
//             data={filteredReports}
//             dataKey="violations"
//             nameKey="type"
//             cx="50%"
//             cy="50%"
//             outerRadius={120}
//             label
//           >
//             {filteredReports.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Legend />
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </Paper>
//   </Grid>
// </Grid>



//     </Box>
//   );
// };

// export default ChefsReports;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TextField,
//   Button
// } from "@mui/material";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const mockData = [
//   { chef: "Nour Soliman", violations: 3, type: "No Mask", date: "2025-11-28" },
//   { chef: "Mariem", violations: 2, type: "Wrong Uniform", date: "2025-11-28" },
//   { chef: "Ziad", violations: 1, type: "No Mask", date: "2025-11-28" },
//   { chef: "Sara", violations: 5, type: "Wrong Uniform", date: "2025-11-28" },
// ];

// const COLORS = ["#9d0706", "#b68866", "#ffcb99", "#191725", "#ffe5cc"];

// const ChefsReports = () => {
//   const [reports, setReports] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [activeBar, setActiveBar] = useState(null);
//   const [activePie, setActivePie] = useState(null);

//   // Fetch Simulated Data
//   useEffect(() => {
//     setReports(mockData);
//   }, [refreshKey]);

//   // Filtering
//   const filteredReports = reports.filter(r =>
//     (filterChef === "" || r.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || r.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   // KPIs
//   const totalViolations = reports.reduce((acc, r) => acc + r.violations, 0);
//   const uniqueChefs = [...new Set(reports.map(r => r.chef))].length;
//   const mostViolationsChef = reports.reduce((max, r) => r.violations > max.violations ? r : max, {violations:0});

//   // ----------------------------
//   // DOWNLOAD CSV FUNCTION
//   // ----------------------------
//   const handleDownload = () => {
//     const headers = ["Chef", "Violations", "Type", "Date"];
//     const rows = filteredReports.map(r => [r.chef, r.violations, r.type, r.date]);

//     let csvContent =
//       "data:text/csv;charset=utf-8," +
//       [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.href = encodedUri;
//     link.download = "chefs_reports.csv";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box sx={{ p: 3, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      
//       {/* Header */}
//       <Paper
//         sx={{
//           p: 2,
//           mb: 3,
//           backgroundColor: "#191725",
//           color: "#ffcb99",
//           borderRadius: 2,
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: 1
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Chefs Reports
//         </Typography>

//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Button 
//             variant="contained" 
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={() => setRefreshKey(prev => prev + 1)}
//           >
//             Refresh
//           </Button>

//           <Button 
//             variant="contained" 
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={handleDownload}
//           >
//             Download Report
//           </Button>
//         </Box>
//       </Paper>

//       {/* KPIs */}
//       <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//         {[
//           { title: "Total Violations", value: totalViolations },
//           { title: "Unique Chefs", value: uniqueChefs },
//           { title: "Chef Most Violations", value: mostViolationsChef.chef }
//         ].map((kpi) => (
//           <Grid item xs={12} sm={5} md={3} key={kpi.title}>
//             <Paper
//               sx={{
//                 p: 4,
//                 textAlign: "center",
//                 backgroundColor: "#ffe5cc",
//                 color: "#191725",
//                 minHeight: "150px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 3,
//               }}
//             >
//               <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
//                 {kpi.title}
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1 }}>{kpi.value}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Filters */}
//       <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <TextField
//                   label="Filter by Chef"
//                   value={filterChef}
//                   onChange={e => setFilterChef(e.target.value)}
//                   variant="outlined"
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//                       "&:hover fieldset": { borderColor: "#b68866" },
//                       "&.Mui-focused fieldset": { borderColor: "#191725" },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//                   }}
//                 />
//                 <TextField
//                   label="Filter by Type"
//                   value={filterType}
//                   onChange={e => setFilterType(e.target.value)}
//                   variant="outlined"
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//                       "&:hover fieldset": { borderColor: "#b68866" },
//                       "&.Mui-focused fieldset": { borderColor: "#191725" },
//                     },
//                     "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//                   }}
//                 />

//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => { setFilterChef(""); setFilterType(""); }}
//         >
//           Clear Filters
//         </Button>
//       </Box>

//       {/* Table */}
//       <Paper sx={{ mb: 4 }}>
//         <Table sx={{ backgroundColor:"#b68866" }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Chef</TableCell>
//               <TableCell>Violations</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredReports.map((r, idx) => (
//               <TableRow key={idx}>
//                 <TableCell>{r.chef}</TableCell>
//                 <TableCell>{r.violations}</TableCell>
//                 <TableCell>{r.type}</TableCell>
//                 <TableCell>{r.date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>

//       {/* Charts - Vertical Layout */}
// <Grid
//   container
//   spacing={4}
//   sx={{
//     justifyContent: "center",
//     alignItems: "center",
//     maxWidth: "900px", // نجعلها أصغر من الشاشة عشان يكون فيه padding متساوي
//     mx: "auto",
//     px: 2,
//     flexDirection: "column" // ✨ الكروت تحت بعض
//   }}
// >
//   {/* Bar Chart */}
//   <Grid item xs={12} sx={{ mb: 5 }}>
//     <Paper
//       sx={{
//         p: 4,
//         backgroundColor: "#ffe5cc",
//         color: "#191725",
//         borderRadius: 3,
//         minHeight: 450,
//         width: "100%",
//       }}
//     >
//       <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
//         Violations per Chef
//       </Typography>

//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart data={filteredReports}>
//           <XAxis dataKey="chef" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="violations" fill="#9d0706" />
//         </BarChart>
//       </ResponsiveContainer>
//     </Paper>
//   </Grid>

//   {/* Pie Chart */}
//   <Grid item xs={12} sx={{ mb: 5 }}>
//     <Paper
//       sx={{
//         p: 4,
//         backgroundColor: "#ffe5cc",
//         color: "#191725",
//         borderRadius: 3,
//         minHeight: 450,
//         width: "100%",
//       }}
//     >
//       <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
//         Violations by Type
//       </Typography>

//       <ResponsiveContainer width="100%" height={400}>
//         <PieChart>
//           <Pie
//             data={filteredReports}
//             dataKey="violations"
//             nameKey="type"
//             cx="50%"
//             cy="50%"
//             outerRadius={140}
//             label
//           >
//             {filteredReports.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Legend />
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     </Paper>
//   </Grid>
// </Grid>

//     </Box>
//   );
// };

// export default ChefsReports;
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TextField,
//   Button
// } from "@mui/material";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// const mockData = [
//   { chef: "Nour Soliman", violations: 3, type: "No Mask", date: "2025-11-28" },
//   { chef: "Mariem", violations: 2, type: "Wrong Uniform", date: "2025-11-28" },
//   { chef: "Ziad", violations: 6, type: "No Mask", date: "2025-11-28" },
//   { chef: "Sara", violations: 5, type: "Wrong Uniform", date: "2025-11-28" },
// ];

// const COLORS = ["#9d0706", "#b68866", "#ffcb99", "#191725", "#ffe5cc"];

// const ChefsReports = () => {
//   const [reports, setReports] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");
//   const [refreshKey, setRefreshKey] = useState(0);

//   // Fetch Simulated Data
//   useEffect(() => {
//     setReports(mockData);
//   }, [refreshKey]);

//   // Filtering
//   const filteredReports = reports.filter(r =>
//     (filterChef === "" || r.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || r.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   // KPIs
//   const totalViolations = reports.reduce((acc, r) => acc + r.violations, 0);
//   const uniqueChefs = [...new Set(reports.map(r => r.chef))].length;
//   const mostViolationsChef = reports.reduce(
//     (max, r) => r.violations > max.violations ? r : max,
//     { violations: 0 }
//   ).chef;

//   // Download CSV
//   const handleDownload = () => {
//     const headers = ["Chef", "Violations", "Type", "Date"];
//     const rows = filteredReports.map(r => [r.chef, r.violations, r.type, r.date]);

//     let csvContent =
//       "data:text/csv;charset=utf-8," +
//       [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.href = encodedUri;
//     link.download = "chefs_reports.csv";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box sx={{ p: 3, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      
//       {/* Header */}
//       <Paper sx={{
//         p: 2,
//         mb: 3,
//         backgroundColor: "#191725",
//         color: "#ffcb99",
//         borderRadius: 2,
//         display: "flex",
//         justifyContent: "space-between",
//         flexWrap: "wrap",
//         gap: 1
//       }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Chefs Reports
//         </Typography>

//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Button 
//             variant="contained" 
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={() => setRefreshKey(prev => prev + 1)}
//           >
//             Refresh
//           </Button>

//           <Button 
//             variant="contained" 
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={handleDownload}
//           >
//             Download Report
//           </Button>
//         </Box>
//       </Paper>

//       {/* KPIs */}
//       <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//         {[
//           { title: "Total Violations", value: totalViolations },
//           { title: "Unique Chefs", value: uniqueChefs },
//           { title: "Chef Most Violations", value: mostViolationsChef }
//         ].map((kpi) => (
//           <Grid item xs={12} sm={5} md={3} key={kpi.title}>
//             <Paper sx={{
//               p: 4,
//               textAlign: "center",
//               backgroundColor: "#ffe5cc",
//               color: "#191725",
//               minHeight: "150px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: 3,
//             }}>
//               <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
//                 {kpi.title}
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1 }}>{kpi.value}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Filters */}
//       <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <TextField
//           label="Filter by Chef"
//           value={filterChef}
//           onChange={e => setFilterChef(e.target.value)}
//           variant="outlined"
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />
//         <TextField
//           label="Filter by Type"
//           value={filterType}
//           onChange={e => setFilterType(e.target.value)}
//           variant="outlined"
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => { setFilterChef(""); setFilterType(""); }}
//         >
//           Clear Filters
//         </Button>
//       </Box>

//       {/* Table */}
//       <Paper sx={{ mb: 4 }}>
//         <Table sx={{ backgroundColor:"#b68866" }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Chef</TableCell>
//               <TableCell>Violations</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredReports.map((r, idx) => (
//               <TableRow key={idx}>
//                 <TableCell>{r.chef}</TableCell>
//                 <TableCell>{r.violations}</TableCell>
//                 <TableCell>{r.type}</TableCell>
//                 <TableCell>{r.date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>

//       {/* Charts */}
//       <Grid container spacing={4} sx={{ justifyContent: "center", alignItems: "center", maxWidth: "900px", mx: "auto", px: 2, flexDirection: "column" }}>
//         {/* Bar Chart */}
//         <Grid item xs={12} sx={{ mb: 5 }}>
//           <Paper sx={{ p: 4, backgroundColor: "#ffe5cc", color: "#191725", borderRadius: 3, minHeight: 450, width: "100%" }}>
//             <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
//               Violations per Chef
//             </Typography>
//             <ResponsiveContainer width="100%" height={400}>
//               <BarChart data={filteredReports}>
//                 <XAxis dataKey="chef" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="violations" fill="#9d0706" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>

//         {/* Pie Chart */}
//         <Grid item xs={12} sx={{ mb: 5 }}>
//           <Paper sx={{ p: 4, backgroundColor: "#ffe5cc", color: "#191725", borderRadius: 3, minHeight: 450, width: "100%" }}>
//             <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
//               Violations by Type
//             </Typography>
//             <ResponsiveContainer width="100%" height={400}>
//               <PieChart>
//                 <Pie
//                   data={filteredReports}
//                   dataKey="violations"
//                   nameKey="type"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={140}
//                   label
//                 >
//                   {filteredReports.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Legend />
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ChefsReports;
// import React, { useState } from "react";
// import {
//   Box, Grid, Typography, Paper,
//   Table, TableBody, TableCell, TableHead, TableRow,
//   TextField, Button, LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [reportData, setReportData] = useState(null); // <<===== NEW
//   const [errorMessage, setErrorMessage] = useState("");

//   // -------------------- Login --------------------
//   const handleLogin = async () => {
//     setErrorMessage("");
//     if (!email || !password) {
//       setErrorMessage("Please enter email and password.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://marowael-depi.hf.space/auth/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Login failed: ${response.status} ${text}`);
//       }

//       const data = await response.json();
//       setToken(data.access_token);
//       setErrorMessage("Login successful!");
//     } catch (err) {
//       setErrorMessage(err.message);
//     }
//   };
//  // -------------------- Upload --------------------
// const startAnalysis = async () => {
//   if (!videoFile) {
//     setErrorMessage("Please upload a video first.");
//     return;
//   }
//   if (!token) {
//     setErrorMessage("Please login first.");
//     return;
//   }

//   setAnalysisStarted(true);
//   setProgress(0);
//   setViolations([]);
//   setReportData(null);
//   setErrorMessage("");

//   const formData = new FormData();
//   formData.append("video", videoFile);

//   let prog = 0;
//   const interval = setInterval(() => {
//     prog += 5;
//     if (prog > 95) prog = 95;
//     setProgress(prog);
//   }, 200);

//   try {
//     const response = await fetch(
//       "https://marowael-depi.hf.space/auth/analyze-ppe",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`
//         },
//         body: formData,
//       }
//     );

//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(text || "Server error");
//     }

//     const data = await response.json();

//     clearInterval(interval);
//     setProgress(100);

//     const report = data.report_data || {};

//     setReportData(report);

//     // 🧠 PPE parsing logic
//     const violationsFromBackend = Object.entries(report)
//       .filter(([key]) =>
//         !["total_frames_processed", "is_clean"].includes(key)
//       )
//       .map(([key, value], idx) => ({
//         id: idx + 1,
//         type: key.toUpperCase(),                 // MASK / GLOVES / HAIRNET
//         detected: value.detected ? "Yes" : "No",
//         confidence: value.average_confidence
//           ? `${(value.average_confidence * 100).toFixed(1)}%`
//           : "N/A",
//       }));

//     setViolations(violationsFromBackend);

//   } catch (err) {
//     clearInterval(interval);
//     setErrorMessage("Error analyzing video: " + err.message);
//     setAnalysisStarted(false);
//     setProgress(0);
//   }
// };
 

//   // -------------------- UI --------------------
//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           {/* <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleResetAnalysis}>Reset Analysis</Button> */}
//           <Button variant="contained" sx={{
//               backgroundColor: "#b68866",
//               "&:hover": {
//                 backgroundColor: "#9d0706"  // اللون الجديد عند الـ hover
//               }
//             }} onClick={handleRefresh}>Refresh</Button>
//                     <Button variant="contained" sx={{
//               backgroundColor: "#b68866",
//               "&:hover": {
//                 backgroundColor: "#9d0706"  // اللون الجديد عند الـ hover
//               }
//             }} onClick={handleResetAnalysis}>Reset Analysis</Button>
//             <Button
//   variant="contained"
//   sx={{
//     backgroundColor: "#b68866",
//     "&:hover": {
//       backgroundColor: "#9d0706"
//     }
//   }}
//   onClick={handleDownloadReport}
// >
//   Download Report
// </Button>

//         </Box>
//       </Paper>

//       {/* Login */}
//       {!token && (
//         <Paper sx={{ p: 2, mb: 3, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
//           {/* <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
//           <TextField
//                                 label="Email"
//                                 value={email}
//                                 onChange={e => setEmail(e.target.value)}
//                                 variant="outlined"
//                                  sx={{
//                                    "& .MuiOutlinedInput-root": {
//                                      "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
//                                      "&:hover fieldset": { borderColor: "#b68866" },
//                                      "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//                                   },
//                                   "& .MuiInputLabel-root": {
//                                     "&.Mui-focused": { color: "#9d0706" },
//                                   },
//                                 }}
//                                />
                    
//                               <TextField
//                                  label="Password"
//                                 type="password"
//                                  value={password}
//                                  onChange={e => setPassword(e.target.value)}
//                                  variant="outlined"
//                                  sx={{
//                                    "& .MuiOutlinedInput-root": {
//                                      "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
//                                     "&:hover fieldset": { borderColor: "#b68866" },
//                                      "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//                                    },
//                                    "& .MuiInputLabel-root": {
//                                      "&.Mui-focused": { color: "#9d0706" },
//                                    },
//                                  }}
//                               />
//           <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={handleLogin}>Login</Button>
//         </Paper>
//       )}

//       {errorMessage && <Typography sx={{ color: "red", mb: 2 }}>{errorMessage}</Typography>}

//       {/* Upload */}
//       {token && (
//         <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, backgroundColor: "#ffe5cc" }}>
//           <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706" }}>
//             Upload Video
//             <input type="file" hidden accept="video/*" onChange={handleUpload} />
//           </Button>
//           {videoFile && <Typography>{videoFile.name}</Typography>}
//           <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={startAnalysis}>Start Analysis</Button>
//         </Paper>
//       )}

//       {/* Video */}
//       {videoURL && (
//         <Paper sx={{ mb: 4, p: 1 }}>
//           <video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} />
//         </Paper>
//       )}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* Table */}
//       {reportData && (
//         <Paper>
//           <Table sx={{ backgroundColor: "#191725" }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{ color: "#ffe5cc" }}>Type</TableCell>
//                 <TableCell sx={{ color: "#ffe5cc" }}>Detected</TableCell>
//                 <TableCell sx={{ color: "#ffe5cc" }}>Confidence</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {violations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell sx={{ color: "#b68866" }}>{v.type}</TableCell>
//                   <TableCell sx={{ color: "#ffffff" }}>{v.detected}</TableCell>
//                   <TableCell sx={{ color: "#ffffff" }}>{v.confidence}</TableCell>
//                 </TableRow>
//               ))}

//               {/* Total Frames */}
//               <TableRow>
//                 <TableCell sx={{ color: "#b68866" }}>Total Frames Processed</TableCell>
//                 <TableCell sx={{ color: "#ffffff" }}>{reportData.total_frames_processed}</TableCell>
//                 <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
//               </TableRow>

//               {/* Is Clean */}
//               <TableRow>
//                 <TableCell sx={{ color: "#b68866" }}>Is Clean</TableCell>
//                 <TableCell sx={{ color: "#ffffff" }}>
//                   {reportData.is_clean ? "Yes" : "No"}
//                 </TableCell>
//                 <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
//               </TableRow>

//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;


import React, { useState } from "react";
import {
  Box, Grid, Typography, Paper,
  Table, TableBody, TableCell, TableHead, TableRow,
  TextField, Button, LinearProgress
} from "@mui/material";

const VideoUploadAnalysis = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [analysisStarted, setAnalysisStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [violations, setViolations] = useState([]);
  const [reportData, setReportData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // -------------------- Login --------------------
  const handleLogin = async () => {
    setErrorMessage("");
    if (!email || !password) {
      setErrorMessage("Please enter email and password.");
      return;
    }
    try {
      const response = await fetch(
        "https://marowael-depi.hf.space/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Login failed: ${response.status} ${text}`);
      }

      const data = await response.json();
      setToken(data.access_token);
      setErrorMessage("Login successful!");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  // -------------------- Upload --------------------
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file));
      setViolations([]);
      setReportData(null);
      setAnalysisStarted(false);
      setProgress(0);
      setErrorMessage("");
    }
  };

  // -------------------- Analysis --------------------
  const startAnalysis = async () => {
    if (!videoFile) {
      setErrorMessage("Please upload a video first.");
      return;
    }
    if (!token) {
      setErrorMessage("Please login first.");
      return;
    }

    setAnalysisStarted(true);
    setProgress(0);
    setViolations([]);
    setReportData(null);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("video", videoFile);

    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      if (prog > 95) prog = 95;
      setProgress(prog);
    }, 200);

    try {
      const response = await fetch(
        "https://marowael-depi.hf.space/analyze-ppe",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Server error");
      }

      const data = await response.json();

      clearInterval(interval);
      setProgress(100);

      const report = data.report_data || {};
      setReportData(report);

      const violationsFromBackend = Object.entries(report)
        .filter(([key]) => !["total_frames_processed", "is_clean"].includes(key))
        .map(([key, value], idx) => ({
          id: idx + 1,
          type: key.toUpperCase(),
          detected: value.detected ? "Yes" : "No",
          confidence: value.average_confidence
            ? `${(value.average_confidence * 100).toFixed(1)}%`
            : "N/A",
        }));

      setViolations(violationsFromBackend);

    } catch (err) {
      clearInterval(interval);
      setErrorMessage("Error analyzing video: " + err.message);
      setAnalysisStarted(false);
      setProgress(0);
    }
  };

  // -------------------- Reset Analysis --------------------
  const handleResetAnalysis = () => {
    // setVideoFile(null);
    // setVideoURL(null);
    setViolations([]);
    setReportData(null);
    setAnalysisStarted(false);
    setProgress(0);
    setErrorMessage("");
  };

  // -------------------- Refresh Page --------------------
  const handleRefresh = () => {
    window.location.reload();
  };

  // -------------------- Download Report --------------------
  const handleDownloadReport = () => {
    if (!violations || violations.length === 0) {
      setErrorMessage("No report to download.");
      return;
    }

    const headers = ["Type", "Detected", "Confidence"];
    const rows = violations.map(v => [v.type, v.detected, v.confidence]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "PPE_Report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -------------------- UI --------------------
  return (
    <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
      {/* Header */}
      <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>Chef Reports</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleRefresh}>Refresh</Button>
          <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleResetAnalysis}>Reset Analysis</Button>
          <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleDownloadReport}>Download Report</Button>
        </Box>
      </Paper>

      {/* Login */}
      {!token && (
        <Paper sx={{ p: 2, mb: 3, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
          <TextField
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
                "&:hover fieldset": { borderColor: "#b68866" },
                "&.Mui-focused fieldset": { borderColor: "#9d0706" },
              },
              "& .MuiInputLabel-root": { "&.Mui-focused": { color: "#9d0706" } },
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
                "&:hover fieldset": { borderColor: "#b68866" },
                "&.Mui-focused fieldset": { borderColor: "#9d0706" },
              },
              "& .MuiInputLabel-root": { "&.Mui-focused": { color: "#9d0706" } },
            }}
          />
          <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={handleLogin}>Login</Button>
        </Paper>
      )}

      {errorMessage && <Typography sx={{ color: "red", mb: 2 }}>{errorMessage}</Typography>}

      {/* Upload */}
      {token && (
        <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, backgroundColor: "#ffe5cc" }}>
          <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706" }}>
            Upload Video
            <input type="file" hidden accept="video/*" onChange={handleUpload} />
          </Button>
          {videoFile && <Typography>{videoFile.name}</Typography>}
          <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={startAnalysis}>Start Analysis</Button>
        </Paper>
      )}

      {/* Video */}
      {videoURL && (
        <Paper sx={{ mb: 4, p: 1 }}>
          <video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} />
        </Paper>
      )}

      {/* Progress */}
      {analysisStarted && progress < 100 && (
        <Box sx={{ mb: 3 }}>
          <LinearProgress variant="determinate" value={progress} />
          <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
        </Box>
      )}

      {/* Table */}
      {reportData && (
        <Paper>
          <Table sx={{ backgroundColor: "#191725" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#ffe5cc" }}>Type</TableCell>
                <TableCell sx={{ color: "#ffe5cc" }}>Detected</TableCell>
                <TableCell sx={{ color: "#ffe5cc" }}>Confidence</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {violations.map(v => (
                <TableRow key={v.id}>
                  <TableCell sx={{ color: "#b68866" }}>{v.type}</TableCell>
                  <TableCell sx={{ color: "#ffffff" }}>{v.detected}</TableCell>
                  <TableCell sx={{ color: "#ffffff" }}>{v.confidence}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell sx={{ color: "#b68866" }}>Total Frames Processed</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{reportData.total_frames_processed}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ color: "#b68866" }}>Is Clean</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{reportData.is_clean ? "Yes" : "No"}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default VideoUploadAnalysis;
