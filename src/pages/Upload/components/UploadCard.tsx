import {
  Card,
  CardContent,
  Typography,
  Box,
  Button
} from "@mui/material";

import { useState } from "react";


export default function UploadCard() {

  const [file, setFile] = useState<File | null>(null);


  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }

  };


  const handleAnalyze = () => {

    if (!file) {
      alert("Please upload a file first");
      return;
    }

    alert(`Analyzing ${file.name}`);

  };


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



        <Box
          sx={{
            mb: 3
          }}
        >

          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={handleFileChange}
          />


        </Box>



        {file && (

          <Typography
            sx={{
              mb: 2
            }}
          >

            Selected File: {file.name}

          </Typography>

        )}



        <Button
          variant="contained"
          onClick={handleAnalyze}
          sx={{
            mt: 1
          }}
        >

          Analyze Reviews

        </Button>


      </CardContent>


    </Card>

  );
}