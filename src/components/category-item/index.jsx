import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ item, onSelected }) => {
  const image = {
    uri: 'https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-31879.jpg?w=740&t=st=1685212758~exp=1685213358~hmac=d3aa2c17782c138444f4f00f084368d9aa2a1eed77c624bc14eaac1f68c2297e',
  };

  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ ...styles.containerTouchable, backgroundColor: item.color }}
            onPress={() => onSelected(item)}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoryItem;
