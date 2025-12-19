// src/Pages/VideoUploadAnalysis.jsx
// import React, { useState } from "react";
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
//   LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if(file){
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const startAnalysis = () => {
//     if(!videoFile) return alert("Please upload a video first.");
//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);

//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 10;
//       setProgress(prog);
//       if(prog >= 100){
//         clearInterval(interval);
//         setViolations([
//           { id: 1, time: "00:01", chef: "John Doe", type: "No Mask", frame: "Frame 12" },
//           { id: 2, time: "00:05", chef: "Jane Smith", type: "Wrong Uniform", frame: "Frame 65" },
//         ]);
//       }
//     }, 300);
//   };

//   const totalViolations = violations.length;
//   const chefsDetected = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefsDetected > 0 ? Math.round((chefsDetected - totalViolations)/chefsDetected*100) : 0;

//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>Refresh</Button>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload} />
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }} onClick={startAnalysis}>
//           Start Analysis
//         </Button>
//       </Paper>

//       {/* Video Preview */}
//       {videoURL && (
//         <Paper sx={{ mb: 4, p: 1 }}>
//           <video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} />
//         </Paper>
//       )}

//       {/* Analysis Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* KPIs */}
//       {analysisStarted && progress >= 100 && (
//         <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//           {[
//             { title: "Total Violations", value: totalViolations },
//             { title: "Chefs Detected", value: chefsDetected },
//             { title: "Compliance %", value: `${compliance}%` }
//           ].map(kpi => (
//             <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//               <Paper sx={{ p: 2, textAlign: "center", backgroundColor:"#191725", color:"#ffcb99" }}>
//                 <Typography sx={{ fontWeight:"bold" }}>{kpi.title}</Typography>
//                 <Typography variant="h5">{kpi.value}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filters */}
//       {violations.length > 0 && (
//         <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//           <TextField label="Filter by Chef" value={filterChef} onChange={e => setFilterChef(e.target.value)} variant="outlined" />
//           <TextField label="Filter by Type" value={filterType} onChange={e => setFilterType(e.target.value)} variant="outlined" />
//           <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }} onClick={() => { setFilterChef(""); setFilterType(""); }}>
//             Clear Filters
//           </Button>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length > 0 && (
//         <Paper>
//           <Table sx={{ backgroundColor:"#b68866" }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Chef</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Frame</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredViolations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.time}</TableCell>
//                   <TableCell>{v.chef}</TableCell>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.frame}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;
// import React, { useState } from "react";
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
//   LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if(file){
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   // Start analysis simulation
//   const startAnalysis = () => {
//     if(!videoFile) return alert("Please upload a video first.");
//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);

//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 10;
//       setProgress(prog);
//       if(prog >= 100){
//         clearInterval(interval);
//         // Simulated analysis results
//         setViolations([
//           { id: 1, time: "00:01", chef: "John Doe", type: "No Mask", frame: "Frame 12" },
//           { id: 2, time: "00:05", chef: "Jane Smith", type: "Wrong Uniform", frame: "Frame 65" },
//         ]);
//       }
//     }, 300);
//   };

//   // Refresh button handler
//   const handleRefresh = () => {
//     setVideoFile(null);
//     setVideoURL(null);
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setFilterChef("");
//     setFilterType("");
//   };

//   const totalViolations = violations.length;
//   const chefsDetected = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefsDetected > 0 ? Math.round((chefsDetected - totalViolations)/chefsDetected*100) : 0;

//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header with Refresh */}
//       <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleRefresh}>
//           Refresh
//         </Button>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload} />
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }} onClick={startAnalysis}>
//           Start Analysis
//         </Button>
//       </Paper>

//       {/* Video Preview */}
//       {videoURL && (
//         <Paper sx={{ mb: 4, p: 1 }}>
//           <video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} />
//         </Paper>
//       )}

//       {/* Analysis Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* KPIs */}
//       {analysisStarted && progress >= 100 && (
//         <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//           {[
//             { title: "Total Violations", value: totalViolations },
//             { title: "Chefs Detected", value: chefsDetected },
//             { title: "Compliance %", value: `${compliance}%` }
//           ].map(kpi => (
//             <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//               <Paper sx={{ p: 2, textAlign: "center", backgroundColor:"#191725", color:"#ffcb99" }}>
//                 <Typography sx={{ fontWeight:"bold" }}>{kpi.title}</Typography>
//                 <Typography variant="h5">{kpi.value}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filters */}
//       {violations.length > 0 && (
//         <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//           <TextField label="Filter by Chef" value={filterChef} onChange={e => setFilterChef(e.target.value)} variant="outlined" />
//           <TextField label="Filter by Type" value={filterType} onChange={e => setFilterType(e.target.value)} variant="outlined" />
//           <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }} onClick={() => { setFilterChef(""); setFilterType(""); }}>
//             Clear Filters
//           </Button>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length > 0 && (
//         <Paper>
//           <Table sx={{ backgroundColor:"#b68866" }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Chef</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Frame</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredViolations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.time}</TableCell>
//                   <TableCell>{v.chef}</TableCell>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.frame}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;

