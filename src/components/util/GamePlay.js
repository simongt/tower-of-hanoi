// Consider defining these methods in App to have more direct access to state

export const isValidDiskMove = (tower={}) => {
  console.log("Assuming DISK move to TOWER is valid.");
  return true; // assume true until it's time to implement gameplay logic
}

export const moveDisk = (tower={}) => {
  // TO-DO: update which tower the disk belongs to
  console.log("DISK has moved to TOWER.");
  return;
}
