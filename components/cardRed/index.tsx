import Link from "next/link";
import { CardRedStyled } from "./style";
import { ReactNode } from "react";

interface PropsCardRed {
  page: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

export const CardRedComponent: React.FC<PropsCardRed> = ({
  page,
  title,
  description,
}) => {
  return (
    <>
      <CardRedStyled>
        <span>
          <Link href={"/"}>Home</Link>
          {">"}
          <p>{page}</p>
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardRedStyled>
      <div></div>
    </>
  );
};
