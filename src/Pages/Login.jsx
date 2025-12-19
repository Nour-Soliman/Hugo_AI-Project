// // export default Login;

// import React, { useState } from "react";
// import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const users = [
//   { email: "admin@example.com", password: "123456", role: "admin" },

//   // الموظفين
//   { email: "ahmed@company.com", password: "123456", role: "employee", id: 1 },
//   { email: "sara@company.com", password: "123456", role: "employee", id: 2 },
//   { email: "ali@company.com", password: "123456", role: "employee", id: 3 }
// ];


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   // const handleLogin = () => {
//   // // هل المستخدم مسجل؟
//   // const foundUser = users.find(
//   //   (u) => u.email === email && u.password === password
//   // );

//   // if (!foundUser) {
//   //   enqueueSnackbar("Invalid credentials!", { variant: "error" });
//   //   return;
//   // }
//   // داخل handleLogin
// const handleLogin = () => {
//   if (email === "admin@example.com" && password === "123456") {
//     enqueueSnackbar("Login Successful!", { variant: "success" });
//     navigate("/dashboard", { state: { role: "admin", userEmail: email } });
//   } else if (email === "chef1@example.com" && password === "chefpass") {
//     enqueueSnackbar("Login Successful!", { variant: "success" });
//     navigate("/dashboard", { state: { role: "chef", userEmail: email } });
//   } else {
//     enqueueSnackbar("Invalid credentials!", { variant: "error" });
//   }
// };
//   return (
//     <Box
//   sx={{
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866"
//         //   backdropFilter:"",
//         }}
//       >
//         <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#9d0706" }}>
//           Hugo AI Login
//         </Typography>
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//         "& .MuiOutlinedInput-root": {
//       "&.Mui-focused fieldset": {
//         borderColor: "#191725", // ده اللون اللي هيظهر عند focus
//       },
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#191725", // اللون بتاع اللابل عند focus
//     },
//   }}
//         />
//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//       borderColor: "#191725", // focus border color
// "& .MuiOutlinedInput-root": {
//       "&.Mui-focused fieldset": {
//         borderColor: "#191725",
//       },
//     },
//     "& .MuiInputLabel-root.Mui-focused": {
//       color: "#191725",
//     },
//   }}
//         />
//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             background: "#9d0706",
//             color : "#b68866",
//             "&:hover": { background: "#191725" },
//             paddingY: 1.5,
//             fontWeight: "bold",
//           }}
//         //   onClick={handleLogin}
//         onClick={()=>navigate("/dashboard")}
//         >
//           Login
//         </Button>
//         <Typography variant="body2" align="center" sx={{ color: "#191725" , cursor:"pointer",textDecoration:"underline" }}
//         onClick={()=> navigate("/admin-contact")}>
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// // قائمة المستخدمين
// const users = [
//   { email: "admin@example.com", password: "123456", role: "admin" },
//   { email: "ahmed@company.com", password: "123456", role: "employee", id: 1 },
//   { email: "sara@company.com", password: "123456", role: "employee", id: 2 },
//   { email: "ali@company.com", password: "123456", role: "employee", id: 3 },
// ];

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const handleLogin = () => {
//     const foundUser = users.find(u => u.email === email && u.password === password);
//     if (!foundUser) {
//       enqueueSnackbar("Invalid credentials!", { variant: "error" });
//       return;
//     }

//     enqueueSnackbar("Login Successful!", { variant: "success" });
//     navigate("/dashboard", { 
//       state: { 
//         role: foundUser.role, 
//         userEmail: foundUser.email, 
//         id: foundUser.id 
//       } 
//     });
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           align="center" 
//           sx={{ fontWeight: "bold", color: "#9d0706" }}
//         >
//           Hugo AI Login
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             background: "#9d0706",
//             color: "#b68866",
//             "&:hover": { background: "#191725" },
//             paddingY: 1.5,
//             fontWeight: "bold",
//           }}
//           onClick={handleLogin}
//         >
//           Login
//         </Button>

//         <Typography 
//           variant="body2" 
//           align="center" 
//           sx={{ color: "#191725", cursor: "pointer", textDecoration: "underline" }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const users = [
//   { email: "admin@example.com", password: "123456", role: "admin" },
//   { email: "chef1@example.com", password: "chefpass", role: "employee", id: 1 },
//   { email: "chef2@example.com", password: "chefpass", role: "employee", id: 2 },
//   { email: "chef3@example.com", password: "chefpass", role: "employee", id: 3 },
// ];

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const handleLogin = () => {
//     const foundUser = users.find(u => u.email === email && u.password === password);

//     if (!foundUser) {
//       enqueueSnackbar("Invalid credentials!", { variant: "error" });
//       return;
//     }

//     enqueueSnackbar("Login Successful!", { variant: "success" });
//     navigate("/dashboard", { state: { role: foundUser.role, userEmail: foundUser.email } });
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         px: 2, // padding افقي للموبايل
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: { xs: 3, sm: 4 },
//           borderRadius: 3,
//           width: { xs: "100%", sm: 400 },
//           maxWidth: 450,
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ fontWeight: "bold", color: "#9d0706" }}
//         >
//           Hugo AI Login
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
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
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
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
//           fullWidth
//           sx={{
//             background: "#9d0706",
//             color: "#b68866",
//             "&:hover": { background: "#191725" },
//             paddingY: 1.5,
//             fontWeight: "bold",
//           }}
//           onClick={handleLogin}
//         >
//           Login
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ color: "#191725", cursor: "pointer", textDecoration: "underline" }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// // قائمة المستخدمين
// const users = [
//   { email: "admin@example.com", password: "123456", role: "admin", id: 0 },
//   { email: "ahmed@company.com", password: "123456", role: "employee", id: 1 },
//   { email: "sara@company.com", password: "123456", role: "employee", id: 2 },
//   { email: "ali@company.com", password: "123456", role: "employee", id: 3 },
// ];

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const handleLogin = () => {
//     // البحث عن المستخدم الصحيح
//     const foundUser = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (!foundUser) {
//       enqueueSnackbar("Invalid credentials!", { variant: "error" });
//       return;
//     }

//     enqueueSnackbar("Login Successful!", { variant: "success" });
//     // تمرير البيانات للداش بورد
//     navigate("/dashboard", { state: { role: foundUser.role, userEmail: foundUser.email, id: foundUser.id } });
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#9d0706" }}>
//           Hugo AI Login
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             background: "#9d0706",
//             color: "#b68866",
//             "&:hover": { background: "#191725" },
//             paddingY: 1.5,
//             fontWeight: "bold",
//           }}
//           onClick={handleLogin} // <--- مهم
//         >
//           Login
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ color: "#191725", cursor: "pointer", textDecoration: "underline" }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   // ⬇⬇⬇ تعديل مهم: هنستخدم API بدل users الثابتة
//   const handleLogin = async () => {
//     try {
//       const response = await fetch("https://your-api.com/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         enqueueSnackbar(data.message || "Invalid credentials!", {
//           variant: "error",
//         });
//         return;
//       }