// import React, { useState } from "react";
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
//   LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if(file){
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   // Start analysis simulation
//   const startAnalysis = () => {
//     if(!videoFile) return alert("Please upload a video first.");
//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);

//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 10;
//       setProgress(prog);
//       if(prog >= 100){
//         clearInterval(interval);
//         // Simulated analysis results
//         setViolations([
//           { id: 1, time: "00:01", chef: "John Doe", type: "No Mask", frame: "Frame 12" },
//           { id: 2, time: "00:05", chef: "Jane Smith", type: "Wrong Uniform", frame: "Frame 65" },
//         ]);
//       }
//     }, 300);
//   };

//   // Refresh button handler (reload page)
//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   // Reset Analysis button handler (مسح التحليل فقط)
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setFilterChef("");
//     setFilterType("");
//   };

//   const totalViolations = violations.length;
//   const chefsDetected = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefsDetected > 0 ? Math.round((chefsDetected - totalViolations)/chefsDetected*100) : 0;

//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header with Refresh and Reset Analysis */}
//       <Paper sx={{ p: 2, mb: 3, backgroundColor: "#191725", color: "#ffcb99", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1, alignItems: "center", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleRefresh}>
//             Refresh
//           </Button>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }} onClick={handleResetAnalysis}>
//             Reset Analysis
//           </Button>
//         </Box>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
//         <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload} />
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }} onClick={startAnalysis}>
//           Start Analysis
//         </Button>
//       </Paper>

//       {/* Video Preview */}
//       {videoURL && (
//         <Paper sx={{ mb: 4, p: 1 }}>
//           <video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} />
//         </Paper>
//       )}

//       {/* Analysis Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* KPIs */}
//       {analysisStarted && progress >= 100 && (
//         <Grid container spacing={2} sx={{ mb: 4, justifyContent: "space-around" }}>
//           {[
//             { title: "Total Violations", value: totalViolations },
//             { title: "Chefs Detected", value: chefsDetected },
//             { title: "Compliance %", value: `${compliance}%` }
//           ].map(kpi => (
//             <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//               <Paper sx={{ p: 2, textAlign: "center", backgroundColor:"#191725", color:"#ffcb99" }}>
//                 <Typography sx={{ fontWeight:"bold" }}>{kpi.title}</Typography>
//                 <Typography variant="h5">{kpi.value}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filters */}
//       {violations.length > 0 && (
//         <Box sx={{ mb: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
//           <TextField
//             label="Filter by Chef"
//             value={filterChef}
//             onChange={e => setFilterChef(e.target.value)}
//             variant="outlined"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//                 "&:hover fieldset": { borderColor: "#b68866" },
//                 "&.Mui-focused fieldset": { borderColor: "#191725" },
//               },
//               "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//             }}
//           />
//           <TextField
//             label="Filter by Type"
//             value={filterType}
//             onChange={e => setFilterType(e.target.value)}
//             variant="outlined"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//                 "&:hover fieldset": { borderColor: "#b68866" },
//                 "&.Mui-focused fieldset": { borderColor: "#191725" },
//               },
//               "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//             }}
//           />
//           <Button variant="contained" sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }} onClick={() => { setFilterChef(""); setFilterType(""); }}>
//             Clear Filters
//           </Button>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length > 0 && (
//         <Paper>
//           <Table sx={{ backgroundColor:"#b68866" }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Chef</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Frame</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredViolations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.time}</TableCell>
//                   <TableCell>{v.chef}</TableCell>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.frame}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;

// import React, { useState } from "react";
// import {
//   Box, Grid, Typography, Paper,
//   Table, TableBody, TableCell, TableHead, TableRow,
//   TextField, Button, LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if(file){
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   // Start analysis
//   const startAnalysis = async () => {
//     if (!videoFile) return alert("Please upload a video first.");
//     setAnalysisStarted(true);
//     setProgress(0);
//     setViolations([]);

//     const formData = new FormData();
//     formData.append("video", videoFile); // المفتاح حسب doc

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-video",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if(!response.ok) throw new Error("Video upload failed!");
//       const data = await response.json();

//       // محاكاة progress تدريجي
//       let prog = 0;
//       const interval = setInterval(() => {
//         prog += 10;
//         setProgress(prog);
//         if(prog >= 100){
//           clearInterval(interval);
//           // التحليل النهائي
//           // data.report_data محتمل يكون شكل مختلف
//           // لو عندك violations جاهزة من الباك إند استبدلي
//           setViolations(data.report_data?.violations || [
//             { id: 1, time: "00:01", chef: "John Doe", type: "No Mask", frame: "Frame 12" },
//             { id: 2, time: "00:05", chef: "Jane Smith", type: "Wrong Uniform", frame: "Frame 65" },
//           ]);
//         }
//       }, 300);

//     } catch (err) {
//       console.error(err);
//       alert("Error uploading or analyzing video");
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setFilterChef("");
//     setFilterType("");
//   };

