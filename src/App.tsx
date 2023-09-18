import { useEffect } from "react";
import { notification } from "antd";
import classes from "./app.module.css";
import Dashboard from "./features/dashboard/containers/Dashboard";
import LoginRegisterBase from "./features/user/containers/login-register-base";
import useReduxHooks from "./libs/redux/use-redux";
import { removeRequestError } from "./libs/redux/ducks/ui";

export default function App() {
  const { dispatch, slices } = useReduxHooks();
  const { loggedIn } = slices.authSlice;
  const { errors, successMessages } = slices.uiSlice;

  const notifyOnError = () =>
    errors.forEach(({ message, action }) => {
      notification.error({
        message,
        onClose: () => dispatch(removeRequestError(action)),
      });
    });

  const notifyOnSuccess = () =>
    successMessages.forEach(({ message, action }) => {
      notification.success({
        message,
        onClose: () => dispatch(removeRequestError(action)),
      });
    });

  useEffect(() => notifyOnError(), [errors]);
  useEffect(() => notifyOnSuccess(), [successMessages]);

  return (
    <div className={classes.app}>
      {loggedIn ? <Dashboard /> : <LoginRegisterBase />}
    </div>
  );
}
