// // src/pages/ChefPerformance.js
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Drawer,
//   Paper,
//   Grid,
//   LinearProgress,
//   Button,
//   TextField,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// // بيانات وهمية للشيفات
// const mockChefs = [
//   {
//     id: 1,
//     name: "Ali",
//     rating: 4,
//     violations: 3,
//     types: ["No Mask", "Wrong Uniform"],
//     weeklyProgress: [1, 2, 0, 1, 0, 1, 2],
//     achievements: ["Completed Hygiene Training", "No Accident in 3 Days"],
//     recommendedTraining: ["Food Safety", "Advanced Hygiene"],
//   },
//   {
//     id: 2,
//     name: "Ahmed",
//     rating: 5,
//     violations: 1,
//     types: ["No Mask"],
//     weeklyProgress: [0, 1, 0, 0, 0, 0, 1],
//     achievements: ["Perfect Hygiene Week"],
//     recommendedTraining: ["Advanced Cooking Skills"],
//   },
//   {
//     id: 3,
//     name: "Samir",
//     rating: 3,
//     violations: 5,
//     types: ["Wrong Uniform", "Late Arrival"],
//     weeklyProgress: [2, 1, 3, 1, 2, 0, 1],
//     achievements: [],
//     recommendedTraining: ["Time Management", "Food Safety"],
//   },
// ];

// export default function ChefPerformance() {
//   const [selectedChef, setSelectedChef] = useState(null);
//   const [searchText, setSearchText] = useState("");

//   const filteredChefs = mockChefs.filter(c =>
//     c.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//         <Paper
//           sx={{
//             backgroundColor: "#191725",
//             color: "#ffcb99",
//             p: 2,
//             mb: 3,
//             borderRadius: 2,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
        
//             // ❌ هنشيل wrap علشان الزرارين يفضلوا جنب بعض
//             flexWrap: "nowrap",
        
//             // Responsive
//             flexDirection: { xs: "column", sm: "row" }, 
//             gap: { xs: 2, sm: 0 },
//           }}
//         >
//       <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#ffe5cc"}}>
//         Chef Performance Dashboard
//       </Typography>
//           </Paper>


// <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//   {/* ✅ Stats Box */}
//   <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
//   <Grid item xs="auto">
//     <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//       <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
//       <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{mockChefs.length}</Typography>
//     </Paper>
//   </Grid>
//   <Grid item xs="auto">
//     <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//       <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Top Rating</Typography>
//       <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{Math.max(...mockChefs.map(c => c.rating))} ⭐</Typography>
//     </Paper>
//   </Grid>
//   <Grid item xs="auto">
//     <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//       <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Most Violations</Typography>
//       <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{Math.max(...mockChefs.map(c => c.violations))}</Typography>
//     </Paper>
//   </Grid>
// </Grid>


//   {/* Search Box */}
//   <TextField
//     placeholder="Search chefs..."
//     value={searchText}
//     onChange={(e) => setSearchText(e.target.value)}
//     fullWidth
//     sx={{
//       mb: 2,
//       "& .MuiOutlinedInput-root": {
//         "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//         "&:hover fieldset": { borderColor: "#b68866" },
//         "&.Mui-focused fieldset": { borderColor: "#191725" },
//       },
//     }}
//   />

//   {/* List of chefs */}
//   <List>
//     {filteredChefs.map((chef) => (
//       <ListItemButton
//         key={chef.id}
//         onClick={() => setSelectedChef(chef)}
//         sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//       >
//         <ListItemText primary={chef.name} />
//       </ListItemButton>
//     ))}
//     {filteredChefs.length === 0 && (
//       <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//         No chefs found
//       </Typography>
//     )}
//   </List>
// </Paper>



//       <Grid container spacing={2}>
//         {/* 🟢 قائمة الشيفات */}
//         {/* <Grid item xs={12} sm={4}>
//           <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//             <TextField
//               placeholder="Search chefs..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//               fullWidth
//               sx={{
//                 mb: 2,
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//                   "&:hover fieldset": { borderColor: "#b68866" },
//                   "&.Mui-focused fieldset": { borderColor: "#191725" },
//                 },
//               }}
//             />
//             <List>
//               {filteredChefs.map((chef) => (
//                 <ListItemButton
//                   key={chef.id}
//                   onClick={() => setSelectedChef(chef)}
//                   sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//                 >
//                   <ListItemText primary={chef.name} />
//                 </ListItemButton>
//               ))}
//               {filteredChefs.length === 0 && (
//                 <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//                   No chefs found
//                 </Typography>
//               )}
//             </List>
//           </Paper>
//         </Grid> */}

