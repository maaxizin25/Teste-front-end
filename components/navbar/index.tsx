import Link from "next/link";
import { NavBarStyled } from "./style";

export const NavBarComponent = () => {
  return (
    <NavBarStyled>
      <nav>
        <div>
          <h2>Centro Pokemon</h2>
        </div>
        <div>
          <Link href="/sobre">Quem Somos</Link>
          <Link href="/agenda">Agendar consulta</Link>
        </div>
      </nav>
    </NavBarStyled>
  );
};
