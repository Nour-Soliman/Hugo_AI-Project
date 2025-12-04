// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from "@mui/material";

// // Mock Data مؤقت
// const initialChefs = [
//   { id: 1, name: "John Doe", email: "john@example.com", role: "Chef", avatar: null },
//   { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Sous Chef", avatar: null },
//   { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Chef", avatar: null },
//   { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Chef", avatar: null },
//   { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Chef", avatar: null },
//   { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Chef", avatar: null },
// ];

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState(initialChefs);
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     avatar: null,
//   });

//   // فتح/غلق الـ dialog
//   const handleOpen = (chef = null) => {
//     if (chef) setEditChef(chef);
//     else setEditChef(null);
//     setFormData({
//       name: chef?.name || "",
//       email: chef?.email || "",
//       role: chef?.role || "",
//       avatar: null,
//     });
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   // تغيير البيانات
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   // حفظ البيانات
//   const handleSave = () => {
//     if (editChef) {
//       // تحديث
//       setChefs(chefs.map(c => c.id === editChef.id ? { ...c, ...formData, avatar: formData.avatar ? URL.createObjectURL(formData.avatar) : c.avatar } : c));
//     } else {
//       // إضافة
//       const newChef = {
//         id: Date.now(),
//         ...formData,
//         avatar: formData.avatar ? URL.createObjectURL(formData.avatar) : null,
//       };
//       setChefs([...chefs, newChef]);
//     }
//     handleClose();
//   };

//   // حذف شيف
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this chef?")) {
//       setChefs(chefs.filter(c => c.id !== id));
//     }
//   };

//   return (
//     <Box>
//       {/* زرار Add */}
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => handleOpen()}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       {/* جدول / كروت */}
//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.avatar || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Dialog Add / Edit */}
//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           />
//           <Button variant="contained" component="label" sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }









// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); // بداية فاضية
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//     avatar: null,
//   });

//   // فتح/غلق الـ dialog
//   const handleOpen = (chef = null) => {
//     if (chef) setEditChef(chef);
//     else setEditChef(null);
//     setFormData({
//       name: chef?.name || "",
//       email: chef?.email || "",
//       password: "",
//       role: chef?.role || "",
//       avatar: null,
//     });
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   // تغيير البيانات
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   // حفظ البيانات → يضيف للباك
//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const formDataToSend = new FormData();
//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("email", formData.email);
//       formDataToSend.append("password", formData.password);
//       formDataToSend.append("role", formData.role);
//       if (formData.avatar) formDataToSend.append("image", formData.avatar);

//       const response = await fetch("https://hugo-ai-ten.vercel.app/auth/signup", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formDataToSend,
//       });

//       const result = await response.json();
//       console.log("Signup response:", result);

//       if (!response.ok) {
//         alert(result.detail?.[0]?.msg || "Failed to add chef");
//         return;
//       }

//       // بعد ما الباك يرجع الموظف الجديد، نضيفه للقائمة في الواجهة
//       setChefs([...chefs, result]);
//       handleClose();
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error!");
//     }
//   };

//   // حذف الموظف → مؤقت في الواجهة
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this chef?")) {
//       setChefs(chefs.filter(c => c.id !== id));
//     }
//   };

//   return (
//     <Box>
//       {/* زرار Add */}
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => handleOpen()}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       {/* جدول / كروت */}
//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.image_url || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Dialog Add / Edit */}
//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {!editChef && (
//             <TextField
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           )}
//           <TextField
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           />
//           <Button variant="contained" component="label" sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }





// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); // قائمة الموظفين
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     avatar: null,
//   });

//   // فتح/غلق الـ dialog
//   const handleOpen = (chef = null) => {
//     if (chef) setEditChef(chef);
//     else setEditChef(null);
//     setFormData({
//       name: chef?.name || "",
//       email: chef?.email || "",
//       password: "",
//       role: chef?.role || "",
//       avatar: null,
//     });
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   // تغيير البيانات
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   // إضافة أو تعديل شيف
//   const handleSave = async () => {
//     // التأكد من وجود كل الحقول المطلوبة
//     if (!formData.name || !formData.email || (!editChef && !formData.password) || !formData.role) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // لازم توكن تسجيل الدخول موجود
//       const dataToSend = new FormData();
//       dataToSend.append("name", formData.name);
//       dataToSend.append("email", formData.email);
//       if (!editChef) dataToSend.append("password", formData.password); // الباسورد جديد فقط عند إضافة
//       dataToSend.append("role", formData.role);
//       if (formData.avatar) dataToSend.append("image", formData.avatar);

