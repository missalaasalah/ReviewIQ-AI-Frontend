import { Typography, Paper } from "@mui/material";

export default function RecentReviews() {
  return (
    <Paper sx={{ padding: 3, marginTop: 4 }}>
      <Typography variant="h5">
        Recent Reviews
      </Typography>

      <Typography mt={2}>
        Recent customer reviews will appear here.
      </Typography>
    </Paper>
  );
}