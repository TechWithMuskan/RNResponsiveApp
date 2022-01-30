import colors from './colors';
import images from './images';
import videos from './videos';
import fonts from './fonts';
import metrics from './metrics';
import universalStyles from './universalStyles';
import styleConstants from './styleConstants';
import animation from './animationJsons.js';

var heightRef = 710;
var widthRef = 360;
const ratioHeight = metrics.screenHeight / heightRef;
const ratioWidth = metrics.screenWidth / widthRef;

export {
  colors,
  images,
  videos,
  animation,
  metrics,
  fonts,
  universalStyles,
  styleConstants,
  heightRef,
  widthRef,
  ratioHeight,
  ratioWidth,
};
