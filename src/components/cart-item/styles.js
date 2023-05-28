import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: theme.text,
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: theme.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontFamily: 'Rubik-Bold',
    color: theme.text,
    marginBottom: 5,
  },
});
