import { Box, Paper, Typography } from "@mui/material";

import AspectChart from "./components/AspectChart";
import AspectTable from "./components/AspectTable";

export default function Aspects() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        Aspect Analysis
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <AspectChart />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <AspectTable />
      </Paper>
    </Box>
  );
}