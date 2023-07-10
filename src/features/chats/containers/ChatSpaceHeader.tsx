import { useState } from "react";
import { Grid, Avatar, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CustomMenu } from "../index/imports";
interface Styles {
  main: React.CSSProperties;
  name: React.CSSProperties;
  menuItem: React.CSSProperties;
}
const styles: Styles = {
  main: {
    paddingLeft: "15px",
    paddingRight: "40px",
    height: "80px",
  },
  name: {
    padding: 0,
    margin: 0,
    fontWeight: "bold",
    fontSize: "17px",
  },
  menuItem: {
    fontSize: "14px",
    margin: "auto 10px",
  },
};

export default function ChatSpaceHeader() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleOpenMenu = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div style={styles.main}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "70px" }}
      >
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Grid item>
              <Avatar src="" alt="PK" sx={{ width: 45, height: 45 }} />
            </Grid>
            <Grid item>
              <p style={styles.name}>Phusuk Kamal</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <SearchIcon />
          <MoreVertIcon onClick={handleOpenMenu} />
        </Grid>
      </Grid>
      <CustomMenu anchorEl={anchorEl} onClose={handleCloseMenu}>
        <MenuItem style={styles.menuItem}>Contact Info</MenuItem>
        <MenuItem style={styles.menuItem}>Clear chats</MenuItem>
        <MenuItem style={styles.menuItem}>Delete chat</MenuItem>
      </CustomMenu>
    </div>
  );
}
