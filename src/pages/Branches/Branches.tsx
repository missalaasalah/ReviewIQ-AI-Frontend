import { Box, Paper, Typography } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";

import BranchChart from "./components/BranchChart";
import BranchTable from "./components/BranchTable";

export default function Branches() {
  const { t } = useLanguage();

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        {t("branchesPerformance")}
      </Typography>

      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
        }}
      >
        <BranchChart />
      </Paper>

      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <BranchTable />
      </Paper>
    </Box>
  );
}