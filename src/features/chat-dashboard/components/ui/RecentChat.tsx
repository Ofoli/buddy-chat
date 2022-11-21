import { Avatar, Grid } from "@mui/material";
import classes from "../../styles/recent-chat.module.css";

type Data = {
  id: string;
  name: string;
  message: string;
  picUrl: string;
};
interface RecentChatProps {
  data: Data;
}
export default function RecentChat(props: RecentChatProps) {
  const { data } = props;
  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item>
          <Avatar sx={{ width: 56, height: 56 }} src={data.picUrl} alt="ops" />
        </Grid>
        <Grid item>
          <div className={classes.text_group}>
            <div>
              <p className={classes.text_name}>{data.name}</p>
              <p className={classes.text_message}>{data.message}</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