//       const url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: dataToSend,
//       });

//       const result = await response.json();
//       console.log("Signup response:", result);

//       if (!response.ok) {
//         alert(result.detail?.[0]?.msg || "Failed to add chef");
//         return;
//       }

//       // بعد إضافة شيف بنجاح نحدث القائمة
//       setChefs([...chefs, result]);
//       handleClose();
//       alert("Chef added successfully!");
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error!");
//     }
//   };

//   // حذف شيف (مؤقت على الواجهة)
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this chef?")) {
//       setChefs(chefs.filter(c => c.id !== id));
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => handleOpen()}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.image_url || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {!editChef && (
//             <TextField
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <TextField
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             variant="contained"
//             component="label"
//             sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//           >
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSave}
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); // قائمة الموظفين
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     avatar: null,
//   });

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", avatar: null });
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     // تحقق من الحقول المطلوبة
//     if (!formData.name || !formData.email || !formData.password) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // توكن تسجيل الدخول
//       const dataToSend = new FormData();
//       dataToSend.append("name", formData.name);
//       dataToSend.append("email", formData.email);
//       dataToSend.append("password", formData.password);
//       dataToSend.append("role", "chef"); // كل موظف جديد دوره chef
//       if (formData.avatar) dataToSend.append("image", formData.avatar);

//       const url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: dataToSend,
//       });

//       const result = await response.json();
//       console.log("Signup response:", result);

//       if (!response.ok) {
//         alert(result.detail?.[0]?.msg || "Failed to add chef");
//         return;
//       }

//       // تحديث قائمة الموظفين بعد الإضافة
//       setChefs([...chefs, result]);
//       handleClose();
//       alert("Chef added successfully!");
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error!");
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this chef?")) {
//       setChefs(chefs.filter(c => c.id !== id));
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={handleOpen}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.image_url || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">Chef</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => alert("Edit function coming soon")}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add Chef</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             variant="contained"
//             component="label"
//             sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//           >
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSave}
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }



// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); // قائمة الموظفين
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     avatar: null,
//   });

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", avatar: null });
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     // تحقق من الحقول المطلوبة
//     if (!formData.name || !formData.email || !formData.password) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // توكن تسجيل الدخول
//       if (!token) {
//         alert("You must be logged in as admin to add chefs.");
//         return;
//       }

//       const dataToSend = new FormData();
//       dataToSend.append("name", formData.name);
//       dataToSend.append("email", formData.email);
//       dataToSend.append("password", formData.password);
//       dataToSend.append("role", "chef"); // كل موظف جديد دوره chef
//       if (formData.avatar) dataToSend.append("image", formData.avatar);

//       const url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: dataToSend,
//       });

//       const result = await response.json();
//       console.log("Signup response:", result);

//       if (!response.ok) {
//         alert(result.detail?.[0]?.msg || "Failed to add chef");
//         return;
//       }

//       // تحديث قائمة الموظفين بعد الإضافة
//       setChefs([...chefs, result]);
//       handleClose();
//       alert("Chef added successfully!");
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error!");
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this chef?")) {
//       setChefs(chefs.filter(c => c.id !== id));
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={handleOpen}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.image_url || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">Chef</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => alert("Edit function coming soon")}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add Chef</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             variant="contained"
//             component="label"
//             sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//           >
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSave}
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }


// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); // قائمة الموظفين
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "chef", // القيمة الافتراضية Chef
//     avatar: null,
//   });

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", role: "chef", avatar: null });
//     setOpen(true);
//   };
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     // تحقق من الحقول المطلوبة
//     if (!formData.name || !formData.email || !formData.password || !formData.role) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token"); // توكن تسجيل الدخول
//       if (!token) {
//         alert("You must be logged in as admin to add chefs.");
//         return;
//       }

//       const dataToSend = new FormData();
//       dataToSend.append("name", formData.name);
//       dataToSend.append("email", formData.email);
//       dataToSend.append("password", formData.password);
//       dataToSend.append("role", formData.role); // Field role
//       dataToSend.append("image", formData.avatar || new File([""], "default.png"));

//       // 🔹 Debug: اعرض كل الحقول قبل الإرسال
//       console.log("Sending FormData:");
//       for (let pair of dataToSend.entries()) {
//         console.log(pair[0] + ": ", pair[1]);
//       }

//       const url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: dataToSend,
//       });

