import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components';
import { theme } from '../../constants';

const Home = ({ navigation }) => {
  return (
    <View>
      <Header title="StockeAR" />
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Products"
            color={theme.colors.secondary}
            onPress={() => navigation.navigate('Products')}
          />
          <Button
            title="Go to Categories"
            color={theme.colors.secondary}
            onPress={() => navigation.navigate('Categories')}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
