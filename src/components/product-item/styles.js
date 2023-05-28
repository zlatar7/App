import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  price: {
    fontSize: 15,
    fontFamily: 'Rubik-Bold',
    paddingBottom: 5,
    textAlign: 'center',
  },
  size: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 240,
    padding: 35,
  },
});