//       // هنا الـ API لازم يرجّع role و id
//       const { role, id } = data;

//       enqueueSnackbar("Login Successful!", { variant: "success" });

//       // نمرر البيانات للداش بورد
//       navigate("/dashboard", {
//         state: { role, userEmail: email, id },
//       });
//     } catch (error) {
//       enqueueSnackbar("Network error!", { variant: "error" });
//       console.error(error);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ fontWeight: "bold", color: "#9d0706" }}
//         >
//           Hugo AI Login
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             background: "#9d0706",
//             color: "#b68866",
//             "&:hover": { background: "#191725" },
//             paddingY: 1.5,
//             fontWeight: "bold",
//           }}
//           onClick={handleLogin}
//         >
//           Login
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           sx={{
//             color: "#191725",
//             cursor: "pointer",
//             textDecoration: "underline",
//           }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [loading, setLoading] = useState(false);
 

//   //For test
//   const handleLogin = async () => {
//   if (!email || !password) {
//     enqueueSnackbar("Please enter email and password", { variant: "warning" });
//     return;
//   }

//   setLoading(true);
//   try {
//     const response = await fetch("https://your-api.com/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     let data;
//     if (response.ok) {
//       data = await response.json();
//       // حفظ token لو موجود
//       if (data.token) localStorage.setItem("token", data.token);
//     } else {
//       // لو الـ API مش جاهز، نستخدم بيانات اختبار
//       data = { role: "employee", id: 1 };
//       enqueueSnackbar("Using test data (API not ready)", { variant: "info" });
//     }

//     // حفظ بيانات المستخدم مؤقتًا في localStorage
//     localStorage.setItem("user", JSON.stringify({ email, role: data.role, id: data.id }));

//     enqueueSnackbar("Login Successful!", { variant: "success" });

//     navigate("/dashboard", {
//       state: { role: data.role, userEmail: email, id: data.id },
//     });
//   } catch (error) {
//     enqueueSnackbar("Network error! Using test data.", { variant: "warning" });

//     const testUser = { email, role: "employee", id: 1 };
//     localStorage.setItem("user", JSON.stringify(testUser));
//     navigate("/dashboard", { state: testUser });

//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// };




  //For Api 
  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     enqueueSnackbar("Please enter email and password", { variant: "warning" });
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await fetch("https://your-api.com/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();
  //     console.log("API Response:", data); // للتأكد من الرد

  //     if (!response.ok) {
  //       enqueueSnackbar(data.message || "Invalid credentials!", { variant: "error" });
  //       setLoading(false);
  //       return;
  //     }

  //     // حفظ token لو موجود
  //     if (data.token) localStorage.setItem("token", data.token);

  //     const { role, id } = data;

  //     enqueueSnackbar("Login Successful!", { variant: "success" });

  //     // تمرير البيانات للـ Dashboard
  //     navigate("/dashboard", {
  //       state: { role, userEmail: email, id },
  //     });
  //   } catch (error) {
  //     enqueueSnackbar("Network error!", { variant: "error" });
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ fontWeight: "bold", color: "#9d0706" }}
//         >
//           Hugo AI Login
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           disabled={loading}
//           sx={{
//             background: "#9d0706",
//             color: "#b68866",
//             "&:hover": { background: "#191725" },
//             paddingY: 1.5,
//             fontWeight: "bold",
//           }}
//           onClick={handleLogin}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           sx={{
//             color: "#191725",
//             cursor: "pointer",
//             textDecoration: "underline",
//           }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       enqueueSnackbar("Please enter email and password", { variant: "warning" });
//       return;
//     }

//     setLoading(true);
//     try {
//       // هنا لو الـ API مش جاهز نستخدم بيانات اختبار
//       let data = { role: "employee", id: 1 }; // بدلها حسب الحاجة، "admin" لو تجربي دور الادمن

//       // لو الـ API جاهز، هتكون العملية كالتالي:
//       // const response = await fetch("https://your-api.com/login", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify({ email, password }),
//       // });
//       // if (response.ok) data = await response.json();

//       // حفظ بيانات المستخدم مؤقتًا
//       localStorage.setItem("user", JSON.stringify({ email, role: data.role, id: data.id }));

//       enqueueSnackbar("Login Successful!", { variant: "success" });

//       // 🔹 التعديل الرئيسي: نوجهه لصفحة Home بدل Dashboard
//       navigate("/home", {
//         state: { role: data.role, userEmail: email },
//       });
//     } catch (error) {
//       enqueueSnackbar("Network error! Using test data.", { variant: "warning" });
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ fontWeight: "bold", color: "#9d0706" }}
//         >
//           Hugo AI Login
//         </Typography>

