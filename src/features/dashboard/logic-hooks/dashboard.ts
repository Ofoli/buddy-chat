import { useReduxHooks } from "../index/imports";
import { RESULT_PANEL_ITEMS } from "./result-panel";

export default function useDashboardLogic() {
  const { slices } = useReduxHooks();
  const { resultPanelItem } = slices.uiSlice;

  const isResultPanelOpen = resultPanelItem !== RESULT_PANEL_ITEMS.NO_ITEM;

  return { isResultPanelOpen };
}
