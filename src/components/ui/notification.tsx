import Alert from "@mui/material/Alert";

interface NotificationProp {
  severity: "error" | "success";
  onClose: () => void;
}

export default function Notification(props: NotificationProp) {
  const { severity, onClose } = props;
  return <Alert variant="outlined" severity={severity} onClose={onClose} />;
}
