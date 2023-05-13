import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components';
import { theme } from '../../constants';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Header title="Categories" />
      <View style={styles.container}>
        <Text style={styles.title}>List of Categories</Text>
        <Button
          title="Go to home"
          color={theme.colors.secondary}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Categories;
