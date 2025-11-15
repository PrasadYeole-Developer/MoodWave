import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="px-[15%] text-[#1b1b1b] w-full select-none flex flex-col">
      {children}
    </main>
  );
};

export default Layout;