//         {/* 🟠 Drawer / Dashboard */}
//         <Grid item xs={12} sm={8}>
//           <Drawer
//             anchor="right"
//             open={Boolean(selectedChef)}
//             onClose={() => setSelectedChef(null)}
//             variant="persistent"
//             PaperProps={{
//               sx: {
//                 width: { xs: "100%", sm: "auto" },
//                 p: 2,
//                 backgroundColor: "#ffe5cc",
//               },
//             }}
//           >
//             {selectedChef && (
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 , color:"#9d0706" }}>
//                   {selectedChef.name}
//                 </Typography>

//                 {/* Rating */}
//                 <Typography sx={{fontWeight: "bold"}}>Rating:</Typography>
//                 <Typography sx={{ fontSize: "1.5rem",fontWeight: "bold", color: "#9d0706" }}>
//                   {"⭐".repeat(selectedChef.rating)}
//                 </Typography>

//                 {/* Violations */}
//                 <Typography sx={{ mt: 2 ,fontWeight: "bold"}}>Number of Violations: {selectedChef.violations}</Typography>
//                 <Typography sx={{fontWeight: "bold"}}>Types of Violations: {selectedChef.types.join(", ")}</Typography>

//                 {/* Weekly Progress Graph */}
//                 <Typography sx={{ mt: 2 ,fontWeight: "bold"}}>Last 7 Days Progress:</Typography>
//                 <Paper sx={{ p: 1, backgroundColor: "#f6d9d1" }}>
//                   <ResponsiveContainer width="100%" height={200}>
//                     <BarChart data={selectedChef.weeklyProgress.map((v, i) => ({ day: `Day ${i+1}`, value: v }))}>
//                       <XAxis dataKey="day" />
//                       <YAxis allowDecimals={false} />
//                       <Tooltip />
//                       <Bar dataKey="value" fill="#9d0706" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Paper>

//                 {/* Achievements */}
//                 <Typography sx={{ mt: 2 ,fontWeight: "bold"}}>Achievements:</Typography>
//                 {selectedChef.achievements.length > 0 ? (
//                   <List>
//                     {selectedChef.achievements.map((ach, idx) => (
//                       <ListItemText key={idx} primary={`🏆 ${ach}`} />
//                     ))}
//                   </List>
//                 ) : (
//                   <Typography>No achievements yet</Typography>
//                 )}

//                 {/* Recommended Training */}
//                 <Typography sx={{ mt: 2 , fontWeight: "bold",}}>Recommended Training:</Typography>
//                 {selectedChef.recommendedTraining.length > 0 ? (
//                   <List>
//                     {selectedChef.recommendedTraining.map((tr, idx) => (
//                       <ListItemText key={idx} primary={`📚 ${tr}`} />
//                     ))}
//                   </List>
//                 ) : (
//                   <Typography>No trainings recommended</Typography>
//                 )}

//                 <Button
//                   variant="contained"
//                   sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => setSelectedChef(null)}
//                 >
//                   Close
//                 </Button>
//               </Box>
//             )}
//           </Drawer>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Drawer,
//   Paper,
//   Grid,
//   TextField,
//   Button,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { useSnackbar } from "notistack";

// export default function ChefPerformance() {
//   const [chefs, setChefs] = useState([]);
//   const [selectedChef, setSelectedChef] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const { enqueueSnackbar } = useSnackbar();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChefs = async () => {
//       try {
//         const res = await fetch("https://bla-6vcsv9au.b4a.run/auth/chiefs", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) {
//           const err = await res.json();
//           enqueueSnackbar(err.detail || "Failed to fetch chefs", { variant: "error" });
//           return;
//         }
//         const data = await res.json();
//         setChefs(data);
//       } catch (error) {
//         console.error("Error fetching chefs:", error);
//         enqueueSnackbar("Network error while fetching chefs", { variant: "error" });
//       }
//     };
//     fetchChefs();
//   }, [token]);

//   const filteredChefs = chefs.filter(c =>
//     c.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ backgroundColor: "#191725", color: "#ffcb99", p: 2, mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffe5cc" }}>
//           Chef Performance Dashboard
//         </Typography>
//       </Paper>

