// TO-DO: test responsiveness for windows with low height and high width

// game pieces
const NUM_DISKS = 3;
const MIN_TOTAL_DISKS = 3;
const MAX_TOTAL_DISKS = 9;

// dimensions
const TOWER_WIDTH = `${1.5 * MAX_TOTAL_DISKS / NUM_DISKS}vw`;
const HEADER_HEIGHT = `100vmin/6`;
const FOOTER_HEIGHT = `2rem`;
const SETTING_HEIGHT = `(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`;
const TOWER_HEIGHT = `(${TOWER_WIDTH}) * (${NUM_DISKS} + 1)`;
const DISK_HEIGHT = `((${TOWER_HEIGHT}) / 12)`;

export default {
  TOWER_WIDTH,
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  SETTING_HEIGHT,
  TOWER_HEIGHT,
  DISK_HEIGHT,
  NUM_DISKS,
  MIN_TOTAL_DISKS,
  MAX_TOTAL_DISKS,
};
