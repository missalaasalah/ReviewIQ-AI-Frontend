import { Box, Typography, Card, CardContent, Switch } from "@mui/material";

export default function Settings() {
  return (
    <Box>

      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        Settings
      </Typography>


      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          mb: 3,
        }}
      >
        <CardContent>

          <Typography variant="h5">
            Account Settings
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Manage your profile and preferences.
          </Typography>

        </CardContent>
      </Card>


      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>

          <Typography variant="h5">
            Notifications
          </Typography>


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
            }}
          >

            <Typography>
              Enable Notifications
            </Typography>

            <Switch />

          </Box>

        </CardContent>
      </Card>


    </Box>
  );
}