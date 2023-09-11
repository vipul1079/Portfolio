import React from "react";
interface sectionHeadingProps{
    children:React.ReactNode
}
const SectionHeading = ({children}:sectionHeadingProps) => {
  return (
  <h2 className="text-3xl text-center font-medium capitalize mb-8">{children}</h2>  
  );
};

export default SectionHeading;
