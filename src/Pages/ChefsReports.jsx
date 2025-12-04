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
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";

const mockData = [
  { chef: "John Doe", violations: 3, type: "No Mask", date: "2025-11-28" },
  { chef: "Jane Smith", violations: 2, type: "Wrong Uniform", date: "2025-11-28" },
  { chef: "Mike Johnson", violations: 1, type: "No Mask", date: "2025-11-28" },
  { chef: "Anna Lee", violations: 5, type: "Wrong Uniform", date: "2025-11-28" },
];

const COLORS = ["#9d0706", "#b68866", "#ffcb99", "#191725", "#ffe5cc"];

const ChefsReports = () => {
  const [reports, setReports] = useState([]);
  const [filterChef, setFilterChef] = useState("");
  const [filterType, setFilterType] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeBar, setActiveBar] = useState(null);
  const [activePie, setActivePie] = useState(null);

  // Fetch Simulated Data
  useEffect(() => {
    setReports(mockData);
  }, [refreshKey]);

  // Filtering
  const filteredReports = reports.filter(r =>
    (filterChef === "" || r.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
    (filterType === "" || r.type.toLowerCase().includes(filterType.toLowerCase()))
  );

  // KPIs
  const totalViolations = reports.reduce((acc, r) => acc + r.violations, 0);
  const uniqueChefs = [...new Set(reports.map(r => r.chef))].length;
  const mostViolationsChef = reports.reduce((max, r) => r.violations > max.violations ? r : max, {violations:0});

  // ----------------------------
  // DOWNLOAD CSV FUNCTION
  // ----------------------------
  const handleDownload = () => {
    const headers = ["Chef", "Violations", "Type", "Date"];
    const rows = filteredReports.map(r => [r.chef, r.violations, r.type, r.date]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "chefs_reports.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ p: 3, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      
      {/* Header */}
      <Paper
        sx={{
          p: 2,
          mb: 3,
          backgroundColor: "#191725",
          color: "#ffcb99",
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Chefs Reports
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
            onClick={() => setRefreshKey(prev => prev + 1)}
          >
            Refresh
          </Button>

          <Button 
            variant="contained" 
            sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
            onClick={handleDownload}
          >
            Download Report
          </Button>
        </Box>
      </Paper>

      {/* KPIs */}
      <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
        {[
          { title: "Total Violations", value: totalViolations },
          { title: "Unique Chefs", value: uniqueChefs },
          { title: "Chef Most Violations", value: mostViolationsChef.chef }
        ].map((kpi) => (
          <Grid item xs={12} sm={5} md={3} key={kpi.title}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                backgroundColor: "#ffe5cc",
                color: "#191725",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {kpi.title}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1 }}>{kpi.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Filters */}
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

      {/* Table */}
      <Paper sx={{ mb: 4 }}>
        <Table sx={{ backgroundColor:"#b68866" }}>
          <TableHead>
            <TableRow>
              <TableCell>Chef</TableCell>
              <TableCell>Violations</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReports.map((r, idx) => (
              <TableRow key={idx}>
                <TableCell>{r.chef}</TableCell>
                <TableCell>{r.violations}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>{r.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Charts - Vertical Layout */}
<Grid
  container
  spacing={4}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "900px", // نجعلها أصغر من الشاشة عشان يكون فيه padding متساوي
    mx: "auto",
    px: 2,
    flexDirection: "column" // ✨ الكروت تحت بعض
  }}
>
  {/* Bar Chart */}
  <Grid item xs={12} sx={{ mb: 5 }}>
    <Paper
      sx={{
        p: 4,
        backgroundColor: "#ffe5cc",
        color: "#191725",
        borderRadius: 3,
        minHeight: 450,
        width: "100%",
      }}
    >
      <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
        Violations per Chef
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredReports}>
          <XAxis dataKey="chef" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="violations" fill="#9d0706" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>

  {/* Pie Chart */}
  <Grid item xs={12} sx={{ mb: 5 }}>
    <Paper
      sx={{
        p: 4,
        backgroundColor: "#ffe5cc",
        color: "#191725",
        borderRadius: 3,
        minHeight: 450,
        width: "100%",
      }}
    >
      <Typography sx={{ mb: 3, fontWeight: "bold", fontSize: "1.6rem", textAlign: "center" }}>
        Violations by Type
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={filteredReports}
            dataKey="violations"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={140}
            label
          >
            {filteredReports.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  </Grid>
</Grid>

    </Box>
  );
};

export default ChefsReports;
