const getReservations = ( reservations, { archived } ) => {
  const selectedReservations = reservations.filter( r => r.archived === archived );

  return selectedReservations;
}

export default getReservations;
