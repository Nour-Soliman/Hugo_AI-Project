// // src/Pages/LiveMonitoring.jsx
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Paper,
//   TextField,
//   Snackbar,
// } from "@mui/material";
// import KPICard from "../components/KPICard"; // نفس المكون اللي عندك في Dashboard
// import { getViolations, getChefs } from "../api/api"; // استخدمي API موجودة

// const LiveMonitoring = () => {
//   const [violations, setViolations] = useState([]);
//   const [chefs, setChefs] = useState([]);
//   const [newViolation, setNewViolation] = useState(null);

//   const [searchChef, setSearchChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // جلب البيانات
//   useEffect(() => {
//     const fetchData = async () => {
//       const vData = await getViolations();
//       const cData = await getChefs();
//       setViolations(vData);
//       setChefs(cData);
//     };
//     fetchData();
//   }, []);

//   // محاكاة violation جديدة كل 10 ثواني (اختياري للتجربة)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (chefs.length === 0) return;
//       const chef = chefs[Math.floor(Math.random() * chefs.length)];
//       const newV = {
//         id: Date.now(),
//         type: "No Mask",
//         chef: chef.name,
//         chefEmail: chef.email,
//         time: new Date().toISOString(),
//         camera: "Cam-1",
//       };
//       setViolations((prev) => [newV, ...prev]);
//       setNewViolation(newV);
//       setTimeout(() => setNewViolation(null), 3000);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [chefs]);

//   // فلترة المخالفات
//   const filteredViolations = violations.filter(
//     (v) =>
//       v.chef.toLowerCase().includes(searchChef.toLowerCase()) &&
//       v.type.toLowerCase().includes(filterType.toLowerCase())
//   );

//   // KPIs
//   const totalViolations = filteredViolations.length;
//   const activeChefs = [...new Set(filteredViolations.map((v) => v.chef))].length;
//   const topCamera = "Cam-1";
//   const compliance = chefs.length
//     ? Math.round(
//         (chefs.reduce((acc, c) => acc + (c.compliance || 100), 0) / chefs.length)
//       )
//     : 100;

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         p: { xs: 2, md: 4 },
//         backgroundColor: "#ffcb99",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       {/* Live Camera Feed */}
//       <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" , color:"#9d0706" , fontSize:"50px"}}>
//         Live Camera Feed
//       </Typography>
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           maxWidth: 600,
//           mb: 4,
//           borderRadius: 2,
//           overflow: "hidden",
//           boxShadow: 3,
//         }}
//       >
//         <video
//           src="/path-to-your-camera-stream.mp4"
//           autoPlay
//           muted
//           controls
//           style={{ width: "100%", borderRadius: 15 }}
//         />
//         <Typography
//           sx={{
//             position: "absolute",
//             bottom: 10,
//             left: 10,
//             color: "#ffcb99",
//             fontWeight: "bold",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             px: 1,
//             borderRadius: 1,
//           }}
//         >
//           Chef: John Doe
//         </Typography>
//       </Box>

//       {/* KPIs */}
//       <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
//         <KPICard title="Total Violations" value={totalViolations} />
//         <KPICard title="Active Chefs" value={activeChefs} />
//         <KPICard title="Top Camera" value={topCamera} />
//         <KPICard title="Compliance %" value={`${compliance}%`} />
//       </Box>

//       {/* Filters */}
//       <Box
//         sx={{
//           display: "flex",
//           gap: 2,
//           flexWrap: "wrap",
//           mb: 2,
//           justifyContent: "center",
//         }}
//       >
//         <TextField
//           label="Search Chef"
//           value={searchChef}
//           onChange={(e) => setSearchChef(e.target.value)}
//         />
//         <TextField
//           label="Violation Type"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//         />
//       </Box>

//       {/* Live Violations Table */}
//       <Box sx={{ width: "100%", maxWidth: 900 }}>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Violation Type</TableCell>
//                 <TableCell>Chef</TableCell>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Camera</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredViolations.map((v) => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.chef}</TableCell>
//                   <TableCell>
//                     {new Date(v.time).toLocaleTimeString()}
//                   </TableCell>
//                   <TableCell>{v.camera}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Notifications */}
//       <Snackbar
//         open={!!newViolation}
//         message={
//           newViolation
//             ? `Violation: ${newViolation.type} by ${newViolation.chef}`
//             : ""
//         }
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         autoHideDuration={3000}
//       />
//     </Box>
//   );
// };

