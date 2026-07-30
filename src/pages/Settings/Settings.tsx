import { Box, Paper, Typography, Switch } from "@mui/material";

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4" mb={4}>
        Settings
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">
          Account Settings
        </Typography>

        <Typography color="text.secondary">
          Manage your profile and preferences.
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">
          Notifications
        </Typography>

        <Typography>
          Enable Notifications
          <Switch />
        </Typography>
      </Paper>
    </Box>
  );
}