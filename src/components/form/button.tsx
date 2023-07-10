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
  loading?: boolean;
  onClick: () => void;
}
function BaseButton({
  label,
  onClick,
  type = "primary",
  loading = false,
}: ButtonProps) {
  const styles = selectStyle(type);
  return (
    <Button
      type="primary"
      size="large"
      onClick={onClick}
      style={styles}
      loading={loading}
    >
      {label}
    </Button>
  );
}

const selectStyle = (type: BtnType) =>
  type === "primary"
    ? DEFAULT_STYLES
    : { ...DEFAULT_STYLES, ...SECONDARY_STYLES };
export default BaseButton;