// export default LiveMonitoring;

//src/Pages/LiveMonitoring.jsx
// import React, { useEffect, useState } from "react";
// import { Box, Grid, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from "@mui/material";

// const LiveMonitoring = () => {
//   const [violations, setViolations] = useState([]);
//   const [chefs, setChefs] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // بيانات وهمية للتجربة، بدل ما تجي من API
//   const cameraFeeds = [
//     { id: 1, name: "Cam-1", chef: "John Doe", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
//     // ممكن تضيف كاميرات أخرى هنا
//   ];

//   // مثال على KPI حسابي
//   const totalViolations = violations.length;
//   const activeChefs = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefs.length > 0 ? Math.round((chefs.length - totalViolations) / chefs.length * 100) : 0;

//   // لتحديث المخالفات كل 5 ثواني (محاكاة)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // مثال: إضافة مخالفة عشوائية
//       const newViolation = {
//         id: violations.length + 1,
//         chef: cameraFeeds[0].chef,
//         type: "No Mask",
//         camera: cameraFeeds[0].name,
//         time: new Date().toLocaleTimeString(),
//       };
//       setViolations(prev => [newViolation, ...prev]);
//       if (!chefs.includes(cameraFeeds[0].chef)) setChefs(prev => [...prev, cameraFeeds[0].chef]);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [violations, chefs]);

//   // فلترة المخالفات
//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2, boxShadow: 3 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Live Monitoring</Typography>
//         <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>Refresh</Button>
//       </Paper>

//       {/* كاميرات مباشرة */}
//       <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
//   {cameraFeeds.map(cam => (
//     <Grid item key={cam.id} sx={{ width: { xs: "90%", md: "45%" } }}>
//       <Paper sx={{ position: "relative", p: 1 }}>
//         <video
//           src={cam.src}
//           controls
//           autoPlay
//           muted
//           loop
//           style={{ width: "100%", borderRadius: "10px" }}
//         />
//         <Typography
//           sx={{
//             position: "absolute",
//             bottom: 10,
//             left: 10,
//             color: "#ffcb99",
//             fontWeight: "bold",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             px: 1,
//             borderRadius: 1,
//           }}
//         >
//           Chef: {cam.chef}
//         </Typography>
//       </Paper>
//     </Grid>
//   ))}
// </Grid>
//       <Grid 
//   container 
//   spacing={2} 
//   sx={{ mb: 4, justifyContent: "space-around" }} // توزيع متساوي
// >
//   {[
//     { title: "Total Violations", value: totalViolations },
//     { title: "Active Chefs", value: activeChefs },
//     { title: "Most Active Camera", value: cameraFeeds[0].name },
//     { title: "Compliance %", value: `${compliance}%` }
//   ].map((kpi) => (
//     <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//       <Paper sx={{ p: 2, textAlign: "center", backgroundColor:"#191725", color:"#ffcb99" }}>
//         <Typography sx={{ fontWeight:"bold" }}>{kpi.title}</Typography>
//         <Typography variant="h5">{kpi.value}</Typography>
//       </Paper>
//     </Grid>
//   ))}
// </Grid>


//       {/* فلترة */}
//       <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         {/* <TextField label="Filter by Chef" value={filterChef} onChange={e => setFilterChef(e.target.value)} />
//         <TextField label="Filter by Type" value={filterType} onChange={e => setFilterType(e.target.value)} /> */}
//         <TextField
//   label="Filter by Chef"
//   value={filterChef}
//   onChange={e => setFilterChef(e.target.value)}
//   variant="outlined"
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#9d0706", // لون البوردر
//         borderWidth: "2px",      // سمك البوردر
//       },
//       "&:hover fieldset": {
//         borderColor: "#b68866", // لون البوردر عند hover
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#191725", // لون البوردر عند التركيز
//       },
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#191725", // لون اللابل عند التركيز
//     },
//   }}
// />

// <TextField
//   label="Filter by Type"
//   value={filterType}
//   onChange={e => setFilterType(e.target.value)}
//   variant="outlined"
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#9d0706",
//         borderWidth: "2px",
//       },
//       "&:hover fieldset": {
//         borderColor: "#b68866",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#191725",
//       },
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#191725",
//     },
//   }}
// />

//         <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => { setFilterChef(""); setFilterType(""); }}
//         >
//           Clear Filters
//         </Button>
//       </Box>