//   const totalViolations = violations.length;
//   const chefsDetected = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefsDetected > 0 ? Math.round((chefsDetected - totalViolations)/chefsDetected*100) : 0;
//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight:"100vh", p:3, backgroundColor:"#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{p:2, mb:3, display:"flex", justifyContent:"space-between", backgroundColor:"#191725", color:"#ffcb99", borderRadius:2}}>
//         <Typography variant="h5" sx={{fontWeight:"bold"}}>Video Upload & Analysis</Typography>
//         <Box sx={{display:"flex", gap:1}}>
//           <Button variant="contained" sx={{backgroundColor:"#b68866"}} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{backgroundColor:"#b68866"}} onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{p:2, mb:4, display:"flex", gap:2, backgroundColor:"#ffe5cc"}}>
//         <Button variant="contained" component="label" sx={{backgroundColor:"#9d0706"}}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload}/>
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{backgroundColor:"#9d0706"}} onClick={startAnalysis}>Start Analysis</Button>
//       </Paper>

//       {/* Video Preview */}
//       {videoURL && <Paper sx={{mb:4,p:1}}><video src={videoURL} controls autoPlay muted style={{width:"100%", borderRadius:"10px"}}/></Paper>}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{mb:3}}>
//           <LinearProgress variant="determinate" value={progress}/>
//           <Typography sx={{mt:1}}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* KPIs */}
//       {analysisStarted && progress >= 100 && (
//         <Grid container spacing={2} sx={{mb:4, justifyContent:"space-around"}}>
//           {[
//             {title:"Total Violations", value:totalViolations},
//             {title:"Chefs Detected", value:chefsDetected},
//             {title:"Compliance %", value:`${compliance}%`}
//           ].map(kpi=>(
//             <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//               <Paper sx={{p:2, textAlign:"center", backgroundColor:"#191725", color:"#ffcb99"}}>
//                 <Typography sx={{fontWeight:"bold"}}>{kpi.title}</Typography>
//                 <Typography variant="h5">{kpi.value}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filters */}
//       {violations.length>0 && (
//         <Box sx={{mb:3, display:"flex", gap:2}}>
//           <TextField label="Filter by Chef" value={filterChef} onChange={e=>setFilterChef(e.target.value)} variant="outlined"/>
//           <TextField label="Filter by Type" value={filterType} onChange={e=>setFilterType(e.target.value)} variant="outlined"/>
//           <Button variant="contained" sx={{backgroundColor:"#9d0706"}} onClick={()=>{setFilterChef(""); setFilterType("");}}>Clear Filters</Button>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length>0 && (
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Chef</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Frame</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredViolations.map(v=>(
//                 <TableRow key={v.id}>
//                   <TableCell>{v.time}</TableCell>
//                   <TableCell>{v.chef}</TableCell>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.frame}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;

// import React, { useState } from "react";
// import {
//   Box, Grid, Typography, Paper,
//   Table, TableBody, TableCell, TableHead, TableRow,
//   TextField, Button, LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [filterChef, setFilterChef] = useState("");
//   const [filterType, setFilterType] = useState("");

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if(file){
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   // Start analysis
//   const startAnalysis = async () => {
//     if (!videoFile) return alert("Please upload a video first.");

//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);

//     // Progress simulation
//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 5; // step size
//       if(prog > 95) prog = 95; // يمنع الوصول للـ100 قبل استلام البيانات
//       setProgress(prog);
//     }, 200);

//     // Upload video
//     const formData = new FormData();
//     formData.append("video", videoFile); // المفتاح حسب doc

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-video",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if(!response.ok) throw new Error("Video upload failed!");
//       const data = await response.json();

//       clearInterval(interval); // وقف المحاكاة

//       // تحويل البيانات من الباك إند لشكل الجدول
//       const violationsFromBackend = (data.report_data?.violations || []).map((item, idx) => ({
//         id: idx + 1,
//         time: item.time || "00:00",
//         chef: item.chef || "Unknown",
//         type: item.type || "Unknown",
//         frame: item.frame || "-"
//       }));

//       setViolations(violationsFromBackend);
//       setProgress(100); // وصل للـ100 بعد استلام البيانات
//     } catch (err) {
//       console.error(err);
//       alert("Error uploading or analyzing video");
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setFilterChef("");
//     setFilterType("");
//   };

//   const totalViolations = violations.length;
//   const chefsDetected = [...new Set(violations.map(v => v.chef))].length;
//   const compliance = chefsDetected > 0 ? Math.round((chefsDetected - totalViolations)/chefsDetected*100) : 0;

//   const filteredViolations = violations.filter(v =>
//     (filterChef === "" || v.chef.toLowerCase().includes(filterChef.toLowerCase())) &&
//     (filterType === "" || v.type.toLowerCase().includes(filterType.toLowerCase()))
//   );

//   return (
//     <Box sx={{ minHeight:"100vh", p:3, backgroundColor:"#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{p:2, mb:3, display:"flex", justifyContent:"space-between", backgroundColor:"#191725", color:"#ffcb99", borderRadius:2}}>
//         <Typography variant="h5" sx={{fontWeight:"bold"}}>Video Upload & Analysis</Typography>
//         <Box sx={{display:"flex", gap:1}}>
//           <Button variant="contained" sx={{backgroundColor:"#b68866"}} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{backgroundColor:"#b68866"}} onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{p:2, mb:4, display:"flex", gap:2, backgroundColor:"#ffe5cc"}}>
//         <Button variant="contained" component="label" sx={{backgroundColor:"#9d0706"}}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload}/>
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{backgroundColor:"#9d0706"}} onClick={startAnalysis}>Start Analysis</Button>
//       </Paper>

//       {/* Video Preview */}
//       {videoURL && <Paper sx={{mb:4,p:1}}><video src={videoURL} controls autoPlay muted style={{width:"100%", borderRadius:"10px"}}/></Paper>}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{mb:3}}>
//           <LinearProgress variant="determinate" value={progress}/>
//           <Typography sx={{mt:1}}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* KPIs */}
//       {analysisStarted && progress >= 100 && (
//         <Grid container spacing={2} sx={{mb:4, justifyContent:"space-around"}}>
//           {[
//             {title:"Total Violations", value:totalViolations},
//             {title:"Chefs Detected", value:chefsDetected},
//             {title:"Compliance %", value:`${compliance}%`}
//           ].map(kpi=>(
//             <Grid item xs={12} sm={6} md={3} key={kpi.title}>
//               <Paper sx={{p:2, textAlign:"center", backgroundColor:"#191725", color:"#ffcb99"}}>
//                 <Typography sx={{fontWeight:"bold"}}>{kpi.title}</Typography>
//                 <Typography variant="h5">{kpi.value}</Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       )}

//       {/* Filters */}
//       {violations.length>0 && (
//         <Box sx={{mb:3, display:"flex", gap:2}}>
//           <TextField label="Filter by Chef" value={filterChef} onChange={e=>setFilterChef(e.target.value)} variant="outlined"/>
//           <TextField label="Filter by Type" value={filterType} onChange={e=>setFilterType(e.target.value)} variant="outlined"/>
//           <Button variant="contained" sx={{backgroundColor:"#9d0706"}} onClick={()=>{setFilterChef(""); setFilterType("");}}>Clear Filters</Button>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length>0 && (
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Time</TableCell>
//                 <TableCell>Chef</TableCell>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Frame</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredViolations.map(v=>(
//                 <TableRow key={v.id}>
//                   <TableCell>{v.time}</TableCell>
//                   <TableCell>{v.chef}</TableCell>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.frame}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;
// import React, { useState } from "react";
// import {
//   Box, Grid, Typography, Paper,
//   Table, TableBody, TableCell, TableHead, TableRow,
//   TextField, Button, LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   // Start Analysis
//   const startAnalysis = async () => {
//     if (!videoFile) return alert("Please upload a video first.");

//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);

//     // Progress simulation
//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 5;
//       if (prog > 95) prog = 95; // يمنع الوصول للـ100 قبل البيانات
//       setProgress(prog);
//     }, 200);

//     const formData = new FormData();
//     formData.append("video", videoFile);

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-video",
//         {
//           method: "POST",
//           body: formData
//         }
//       );

//       if (!response.ok) throw new Error("Video upload failed!");

//       const data = await response.json();
//       console.log("Backend response:", data); // للتأكد

//       clearInterval(interval);

//       // تحويل report_data لشكل array جاهز للعرض في الجدول
//       const violationsFromBackend = Object.entries(data.report_data || {})
//         .filter(([key]) => key !== "total_frames_processes")
//         .map(([key, value], idx) => ({
//           id: idx + 1,
//           type: key,
//           count: value.count,
//           detected: value.detected ? "Yes" : "No",
//           confidence: value.average_confidence
//         }));

//       setViolations(violationsFromBackend);
//       setProgress(100);
//     } catch (err) {
//       console.error(err);
//       alert("Error uploading or analyzing video");
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, backgroundColor: "#ffe5cc" }}>
//         <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706" }}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload} />
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={startAnalysis}>Start Analysis</Button>
//       </Paper>

