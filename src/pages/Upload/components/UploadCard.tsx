import {
  Card,
  CardContent,
  Typography,
  Box,
  Button
} from "@mui/material";


export default function UploadCard() {


  return (

    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
      }}
    >

      <CardContent>


        <Typography
          variant="h5"
          sx={{
            mb: 2
          }}
        >
          Upload Reviews CSV
        </Typography>



        <Typography
          color="text.secondary"
          sx={{
            mb: 3
          }}
        >
          Drag & Drop your CSV file here
        </Typography>



        <Box>

          <input
            type="file"
            accept=".csv,.xlsx"
          />

        </Box>



        <Button
          variant="contained"
          sx={{
            mt: 3
          }}
        >
          Analyze Reviews
        </Button>


      </CardContent>


    </Card>

  );
}