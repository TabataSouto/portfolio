"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IMyProviderProps {
  children: ReactNode;
}

interface IContext {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<IContext>({
  selected: "taby",
  setSelected: () => {},
  tab: "usuario",
  setTab: () => {},
});

export default function MyProvider({ children }: IMyProviderProps) {
  const [selected, setSelected] = useState("taby");
  const [tab, setTab] = useState("usuario");

  const values = {
    selected,
    setSelected,
    tab,
    setTab,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
