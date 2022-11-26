import { Avatar, Grid } from "@mui/material";
import classes from "../../styles/recent-chat.module.css";

interface CardProps {
  name: string;
  text: string;
  picUrl: string;
  isChatCard?: boolean;
}

export default function CardTemplate({
  name,
  text,
  picUrl,
  isChatCard,
}: CardProps) {
  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item>
          <Avatar sx={{ width: 56, height: 56 }} src={picUrl} alt="ops" />
        </Grid>
        <Grid item>
          <div className={classes.text_group}>
            <div style={{ width: "100%" }}>
              <div className={classes.text_group_child}>
                <p className={classes.text_name}>{name}</p>
                {isChatCard && <p className={classes.text_time}>11:22</p>}
              </div>
              <div className={classes.text_group_child}>
                <p className={classes.text_message}>{text}</p>
                {isChatCard && <p className={classes.unread_chat_count}>3</p>}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
