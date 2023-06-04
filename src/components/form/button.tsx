import { Button } from "antd";

const DEFAULT_STYLES: React.CSSProperties = {
  width: "90%",
  height: "50px",
  borderRadius: "5px",
  margin: "10px 5%",
  background: "black",
  border: "none",
};

const SECONDARY_STYLES: React.CSSProperties = {
  color: "black",
  border: "2px solid black",
  background: "transparent",
};

type BtnType = "primary" | "secondary";
interface ButtonProps {
  type?: BtnType;
  label: string;
  onClick: () => void;
}
function BaseButton({ type = "primary", label, onClick }: ButtonProps) {
  const styles = selectStyle(type);
  return (
    <Button type="primary" size="large" onClick={onClick} style={styles}>
      {label}
    </Button>
  );
}

const selectStyle = (type: BtnType) =>
  type === "primary"
    ? DEFAULT_STYLES
    : { ...DEFAULT_STYLES, ...SECONDARY_STYLES };
export default BaseButton;