//       <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//         <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
//           <Grid item xs="auto">
//             <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//               <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
//               <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{chefs.length}</Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         <TextField
//           placeholder="Search chefs..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           fullWidth
//           sx={{
//             mb: 2,
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//           }}
//         />

//         <List>
//           {filteredChefs.map((chef) => (
//             <ListItemButton
//               key={chef.id}
//               onClick={() => setSelectedChef(chef)}
//               sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//             >
//               <ListItemText primary={chef.name} />
//             </ListItemButton>
//           ))}
//           {filteredChefs.length === 0 && (
//             <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//               No chefs found
//             </Typography>
//           )}
//         </List>
//       </Paper>

//       <Drawer
//         anchor="right"
//         open={Boolean(selectedChef)}
//         onClose={() => setSelectedChef(null)}
//         variant="persistent"
//         PaperProps={{
//           sx: { width: { xs: "100%", sm: "auto" }, p: 2, backgroundColor: "#ffe5cc" },
//         }}
//       >
//         {selectedChef && (
//           <Box>
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 , color:"#9d0706" }}>
//               {selectedChef.name}
//             </Typography>

//             <Typography sx={{fontWeight: "bold"}}>Rating:</Typography>
//             <Typography sx={{ fontSize: "1.5rem",fontWeight: "bold", color: "#9d0706" }}>
//               {"⭐".repeat(selectedChef.rating)}
//             </Typography>

//             <Typography sx={{ mt: 2 ,fontWeight: "bold"}}>Number of Violations: {selectedChef.violations}</Typography>
//             <Typography sx={{fontWeight: "bold"}}>Types of Violations: {selectedChef.types.join(", ")}</Typography>

//             <Typography sx={{ mt: 2 ,fontWeight: "bold"}}>Last 7 Days Progress:</Typography>
//             <Paper sx={{ p: 1, backgroundColor: "#f6d9d1" }}>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={selectedChef.weeklyProgress.map((v, i) => ({ day: `Day ${i+1}`, value: v }))}>
//                   <XAxis dataKey="day" />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#9d0706" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Paper>

//             <Typography sx={{ mt: 2 ,fontWeight: "bold"}}>Achievements:</Typography>
//             {selectedChef.achievements.length > 0 ? (
//               <List>
//                 {selectedChef.achievements.map((ach, idx) => (
//                   <ListItemText key={idx} primary={`🏆 ${ach}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No achievements yet</Typography>
//             )}

//             <Typography sx={{ mt: 2 , fontWeight: "bold",}}>Recommended Training:</Typography>
//             {selectedChef.recommendedTraining.length > 0 ? (
//               <List>
//                 {selectedChef.recommendedTraining.map((tr, idx) => (
//                   <ListItemText key={idx} primary={`📚 ${tr}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No trainings recommended</Typography>
//             )}

//             <Button
//               variant="contained"
//               sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//               onClick={() => setSelectedChef(null)}
//             >
//               Close
//             </Button>
//           </Box>
//         )}
//       </Drawer>
//     </Box>
//   );
// }  

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Drawer,
//   Paper,
//   Grid,
//   TextField,
//   Button,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { useSnackbar } from "notistack";

// export default function ChefPerformance() {
//   const [chefs, setChefs] = useState([]);
//   const [selectedChef, setSelectedChef] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const { enqueueSnackbar } = useSnackbar();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChefs = async () => {
//       try {
//         const res = await fetch("https://bla-6vcsv9au.b4a.run/auth/chiefs", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Raw response:", res);

//         if (!res.ok) {
//           const err = await res.json().catch(() => ({}));
//           console.log("Error response:", err);
//           enqueueSnackbar(err.detail || "Failed to fetch chefs", { variant: "error" });
//           return;
//         }

//         let data = await res.json();
//         console.log("Fetched data:", data);

//         // لو السيرفر بيرجع object بدل array، نفترض فيه مفتاح "chefs"
//         if (!Array.isArray(data) && data.chefs) {
//           data = data.chefs;
//         }

