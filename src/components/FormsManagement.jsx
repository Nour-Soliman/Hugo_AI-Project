import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

// بيانات تجريبية مؤقتة
const mockForms = [
  { id: 1, title: "Health & Safety", type: "Checklist", createdBy: "Admin", assignedTo: "John Doe", status: "Pending", dueDate: "2025-12-05", date: "2025-11-28" },
  { id: 2, title: "Hygiene Audit", type: "Form", createdBy: "Admin", assignedTo: "Jane Smith", status: "Completed", dueDate: "2025-12-10", date: "2025-11-27" },
];

export default function FormsManagement() {
  const [forms, setForms] = useState(mockForms);
  const [openDialog, setOpenDialog] = useState(false);
  const [newForm, setNewForm] = useState({ title: "", type: "", assignedTo: "", dueDate: "" });
  const [searchText, setSearchText] = useState("");

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewForm({ title: "", type: "", assignedTo: "", dueDate: "" });
  };

  const handleAddForm = () => {
    const id = forms.length ? forms[forms.length - 1].id + 1 : 1;
    setForms([...forms, { ...newForm, id, createdBy: "Admin", status: "Pending", date: new Date().toISOString().split("T")[0] }]);
    handleCloseDialog();
  };

  const handleRemoveForm = (id) => setForms(forms.filter(f => f.id !== id));

  // فلترة الفورمات حسب البحث
  const filteredForms = forms.filter(f =>
    f.title.toLowerCase().includes(searchText.toLowerCase()) ||
    f.type.toLowerCase().includes(searchText.toLowerCase()) ||
    f.assignedTo.toLowerCase().includes(searchText.toLowerCase()) ||
    f.status.toLowerCase().includes(searchText.toLowerCase())
  );


  

  return (
    <Box>
      {/* رأس الصفحة */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Forms Management</Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            placeholder="Search forms..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#9d0706", borderWidth: "2px" },
              "&:hover fieldset": { borderColor: "#b68866" },
              "&.Mui-focused fieldset": { borderColor: "#191725" },
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "#191725" },
              minWidth: 200,
            }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}
            onClick={handleOpenDialog}
          >
            Add Form
          </Button>
        </Box>
      </Box>

      {/* الجدول */}
      <Paper sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#b4412d" }}>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredForms.map((form) => (
              <TableRow key={form.id} sx={{ backgroundColor:"#f6d9d1","&:hover": { backgroundColor: "#f5f5f5" } }}>
                <TableCell>{form.title}</TableCell>
                <TableCell>{form.type}</TableCell>
                <TableCell>{form.createdBy}</TableCell>
                <TableCell>{form.assignedTo}</TableCell>
                <TableCell>{form.status}</TableCell>
                <TableCell>{form.dueDate}</TableCell>
                <TableCell>{form.date}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    sx={{ mr: 1, backgroundColor: "#b68866", color:"#191725", "&:hover": { backgroundColor:  "#b4412d" } }}
                    onClick={() => alert("Edit functionality coming soon")}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    sx={{ backgroundColor: "#b68866", color:"#191725","&:hover": { backgroundColor:  "#b4412d" } }}
                    onClick={() => handleRemoveForm(form.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredForms.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ color: "#191725" }}>
                  No forms found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* نافذة إضافة فورم */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add New Form</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Title"
            value={newForm.title}
            onChange={(e) => setNewForm({ ...newForm, title: e.target.value })}
            fullWidth
          />
          <TextField
            label="Type"
            value={newForm.type}
            onChange={(e) => setNewForm({ ...newForm, type: e.target.value })}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Assign To</InputLabel>
            <Select
              value={newForm.assignedTo}
              onChange={(e) => setNewForm({ ...newForm, assignedTo: e.target.value })}
            >
              <MenuItem value="John Doe">John Doe</MenuItem>
              <MenuItem value="Jane Smith">Jane Smith</MenuItem>
              <MenuItem value="Mike Johnson">Mike Johnson</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Due Date"
            type="date"
            value={newForm.dueDate}
            onChange={(e) => setNewForm({ ...newForm, dueDate: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddForm} variant="contained" sx={{ backgroundColor: "#b68866", "&:hover": { backgroundColor: "#9d0706" } }}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
