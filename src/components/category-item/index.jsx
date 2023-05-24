import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { styles } from './styles';

const image = {
  uri: 'https://img.freepik.com/free-vector/abstract-blur-blue-pink-gradient-background-design_53876-136695.jpg?w=360&t=st=1684966403~exp=1684967003~hmac=a378c0e4d2ae20904cf2eca94ae96ab181ab4a7211419636333c950c69752c1b',
};

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
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