//       {/* جدول المخالفات */}
//       <Paper>
//         <Table sx={{backgroundColor:"#b68866"}}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Time</TableCell>
//               <TableCell>Chef</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Camera</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredViolations.map(v => (
//               <TableRow key={v.id}>
//                 <TableCell>{v.time}</TableCell>
//                 <TableCell>{v.chef}</TableCell>
//                 <TableCell>{v.type}</TableCell>
//                 <TableCell>{v.camera}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Box>
//   );
// };

// export default LiveMonitoring;

// // src/Pages/LiveMonitoring.jsx
// import React, { useEffect, useState } from "react";
// import { Box, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
// import { getViolations } from "../api/api";

// const LiveMonitoring = () => {
//   const [violations, setViolations] = useState([]);

//   // KPIs state
//   const [kpis, setKpis] = useState({
//     totalViolations: 0,
//     activeChefs: 0,
//     topCamera: "",
//     compliance: "0%",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getViolations();
//       setViolations(data);

//       // حساب الـ KPIs
//       const chefsSet = new Set(data.map(v => v.chef));
//       const camerasCount = {};
//       data.forEach(v => {
//         camerasCount[v.camera] = (camerasCount[v.camera] || 0) + 1;
//       });
//       const topCamera = Object.entries(camerasCount).sort((a,b)=>b[1]-a[1])[0]?.[0] || "";

//       setKpis({
//         totalViolations: data.length,
//         activeChefs: chefsSet.size,
//         topCamera,
//         compliance: "90%", // افتراضياً
//       });
//     };
//     fetchData();
//   }, []);

//   return (
//     <Box sx={{ minHeight: "100vh", backgroundColor: "#ffcb99", p: { xs: 1, md: 3 } }}>
      
//       {/* Top Bar */}
//       <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2, boxShadow: 3 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Live Monitoring</Typography>
//         <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>Refresh</Button>
//       </Paper>

//       Camera Feed
//       <Box sx={{ mb: 4, position: "relative", borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
//         <video 
//           src="/sample-video.mp4" 
//           controls 
//           autoPlay 
//           muted 
//           style={{ width: "100%", maxHeight: 400, objectFit: "cover" }}
//         />
//         <Typography
//           sx={{
//             position: "absolute",
//             bottom: 10,
//             left: 10,
//             color: "#ffcb99",
//             fontWeight: "bold",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             px: 1,
//             borderRadius: 1,
//           }}
//         >
//           Chef: John Doe
//         </Typography>
//       </Box>

//       {/* KPIs */}
//       <Grid container spacing={2} sx={{ mb: 4 }}>
//         {[
//           { title: "Total Violations", value: kpis.totalViolations },
//           { title: "Active Chefs", value: kpis.activeChefs },
//           { title: "Top Camera", value: kpis.topCamera },
//           { title: "Compliance %", value: kpis.compliance },
//         ].map((kpi) => (
//           <Grid item xs={6} md={3} key={kpi.title}>
//             <Paper sx={{ p: 2, textAlign: "center", borderRadius: 2, backgroundColor: "#191725", color: "#ffcb99", boxShadow: 3 }}>
//               <Typography variant="subtitle2">{kpi.title}</Typography>
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>{kpi.value}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Violations Table */}
//       <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
//         <Table>
//           <TableHead sx={{ backgroundColor: "#6b0000" }}>
//             <TableRow>
//               <TableCell sx={{ color: "#ffcb99", fontWeight: "bold" }}>Time</TableCell>
//               <TableCell sx={{ color: "#ffcb99", fontWeight: "bold" }}>Chef</TableCell>
//               <TableCell sx={{ color: "#ffcb99", fontWeight: "bold" }}>Camera</TableCell>
//               <TableCell sx={{ color: "#ffcb99", fontWeight: "bold" }}>Type</TableCell>
//               <TableCell sx={{ color: "#ffcb99", fontWeight: "bold" }}>Severity</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {violations.map((v) => (
//               <TableRow key={v.id} sx={{ "&:hover": { backgroundColor: "#b68866" } }}>
//                 <TableCell>{new Date(v.time).toLocaleString()}</TableCell>
//                 <TableCell>{v.chef}</TableCell>
//                 <TableCell>{v.camera}</TableCell>
//                 <TableCell>{v.type}</TableCell>
//                 <TableCell>{v.severity}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//     </Box>
//   );
// };

// export default LiveMonitoring;




// src/Pages/LiveMonitoring.jsx
// import React, { useEffect, useState } from "react";
// import { Box, Grid, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from "@mui/material";

