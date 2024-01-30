import { ReactNode } from "react";
import { NavBarComponent } from "../navbar";
import { FooterComponent } from "../footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};