//       {/* Video Preview */}
//       {videoURL && <Paper sx={{ mb: 4, p: 1 }}><video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} /></Paper>}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length > 0 && (
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Count</TableCell>
//                 <TableCell>Detected</TableCell>
//                 <TableCell>Confidence</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {violations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.count}</TableCell>
//                   <TableCell>{v.detected}</TableCell>
//                   <TableCell>{v.confidence}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;
// import React, { useState } from "react";
// import {
//   Box, Grid, Typography, Paper,
//   Table, TableBody, TableCell, TableHead, TableRow,
//   TextField, Button, LinearProgress
// } from "@mui/material";

// const VideoUploadAnalysis = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoURL, setVideoURL] = useState(null);
//   const [analysisStarted, setAnalysisStarted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [violations, setViolations] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//       setErrorMessage("");
//     }
//   };

//   // Start Analysis
//   const startAnalysis = async () => {
//     if (!videoFile) {
//       setErrorMessage("Please upload a video first.");
//       return;
//     }

//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);
//     setErrorMessage("");

//     console.log("Uploading video:", videoFile);

//     // Progress simulation
//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 5;
//       if (prog > 95) prog = 95; // يمنع الوصول للـ100 قبل البيانات
//       setProgress(prog);
//     }, 200);

//     const formData = new FormData();
//     formData.append("video", videoFile);

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-video",
//         {
//           method: "POST",
//           body: formData
//         }
//       );