//         // Optional: Map data لو فيه missing fields
//         const mappedChefs = data.map((c) => ({
//           id: c.id,
//           name: c.name || "No Name",
//           rating: c.rating || 0,
//           violations: c.violations || 0,
//           types: c.types || [],
//           weeklyProgress: c.weeklyProgress || [0, 0, 0, 0, 0, 0, 0],
//           achievements: c.achievements || [],
//           recommendedTraining: c.recommendedTraining || [],
//         }));

//         setChefs(mappedChefs);
//       } catch (error) {
//         console.error("Network error while fetching chefs:", error);
//         enqueueSnackbar("Network error while fetching chefs", { variant: "error" });
//       }
//     };

//     fetchChefs();
//   }, [token, enqueueSnackbar]);

//   const filteredChefs = chefs.filter((c) =>
//     c.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ backgroundColor: "#191725", color: "#ffcb99", p: 2, mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffe5cc" }}>
//           Chef Performance Dashboard
//         </Typography>
//       </Paper>

//       <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//         <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
//           <Grid item xs="auto">
//             <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//               <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
//               <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{chefs.length}</Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         <TextField
//           placeholder="Search chefs..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           fullWidth
//           sx={{
//             mb: 2,
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//           }}
//         />

//         <List>
//           {filteredChefs.map((chef) => (
//             <ListItemButton
//               key={chef.id}
//               onClick={() => setSelectedChef(chef)}
//               sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//             >
//               <ListItemText primary={chef.name} />
//             </ListItemButton>
//           ))}
//           {filteredChefs.length === 0 && (
//             <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//               No chefs found
//             </Typography>
//           )}
//         </List>
//       </Paper>

//       <Drawer
//         anchor="right"
//         open={Boolean(selectedChef)}
//         onClose={() => setSelectedChef(null)}
//         variant="persistent"
//         PaperProps={{
//           sx: { width: { xs: "100%", sm: "auto" }, p: 2, backgroundColor: "#ffe5cc" },
//         }}
//       >
//         {selectedChef && (
//           <Box>
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#9d0706" }}>
//               {selectedChef.name}
//             </Typography>

//             <Typography sx={{ fontWeight: "bold" }}>Rating:</Typography>
//             <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#9d0706" }}>
//               {"⭐".repeat(selectedChef.rating)}
//             </Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Number of Violations: {selectedChef.violations}</Typography>
//             <Typography sx={{ fontWeight: "bold" }}>Types of Violations: {selectedChef.types.join(", ")}</Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Last 7 Days Progress:</Typography>
//             <Paper sx={{ p: 1, backgroundColor: "#f6d9d1" }}>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={selectedChef.weeklyProgress.map((v, i) => ({ day: `Day ${i+1}`, value: v }))}>
//                   <XAxis dataKey="day" />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#9d0706" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Paper>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Achievements:</Typography>
//             {selectedChef.achievements.length > 0 ? (
//               <List>
//                 {selectedChef.achievements.map((ach, idx) => (
//                   <ListItemText key={idx} primary={`🏆 ${ach}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No achievements yet</Typography>
//             )}

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Recommended Training:</Typography>
//             {selectedChef.recommendedTraining.length > 0 ? (
//               <List>
//                 {selectedChef.recommendedTraining.map((tr, idx) => (
//                   <ListItemText key={idx} primary={`📚 ${tr}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No trainings recommended</Typography>
//             )}

//             <Button
//               variant="contained"
//               sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//               onClick={() => setSelectedChef(null)}
//             >
//               Close
//             </Button>
//           </Box>
//         )}
//       </Drawer>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Drawer,
//   Paper,
//   Grid,
//   TextField,
//   Button,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { useSnackbar } from "notistack";

// export default function ChefPerformance() {
//   const [chefs, setChefs] = useState([]);
//   const [selectedChef, setSelectedChef] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const { enqueueSnackbar } = useSnackbar();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChefs = async () => {
//       try {
//         const res = await fetch("https://bla-6vcsv9au.b4a.run/auth/chiefs", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Raw response:", res);

//         if (!res.ok) {
//           const err = await res.json().catch(() => ({}));
//           console.log("Error response:", err);
//           enqueueSnackbar(err.detail || "Failed to fetch chefs", { variant: "error" });
//           return;
//         }

//         let data = await res.json();
//         console.log("Fetched data:", data);

//         // لو data object بدلاً من array
//         if (!Array.isArray(data)) {
//           if (Array.isArray(data.chefs)) data = data.chefs;
//           else data = []; // fallback لو مش موجود array
//         }

