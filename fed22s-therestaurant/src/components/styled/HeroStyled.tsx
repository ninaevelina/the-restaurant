import styled from "styled-components";
import img from "../../assets/heroimage.jpg";

export const HeroStyled = styled.div`
  background-image: src(${img});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
  display: flex;

  button {
    height: 50px;
    width: 200px;
    font-weight: 700;
  }
  a {
    color: white;
  }
`;
