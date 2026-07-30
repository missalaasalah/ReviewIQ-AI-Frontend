import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function BranchSelector() {
  return (
    <FormControl fullWidth>
      <InputLabel>Branch</InputLabel>

      <Select label="Branch" defaultValue="">
        <MenuItem value="nasr">Nasr City</MenuItem>
        <MenuItem value="maadi">Maadi</MenuItem>
        <MenuItem value="dokki">Dokki</MenuItem>
      </Select>
    </FormControl>
  );
}