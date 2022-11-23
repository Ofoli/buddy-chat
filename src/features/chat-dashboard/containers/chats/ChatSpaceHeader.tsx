import { Grid, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Styles {
  main: React.CSSProperties;
  name: React.CSSProperties;
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
};

export default function ChatSpaceHeader() {
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
          <MoreVertIcon />
        </Grid>
      </Grid>
    </div>
  );
}