//       if (!response.ok) {
//         // قراءة نص الخطأ من السيرفر لو موجود
//         const text = await response.text();
//         throw new Error(`Server responded with status ${response.status}: ${text}`);
//       }

//       const data = await response.json();
//       console.log("Backend response:", data);

//       clearInterval(interval);

//       // تحويل report_data لشكل array جاهز للعرض في الجدول
//       const violationsFromBackend = Object.entries(data.report_data || {})
//         .filter(([key]) => key !== "total_frames_processes")
//         .map(([key, value], idx) => ({
//           id: idx + 1,
//           type: key,
//           count: value.count,
//           detected: value.detected ? "Yes" : "No",
//           confidence: value.average_confidence
//         }));

//       setViolations(violationsFromBackend);
//       setProgress(100);
//     } catch (err) {
//       clearInterval(interval);
//       console.error(err);
//       setErrorMessage("Error uploading or analyzing video: " + err.message);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setErrorMessage("");
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Upload & Start */}
//       <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, backgroundColor: "#ffe5cc" }}>
//         <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706" }}>
//           Upload Video
//           <input type="file" hidden accept="video/*" onChange={handleUpload} />
//         </Button>
//         {videoFile && <Typography>{videoFile.name}</Typography>}
//         <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={startAnalysis}>Start Analysis</Button>
//       </Paper>

//       {/* Error message */}
//       {errorMessage && <Typography sx={{ color: "red", mb: 2 }}>{errorMessage}</Typography>}

//       {/* Video Preview */}
//       {videoURL && <Paper sx={{ mb: 4, p: 1 }}><video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} /></Paper>}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length > 0 && (
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Count</TableCell>
//                 <TableCell>Detected</TableCell>
//                 <TableCell>Confidence</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {violations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.count}</TableCell>
//                   <TableCell>{v.detected}</TableCell>
//                   <TableCell>{v.confidence}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;
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
//   const [errorMessage, setErrorMessage] = useState("");

//   // Login
//   const handleLogin = async () => {
//     setErrorMessage("");
//     if (!email || !password) {
//       setErrorMessage("Please enter email and password.");
//       return;
//     }

//     try {
//       const response = await fetch("https://depi-final-project-production.up.railway.app/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password })
//       });

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Login failed: ${response.status} ${text}`);
//       }

//       const data = await response.json();
//       console.log("Login response:", data);
//       setToken(data.access_token);
//       setErrorMessage("Login successful!");
//     } catch (err) {
//       console.error(err);
//       setErrorMessage(err.message);
//     }
//   };

//   // Handle video upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//       setErrorMessage("");
//     }
//   };

//   // Start Analysis
//   const startAnalysis = async () => {
//     if (!videoFile) {
//       setErrorMessage("Please upload a video first.");
//       return;
//     }
//     if (!token) {
//       setErrorMessage("Please login first.");
//       return;
//     }

//     setAnalysisStarted(true);
//     setViolations([]);
//     setProgress(0);
//     setErrorMessage("");

//     console.log("Uploading video:", videoFile);

//     // Progress simulation
//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 5;
//       if (prog > 95) prog = 95;
//       setProgress(prog);
//     }, 200);

//     const formData = new FormData();
//     formData.append("video", videoFile);

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-video",
//         {
//           method: "POST",
//           body: formData,
//           headers: {
//             "Authorization": `Bearer ${token}`
//           }
//         }
//       );

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Server responded with status ${response.status}: ${text}`);
//       }

//       const data = await response.json();
//       console.log("Backend response:", data);

//       clearInterval(interval);

//       const violationsFromBackend = Object.entries(data.report_data || {})
//         .filter(([key]) => key !== "total_frames_processes")
//         .map(([key, value], idx) => ({
//           id: idx + 1,
//           type: key,
//           count: value.count,
//           detected: value.detected ? "Yes" : "No",
//           confidence: value.average_confidence
//         }));

//       setViolations(violationsFromBackend);
//       setProgress(100);
//     } catch (err) {
//       clearInterval(interval);
//       console.error(err);
//       setErrorMessage("Error uploading or analyzing video: " + err.message);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setErrorMessage("");
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Login */}
//       {!token && (
//         <Paper sx={{ p: 2, mb: 3, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
//           <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
//           <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={handleLogin}>Login</Button>
//         </Paper>
//       )}

//       {/* Error message */}
//       {errorMessage && <Typography sx={{ color: "red", mb: 2 }}>{errorMessage}</Typography>}

//       {/* Upload & Start */}
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

