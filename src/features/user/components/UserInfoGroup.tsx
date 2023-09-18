import { Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import classes from "../styles/user-profile.module.css";

interface UserInfoGroupProps {
  label: string;
  name: string;
  onEdit?: () => void;
}

export default function UserInfoGroup(props: UserInfoGroupProps) {
  const { label, name, onEdit } = props;
  return (
    <div className={classes.info_group__main}>
      <p className={classes.info_group__label}>{label}</p>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <p>{name}</p>
        </Grid>
        <Grid item>{!!onEdit && <EditIcon onClick={onEdit} />}</Grid>
      </Grid>
    </div>
  );
}
