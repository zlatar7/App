import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  footerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonConfirm: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonConfirmText: {
    color: theme.text,
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    // justifyContent: 'flex-start',
  },
  totalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    color: theme.text,
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    justifyContent: 'flex-end',
  },
  totalPrice: {
    color: theme.text,
    fontFamily: 'Rubik-Bold',
    fontSize: 15,
    justifyContent: 'flex-end',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
  },
});
