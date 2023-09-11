"use client";
import React, { useState, createContext, useContext } from "react";

import type { SectionName,ActiveSectionContextProviderProps,ActiveSectionContextType } from "@/lib/types";



export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick,setTimeOfLastClick]= useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection,timeOfLastClick, setActiveSection,setTimeOfLastClick  }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context == null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContext.Provider"
    );
  }
  return context;
}

export default ActiveSectionContextProvider;
