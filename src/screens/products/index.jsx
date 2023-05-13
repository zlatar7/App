import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components';
import { theme } from '../../constants';

const Products = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Header title="Products" />
      <View style={styles.container}>
        <Text style={styles.title}>List of Products</Text>
        <Button
          title="Go to Home"
          color={theme.colors.secondary}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Products;
