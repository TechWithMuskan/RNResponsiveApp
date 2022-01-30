import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  width,
  height
};

export default metrics;
