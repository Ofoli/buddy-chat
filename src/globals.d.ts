import { Dispatch, SetStateAction } from "react";

declare global {
  module "*.module.css";

  type StateSetter<T> = Dispatch<SetStateAction<T>>;
  type ChildrenType = JSX.Element | JSX.Element[];
}