//       const result = await response.json();
//       console.log("Status:", response.status, response.statusText);
//       console.log("Signup response:", result);

//       if (!response.ok) {
//         alert(result.detail?.[0]?.msg || "Failed to add user");
//         return;
//       }

//       // تحديث قائمة الموظفين بعد الإضافة
//       setChefs([...chefs, result]);
//       handleClose();
//       alert(`${formData.role} added successfully!`);
//     } catch (error) {
//       console.error("Network error:", error);
//       alert("Network error!");
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       setChefs(chefs.filter(c => c.id !== id));
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={handleOpen}
//         >
//           Add User
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.image_url || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => alert("Edit function coming soon")}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chef">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>
//           <Button
//             variant="contained"
//             component="label"
//             sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//           >
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSave}
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }





























// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); // هنعرض البيانات من الباك
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     avatar: null,
//   });

//   const token = localStorage.getItem("access_token"); // توكين بعد login

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   // جلب الشيفات من الباك
//   const fetchChefs = async () => {
//     try {
//       const res = await fetch("https://hugo-ai-ten.vercel.app/auth/users", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to fetch chefs");
//       const data = await res.json();
//       setChefs(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleOpen = (chef = null) => {
//     if (chef) setEditChef(chef);
//     else setEditChef(null);

//     setFormData({
//       name: chef?.name || "",
//       email: chef?.email || "",
//       password: "", // جديد دايمًا لازم تدخل باسورد
//       role: chef?.role || "",
//       avatar: null,
//     });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) setFormData({ ...formData, avatar: files[0] });
//     else setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     // التحقق من required
//     if (!formData.name || !formData.email || !formData.password || !formData.role || (!editChef && !formData.avatar)) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);
//     if (formData.avatar) data.append("image", formData.avatar);

//     try {
//       let url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       let method = "POST";

//       if (editChef) {
//         // تعديل الشيف
//         url = `https://hugo-ai-ten.vercel.app/auth/users/${editChef.id}`;
//         method = "PUT";
//       }

//       const res = await fetch(url, {
//         method,
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         console.error("Failed to save chef:", result);
//         alert("Failed to save chef. Check console.");
//         return;
//       }

//       alert(editChef ? "Chef updated!" : "Chef added!");
//       handleClose();
//       fetchChefs(); // تحديث القائمة
//     } catch (error) {
//       console.error(error);
//       alert("Error saving chef");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this chef?")) return;

//     try {
//       const res = await fetch(`https://hugo-ai-ten.vercel.app/auth/users/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to delete chef");
//       alert("Chef deleted!");
//       fetchChefs();
//     } catch (error) {
//       console.error(error);
//       alert("Error deleting chef");
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => handleOpen()}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid key={chef.id} xs={12} sm={6} md={4}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={chef.image_url || "/default-avatar.png"}
//                 alt={chef.name}
//                 sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1 }}
//               />
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chef">Chef</MenuItem>
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>
//           <Button
//             variant="contained"
//             component="label"
//             sx={{ mt: 1, backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//           >
//             Upload Avatar
//             <input hidden type="file" name="avatar" onChange={handleChange} required={!editChef} />
//           </Button>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }



// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]); 
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const token = localStorage.getItem("access_token"); 

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   const fetchChefs = async () => {
//     try {
//       const res = await fetch("https://hugo-ai-ten.vercel.app/auth/users", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to fetch chefs");
//       const data = await res.json();
//       setChefs(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleOpen = (chef = null) => {
//     if (chef) setEditChef(chef);
//     else setEditChef(null);

//     setFormData({
//       name: chef?.name || "",
//       email: chef?.email || "",
//       password: "",
//       role: chef?.role || "",
//     });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     // required check
//     if (!formData.name || !formData.email || !formData.password || !formData.role) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);

//     try {
//       let url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       let method = "POST";

//       if (editChef) {
//         url = `https://hugo-ai-ten.vercel.app/auth/users/${editChef.id}`;
//         method = "PUT";
//       }

//       const res = await fetch(url, {
//         method,
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         console.error("Failed to save chef:", result);
//         alert("Failed to save chef. Check console.");
//         return;
//       }

//       alert(editChef ? "Chef updated!" : "Chef added!");
//       handleClose();
//       fetchChefs();
//     } catch (error) {
//       console.error(error);
//       alert("Error saving chef");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this chef?")) return;

//     try {
//       const res = await fetch(`https://hugo-ai-ten.vercel.app/auth/users/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to delete chef");
//       alert("Chef deleted!");
//       fetchChefs();
//     } catch (error) {
//       console.error(error);
//       alert("Error deleting chef");
//     }
//   };

//   return (
//     <Box>
//       <Box sx={{ mb: 3 }}>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => handleOpen()}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid key={chef.id} xs={12} sm={6} md={4}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chef">Chef</MenuItem>
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }



// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
// } from "@mui/material";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const token = localStorage.getItem("token"); // استخدمي نفس الاسم اللي خزنتي فيه التوكين باللوجن

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   const fetchChefs = async () => {
//     try {
//       const res = await fetch("https://hugo-ai-ten.vercel.app/auth/users", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to fetch chefs");
//       const data = await res.json();
//       setChefs(data);
//     } catch (error) {
//       console.error("Error fetching chefs:", error);
//     }
//   };

//   const handleOpen = (chef = null) => {
//     setEditChef(chef);
//     setFormData({
//       name: chef?.name || "",
//       email: chef?.email || "",
//       password: "",
//       role: chef?.role || "",
//     });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role) {
//       alert("Please fill all required fields!");
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);

//     try {
//       let url = "https://hugo-ai-ten.vercel.app/auth/signup";
//       let method = "POST";

//       if (editChef) {
//         url = `https://hugo-ai-ten.vercel.app/auth/users/${editChef.id}`;
//         method = "PUT";
//       }

//       const res = await fetch(url, {
//         method,
//         headers: { Authorization: `Bearer ${token}` }, // **لا تستخدمي Content-Type هنا**
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         console.error("Failed to save chef:", result);
//         alert(result.detail?.[0]?.msg || "Failed to save chef. Check console.");
//         return;
//       }

//       alert(editChef ? "Chef updated!" : "Chef added!");
//       handleClose();
//       fetchChefs();
//     } catch (error) {
//       console.error("Error saving chef:", error);
//       alert("Error saving chef");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this chef?")) return;

//     try {
//       const res = await fetch(`https://hugo-ai-ten.vercel.app/auth/users/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (!res.ok) throw new Error("Failed to delete chef");
//       alert("Chef deleted!");
//       fetchChefs();
//     } catch (error) {
//       console.error(error);
//       alert("Error deleting chef");
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         variant="contained"
//         sx={{ mb: 2, backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//         onClick={() => handleOpen()}
//       >
//         Add Chef
//       </Button>

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item key={chef.id} xs={12} sm={6} md={4}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2">{chef.role}</Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField select label="Role" name="role" value={formData.role} onChange={handleChange} required>
//             <MenuItem value="chef">Chef</MenuItem>
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
//   Grid,
//   CircularProgress,
//   Alert
// } from "@mui/material";
// import { useSnackbar } from "notistack";

// const API_BASE_URL = "https://hugo-ai-ten.vercel.app";

// export default function ChefsManagement() {
//   const [chefs, setChefs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [editChef, setEditChef] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "chef",
//     image: null,
//   });

//   const { enqueueSnackbar } = useSnackbar();
//   const token = localStorage.getItem("access_token");

