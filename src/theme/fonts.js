import Metrics from './metrics';

const size = {
  font10: Metrics.screenWidth * (10 / 375),
  font12: Metrics.screenWidth * (12 / 375),
  font14: Metrics.screenWidth * (14 / 375),
  font16: Metrics.screenWidth * (16 / 375),
  font18: Metrics.screenWidth * (18 / 375),
  font20: Metrics.screenWidth * (20 / 375),
};

const weight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

const type = {
  montserratMedium: "Montserrat-Medium",
  montserratRegular: "Montserrat-Regular",
  montserratSemiBold: "Montserrat-SemiBold",
  montserratBold: "Montserrat-Bold",
};

export default {
  size,
  weight,
  type,
};
