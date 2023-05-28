import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ProductItem } from '../../components';
import { filterProducts, selectProduct } from '../../store/actions';

const Products = ({ navigation, route }) => {
  const image = {
    uri: 'https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-31879.jpg?w=740&t=st=1685212758~exp=1685213358~hmac=d3aa2c17782c138444f4f00f084368d9aa2a1eed77c624bc14eaac1f68c2297e',
  };
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Product', {
      name: item.name,
    });
  };

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={category.color} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={keyExtractor} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Products;
