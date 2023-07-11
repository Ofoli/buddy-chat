import { useReduxHooks } from "../index/imports";

export default function useDashboardLogic() {
  const { slices } = useReduxHooks();
  const { isResultPanelOpen } = slices.uiSlice;

  return { isResultPanelOpen };
}