//         // تأكد من كل الحقول
//         const mappedChefs = data.map((c) => ({
//           id: c.id || Math.random(), // لو مفيش id
//           name: c.name || "No Name",
//           rating: c.rating || 0,
//           violations: c.violations || 0,
//           types: c.types || [],
//           weeklyProgress: c.weeklyProgress || [0, 0, 0, 0, 0, 0, 0],
//           achievements: c.achievements || [],
//           recommendedTraining: c.recommendedTraining || [],
//         }));

//         setChefs(mappedChefs);
//       } catch (error) {
//         console.error("Network error while fetching chefs:", error);
//         enqueueSnackbar("Network error while fetching chefs", { variant: "error" });
//       }
//     };

//     fetchChefs();
//   }, [token, enqueueSnackbar]);

//   const filteredChefs = chefs.filter((c) =>
//     c.name.toLowerCase().includes(searchText.toLowerCase())
//   );
 


//   return (
//     <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ backgroundColor: "#191725", color: "#ffcb99", p: 2, mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffe5cc" }}>
//           Chef Performance Dashboard
//         </Typography>
//       </Paper>

//       <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//         <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
//           <Grid item>
//             <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//               <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
//               <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{chefs.length}</Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         <TextField
//           placeholder="Search chefs..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           fullWidth
//           sx={{
//             mb: 2,
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//           }}
//         />

//         <List>
//           {filteredChefs.map((chef) => (
//             <ListItemButton
//               key={chef.id}
//               onClick={() => setSelectedChef(chef)}
//               sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//             >
//               <ListItemText primary={chef.name} />
//             </ListItemButton>
//           ))}
//           {filteredChefs.length === 0 && (
//             <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//               No chefs found
//             </Typography>
//           )}
//         </List>
//       </Paper>

//       <Drawer
//         anchor="right"
//         open={Boolean(selectedChef)}
//         onClose={() => setSelectedChef(null)}
//         variant="persistent"
//         PaperProps={{ sx: { width: { xs: "100%", sm: "auto" }, p: 2, backgroundColor: "#ffe5cc" } }}
//       >
//         {selectedChef && (
//           <Box>
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#9d0706" }}>
//               {selectedChef.name}
//             </Typography>

//             <Typography sx={{ fontWeight: "bold" }}>Rating:</Typography>
//             <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#9d0706" }}>
//               {"⭐".repeat(selectedChef.rating)}
//             </Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Number of Violations: {selectedChef.violations}</Typography>
//             <Typography sx={{ fontWeight: "bold" }}>Types of Violations: {selectedChef.types.join(", ")}</Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Last 7 Days Progress:</Typography>
//             <Paper sx={{ p: 1, backgroundColor: "#f6d9d1" }}>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={selectedChef.weeklyProgress.map((v, i) => ({ day: `Day ${i+1}`, value: v }))}>
//                   <XAxis dataKey="day" />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#9d0706" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Paper>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Achievements:</Typography>
//             {selectedChef.achievements.length > 0 ? (
//               <List>
//                 {selectedChef.achievements.map((ach, idx) => (
//                   <ListItemText key={idx} primary={`🏆 ${ach}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No achievements yet</Typography>
//             )}

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Recommended Training:</Typography>
//             {selectedChef.recommendedTraining.length > 0 ? (
//               <List>
//                 {selectedChef.recommendedTraining.map((tr, idx) => (
//                   <ListItemText key={idx} primary={`📚 ${tr}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No trainings recommended</Typography>
//             )}

//             <Button
//               variant="contained"
//               sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//               onClick={() => setSelectedChef(null)}
//             >
//               Close
//             </Button>
//           </Box>
//         )}
//       </Drawer>
//     </Box>
//   );
// }


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Drawer,
//   Paper,
//   Grid,
//   TextField,
//   Button,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { useSnackbar } from "notistack";

