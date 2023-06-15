import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import { HeroStyled } from "../styled/HeroStyled";

export const Home = () => {
  return (
    <>
      <HeroStyled className="hero">
        {/*<img
          src="https://trello.com/1/cards/647eedd63590708b82f290a6/attachments/647eedef868d6131d14bd9dd/download/tapas-5224045_1280.jpg"
          className="hero"
  />*/}
        <button>
          <Link to="/booking">Book a Table</Link>
        </button>
      </HeroStyled>
    </>
  );
};
