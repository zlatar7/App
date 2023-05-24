import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  footerContainer: {
    backgroundColor: theme.colors.white,
    borderTopColor: theme.colors.primary,
    borderTopWidth: 4,
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
  },
  totalContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    color: theme.text,
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
  },
  totalPrice: {
    color: theme.text,
    fontFamily: 'Rubik-Bold',
    fontSize: 15,
  },
});
