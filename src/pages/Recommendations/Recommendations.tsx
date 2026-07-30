import { Box, Paper, Typography } from "@mui/material";

import RecommendationCards from "./components/RecommendationCards";
import RecommendationTable from "./components/RecommendationTable";

export default function Recommendations() {
  return (
    <Box>
      <Typography variant="h4" mb={4}>
        AI Recommendations
      </Typography>

      <RecommendationCards />

      <Paper sx={{ p: 3, mt: 4 }}>
        <RecommendationTable />
      </Paper>
    </Box>
  );
}