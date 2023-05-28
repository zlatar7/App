import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  name: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    paddingVertical: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    paddingVertical: 5,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Rubik-Bold',
    paddingVertical: 10,
  },
  size: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 220,
  },
});
