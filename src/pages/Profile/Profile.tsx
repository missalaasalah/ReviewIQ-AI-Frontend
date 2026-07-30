import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";


export default function Profile() {
  return (
    <Box>

      <Typography variant="h4" mb={4}>
        User Profile
      </Typography>


      <Card
        sx={{
          width: 400,
          borderRadius: 3,
          boxShadow: 3
        }}
      >

        <CardContent>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >

            <Avatar
              sx={{
                width:80,
                height:80
              }}
            >
              A
            </Avatar>


            <Typography variant="h5">
              Admin User
            </Typography>


            <Typography color="text.secondary">
              admin@reviewiq.com
            </Typography>


            <Typography>
              Role: Administrator
            </Typography>


          </Box>

        </CardContent>

      </Card>

    </Box>
  );
}