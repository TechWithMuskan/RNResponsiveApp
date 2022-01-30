import {StyleSheet} from 'react-native';

const universalStyles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerOne: {
    justifyContent: 'center',
  },
  centerTwo: {
    alignItems: 'center',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  width100: {
    width: '100%',
  },
});

export default universalStyles;