//       {/* Video Preview */}
//       {videoURL && <Paper sx={{ mb: 4, p: 1 }}><video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} /></Paper>}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* Table */}
//       {violations.length > 0 && (
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Type</TableCell>
//                 <TableCell>Count</TableCell>
//                 <TableCell>Detected</TableCell>
//                 <TableCell>Confidence</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {violations.map(v => (
//                 <TableRow key={v.id}>
//                   <TableCell>{v.type}</TableCell>
//                   <TableCell>{v.count}</TableCell>
//                   <TableCell>{v.detected}</TableCell>
//                   <TableCell>{v.confidence}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       )}
//     </Box>
//   );
// };

// export default VideoUploadAnalysis;

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
//         "https://depi-final-project-production.up.railway.app/auth/login",
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
//       console.log("Login response:", data);
//       setToken(data.access_token);
//       setErrorMessage("Login successful!");
//     } catch (err) {
//       console.error(err);
//       setErrorMessage(err.message);
//     }
//   };

//   // -------------------- Handle video upload --------------------
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setAnalysisStarted(false);
//       setProgress(0);
//       setErrorMessage("");
//     }
//   };

//   // -------------------- Start analysis --------------------
//   const startAnalysis = async () => {
//     if (!videoFile) {
//       setErrorMessage("Please upload a video first.");
//       return;
//     }
//     if (!token) {
//       setErrorMessage("Please login first.");
//       return;
//     }

//     setAnalysisStarted(true);
//     setProgress(0);
//     setViolations([]);
//     setErrorMessage("");

//     const formData = new FormData();
//     formData.append("video", videoFile);

//     // Start simulated progress
//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 5;
//       if (prog > 95) prog = 95; // وقف قبل الرد الفعلي
//       setProgress(prog);
//     }, 200);

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-video",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Server responded with status ${response.status}: ${text}`);
//       }

//       const data = await response.json();
//       console.log("Backend response:", data);

//       clearInterval(interval);
//       setProgress(100);

//       // تحويل report_data للجدول
//       const violationsFromBackend = Object.entries(data.report_data || {})
//         .filter(([key]) => key !== "total_frames_processes")
//         .map(([key, value], idx) => ({
//           id: idx + 1,
//           type: key,
//           count: value.count,
//           detected: value.detected ? "Yes" : "No",
//           confidence: value.average_confidence,
//         }));

//       setViolations(violationsFromBackend);
//     } catch (err) {
//       clearInterval(interval);
//       console.error(err);
//       setErrorMessage("Error uploading or analyzing video: " + err.message);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setErrorMessage("");
//   };

//   // -------------------- Render --------------------
//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
//       {/* Header */}
//       <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866"  ,"&:hover": { backgroundColor: "#9d0706" } }} onClick={handleRefresh}>Refresh</Button>
//           <Button variant="contained" sx={{ backgroundColor: "#b68866" ,"&:hover": { backgroundColor: "#9d0706" } }} onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Login */}
//       {!token && (
//         <Paper sx={{ p: 2, mb: 3, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
//           <TextField
//   label="Email"
//   value={email}
//   onChange={e => setEmail(e.target.value)}
//   variant="outlined"
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
//       "&:hover fieldset": { borderColor: "#b68866" },
//       "&.Mui-focused fieldset": { borderColor: "#9d0706" }, // لون البوردر عند التركيز
//     },
//     "& .MuiInputLabel-root": {
//       "&.Mui-focused": { color: "#9d0706" }, // لون اللابل عند التركيز
//     },
//   }}
// />

// <TextField
//   label="Password"
//   type="password"
//   value={password}
//   onChange={e => setPassword(e.target.value)}
//   variant="outlined"
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
//       "&:hover fieldset": { borderColor: "#b68866" },
//       "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//     },
//     "& .MuiInputLabel-root": {
//       "&.Mui-focused": { color: "#9d0706" },
//     },
//   }}
// />

//           <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={handleLogin}>Login</Button>
//         </Paper>
//       )}

//       {/* Error message */}
//       {errorMessage && <Typography sx={{ color: "red", mb: 2 }}>{errorMessage}</Typography>}

//       {/* Upload & Start */}
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

//       {/* Video Preview */}
//       {videoURL && <Paper sx={{ mb: 4, p: 1 }}><video src={videoURL} controls autoPlay muted style={{ width: "100%", borderRadius: "10px" }} /></Paper>}

//       {/* Progress */}
//       {analysisStarted && progress < 100 && (
//         <Box sx={{ mb: 3 }}>
//           <LinearProgress variant="determinate" value={progress} />
//           <Typography sx={{ mt: 1 }}>Analysis Progress: {progress}%</Typography>
//         </Box>
//       )}

//       {/* Table */}
// {violations.length > 0 && (
//   <Paper>
//     <Table sx={{ backgroundColor: "#191725" }}>
//       <TableHead>
//         <TableRow>
//           <TableCell sx={{ color: "#ffe5cc" }}>Type</TableCell>
//           <TableCell sx={{ color: "#ffe5cc" }}>Detected</TableCell>
//           <TableCell sx={{ color: "#ffe5cc" }}>Confidence</TableCell>
//         </TableRow>
//       </TableHead>