//         <TextField
//   label="Email"
//   variant="outlined"
//   fullWidth
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": { borderColor: "#191725", borderWidth: "2px" },
//       "&:hover fieldset": { borderColor: "#191725" },
//       "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//       "& input:-webkit-autofill": {
//         WebkitBoxShadow: "0 0 0 1000px #fff inset", // خلفية بيضاء أو اللون اللي تحبيه
//         WebkitTextFillColor: "#191725", // لون الخط اللي انتي عايزاه
//       },
//     },
//     "& .MuiInputLabel-root": { color: "#191725" },
//     "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//   }}
// />


//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#191725", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#191725"},
//               "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           disabled={loading}
//           sx={{ background: "#9d0706", color: "#b68866" }}
//           onClick={handleLogin}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ cursor: "pointer", textDecoration: "underline" }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;










// import React, { useState } from "react";
// import { TextField, Button, Typography, Box, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       enqueueSnackbar("Please enter email and password", { variant: "warning" });
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("https://bla-ndwwcwdb.b4a.run/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const result = await response.json();
//       console.log("Login response:", result); // شوف الرد في الكونسول

//       if (!response.ok) {
//         enqueueSnackbar(result.detail?.[0]?.msg || "Invalid email or password", { variant: "error" });
//         setLoading(false);
//         return;
//       }

//       // حفظ الـ token وبيانات المستخدم
//       localStorage.setItem("token", result.access_token);
//       localStorage.setItem("user", JSON.stringify(result.user));

//       enqueueSnackbar("Login Successful!", { variant: "success" });

//       // الانتقال للصفحة الرئيسية
//       navigate("/home", {
//         state: {
//           role: result.user.role,
//           userEmail: result.user.email,
//         },
//       });

//     } catch (error) {
//       console.error("Network error:", error);
//       enqueueSnackbar("Network error!", { variant: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 400 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           background: "#b68866",
//         }}
//       >
//         <Typography
//           variant="h4"
//           align="center"
//           sx={{ fontWeight: "bold", color: "#9d0706" }}
//         >
//           Hugo AI Login
//         </Typography>

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#191725", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#191725" },
//               "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//               "& input:-webkit-autofill": {
//                 WebkitBoxShadow: "0 0 0 1000px #fff inset",
//                 WebkitTextFillColor: "#191725",
//               },
//             },
//             "& .MuiInputLabel-root": { color: "#191725" },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="password"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#191725", borderWidth: "2px" },
//               "&:hover fieldset": { borderColor: "#191725" },
//               "&.Mui-focused fieldset": { borderColor: "#9d0706" },
//             },
//             "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
//           }}
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           disabled={loading}
//           sx={{ background: "#9d0706", color: "#b68866" }}
//           onClick={handleLogin}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </Button>

//         <Typography
//           variant="body2"
//           align="center"
//           sx={{ cursor: "pointer", textDecoration: "underline" }}
//           onClick={() => navigate("/admin-contact")}
//         >
//           Forgot password? Contact admin
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      enqueueSnackbar("Please enter email and password", { variant: "warning" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://marowael-depi.hf.space/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("Login response:", result);

      if (!response.ok) {
        enqueueSnackbar(result.detail?.[0]?.msg || "Invalid email or password", {
          variant: "error",
        });
        setLoading(false);
        return;
      }

      // Save token + user data
      localStorage.setItem("token", result.access_token);
      localStorage.setItem("user", JSON.stringify(result.user));

      enqueueSnackbar("Login Successful!", { variant: "success" });

      navigate("/home", {
        state: {
          role: result.user.role,
          userEmail: result.user.email,
        },
      });

    } catch (error) {
      console.error("Network error:", error);
      enqueueSnackbar("Network error!", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          padding: 4,
          borderRadius: 3,
          width: { xs: "90%", sm: 400 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
          background: "#b68866",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "#9d0706" }}
        >
          Hugo AI Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#191725", borderWidth: "2px" },
              "&:hover fieldset": { borderColor: "#191725" },
              "&.Mui-focused fieldset": { borderColor: "#9d0706" },
              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px #fff inset",
                WebkitTextFillColor: "#191725",
              },
            },
            "& .MuiInputLabel-root": { color: "#191725" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
          }}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#191725", borderWidth: "2px" },
              "&:hover fieldset": { borderColor: "#191725" },
              "&.Mui-focused fieldset": { borderColor: "#9d0706" },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{ background: "#9d0706", color: "#b68866" }}
          onClick={handleLogin}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate("/admin-contact")}
        >
          Forgot password? Contact admin
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
