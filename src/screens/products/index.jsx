import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Home"
        color={theme.colors.secondary}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Products;