//       <TableBody>
//         {/* Rows الأساسية */}
//         {violations.slice(0, -1).map((v) => (
//           <TableRow key={v.id}>
//             <TableCell sx={{ color: "#b68866" }}>{v.type}</TableCell>
//             <TableCell sx={{ color: "#ffffff" }}>{v.detected}</TableCell>
//             <TableCell sx={{ color: "#ffffff" }}>{v.confidence}</TableCell>
//           </TableRow>
//         ))}

//         {/* صف total_frames_processed */}
//         <TableRow>
//           <TableCell sx={{ color: "#b68866" }}>Total Frames Processed</TableCell>
//           <TableCell sx={{ color: "#ffffff" }}>
//             {reportData.total_frames_processed}
//           </TableCell>
//           <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
//         </TableRow>

//         {/* صف is_clean */}
//         <TableRow>
//           <TableCell sx={{ color: "#b68866" }}>Is Clean</TableCell>
//           <TableCell sx={{ color: "#ffffff" }}>
//             {reportData.is_clean ? "Yes" : "No"}
//           </TableCell>
//           <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
//         </TableRow>
//       </TableBody>
//     </Table>
//   </Paper>
// )}

//     </Box>
//   );
// };

// export default VideoUploadAnalysis;
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
//   const [reportData, setReportData] = useState(null); // ✔ أهم إضافة
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
//         "https://depi-final-project-production.up.railway.app/auth/login",
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
//       console.log("Login response:", data);
//       setToken(data.access_token);
//       setErrorMessage("Login successful!");
//     } catch (err) {
//       console.error(err);
//       setErrorMessage(err.message);
//     }
//   };

//   // -------------------- Handle video upload --------------------
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//       setVideoURL(URL.createObjectURL(file));
//       setViolations([]);
//       setReportData(null);
//       setAnalysisStarted(false);
//       setProgress(0);
//       setErrorMessage("");
//     }
//   };

//   // -------------------- Start analysis --------------------
//   const startAnalysis = async () => {
//     if (!videoFile) {
//       setErrorMessage("Please upload a video first.");
//       return;
//     }
//     if (!token) {
//       setErrorMessage("Please login first.");
//       return;
//     }

//     setAnalysisStarted(true);
//     setProgress(0);
//     setViolations([]);
//     setErrorMessage("");

//     const formData = new FormData();
//     formData.append("video", videoFile);

//     // Start simulated progress
//     let prog = 0;
//     const interval = setInterval(() => {
//       prog += 5;
//       if (prog > 95) prog = 95;
//       setProgress(prog);
//     }, 200);

