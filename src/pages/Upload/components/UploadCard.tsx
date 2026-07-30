import { Paper, Typography, Button } from "@mui/material";

export default function UploadCard() {
  return (
    <Paper
      sx={{
        p: 5,
        textAlign: "center",
        border: "2px dashed #1976d2",
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" mb={2}>
        Upload Reviews CSV
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Drag & Drop your CSV file here
      </Typography>

      <Button variant="contained">
        Choose File
      </Button>
    </Paper>
  );
}