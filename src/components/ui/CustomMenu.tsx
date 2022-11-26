import Menu from "@mui/material/Menu";

interface MenuProp {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  children: ChildrenType;
}
export default function CustomMenu(props: MenuProp) {
  const { anchorEl, onClose, children } = props;
  const open = Boolean(anchorEl);

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </div>
  );
}
