import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function AnalysisSelector() {
  return (
    <FormControl>
      <FormLabel>Analysis Type</FormLabel>

      <RadioGroup defaultValue="absa">
        <FormControlLabel
          value="absa"
          control={<Radio />}
          label="Aspect-Based Sentiment"
        />
        <FormControlLabel
          value="overall"
          control={<Radio />}
          label="Overall Sentiment"
        />
      </RadioGroup>
    </FormControl>
  );
}