import { Grid } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Contact from "../../components/ui/Contact";
import classes from "../../styles/contacts.module.css";

const contacts = [1, 2, 3];

export default function Contacts() {
  return (
    <div>
      <Grid
        className={classes.add_container}
        container
        alignItems="center"
        justifyContent="flex-start"
        gap={3}
      >
        <div className={classes.icon_container}>
          <PersonAddAlt1Icon sx={{ width: 35, height: 35, color: "white" }} />
        </div>
        <p>Add New Contact</p>
      </Grid>
      <p className={classes.title}>My Contacts</p>
      {contacts.map((idx) => (
        <Contact
          key={idx}
          name="Some Name"
          aboutme="this is a new ui we just inherited"
          picUrl=""
        />
      ))}
    </div>
  );
}
