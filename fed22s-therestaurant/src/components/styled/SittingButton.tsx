import styled from "styled-components";

interface SeatingProps {
  changeVisability: string;
}

export const SittingButton = styled.button`
  margin-bottom: 30px;
  border: 1px solid black;
  margin-right: 20px;
  visibility: ${(props: SeatingProps) =>
    props.changeVisability === "showSeating" ? "visible" : "hidden"};
`;
