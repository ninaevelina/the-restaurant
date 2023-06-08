export const ShowAllBookingsAdmin = () => {
  //Hämta datan i contextet och loopa ut för varje html-tag

  //när klicket gjorts ska bokningen vara borta från domen och databasen.
  const deleteBooking = () => {
    // kopplar på vår reducer delete här
    return;
  };

  //när klicket gjorts så ska man kunna förändra
  const updateBooking = () => {
    //kopplar på vår reducer update här
    return;
  };

  const list: [] = [];
  const showList = list.map((list) => {
    <div>
      <p>date</p>
      <p>guests</p>
      <p>Firstname</p>
      <p>Lastname</p>
      <p>Phone</p>
      <p>email</p>
      <button onClick={deleteBooking}>delete booking</button>
      <button onClick={updateBooking}>update booking</button>
    </div>;
  });

  return <>{showList}</>;
};
