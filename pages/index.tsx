import background from "../public/images/pokemon-hero.jpg";
import Image from "next/image";
import { HomePageStyle } from "../style/home";

export default function Home() {
  return (
    <>
      <HomePageStyle>
        <p>
          Cuidamos bem do seu pokémon, <br />
          para ele cuidar bem de você
        </p>
        <Image src={background} alt="" />
      </HomePageStyle>
    </>
  );
}
