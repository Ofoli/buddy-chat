import { useState } from "react";
import { useReduxHooks, requestCreateChat } from "../index/imports";
import type { ChangeEvent, KeyboardEvent } from "react";

export default function useAddChatLogic() {
  const [message, setMessage] = useState("");
  const { dispatch, slices } = useReduxHooks();
  const { id: source } = slices.authSlice.user!;
  const { buddyId: destination } = slices.chatSlice;

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const message = e.currentTarget.value;
    return setMessage(message);
  };

  const handleChatSubmit = () => {
    if (message === "") return;
    const channelId = createChannelId(source, destination);
    setMessage("");
    dispatch(requestCreateChat({ channelId, message, source, destination }));
  };
  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    return handleChatSubmit();
  };

  return {
    handleEnterKey,
    message,
    handleMessageChange,
    handleChatSubmit,
  };
}

export const createChannelId = (src: string, dst: string) =>
  [src, dst].sort().join("-");
