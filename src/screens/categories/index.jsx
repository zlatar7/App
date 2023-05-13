import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <Button
        title="Go to home"
        color={theme.colors.secondary}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Categories;
