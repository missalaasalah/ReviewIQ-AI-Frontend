import { Box, Typography } from "@mui/material";

import UploadCard from "./components/UploadCard";
import BranchSelector from "./components/BranchSelector";
import AnalysisSelector from "./components/AnalysisSelector";
import UploadButton from "./components/UploadButton";

export default function Upload() {
  return (
    <Box>
      <Typography variant="h4" mb={4}>
        Upload Reviews
      </Typography>

      <UploadCard />

      <Box mt={4}>
        <BranchSelector />
      </Box>

      <Box mt={4}>
        <AnalysisSelector />
      </Box>

      <Box mt={4}>
        <UploadButton />
      </Box>
    </Box>
  );
}