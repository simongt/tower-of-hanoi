// Consider defining these methods in App to have more direct access to state

export const isValidDiskMove = (rank, disks) => {
  // console.log("Assuming DISK move to TOWER is valid.");
  // console.table(disks);
  return true; // assume true until it's time to implement gameplay logic
}

export const moveDisk = (rank, disks) => {
  // TO-DO: update which tower the disk belongs to
  console.log("DISK has moved to TOWER.");
  disks.push({ id: rank });
}