// const LiveMonitoring = () => {
//   const [violations, setViolations] = useState([]);
//   const [chefs, setChefs] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // بيانات وهمية للتجربة، بدل ما تجي من API
//   const cameraFeeds = [
//     { id: 1, name: "Cam-1", chef: "John Doe", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
//     // ممكن تضيف كاميرات أخرى هنا
//   ];

//   // مثال على KPI حسابي
//   const totalViolations = violations.length;
//   const activeChefs = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefs.length > 0 ? Math.round((chefs.length - totalViolations) / chefs.length * 100) : 0;

//   // لتحديث المخالفات كل 5 ثواني (محاكاة)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       addRandomViolation();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [violations, chefs]);

//   // دالة لإضافة مخالفة جديدة
//   const addRandomViolation = () => {
//     const newViolation = {
//       id: violations.length + 1,
//       chef: cameraFeeds[0].chef,
//       type: "No Mask",
//       camera: cameraFeeds[0].name,
//       time: new Date().toLocaleTimeString(),
//     };
//     setViolations(prev => [newViolation, ...prev]);
//     if (!chefs.includes(cameraFeeds[0].chef)) setChefs(prev => [...prev, cameraFeeds[0].chef]);
//   };

//   // دالة Refresh
//   const handleRefresh = () => {
//     // إعادة تهيئة البيانات لمحاكاة جلب جديد
//     setViolations([]);
//     setChefs([]);
//     addRandomViolation(); // إضافة أول مخالفة جديدة
//   };

//   // فلترة المخالفات
//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2, boxShadow: 3 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Live Monitoring</Typography>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//           onClick={handleRefresh}
//         >
//           Refresh
//         </Button>
//       </Paper>

//       {/* كاميرات مباشرة */}
//       <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
//         {cameraFeeds.map(cam => (
//           <Grid item key={cam.id} sx={{ width: { xs: "90%", md: "45%" } }}>
//             <Paper sx={{ position: "relative", p: 1 }}>
//               <video
//                 src={cam.src}
//                 controls
//                 autoPlay
//                 muted
//                 loop
//                 style={{ width: "100%", borderRadius: "10px" }}
//               />
//               <Typography
//                 sx={{
//                   position: "absolute",
//                   bottom: 10,
//                   left: 10,
//                   color: "#ffcb99",
//                   fontWeight: "bold",
//                   backgroundColor: "rgba(0,0,0,0.5)",
//                   px: 1,
//                   borderRadius: 1,
//                 }}
//               >
//                 Chef: {cam.chef}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* KPIs */}
//       <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//         {[
//           { title: "Total Violations", value: totalViolations },
//           { title: "Active Chefs", value: activeChefs },
//           { title: "Most Active Camera", value: cameraFeeds[0].name },
//           { title: "Compliance %", value: `${compliance}%` }
//         ].map(kpi => (
//           <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//             <Paper sx={{ p: 2, textAlign: "center", backgroundColor:"#191725", color:"#ffcb99" }}>
//               <Typography sx={{ fontWeight:"bold" }}>{kpi.title}</Typography>
//               <Typography variant="h5">{kpi.value}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* فلترة */}
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

//       {/* جدول المخالفات */}
//       <Paper>
//         <Table sx={{backgroundColor:"#b68866"}}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Time</TableCell>
//               <TableCell>Chef</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Camera</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredViolations.map(v => (
//               <TableRow key={v.id}>
//                 <TableCell>{v.time}</TableCell>
//                 <TableCell>{v.chef}</TableCell>
//                 <TableCell>{v.type}</TableCell>
//                 <TableCell>{v.camera}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Box>
//   );
// };

// export default LiveMonitoring;



// src/Pages/LiveMonitoring.jsx
// import React, { useEffect, useState } from "react";
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
//   Button,
// } from "@mui/material";

// const LiveMonitoring = () => {
//   const [violations, setViolations] = useState([]);
//   const [chefs, setChefs] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // بيانات وهمية للتجربة
//   const cameraFeeds = [
//     {
//       id: 1,
//       name: "Cam-1",
//       chef: "John Doe",
//       src: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//   ];

//   const totalViolations = violations.length;
//   const activeChefs = [...new Set(violations.map((v) => v.chef))].length;
//   const compliance =
//     chefs.length > 0
//       ? Math.round(((chefs.length - totalViolations) / chefs.length) * 100)
//       : 0;

