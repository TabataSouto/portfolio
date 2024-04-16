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
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<IContext>({
  selected: "taby",
  setSelected: () => {},
  menu: "usuario",
  setMenu: () => {},
});

export default function MyProvider({ children }: IMyProviderProps) {
  const [selected, setSelected] = useState("taby");
  const [menu, setMenu] = useState<string>("usuários");

  const values = {
    selected,
    setSelected,
    menu,
    setMenu,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
