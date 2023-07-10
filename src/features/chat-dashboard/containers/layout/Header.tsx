import React, { useState } from "react";
import { Grid, Avatar, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "../../styles/header.module.css";
import { CustomMenu } from "../../index/imports";
import useReduxHooks from "../../../../libs/redux/use-redux";
import { logoutRequested } from "../../../../libs/redux/ducks/auth";

export default function Header() {
  const { dispatch } = useReduxHooks();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleOpenMenu = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUserLogout = () => dispatch(logoutRequested());

  return (
    <div className={classes.header}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <h2>Buddy-Chat</h2>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center" gap={2}>
            <Avatar src="" alt="PK" />
            <p className={classes.name}>Phusuk Kamal</p>
            <KeyboardArrowDownIcon onClick={handleOpenMenu} />
          </Grid>
        </Grid>
      </Grid>
      <CustomMenu anchorEl={anchorEl} onClose={handleCloseMenu}>
        <div style={{ width: "120px" }}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
        </div>
      </CustomMenu>
    </div>
  );
}