//   // دالة لإضافة مخالفة عشوائية
//   const addRandomViolation = () => {
//     const newViolation = {
//       id: violations.length + 1,
//       chef: cameraFeeds[0].chef,
//       type: Math.random() > 0.5 ? "No Mask" : "Wrong Uniform",
//       camera: cameraFeeds[0].name,
//       time: new Date().toLocaleTimeString(),
//     };
//     setViolations((prev) => [newViolation, ...prev]);
//     if (!chefs.includes(cameraFeeds[0].chef))
//       setChefs((prev) => [...prev, cameraFeeds[0].chef]);
//   };

//   // تحديث المخالفات كل 5 ثواني (محاكاة)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       addRandomViolation();
//     }, 5000);
//     return () => clearInterval(interval);
//     // eslint-disable-next-line
//   }, []);

//   // فلترة المخالفات
//   const filteredViolations = violations.filter(
//     (v) =>
//       (filterChef === "" ||
//         v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//       (filterType === "" ||
//         v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   // زرار الريفرش
//   const handleRefresh = () => {
//     setViolations([]); // مسح الجدول
//     setChefs([]);
//     // إضافة 3 مخالفات جديدة مباشرة بعد المسح
//     for (let i = 0; i < 3; i++) {
//       addRandomViolation();
//     }
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper
//         sx={{
//           p: 2,
//           mb: 3,
//           backgroundColor: "#191725",
//           color: "#ffcb99",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Live Monitoring
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#b68866",
//             "&:hover": { backgroundColor: "#9d0706" },
//           }}
//           onClick={handleRefresh}
//         >
//           Refresh
//         </Button>
//       </Paper>

