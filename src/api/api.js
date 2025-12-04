import axios from "axios";

const API_BASE = "https://your-api-url.com"; // <--- هنا الشخص التاني هيحط اللينك



// Fetch all chefs
export const getChefs = async () => {
  try {
    const res = await axios.get(`${API_BASE}/chefs`);
    return res.data;
  } catch (err) {
    console.error("Error fetching chefs:", err);
    return [];
  }
};
///تيست
// export const getChefs = async () => {
//   try {
//     // --- Fake Data for Testing ---
//     return [
//       {
//         id: 1,
//         name: "Ahmed Ali",
//         email: "chef1@example.com",
//         avatar: "https://i.pravatar.cc/150?img=1",
//         role: "chef",
//         compliance: 80
//       },
//       {
//         id: 2,
//         name: "Sara Mohamed",
//         email: "chef2@example.com",
//         avatar: "https://i.pravatar.cc/150?img=5",
//         role: "chef",
//         compliance: 95
//       },
//       {
//         id: 3,
//         name: "Mohamed Hassan",
//         email: "chef3@example.com",
//         avatar: "https://i.pravatar.cc/150?img=11",
//         role: "chef",
//         compliance: 60
//       }
//     ];
//   } catch (err) {
//     console.error("Error fetching chefs:", err);
//     return [];
//   }
// };


// Fetch all violations
export const getViolations = async () => {
  try {
    const res = await axios.get(`${API_BASE}/violations`);
    return res.data;
  } catch (err) {
    console.error("Error fetching violations:", err);
    return [];
  }
};

// Fetch KPIs (اختياري لو الBackend بيحسبها)
export const getKPIs = async () => {
  try {
    const res = await axios.get(`${API_BASE}/kpis`);
    return res.data;
  } catch (err) {
    console.error("Error fetching KPIs:", err);
    return [];
  }
};
