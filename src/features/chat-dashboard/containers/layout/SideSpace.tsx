import { Grid } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import classes from "../../styles/side-space.module.css";
import SearchRecentChats from "../../components/form/SearchRecentChats";
// import RecentChats from "../chats/RecentChats";
import Contacts from "../contacts/Contacts";

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
      <Contacts />
      {/* <RecentChats /> */}
    </div>
  );
}
