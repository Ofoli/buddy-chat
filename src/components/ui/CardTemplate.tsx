import { Avatar, Grid } from "@mui/material";
import classes from "./ui.module.css";

export interface ChatCardProps {
  timestamp: string;
  unreadChatCount: number;
}
interface CardProps {
  name: string;
  text: string;
  picUrl: string;
  chatCardProps?: ChatCardProps;
  onClick?: () => void;
}

export default function CardTemplate({
  name,
  text,
  picUrl,
  chatCardProps,
  onClick,
}: CardProps) {
  return (
    <div className={classes.card_template__container} onClick={onClick}>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item>
          <Avatar sx={{ width: 56, height: 56 }} src={picUrl} alt="ops" />
        </Grid>
        <Grid item>
          <div className={classes.card_template__text_group}>
            <div style={{ width: "100%" }}>
              <div className={classes.card_template__text_group_child}>
                <p className={classes.card_template__text_name}>{name}</p>
                {chatCardProps && (
                  <p className={classes.card_template__text_time}>
                    {chatCardProps.timestamp}
                  </p>
                )}
              </div>
              <div className={classes.card_template__text_group_child}>
                <p className={classes.card_template__text_message}>{text}</p>
                {!!chatCardProps?.unreadChatCount && (
                  <p className={classes.card_template__unread_chat_count}>
                    {chatCardProps.unreadChatCount}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