//   // Fetch all chefs on component mount
//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   const fetchChefs = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${API_BASE_URL}/auth/users`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) throw new Error("Failed to fetch chefs");
//       const data = await res.json();
//       // Filter only chefs
//       const chefsList = Array.isArray(data) ? data.filter(user => user.role === "chef") : [];
//       setChefs(chefsList);
//     } catch (error) {
//       console.error("Error fetching chefs:", error);
//       enqueueSnackbar("Error fetching chefs", { variant: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOpen = (chef = null) => {
//     if (chef) {
//       setEditChef(chef);
//       setFormData({
//         name: chef.name,
//         email: chef.email,
//         password: "",
//         role: chef.role,
//         image: null,
//       });
//     } else {
//       setEditChef(null);
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         role: "chef",
//         image: null,
//       });
//     }
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditChef(null);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       role: "chef",
//       image: null,
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = async () => {
//     // Validation
//     if (!formData.name || !formData.email || !formData.role) {
//       enqueueSnackbar("Please fill all required fields", { variant: "warning" });
//       return;
//     }

//     if (!editChef && !formData.password) {
//       enqueueSnackbar("Password is required for new chefs", { variant: "warning" });
//       return;
//     }

//     if (!editChef && !formData.image) {
//       enqueueSnackbar("Please select an image for the chef", { variant: "warning" });
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     if (!editChef) {
//       data.append("password", formData.password);
//     }
//     data.append("role", formData.role);
//     if (formData.image) {
//       data.append("image", formData.image);
//     }

//     try {
//       setLoading(true);
//       const url = editChef 
//         ? `${API_BASE_URL}/auth/users/${editChef.id}`
//         : `${API_BASE_URL}/auth/signup`;
      
//       const method = editChef ? "PUT" : "POST";

//       const res = await fetch(url, {
//         method: method,
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         console.error("Failed to save chef:", result);
//         enqueueSnackbar(result.detail?.[0]?.msg || "Failed to save chef", { variant: "error" });
//         return;
//       }

//       enqueueSnackbar(editChef ? "Chef updated successfully!" : "Chef added successfully!", { variant: "success" });
//       handleClose();
//       fetchChefs(); // Refresh the list
//     } catch (error) {
//       console.error("Error saving chef:", error);
//       enqueueSnackbar("Error saving chef", { variant: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this chef?")) return;

//     try {
//       setLoading(true);
//       const res = await fetch(`${API_BASE_URL}/auth/users/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) throw new Error("Failed to delete chef");
      
//       enqueueSnackbar("Chef deleted successfully!", { variant: "success" });
//       fetchChefs(); // Refresh the list
//     } catch (error) {
//       console.error("Error deleting chef:", error);
//       enqueueSnackbar("Error deleting chef", { variant: "error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!token) {
//     return (
//       <Box sx={{ p: 3 }}>
//         <Alert severity="error">You must be logged in to manage chefs</Alert>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Chefs Management
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//           onClick={() => handleOpen()}
//           disabled={loading}
//         >
//           Add Chef
//         </Button>
//       </Box>

//       {loading && <CircularProgress />}

//       {chefs.length === 0 && !loading && (
//         <Alert severity="info">No chefs found. Add your first chef!</Alert>
//       )}

//       <Grid container spacing={3}>
//         {chefs.map((chef) => (
//           <Grid item xs={12} sm={6} md={4} key={chef.id}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 backgroundColor: "#ffe5cc",
//                 borderRadius: 3,
//                 gap: 1,
//               }}
//             >
//               {chef.image_url && (
//                 <Box
//                   component="img"
//                   src={chef.image_url}
//                   alt={chef.name}
//                   sx={{ width: 100, height: 100, borderRadius: "50%", mb: 1, objectFit: "cover" }}
//                 />
//               )}
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
//                 {chef.name}
//               </Typography>
//               <Typography variant="body2">{chef.email}</Typography>
//               <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
//                 {chef.role}
//               </Typography>

//               <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
//                   onClick={() => handleOpen(chef)}
//                   disabled={loading}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//                   onClick={() => handleDelete(chef.id)}
//                   disabled={loading}
//                 >
//                   Delete
//                 </Button>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Add/Edit Dialog */}
//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>{editChef ? "Edit Chef" : "Add Chef"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField 
//             label="Name" 
//             name="name" 
//             value={formData.name} 
//             onChange={handleChange} 
//             required 
//             fullWidth
//           />
//           <TextField 
//             label="Email" 
//             name="email" 
//             type="email"
//             value={formData.email} 
//             onChange={handleChange} 
//             required 
//             fullWidth
//           />
//           {!editChef && (
//             <TextField 
//               label="Password" 
//               name="password" 
//               type="password" 
//               value={formData.password} 
//               onChange={handleChange} 
//               required 
//               fullWidth
//             />
//           )}
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//             fullWidth
//           >
//             <MenuItem value="chef">Chef</MenuItem>
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           {/* Upload Image Button */}
//           {!editChef && (
//             <>
//               <Button variant="contained" component="label" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>
//                 Upload Image
//                 <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
//               </Button>
//               {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} disabled={loading}>Cancel</Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//             onClick={handleSave}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : editChef ? "Update" : "Save"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }




// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem
// } from "@mui/material";
// import { useSnackbar } from "notistack";

// export default function AddUser() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     image: null, // لتخزين الملف
//   });

//   const { enqueueSnackbar } = useSnackbar();
//   const token = localStorage.getItem("access_token"); // لازم يكون admin

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", role: "", image: null });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role || !formData.image) {
//       enqueueSnackbar("Please fill all required fields and select an image", { variant: "warning" });
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);
//     data.append("image", formData.image);

//     try {
//       const res = await fetch("https://bla-dvntgymz.b4a.run/auth/signup", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         console.error("Failed to save user:", result);
//         enqueueSnackbar(result.detail?.[0]?.msg || "Failed to add user", { variant: "error" });
//         return;
//       }

//       enqueueSnackbar("User added successfully!", { variant: "success" });
//       handleClose();
//     } catch (error) {
//       console.error(error);
//       enqueueSnackbar("Error adding user", { variant: "error" });
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         variant="contained"
//         sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//         onClick={handleOpen}
//       >
//         Add User
//       </Button>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           {/* زرار رفع صورة */}
//           <Button variant="contained" component="label">
//             Upload Image
//             <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
//           </Button>
//           {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }



///////////////////////////////////////////////
// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem
// } from "@mui/material";
// import { useSnackbar } from "notistack";

// export default function AddUser() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     image: null,
//   });

//   const { enqueueSnackbar } = useSnackbar();
//   const token = localStorage.getItem("access_token");

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", role: "", image: null });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role || !formData.image) {
//       enqueueSnackbar("Please fill all required fields and select an image", { variant: "warning" });
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);
//     data.append("image", formData.image);

