import { Button } from "antd";

const styles = {
  width: "90%",
  height: "50px",
  borderRadius: "5px",
  margin: "10px 5%",
  background: "black",
  border: "none",
};

interface ButtonProps {
  label: string;
  onClick: () => void;
}
function BaseButton({ label, onClick }: ButtonProps) {
  return (
    <Button type="primary" size="large" onClick={onClick} style={styles}>
      {label}
    </Button>
  );
}

export default BaseButton;
