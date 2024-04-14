"use client";
import {
  Children,
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
}

export const Context = createContext<IContext>({
  selected: "taby",
  setSelected: () => {},
});

export default function MyProvider({ children }: IMyProviderProps) {
  const [selected, setSelected] = useState("taby");

  const values = {
    selected,
    setSelected,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
