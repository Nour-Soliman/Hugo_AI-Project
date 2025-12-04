// src/Pages/AdminContact.jsx
// 
// import React from "react";
// import { Box, Paper, Typography, Button, Stack } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { useNavigate } from "react-router-dom";

// const AdminContact = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #191725 0%, #9d0706 100%)",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 5,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 450 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           backgroundColor: "#b68866",
//         }}
//       >
//         <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#191725" }}>
//           Contact Admin
//         </Typography>

//         <Stack direction="row" spacing={2} alignItems="center">
//           <EmailIcon sx={{ color: "#191725" }} />
//           <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
//             admin@example.com
//           </Typography>
//         </Stack>

//         <Stack direction="row" spacing={2} alignItems="center">
//           <PhoneIcon sx={{ color: "#191725" }} />
//           <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
//             +20 123 456 789
//           </Typography>
//         </Stack>

//         <Button
//           variant="contained"
//           sx={{
//             background: "#191725",
//             "&:hover": { background: "#9d0706" },
//             mt: 2,
//             fontWeight: "bold",
//           }}
//           onClick={() => navigate("/Login")}
//         >
//           Back to Login
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default AdminContact;
// import React, { useState } from "react";
// import { Box, Paper, Typography, Button, Stack, TextField } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const AdminContact = () => {
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = () => {
//     if (!name || !email || !message) {
//       enqueueSnackbar("Please fill in all fields!", { variant: "error" });
//       return;
//     }
//     // هنا ممكن تضيفي إرسال بيانات الفورم للـ backend أو mailto
//     enqueueSnackbar("Message sent successfully!", { variant: "success" });
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         // background: "linear-gradient(135deg, #191725 0%, #9d0706 100%)",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: 5,
//           borderRadius: 3,
//           width: { xs: "90%", sm: 500 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           backgroundColor: "#b68866",
//         }}
//       >
//         <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#191725" }}>
//           Contact Admin
//         </Typography>

//         {/* معلومات الاتصال الحالية */}
//         <Stack direction="row" spacing={2} alignItems="center">
//           <EmailIcon sx={{ color: "#191725" }} />
//           <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
//             admin@example.com
//           </Typography>
//         </Stack>

//         <Stack direction="row" spacing={2} alignItems="center">
//           <PhoneIcon sx={{ color: "#191725" }} />
//           <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
//             +20 123 456 789
//           </Typography>
//         </Stack>
//         <TextField
//   label="Name"
//   variant="outlined"
//   fullWidth
//   value={name}
//   onChange={(e) => setName(e.target.value)}
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": { borderColor: "#191725" },
//       "&:hover fieldset": { borderColor: "#191725" },
//       "&.Mui-focused fieldset": { borderColor: "#191725" },
//     },
//     "& .MuiInputLabel-root": {
//       color: "#191725",
//       "&.Mui-focused": { color: "#191725" },
//     },
//   }}
// />

// <TextField
//   label="Email"
//   variant="outlined"
//   fullWidth
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": { borderColor: "#191725" },
//       "&:hover fieldset": { borderColor: "#191725" },
//       "&.Mui-focused fieldset": { borderColor: "#191725" },
//     },
//     "& .MuiInputLabel-root": {
//       color: "#191725",
//       "&.Mui-focused": { color: "#191725" },
//     },
//   }}
// />

// <TextField
//   label="Message"
//   variant="outlined"
//   fullWidth
//   multiline
//   rows={4}
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
//   sx={{
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": { borderColor: "#191725" },
//       "&:hover fieldset": { borderColor: "#191725" },
//       "&.Mui-focused fieldset": { borderColor: "#191725" },
//     },
//     "& .MuiInputLabel-root": {
//       color: "#191725",
//       "&.Mui-focused": { color: "#191725" },
//     },
//   }}
// />

//         <Button
//           variant="contained"
//           sx={{
//             color : "#b68866",
//             background: "#191725",
//             "&:hover": { background: "#9d0706" , color :"#191725"},
//             mt: 1,
//             fontWeight: "bold",
//           }}
//           onClick={handleSubmit}
//         >
//           Send Message
//         </Button>

//         <Button
//           variant="outlined"
//           sx={{
//             borderColor: "#191725",
//             color : "#b68866",
//             backgroundColor:"#9d0706",
//             "&:hover": { backgroundColor: "#191725", color: "white" },
//             mt: 1,
//             fontWeight: "bold",
//           }}
//           onClick={() => navigate("/")}
//         >
//           Back to Login
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default AdminContact;

// import React, { useState } from "react";
// import { Box, Paper, Typography, Button, Stack, TextField } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { useNavigate } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const AdminContact = () => {
//   const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = () => {
//     if (!name || !email || !message) {
//       enqueueSnackbar("Please fill in all fields!", { variant: "error" });
//       return;
//     }
//     enqueueSnackbar("Message sent successfully!", { variant: "success" });
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         p: 2,
//       }}
//     >
//       <Paper
//         elevation={12}
//         sx={{
//           padding: { xs: 3, sm: 5 },
//           borderRadius: 3,
//           width: { xs: "100%", sm: 500 },
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           backgroundColor: "#b68866",
//         }}
//       >
//         <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#191725" }}>
//           Contact Admin
//         </Typography>

//         {/* معلومات الاتصال الحالية */}
//         <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
//           <EmailIcon sx={{ color: "#191725" }} />
//           <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
//             admin@example.com
//           </Typography>
//         </Stack>

//         <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
//           <PhoneIcon sx={{ color: "#191725" }} />
//           <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
//             +20 123 456 789
//           </Typography>
//         </Stack>

//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#191725" },
//               "&:hover fieldset": { borderColor: "#191725" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root": {
//               color: "#191725",
//               "&.Mui-focused": { color: "#191725" },
//             },
//           }}
//         />

//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#191725" },
//               "&:hover fieldset": { borderColor: "#191725" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root": {
//               color: "#191725",
//               "&.Mui-focused": { color: "#191725" },
//             },
//           }}
//         />

//         <TextField
//           label="Message"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": { borderColor: "#191725" },
//               "&:hover fieldset": { borderColor: "#191725" },
//               "&.Mui-focused fieldset": { borderColor: "#191725" },
//             },
//             "& .MuiInputLabel-root": {
//               color: "#191725",
//               "&.Mui-focused": { color: "#191725" },
//             },
//           }}
//         />

//         <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={1}>
//           <Button
//             variant="contained"
//             sx={{
//               color: "#b68866",
//               background: "#191725",
//               "&:hover": { background: "#9d0706", color: "#191725" },
//               fontWeight: "bold",
//               flex: 1,
//             }}
//             onClick={handleSubmit}
//           >
//             Send Message
//           </Button>

//           <Button
//             variant="outlined"
//             sx={{
//               borderColor: "#191725",
//               color: "#b68866",
//               backgroundColor: "#9d0706",
//               "&:hover": { backgroundColor: "#191725", color: "white" },
//               fontWeight: "bold",
//               flex: 1,
//             }}
//             onClick={() => navigate("/")}
//           >
//             Back to Login
//           </Button>
//         </Stack>
//       </Paper>
//     </Box>
//   );
// };

// export default AdminContact;






import React, { useState } from "react";
import { Box, Paper, Typography, Button, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const AdminContact = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      enqueueSnackbar("Please fill in all fields!", { variant: "error" });
      return;
    }

    // رقم واتساب placeholder — غيريه براحتك
    const phoneNumber = "+201013019686";

    // الرسالة
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // فتح واتساب
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");

    enqueueSnackbar("Message sent successfully!", { variant: "success" });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/src/assets/photo_2025-10-09_17-20-53.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          padding: { xs: 3, sm: 5 },
          borderRadius: 3,
          width: { xs: "100%", sm: 500 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
          backgroundColor: "#b68866",
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#191725" }}>
          Contact Admin
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <EmailIcon sx={{ color: "#191725" }} />
          <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
            admin@example.com
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <PhoneIcon sx={{ color: "#191725" }} />
          <Typography variant="body1" sx={{ color: "#333", fontWeight: "bold" }}>
            +20 123 456 789
          </Typography>
        </Stack>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#191725" },
              "&:hover fieldset": { borderColor: "#191725" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
            "& .MuiInputLabel-root": {
              color: "#191725",
              "&.Mui-focused": { color: "#191725" },
            },
          }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#191725" },
              "&:hover fieldset": { borderColor: "#191725" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
            "& .MuiInputLabel-root": {
              color: "#191725",
              "&.Mui-focused": { color: "#191725" },
            },
          }}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#191725" },
              "&:hover fieldset": { borderColor: "#191725" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
            "& .MuiInputLabel-root": {
              color: "#191725",
              "&.Mui-focused": { color: "#191725" },
            },
          }}
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={1}>
          <Button
            variant="contained"
            sx={{
              color: "#b68866",
              background: "#191725",
              "&:hover": { background: "#9d0706", color: "#191725" },
              fontWeight: "bold",
              flex: 1,
            }}
            onClick={handleSubmit}
          >
            Send Message
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#191725",
              color: "#b68866",
              backgroundColor: "#9d0706",
              "&:hover": { backgroundColor: "#191725", color: "white" },
              fontWeight: "bold",
              flex: 1,
            }}
            onClick={() => navigate("/")}
          >
            Back to Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AdminContact;
