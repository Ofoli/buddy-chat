import { useReduxHooks, closeResultPanel } from "../index/imports";
export const RESULT_PANEL_ITEMS = {
  NO_ITEM: "NO_ITEM",
  PROFILE: "Profile",
};

export default function useResultPanelLogic() {
  const { dispatch, slices } = useReduxHooks();
  const { resultPanelItem } = slices.uiSlice;

  const handleBackClick = () => dispatch(closeResultPanel());
  return { title: resultPanelItem, handleBackClick };
}
