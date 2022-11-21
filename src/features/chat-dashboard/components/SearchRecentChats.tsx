import classes from "../styles/search-recent-chats.module.css";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchRecentChats() {
  return (
    <div className={classes.search_container}>
      <SearchIcon className={classes.search_icon} />
      <div className={classes.search_input_container}>
        <input
          className={classes.search_input}
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
