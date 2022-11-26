import React, { useState, createContext, useContext } from "react";

type State = {
  isResultPanelOpen: boolean;
  openResultPanel: StateSetter<boolean>;
};

interface Props {
  children: ChildrenType;
}
const DashboardContext = createContext<State | null>(null);
export const useDashboardContext = () => useContext(DashboardContext);

export default function DashboardProvider({ children }: Props) {
  const [isResultPanelOpen, openResultPanel] = useState(false);
  const state: State = {
    isResultPanelOpen,
    openResultPanel,
  };
  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  );
}
