import { Box, Paper, Typography } from "@mui/material";

import BranchChart from "./components/BranchChart";
import BranchTable from "./components/BranchTable";

export default function Branches() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        Branch Performance
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <BranchChart />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <BranchTable />
      </Paper>
    </Box>
  );
}