// export default function ChefPerformance() {
//   const [chefs, setChefs] = useState([]);
//   const [selectedChef, setSelectedChef] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const { enqueueSnackbar } = useSnackbar();

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchChefs = async () => {
//       try {
//         const res = await fetch("https://bla-6vcsv9au.b4a.run/auth/chiefs", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Raw response:", res);

//         if (!res.ok) {
//           const err = await res.json().catch(() => ({}));
//           console.log("Error response:", err);
//           enqueueSnackbar(err.detail || "Failed to fetch chefs", { variant: "error" });
//           return;
//         }

//         let data = await res.json();
//         console.log("Fetched data:", data); // هنا بنشوف شكل الداتا

//         // لو data object بدلاً من array
//         if (!Array.isArray(data)) {
//           if (Array.isArray(data.chefs)) data = data.chefs;
//           else data = []; // fallback لو مش موجود array
//         }

//         const mappedChefs = data.map((c) => ({
//           id: c.id || Math.random(),
//           name: c.name || "No Name",
//           rating: c.rating || 0,
//           violations: c.violations || 0,
//           types: c.types || [],
//           weeklyProgress: c.weeklyProgress || [0, 0, 0, 0, 0, 0, 0],
//           achievements: c.achievements || [],
//           recommendedTraining: c.recommendedTraining || [],
//         }));

//         console.log("Mapped chefs:", mappedChefs); // هنا نتاكد من الـ mapping

//         setChefs(mappedChefs);
//       } catch (error) {
//         console.error("Network error while fetching chefs:", error);
//         enqueueSnackbar("Network error while fetching chefs", { variant: "error" });
//       }
//     };

//     fetchChefs();
//   }, [token, enqueueSnackbar]);

//   const filteredChefs = chefs.filter((c) =>
//     c.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ backgroundColor: "#191725", color: "#ffcb99", p: 2, mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffe5cc" }}>
//           Chef Performance Dashboard
//         </Typography>
//       </Paper>

//       <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//         <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
//           <Grid item>
//             <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//               <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
//               <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{chefs.length}</Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         <TextField
//           placeholder="Search chefs..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           fullWidth
//           sx={{
//             mb: 2,
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//           }}
//         />

//         <List>
//           {filteredChefs.map((chef) => (
//             <ListItemButton
//               key={chef.id}
//               onClick={() => setSelectedChef(chef)}
//               sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//             >
//               <ListItemText primary={chef.name} />
//             </ListItemButton>
//           ))}
//           {filteredChefs.length === 0 && (
//             <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//               No chefs found
//             </Typography>
//           )}
//         </List>
//       </Paper>

//       <Drawer
//         anchor="right"
//         open={Boolean(selectedChef)}
//         onClose={() => setSelectedChef(null)}
//         variant="persistent"
//         PaperProps={{ sx: { width: { xs: "100%", sm: "auto" }, p: 2, backgroundColor: "#ffe5cc" } }}
//       >
//         {selectedChef && (
//           <Box>
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#9d0706" }}>
//               {selectedChef.name}
//             </Typography>

//             <Typography sx={{ fontWeight: "bold" }}>Rating:</Typography>
//             <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#9d0706" }}>
//               {"⭐".repeat(selectedChef.rating)}
//             </Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Number of Violations: {selectedChef.violations}</Typography>
//             <Typography sx={{ fontWeight: "bold" }}>Types of Violations: {selectedChef.types.join(", ")}</Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Last 7 Days Progress:</Typography>
//             <Paper sx={{ p: 1, backgroundColor: "#f6d9d1" }}>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={selectedChef.weeklyProgress.map((v, i) => ({ day: `Day ${i+1}`, value: v }))}>
//                   <XAxis dataKey="day" />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#9d0706" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Paper>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Achievements:</Typography>
//             {selectedChef.achievements.length > 0 ? (
//               <List>
//                 {selectedChef.achievements.map((ach, idx) => (
//                   <ListItemText key={idx} primary={`🏆 ${ach}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No achievements yet</Typography>
//             )}

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Recommended Training:</Typography>
//             {selectedChef.recommendedTraining.length > 0 ? (
//               <List>
//                 {selectedChef.recommendedTraining.map((tr, idx) => (
//                   <ListItemText key={idx} primary={`📚 ${tr}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No trainings recommended</Typography>
//             )}

//             <Button
//               variant="contained"
//               sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//               onClick={() => setSelectedChef(null)}
//             >
//               Close
//             </Button>
//           </Box>
//         )}
//       </Drawer>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Drawer,
//   Paper,
//   Grid,
//   TextField,
//   Button,
//   Avatar,
// } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { useSnackbar } from "notistack";

// export default function ChefPerformance() {
//   const [chefs, setChefs] = useState([]);
//   const [selectedChef, setSelectedChef] = useState(null);
//   const [searchText, setSearchText] = useState("");
//   const { enqueueSnackbar } = useSnackbar();

//   const token = localStorage.getItem("token"); // Access token بعد login

//   useEffect(() => {
//     const fetchChefs = async () => {
//       try {
//         const res = await fetch("https://bla-hvdf9iih.b4a.run/auth/chiefs", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Raw response:", res);

//         if (!res.ok) {
//           const err = await res.json().catch(() => ({}));
//           console.log("Error response:", err);
//           enqueueSnackbar(err.detail || "Failed to fetch chefs", { variant: "error" });
//           return;
//         }

//         let data = await res.json();
//         console.log("Fetched data:", data);

//         // لو السيرفر بيرجع object بدل array
//         if (!Array.isArray(data)) {
//           if (Array.isArray(data.chefs)) data = data.chefs;
//           else data = []; // fallback لو مش موجود array
//         }

//         const mappedChefs = data.map((c) => ({
//           id: c.id || Math.random(),
//           name: c.name || "No Name",
//           rating: c.rating || 0,
//           violations: c.violations || 0,
//           types: c.types || [],
//           weeklyProgress: c.weeklyProgress || [0, 0, 0, 0, 0, 0, 0],
//           achievements: c.achievements || [],
//           recommendedTraining: c.recommendedTraining || [],
//           image_url: c.image_url || null,
//         }));

//         setChefs(mappedChefs);
//       } catch (error) {
//         console.error("Network error while fetching chefs:", error);
//         enqueueSnackbar("Network error while fetching chefs", { variant: "error" });
//       }
//     };

//     fetchChefs();
//   }, [token, enqueueSnackbar]);

//   const filteredChefs = chefs.filter((c) =>
//     c.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
//       <Paper sx={{ backgroundColor: "#191725", color: "#ffcb99", p: 2, mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffe5cc" }}>
//           Chef Performance Dashboard
//         </Typography>
//       </Paper>

//       <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
//         <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
//           <Grid item>
//             <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
//               <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
//               <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{chefs.length}</Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         <TextField
//           placeholder="Search chefs..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           fullWidth
//           sx={{
//             mb: 2,
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#b68866" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//           }}
//         />

//         <List>
//           {filteredChefs.map((chef) => (
//             <ListItemButton
//               key={chef.id}
//               onClick={() => setSelectedChef(chef)}
//               sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
//             >
//               <ListItemText primary={chef.name} />
//             </ListItemButton>
//           ))}
//           {filteredChefs.length === 0 && (
//             <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
//               No chefs found
//             </Typography>
//           )}
//         </List>
//       </Paper>

//       <Drawer
//         anchor="right"
//         open={Boolean(selectedChef)}
//         onClose={() => setSelectedChef(null)}
//         variant="persistent"
//         PaperProps={{ sx: { width: { xs: "100%", sm: "auto" }, p: 2, backgroundColor: "#ffe5cc" } }}
//       >
//         {selectedChef && (
//           <Box>
//             {selectedChef.image_url && (
//               <Avatar
//                 src={`https://bla-hvdf9iih.b4a.run/auth/images/${selectedChef.image_url}`}
//                 sx={{ width: 80, height: 80, mb: 2 }}
//               />
//             )}
//             <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#9d0706" }}>
//               {selectedChef.name}
//             </Typography>

//             <Typography sx={{ fontWeight: "bold" }}>Rating:</Typography>
//             <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#9d0706" }}>
//               {"⭐".repeat(selectedChef.rating)}
//             </Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>
//               Number of Violations: {selectedChef.violations}
//             </Typography>
//             <Typography sx={{ fontWeight: "bold" }}>
//               Types of Violations: {selectedChef.types.join(", ")}
//             </Typography>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Last 7 Days Progress:</Typography>
//             <Paper sx={{ p: 1, backgroundColor: "#f6d9d1" }}>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart
//                   data={selectedChef.weeklyProgress.map((v, i) => ({ day: `Day ${i + 1}`, value: v }))}
//                 >
//                   <XAxis dataKey="day" />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#9d0706" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Paper>

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Achievements:</Typography>
//             {selectedChef.achievements.length > 0 ? (
//               <List>
//                 {selectedChef.achievements.map((ach, idx) => (
//                   <ListItemText key={idx} primary={`🏆 ${ach}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No achievements yet</Typography>
//             )}

//             <Typography sx={{ mt: 2, fontWeight: "bold" }}>Recommended Training:</Typography>
//             {selectedChef.recommendedTraining.length > 0 ? (
//               <List>
//                 {selectedChef.recommendedTraining.map((tr, idx) => (
//                   <ListItemText key={idx} primary={`📚 ${tr}`} />
//                 ))}
//               </List>
//             ) : (
//               <Typography>No trainings recommended</Typography>
//             )}

//             <Button
//               variant="contained"
//               sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//               onClick={() => setSelectedChef(null)}
//             >
//               Close
//             </Button>
//           </Box>
//         )}
//       </Drawer>
//     </Box>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  Paper,
  Grid,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSnackbar } from "notistack";

