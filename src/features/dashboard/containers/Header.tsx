import React, { useState } from "react";
import classes from "../styles/header.module.css";
import { Grid, Avatar, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomMenu } from "../index/imports";
import useHeaderLogic from "../logic-hooks/header";

export default function Header() {
  const {
    currentUser,
    handleUserLogout,
    handleShowProfile,
    handleShowSettings,
  } = useHeaderLogic();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleOpenMenu = (event: React.BaseSyntheticEvent) =>
    setAnchorEl(event.currentTarget);

  return (
    <div className={classes.header}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <h2>Buddy-Chat</h2>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Avatar src="" alt="PK" onClick={handleShowProfile} />
            <p className={classes.name}>{currentUser!.fullname}</p>
            <KeyboardArrowDownIcon onClick={handleOpenMenu} />
          </Grid>
        </Grid>
      </Grid>
      <CustomMenu anchorEl={anchorEl} onClose={handleCloseMenu}>
        <div style={{ width: "120px" }}>
          <MenuItem onClick={handleShowProfile}>Profile</MenuItem>
          <MenuItem onClick={handleShowSettings}>Settings</MenuItem>
          <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
        </div>
      </CustomMenu>
    </div>
  );
}
