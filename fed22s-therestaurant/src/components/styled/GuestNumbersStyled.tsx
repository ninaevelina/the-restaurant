import styled from "styled-components";

interface GuestNumbersStyledProps {
  available: string;
}

export const GuestNumbersStyled = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  visibility: ${(props: GuestNumbersStyledProps) =>
    props.available === "seatingOptions" ? "visible" : "hidden"};

  &:hover {
    border: none;
  }

  &:last-child {
    padding-left: 15px;
  }
`;