export default function ChefPerformance() {
  const [chefs, setChefs] = useState([]);
  const [selectedChef, setSelectedChef] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const token = localStorage.getItem("token"); // Access token بعد login

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const res = await fetch("https://marowael-depi.hf.space/chiefs", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Raw response:", res);

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          console.log("Error response:", err);
          enqueueSnackbar(err.detail || "Failed to fetch chefs", { variant: "error" });
          return;
        }

        let data = await res.json();
        console.log("Fetched data:", data);

        // لو فيه مفتاح chiefs، نستخدمه، لو array مباشرة نستخدمه، وإلا نعمل array فاضية
        const chefsArray = Array.isArray(data.chiefs) ? data.chiefs : Array.isArray(data) ? data : [];

        const mappedChefs = chefsArray.map((c) => ({
          id: c.id || Math.random(),
          name: c.name || "No Name",
          rating: c.rating || 0,
          violations: c.violations || 0,
          types: c.types || [],
          weeklyProgress: c.weeklyProgress || [0, 0, 0, 0, 0, 0, 0],
          achievements: c.achievements || [],
          recommendedTraining: c.recommendedTraining || [],
          image_url: c.image_url || null,
        }));

        setChefs(mappedChefs);
      } catch (error) {
        console.error("Network error while fetching chefs:", error);
        enqueueSnackbar("Network error while fetching chefs", { variant: "error" });
      }
    };

    fetchChefs();
  }, [token, enqueueSnackbar]);

  const filteredChefs = chefs.filter((c) =>
    c.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", backgroundColor: "#ffcb99" }}>
      <Paper sx={{ backgroundColor: "#191725", color: "#ffcb99", p: 2, mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffe5cc" }}>
          Chef Performance Dashboard
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, backgroundColor: "#ffe5cc", minHeight: "70vh" }}>
        <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-around" }}>
          <Grid item>
            <Paper sx={{ p: 1, textAlign: "center", backgroundColor: "#f6d9d1", minWidth: 100 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Total Chefs</Typography>
              <Typography sx={{ fontWeight: "bold", color: "#9d0706" }}>{chefs.length}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <TextField
          placeholder="Search chefs..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
              "&:hover fieldset": { borderColor: "#b68866" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
          }}
        />

        <List>
          {filteredChefs.map((chef) => (
            <ListItemButton
              key={chef.id}
              onClick={() => setSelectedChef(chef)}
              sx={{ mb: 1, borderRadius: 2, backgroundColor: "#f6d9d1", "&:hover": { backgroundColor: "#b68866" } }}
            >
              <ListItemText primary={chef.name} />
            </ListItemButton>
          ))}
          {filteredChefs.length === 0 && (
            <Typography align="center" sx={{ mt: 2, color: "#191725" }}>
              No chefs found
            </Typography>
          )}
        </List>
      </Paper>

      <Drawer
  anchor="right"
  open={Boolean(selectedChef)}
  onClose={() => setSelectedChef(null)}
  variant="persistent"
  PaperProps={{ sx: { width: { xs: "100%", sm: "auto" }, p: 2, backgroundColor: "#ffe5cc" } }}
>
  {selectedChef && (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        {selectedChef.name}
      </Typography>

      <Typography sx={{ mb: 1 }}>
        Age: {selectedChef.age || Math.floor(Math.random() * 20) + 20}
      </Typography>

      <Typography sx={{ mb: 1 }}>
        Role: {selectedChef.role || "Chef"}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
        onClick={() => setSelectedChef(null)}
      >
        Close
      </Button>
    </Box>
  )}
</Drawer>

    </Box>
  );
}