//     try {
//       const response = await fetch(
//         "https://depi-final-project-production.up.railway.app/auth/analyze-behavior",
//         {
//           method: "POST",
//           headers: { Authorization: `Bearer ${token}` },
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Server responded with: ${response.status} ${text}`);
//       }

//       const data = await response.json();
//       console.log("Backend response:", data);

//       clearInterval(interval);
//       setProgress(100);

//       // ✔ حفظ التقرير كامل
//       setReportData(data.report_data);

//       // تحويل report_data للجدول — ما عدا total_frames_processed و is_clean
//       const violationsFromBackend = Object.entries(data.report_data || {})
//         .filter(([key]) =>
//           key !== "total_frames_processed" &&
//           key !== "is_clean"
//         )
//         .map(([key, value], idx) => ({
//           id: idx + 1,
//           type: key,
//           count: value.count,
//           detected: value.detected ? "Yes" : "No",
//           confidence: value.average_confidence,
//         }));

//       setViolations(violationsFromBackend);

//     } catch (err) {
//       clearInterval(interval);
//       console.error(err);
//       setErrorMessage("Error uploading or analyzing video: " + err.message);
//       setAnalysisStarted(false);
//       setProgress(0);
//     }
//   };

//   const handleRefresh = () => window.location.reload();
//   const handleResetAnalysis = () => {
//     setAnalysisStarted(false);
//     setProgress(0);
//     setViolations([]);
//     setReportData(null);
//     setErrorMessage("");
//   };

  

//   // -------------------- Render --------------------
//   return (
//     <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>

//       {/* Header */}
//       <Paper sx={{
//         p: 2, mb: 3, display: "flex", justifyContent: "space-between",
//         backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2
//       }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Video Upload & Analysis
//         </Typography>

//         <Box sx={{ display: "flex", gap: 1 }}>
//           <Button variant="contained"
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={handleRefresh}>Refresh</Button>

//           <Button variant="contained"
//             sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//             onClick={handleResetAnalysis}>Reset Analysis</Button>
//         </Box>
//       </Paper>

//       {/* Login */}
//       {!token && (
//         <Paper sx={{ p: 2, mb: 3, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
          
//           <TextField
//             label="Email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             variant="outlined"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
//                 "&:hover fieldset": { borderColor: "#b68866" },
//                 "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//               },
//               "& .MuiInputLabel-root": {
//                 "&.Mui-focused": { color: "#9d0706" },
//               },
//             }}
//           />

//           <TextField
//             label="Password"
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             variant="outlined"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": { borderColor: "#9d0706", borderWidth: 2 },
//                 "&:hover fieldset": { borderColor: "#b68866" },
//                 "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//               },
//               "& .MuiInputLabel-root": {
//                 "&.Mui-focused": { color: "#9d0706" },
//               },
//             }}
//           />

//           <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={handleLogin}>
//             Login
//           </Button>

//         </Paper>
//       )}

//       {/* Error message */}
//       {errorMessage && (
//         <Typography sx={{ color: "red", mb: 2 }}>{errorMessage}</Typography>
//       )}

//       {/* Upload & Start */}
//       {token && (
//         <Paper sx={{ p: 2, mb: 4, display: "flex", gap: 2, backgroundColor: "#ffe5cc" }}>
//           <Button variant="contained" component="label" sx={{ backgroundColor: "#9d0706" }}>
//             Upload Video
//             <input type="file" hidden accept="video/*" onChange={handleUpload} />
//           </Button>

//           {videoFile && <Typography>{videoFile.name}</Typography>}

//           <Button variant="contained" sx={{ backgroundColor: "#9d0706" }} onClick={startAnalysis}>
//             Start Analysis
//           </Button>
//         </Paper>
//       )}

//       {/* Video Preview */}
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
//       {violations.length > 0 && reportData && (
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
//               {/* Rows الأساسية */}
//               {violations.map((v) => (
//                 <TableRow key={v.id}>
//                   <TableCell sx={{ color: "#b68866" }}>{v.type}</TableCell>
//                   <TableCell sx={{ color: "#ffffff" }}>{v.detected}</TableCell>
//                   <TableCell sx={{ color: "#ffffff" }}>{v.confidence}</TableCell>
//                 </TableRow>
//               ))}

//               {/* Total frames */}
//               <TableRow>
//                 <TableCell sx={{ color: "#b68866" }}>Total Frames Processed</TableCell>
//                 <TableCell sx={{ color: "#ffffff" }}>{reportData.total_frames_processed}</TableCell>
//                 <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
//               </TableRow>

//               {/* Is Clean */}

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
  const [reportData, setReportData] = useState(null); // <<===== NEW
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
        "https://marowael-depi.hf.space/auth/login",
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
        "https://marowael-depi.hf.space/analyze-behavior",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error("Server error: " + text);
      }

      const data = await response.json();

      clearInterval(interval);
      setProgress(100);

      // Save full report data
      setReportData(data.report_data);

      const violationsFromBackend = Object.entries(data.report_data || {})
        .filter(([k]) => !["total_frames_processed", "is_clean"].includes(k))
        .map(([key, value], idx) => ({
          id: idx + 1,
          type: key,
          detected: value.detected ? "Yes" : "No",
          confidence: value.average_confidence,
        }));

      setViolations(violationsFromBackend);

    } catch (err) {
      clearInterval(interval);
      setErrorMessage("Error analyzing video: " + err.message);
      setAnalysisStarted(false);
      setProgress(0);
    }
  };

  const handleRefresh = () => window.location.reload();
  const handleResetAnalysis = () => {
    setAnalysisStarted(false);
    setProgress(0);
    setViolations([]);
    setReportData(null);
    setErrorMessage("");
  };

  // -------------------- UI --------------------
  return (
    <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#ffcb99" }}>
      {/* Header */}
      <Paper sx={{ p: 2, mb: 3, display: "flex", justifyContent: "space-between", backgroundColor: "#191725", color: "#ffcb99", borderRadius: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>Video Upload & Analysis</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {/* <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleRefresh}>Refresh</Button>
          <Button variant="contained" sx={{ backgroundColor: "#b68866" }} onClick={handleResetAnalysis}>Reset Analysis</Button> */}
          <Button variant="contained" sx={{
              backgroundColor: "#b68866",
              "&:hover": {
                backgroundColor: "#9d0706"  // اللون الجديد عند الـ hover
              }
            }} onClick={handleRefresh}>Refresh</Button>
                    <Button variant="contained" sx={{
              backgroundColor: "#b68866",
              "&:hover": {
                backgroundColor: "#9d0706"  // اللون الجديد عند الـ hover
              }
            }} onClick={handleResetAnalysis}>Reset Analysis</Button>
        </Box>
      </Paper>

      {/* Login */}
      {!token && (
        <Paper sx={{ p: 2, mb: 3, display: "flex", gap: 2, flexWrap: "wrap", backgroundColor: "#ffe5cc" }}>
          {/* <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
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
                                  "& .MuiInputLabel-root": {
                                    "&.Mui-focused": { color: "#9d0706" },
                                  },
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
                                   "& .MuiInputLabel-root": {
                                     "&.Mui-focused": { color: "#9d0706" },
                                   },
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

              {/* Total Frames */}
              <TableRow>
                <TableCell sx={{ color: "#b68866" }}>Total Frames Processed</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>{reportData.total_frames_processed}</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>—</TableCell>
              </TableRow>

              {/* Is Clean */}
              <TableRow>
                <TableCell sx={{ color: "#b68866" }}>Is Clean</TableCell>
                <TableCell sx={{ color: "#ffffff" }}>
                  {reportData.is_clean ? "Yes" : "No"}
                </TableCell>
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

