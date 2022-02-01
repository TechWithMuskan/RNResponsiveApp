import colors from './colors';
import images from './images';
import videos from './videos';
import fonts from './fonts';
import matrics from './matrics';
import universalStyles from './universalStyles';
import styleConstants from './styleConstants';
import animation from './animationJsons.js';

var heightRef = 710;
var widthRef = 360;

const ratioHeight = matrics.screenHeight / heightRef;
const ratioWidth = matrics.screenWidth / widthRef;

export {
  colors,
  images,
  videos,
  animation,
  matrics,
  fonts,
  universalStyles,
  styleConstants,
  heightRef,
  widthRef,
  ratioHeight,
  ratioWidth,
};
