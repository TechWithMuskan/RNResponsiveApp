import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../theme";

const styles = StyleSheet.create({
  header: {
    height: 50 * ratioHeight,
    backgroundColor: colors.appPrimary,
    justifyContent: "center",
    alignItems: "center",
  },
  headingStyle: {
    color: colors.white,
    fontSize: fonts.size.font20,
    fontFamily: fonts.type.montserratSemiBold,
  },
  subContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    height: 100 * ratioHeight,
    width: 105 * ratioWidth,
  },
  container: {
    height: 140 * ratioHeight,
    width: 105 * ratioWidth,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12 * ratioHeight,
  },
  productName: {
    color: colors.black,
    fontSize: fonts.size.font10,
    fontFamily: fonts.type.montserratRegular,
  },
  productPrice: {
    color: colors.red,
    fontSize: fonts.size.font10,
    fontFamily: fonts.type.montserratBold,
  },
});

export default styles;
