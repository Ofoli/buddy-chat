import Alert from "@mui/material/Alert";

interface NotificationProp {
  severity: "error" | "success";
  message: string;
  onClose: () => void;
}

export default function Notification(props: NotificationProp) {
  const { message, severity, onClose } = props;
  return (
    <Alert variant="outlined" severity={severity} onClose={onClose}>
      {message}
    </Alert>
  );
}
