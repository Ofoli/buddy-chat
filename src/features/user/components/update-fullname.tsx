import { Grid, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface FUllnameFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export default function UpdateFullnameForm(props: FUllnameFormProps) {
  const { value, onChange, onSubmit } = props;
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-start"
      gap={2}
      style={{ paddingLeft: "20px" }}
    >
      <TextField
        label={<b>Fullname</b>}
        variant="standard"
        sx={{ width: "70%" }}
        value={value}
        onChange={onChange}
      />
      <CheckIcon
        fontSize="large"
        sx={{ cursor: "pointer" }}
        onClick={onSubmit}
      />
    </Grid>
  );
}
