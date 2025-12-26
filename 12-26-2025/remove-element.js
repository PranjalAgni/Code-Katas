/*
The Yeti steps into the elevator to head down to the party hall on floor 1.
He presses the button, but nothing happens. The panel shows too many
floors, including some phantom "test floors" that the maintenance team
added during setup but supposedly removed.

The Yeti tries to delete them from the system using the elevator's control
panel... and now the elevator won't move at all!

Can you fix the floor removal so the Yeti can finally get this party
started?
*/

function removeFloor(floors, index) {
  floors.splice(index, 1);

  return floors;
}
