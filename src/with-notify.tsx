/* eslint-disable react/display-name */
import useReduxHooks from "./libs/redux/use-redux";

export default function WithNotify(App: React.ElementType) {
  return () => {
    const { SLICES, sliceSelector } = useReduxHooks();
    const { errors, successMessages } = sliceSelector(SLICES.uiSlice);

    // const notifyOnError = () =>
    //   errors.forEach(({ request, error }) => {
    //     toast.error(error?.message, {
    //       ...toastConfig,
    //       onClose: () => dispatch(removeRequestError({ request })),
    //     });
    //   });

    // const notifyOnSuccess = () =>
    //   success_messages.forEach(({ request, message }) => {
    //     toast.success(message, {
    //       ...toastConfig,
    //       onClose: () => dispatch(removeRequestSuccessMessage({ request })),
    //     });
    //   });

    // useEffect(() => notifyOnError(), [notifyOnError]);
    // useEffect(() => notifyOnSuccess(), [notifyOnSuccess]);

    return <App />;
  };
}
