import { Paper, Typography } from "@mui/material";

export default function AIInsights() {
  return (
    <Paper sx={{ padding: 3, marginTop: 4 }}>
      <Typography variant="h5">
        AI Insights
      </Typography>

      <Typography sx={{ mt: 2 }}>
        AI recommendations will appear here.
      </Typography>
    </Paper>
  );
}