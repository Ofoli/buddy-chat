import { Grid } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import classes from "../styles/side-space.module.css";
import SearchRecentChats from "../components/SearchRecentChats";
import RecentChats from "./RecentChats";

export default function SideSpace() {
  return (
    <div className={classes.side_space}>
      <Grid
        className={classes.search_add_chat}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <SearchRecentChats />
        </Grid>
        <Grid item>
          <ChatBubbleIcon className={classes.icon} />
        </Grid>
      </Grid>
      <RecentChats />
    </div>
  );
}