//     try {
//       const res = await fetch("https://bla-dvntgymz.b4a.run/auth/signup", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();

//       // ✅ Logs to understand the exact 400 error
//       console.log("Signup response Status:", res.status);
// console.log("Signup response Body:", JSON.stringify(result, null, 2));
// console.log("Signup full object:", res);
//       console.log("Signup response Status:", res.status);
//       console.log("Signup response Body:", result);
//       console.log("Signup full object:", res);

//       if (!res.ok) {
//         enqueueSnackbar(result.detail?.[0]?.msg || "Failed to add user", { variant: "error" });
//         return;
//       }

//       enqueueSnackbar("User added successfully!", { variant: "success" });
//       handleClose();
//     } catch (error) {
//       console.error("Signup Catch Error:", error);
//       enqueueSnackbar("Error adding user", { variant: "error" });
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         variant="contained"
//         sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//         onClick={handleOpen}
//       >
//         Add User
//       </Button>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           <Button variant="contained" component="label">
//             Upload Image
//             <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
//           </Button>
//           {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }



// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
//   Grid,
//   Avatar
// } from "@mui/material";
// import { useSnackbar } from "notistack";

// export default function AddUser() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     image: null,
//   });

//   const [users, setUsers] = useState([]); // لتخزين المستخدمين اللي اتضافوا

//   const { enqueueSnackbar } = useSnackbar();
//   const token = localStorage.getItem("access_token");

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", role: "", image: null });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role || !formData.image) {
//       enqueueSnackbar("Please fill all required fields and select an image", { variant: "warning" });
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);
//     data.append("image", formData.image);

//     try {
//       const res = await fetch("https://bla-dvntgymz.b4a.run/auth/signup", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();
//       console.log("Signup response Status:", res.status);
//       console.log("Signup response Body:", JSON.stringify(result, null, 2));

//       if (!res.ok) {
//         enqueueSnackbar(result.detail?.[0]?.msg || result.detail || "Failed to add user", { variant: "error" });
//         return;
//       }

//       enqueueSnackbar("User added successfully!", { variant: "success" });
//       handleClose();