//       {/* كاميرات مباشرة */}
//       <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
//         {cameraFeeds.map((cam) => (
//           <Grid item key={cam.id} sx={{ width: { xs: "90%", md: "45%" } }}>
//             <Paper sx={{ position: "relative", p: 1 }}>
//               <video
//                 src={cam.src}
//                 controls
//                 autoPlay
//                 muted
//                 loop
//                 style={{ width: "100%", borderRadius: "10px" }}
//               />
//               <Typography
//                 sx={{
//                   position: "absolute",
//                   bottom: 10,
//                   left: 10,
//                   color: "#ffcb99",
//                   fontWeight: "bold",
//                   backgroundColor: "rgba(0,0,0,0.5)",
//                   px: 1,
//                   borderRadius: 1,
//                 }}
//               >
//                 Chef: {cam.chef}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* KPIs */}
//       <Grid
//         container
//         spacing={2}
//         sx={{ mb: 4, justifyContent: "space-around" }}
//       >
//         {[
//           { title: "Total Violations", value: totalViolations },
//           { title: "Active Chefs", value: activeChefs },
//           { title: "Most Active Camera", value: cameraFeeds[0].name },
//           { title: "Compliance %", value: `${compliance}%` },
//         ].map((kpi) => (
//           <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//             <Paper
//               sx={{
//                 p: 2,
//                 textAlign: "center",
//                 backgroundColor: "#191725",
//                 color: "#ffcb99",
//               }}
//             >
//               <Typography sx={{ fontWeight: "bold" }}>{kpi.title}</Typography>
//               <Typography variant="h5">{kpi.value}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Filters */}
//       <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <TextField
//           label="Filter by Chef"
//           value={filterChef}
//           onChange={(e) => setFilterChef(e.target.value)}
//           variant="outlined"
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "#9d0706",
//                 borderWidth: "2px",
//               },
//               "&:hover fieldset": {
//                 borderColor: "#b68866",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "#191725",
//               },
//             },
//             "& .MuiInputLabel-root.Mui-focused": {
//               color: "#191725",
//             },
//           }}
//         />
//         <TextField
//           label="Filter by Type"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//           variant="outlined"
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "#9d0706",
//                 borderWidth: "2px",
//               },
//               "&:hover fieldset": {
//                 borderColor: "#b68866",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "#191725",
//               },
//             },
//             "& .MuiInputLabel-root.Mui-focused": {
//               color: "#191725",
//             },
//           }}
//         />
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => {
//             setFilterChef("");
//             setFilterType("");
//           }}
//         >
//           Clear Filters
//         </Button>
//       </Box>

//       {/* جدول المخالفات */}
//       <Paper>
//         <Table sx={{ backgroundColor: "#b68866" }}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Time</TableCell>
//               <TableCell>Chef</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Camera</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredViolations.map((v) => (
//               <TableRow key={v.id}>
//                 <TableCell>{v.time}</TableCell>
//                 <TableCell>{v.chef}</TableCell>
//                 <TableCell>{v.type}</TableCell>
//                 <TableCell>{v.camera}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Box>
//   );
// };

// export default LiveMonitoring;



// src/Pages/LiveMonitoring.jsx
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from "@mui/material";

const LiveMonitoring = () => {
  const [violations, setViolations] = useState([]);
  const [chefs, setChefs] = useState([]);
  const [filterChef, setFilterChef] = useState("");
  const [filterType, setFilterType] = useState("");

  // بيانات وهمية للتجربة، بدل ما تجي من API
  const cameraFeeds = [
    { id: 1, name: "Cam-1", chef: "John Doe", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  // مثال على KPI حسابي
  const totalViolations = violations.length;
  const activeChefs = [...new Set(violations.map(v => v.chef))].length;
  const compliance = chefs.length > 0 ? Math.round((chefs.length - totalViolations) / chefs.length * 100) : 0;

  // دالة لتشغيل interval لإضافة مخالفات كل 5 ثواني
  const startViolationsInterval = () => {
    window.violationInterval = setInterval(() => {
      const newViolation = {
        id: violations.length + 1,
        chef: cameraFeeds[0].chef,
        type: Math.random() > 0.5 ? "No Mask" : "Wrong Uniform",
        camera: cameraFeeds[0].name,
        time: new Date().toLocaleTimeString(),
      };
      setViolations(prev => [newViolation, ...prev]);
      if (!chefs.includes(cameraFeeds[0].chef)) setChefs(prev => [...prev, cameraFeeds[0].chef]);
    }, 5000);
  };

  // تشغيل interval عند فتح الصفحة
  useEffect(() => {
    startViolationsInterval();
    return () => clearInterval(window.violationInterval);
    // eslint-disable-next-line
  }, []);

  // دالة الريفرش
  const handleRefresh = () => {
    // مسح Interval القديم
    clearInterval(window.violationInterval);
    // إعادة الحالة للحالة الأولية
    setViolations([]);
    setChefs([]);
    setFilterChef("");
    setFilterType("");
    // إعادة تشغيل interval جديد
    startViolationsInterval();
  };

  // فلترة المخالفات
  const filteredViolations = violations.filter(v =>
    (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
    (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
  );

  return (
    <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
      {/* Header مع زرار Refresh */}
      <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>Live Monitoring</Typography>
        <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleRefresh}>
          Refresh
        </Button>
      </Paper>

      {/* كاميرات مباشرة */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        {cameraFeeds.map(cam => (
          <Grid item key={cam.id} sx={{ width: { xs: "90%", md: "45%" } }}>
            <Paper sx={{ position: "relative", p: 1 }}>
              <video
                src={cam.src}
                controls
                autoPlay
                muted
                loop
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  color: "#ffcb99",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                Chef: {cam.chef}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* KPIs */}
      <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
        {[
          { title: "Total Violations", value: totalViolations },
          { title: "Active Chefs", value: activeChefs },
          { title: "Most Active Camera", value: cameraFeeds[0].name },
          { title: "Compliance %", value: `${compliance}%` }
        ].map((kpi) => (
          <Grid item xs={12} sm={6} md={3} key={kpi.title}>
            <Paper sx={{ p: 2, textAlign: "center", backgroundColor:"#191725", color:"#ffcb99" }}>
              <Typography sx={{ fontWeight:"bold" }}>{kpi.title}</Typography>
              <Typography variant="h5">{kpi.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* فلترة المخالفات */}
      <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          label="Filter by Chef"
          value={filterChef}
          onChange={e => setFilterChef(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
              "&:hover fieldset": { borderColor: "#b68866" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
          }}
        />
        <TextField
          label="Filter by Type"
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
              "&:hover fieldset": { borderColor: "#b68866" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
          }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
          onClick={() => { setFilterChef(""); setFilterType(""); }}
        >
          Clear Filters
        </Button>
      </Box>

      {/* جدول المخالفات */}
      <Paper>
        <Table sx={{ backgroundColor:"#b68866" }}>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Chef</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Camera</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredViolations.map(v => (
              <TableRow key={v.id}>
                <TableCell>{v.time}</TableCell>
                <TableCell>{v.chef}</TableCell>
                <TableCell>{v.type}</TableCell>
                <TableCell>{v.camera}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default LiveMonitoring;
