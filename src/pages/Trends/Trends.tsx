import { Box, Paper, Typography } from "@mui/material";

import TrendChart from "./components/TrendChart";
import TrendTable from "./components/TrendTable";

export default function Trends() {
  return (
    <Box>
      <Typography variant="h4" mb={4}>
        Trend Analysis
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <TrendChart />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <TrendTable />
      </Paper>
    </Box>
  );
}