import { Grid } from "@mui/material";
import { useState, createContext, useContext } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import classes from "../styles/side-space.module.css";
import RecentChats from "../../chats/containers/RecentChats";
import { SearchHistory, Contacts } from "../index/imports";

type SideSpaceType = {
  showContacts: boolean;
  setShowContacts: StateSetter<boolean>;
};

const SideSpaceContext = createContext<SideSpaceType | null>(null);
export const useSideSpaceContext = () =>
  useContext(SideSpaceContext) as SideSpaceType;

function SideSpaceProvider({ children }: { children: ChildrenType }) {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <SideSpaceContext.Provider value={{ showContacts, setShowContacts }}>
      {children}
    </SideSpaceContext.Provider>
  );
}

function SideSpaceComponent() {
  const { showContacts, setShowContacts } = useSideSpaceContext()!;
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
          <SearchHistory />
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

export default function SideSpace() {
  return (
    <SideSpaceProvider>
      <SideSpaceComponent />
    </SideSpaceProvider>
  );
}
