import React from "react";

export interface HasChildren {
  children: React.ReactNode;
}

interface LayoutProps extends HasChildren {}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-full grid justify-center items-center">{children}</main>
  );
};

export default layout;
