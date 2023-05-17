import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Rubik-Bold',
    paddingVertical: 20,
  },
  weight: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
  },
  image: {
    width: '100%',
    height: 260,
  },
});
