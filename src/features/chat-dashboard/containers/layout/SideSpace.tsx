import { Grid } from "@mui/material";
import { useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import classes from "../../styles/side-space.module.css";
import SearchRecentChats from "../../components/form/SearchRecentChats";
import RecentChats from "../chats/RecentChats";
import Contacts from "../contacts/Contacts";

export default function SideSpace() {
  const [showContacts, setShowContacts] = useState(false);
  const activateShowContacts = () => setShowContacts(true);
  const deactivateShowContacts = () => setShowContacts(false);

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
          {showContacts ? (
            <p className={classes.back} onClick={deactivateShowContacts}>
              Back
            </p>
          ) : (
            <ChatBubbleIcon
              className={classes.icon}
              onClick={activateShowContacts}
            />
          )}
        </Grid>
      </Grid>
      {showContacts ? <Contacts /> : <RecentChats />}
    </div>
  );
}
