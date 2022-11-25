import Menu from "@mui/material/Menu";

interface MenuProp {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}
export default function CustomMenu(props: MenuProp) {
  const { anchorEl, open, onClose, children } = props;

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