//       // ✅ إضافة المستخدم الجديد للـ State عشان يظهر في الواجهة
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUsers(prev => [
//           ...prev,
//           {
//             name: formData.name,
//             email: formData.email,
//             role: formData.role,
//             imageUrl: reader.result, // الصورة كـ base64
//           }
//         ]);
//       };
//       reader.readAsDataURL(formData.image);

//     } catch (error) {
//       console.error("Signup Catch Error:", error);
//       enqueueSnackbar("Error adding user", { variant: "error" });
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         variant="contained"
//         sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//         onClick={handleOpen}
//       >
//         Add User
//       </Button>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           <Button variant="contained" component="label">
//             Upload Image
//             <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
//           </Button>
//           {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* 👇 عرض المستخدمين */}
//       <Box sx={{ mt: 4 }}>
//         <Grid container spacing={2}>
//           {users.map((user, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 2, boxShadow: 3 }}>
//                 <Avatar src={user.imageUrl} alt={user.name} sx={{ width: 56, height: 56 }} />
//                 <Box>
//                   <Typography variant="subtitle1">{user.name}</Typography>
//                   <Typography variant="body2">{user.email}</Typography>
//                   <Typography variant="body2" color="text.secondary">{user.role}</Typography>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }







// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
//   Grid,
//   Avatar
// } from "@mui/material";
// import { useSnackbar } from "notistack";

// export default function AddUser() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     image: null,
//   });

//   const [users, setUsers] = useState(() => {
//     // نقرأ المستخدمين من LocalStorage أول مرة
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
//   });

//   const { enqueueSnackbar } = useSnackbar();
//   const token = localStorage.getItem("access_token");

//   useEffect(() => {
//     // كل مرة users يتغير، نخزنهم في LocalStorage
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", role: "", image: null });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role || !formData.image) {
//       enqueueSnackbar("Please fill all required fields and select an image", { variant: "warning" });
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);
//     data.append("image", formData.image);

//     try {
//       const res = await fetch("https://bla-hvdf9iih.b4a.run/auth/signup", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();
//       console.log("Signup response Status:", res.status);
//       console.log("Signup response Body:", JSON.stringify(result, null, 2));

//       if (!res.ok) {
//         enqueueSnackbar(result.detail?.[0]?.msg || result.detail || "Failed to add user", { variant: "error" });
//         return;
//       }

//       enqueueSnackbar("User added successfully!", { variant: "success" });
//       handleClose();

//       // قراءة الصورة وتحويلها لـ base64 لعرضها
//       const reader = new FileReader();
//       reader.onload = () => {
//         const newUser = {
//           name: formData.name,
//           email: formData.email,
//           role: formData.role,
//           imageUrl: reader.result,
//         };
//         setUsers(prev => [...prev, newUser]);
//       };
//       reader.readAsDataURL(formData.image);

//     } catch (error) {
//       console.error("Signup Catch Error:", error);
//       enqueueSnackbar("Error adding user", { variant: "error" });
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         variant="contained"
//         sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//         onClick={handleOpen}
//       >
//         Add User
//       </Button>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           {/* <Button variant="contained" component="label">
//             Upload Image
//             <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
//           </Button> */}
//           <Button 
//   variant="contained" 
//   component="label"
//   sx={{ 
//     color: "#191725",
//     backgroundColor: "#ffcb99", 
//     "&:hover": { backgroundColor:  "#b68866" } // لون أفتح عند Hover
//   }}
// >
//   Upload Image
//   <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
// </Button>

//           {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* 👇 عرض المستخدمين */}
//       {/* 👇 عرض المستخدمين بشكل جذاب */}
// <Box sx={{ mt: 4 }}>
//   <Grid container spacing={3}>
//     {users.map((user, index) => (
//       <Grid item xs={12} sm={6} md={4} key={index}>
//         <Paper
//           sx={{
//             p: 3,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//             boxShadow: 6,
//             borderRadius: 3,
//             background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
//             transition: "transform 0.3s, box-shadow 0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: 12,
//             }
//           }}
//         >
//           <Avatar src={user.imageUrl} alt={user.name} sx={{ width: 100, height: 100 }} />
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
//           <Typography variant="body1" sx={{ color: "#555" }}>{user.email}</Typography>
//           <Typography variant="body2" sx={{ color: "#888", textTransform: "capitalize" }}>{user.role}</Typography>
//         </Paper>
//       </Grid>
//     ))}
//   </Grid>
// </Box>

//     </Box>
//   );
// }


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   MenuItem,
//   Grid,
//   Avatar
// } from "@mui/material";
// import { useSnackbar } from "notistack";

// export default function AddUser() {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     image: null,
//   });

//   const [users, setUsers] = useState(() => {
//     // نقرأ المستخدمين من LocalStorage أول مرة
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
//   });

//   const { enqueueSnackbar } = useSnackbar();
//   const token = localStorage.getItem("access_token");

//   useEffect(() => {
//     // كل مرة users يتغير، نخزنهم في LocalStorage
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   const handleOpen = () => {
//     setFormData({ name: "", email: "", password: "", role: "", image: null });
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSave = async () => {
//     if (!formData.name || !formData.email || !formData.password || !formData.role || !formData.image) {
//       enqueueSnackbar("Please fill all required fields and select an image", { variant: "warning" });
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("role", formData.role);
//     data.append("image", formData.image);

//     try {
//       const res = await fetch("https://bla-hvdf9iih.b4a.run/auth/signup", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: data,
//       });

//       const result = await res.json();
//       console.log("Signup response Status:", res.status);
//       console.log("Signup response Body:", JSON.stringify(result, null, 2));

//       if (!res.ok) {
//         enqueueSnackbar(result.detail?.[0]?.msg || result.detail || "Failed to add user", { variant: "error" });
//         return;
//       }

//       enqueueSnackbar("User added successfully!", { variant: "success" });
//       handleClose();

//       // قراءة الصورة وتحويلها لـ base64 لعرضها
//       const reader = new FileReader();
//       reader.onload = () => {
//         const newUser = {
//           name: formData.name,
//           email: formData.email,
//           role: formData.role,
//           imageUrl: reader.result,
//         };
//         setUsers(prev => [...prev, newUser]);
//       };
//       reader.readAsDataURL(formData.image);

//     } catch (error) {
//       console.error("Signup Catch Error:", error);
//       enqueueSnackbar("Error adding user", { variant: "error" });
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         variant="contained"
//         sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//         onClick={handleOpen}
//       >
//         Add User
//       </Button>

//       <Dialog open={open} onClose={handleClose} fullWidth>
//         <DialogTitle>Add User</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
//           <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
//           <TextField
//             select
//             label="Role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="chief">Chief</MenuItem>
//             <MenuItem value="admin">Admin</MenuItem>
//           </TextField>

//           <Button variant="contained" component="label">
//             Upload Image
//             <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
//           </Button>
//           {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
//             onClick={handleSave}
//           >
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* 👇 عرض المستخدمين */}
//       {/* 👇 عرض المستخدمين بشكل جذاب */}
// <Box sx={{ mt: 4 }}>
//   <Grid container spacing={3}>
//     {users.map((user, index) => (
//       <Grid item xs={12} sm={6} md={4} key={index}>
//         <Paper
//           sx={{
//             p: 3,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 2,
//             boxShadow: 6,
//             borderRadius: 3,
//             background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
//             transition: "transform 0.3s, box-shadow 0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: 12,
//             }
//           }}
//         >
//           <Avatar src={user.imageUrl} alt={user.name} sx={{ width: 100, height: 100 }} />
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
//           <Typography variant="body1" sx={{ color: "#555" }}>{user.email}</Typography>
//           <Typography variant="body2" sx={{ color: "#888", textTransform: "capitalize" }}>{user.role}</Typography>
//         </Paper>
//       </Grid>
//     ))}
//   </Grid>
// </Box>
//     </Box>
//   );
// }


import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Grid,
  Avatar
} from "@mui/material";
import { useSnackbar } from "notistack";

export default function AddUser() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: null,
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("token");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleOpen = () => {
    setFormData({ name: "", email: "", password: "", role: "", image: null });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = async () => {
    if (!token) {
      enqueueSnackbar("You must be logged in to add a user", { variant: "error" });
      return;
    }

    if (!formData.name || !formData.email || !formData.password || !formData.role || !formData.image) {
      enqueueSnackbar("Please fill all required fields and select an image", { variant: "warning" });
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("role", formData.role);
    data.append("image", formData.image);

    try {
      const res = await fetch("https://depi-final-project-production.up.railway.app/auth/signup", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      const result = await res.json();
      console.log("Signup response Status:", res.status);
      console.log("Signup response Body:", JSON.stringify(result, null, 2));

      if (!res.ok) {
        enqueueSnackbar(result.detail?.[0]?.msg || result.detail || "Failed to add user", { variant: "error" });
        return;
      }

      enqueueSnackbar("User added successfully!", { variant: "success" });
      handleClose();

      // قراءة الصورة وتحويلها لـ base64 لعرضها محليًا
      const reader = new FileReader();
      reader.onload = () => {
        const newUser = {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          imageUrl: reader.result,
        };
        setUsers(prev => [...prev, newUser]);
      };
      reader.readAsDataURL(formData.image);

    } catch (error) {
      console.error("Signup Catch Error:", error);
      enqueueSnackbar("Error adding user", { variant: "error" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
        onClick={handleOpen}
      >
        Add User
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
          <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
          <TextField
            select
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <MenuItem value="chief">Chief</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>

          <Button 
            variant="contained" 
            component="label"
            sx={{ backgroundColor: "#ffcb99", color: "#191725", "&:hover": { backgroundColor: "#b68866" } }}
          >
            Upload Image
            <input type="file" name="image" hidden onChange={handleChange} accept="image/*" />
          </Button>
          {formData.image && <Typography variant="body2">Selected: {formData.image.name}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#9d0706", "&:hover": { backgroundColor: "#b68866" } }}
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {users.map((user, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  boxShadow: 6,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #ffcb99, #ffe5cc )",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 12,
                  }
                }}
              >
                <Avatar src={user.imageUrl} alt={user.name} sx={{ width: 100, height: 100 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>{user.email}</Typography>
                <Typography variant="body2" sx={{ color: "#888", textTransform: "capitalize" }}>{user.role}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
