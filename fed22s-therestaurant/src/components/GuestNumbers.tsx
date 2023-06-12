import { GuestNumbersStyled } from "./styled/GuestNumbersStyled";
import "../scss/main.scss";
import { useContext, useState } from "react";
import { CurrentBookingContext } from "../contexts/BookingContext";

interface lastTableProps {
  lastTable: boolean;
}

export const GuestNumbers = ({ lastTable }: lastTableProps) => {
  const { updatePeople } = useContext(CurrentBookingContext);
  const [unAvailableNum, setUnavailableNum] = useState(true);

  //console.log(lastTable); //fortsätt här
  if (lastTable) {
  }

  const handleClickPeople = (e: React.MouseEvent, people: number) => {
    e.preventDefault();

    updatePeople(people);
  };

  return (
    <>
      <div className="guestNumberWrapper">
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 1);
          }}
        >
          1
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 2);
          }}
        >
          2
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 3);
          }}
        >
          3
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 4);
          }}
        >
          4
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 5);
          }}
        >
          5
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 6);
          }}
        >
          6
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 7);
          }}
        >
          7
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 8);
          }}
        >
          8
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 9);
          }}
        >
          9
        </GuestNumbersStyled>
        <GuestNumbersStyled
          onClick={(e) => {
            handleClickPeople(e, 10);
          }}
        >
          10
        </GuestNumbersStyled>
      </div>
    </>
  );
};
