import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';
import { confirmOrder, removeFromCart } from '../../store/actions';

const Cart = () => {
  const image = {
    uri: 'https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-31879.jpg?w=740&t=st=1685212758~exp=1685213358~hmac=d3aa2c17782c138444f4f00f084368d9aa2a1eed77c624bc14eaac1f68c2297e',
  };
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.data);

  const isCartEmpty = cart.length === 0;
  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };
  const onConfirmOrder = () => {
    dispatch(confirmOrder({ cart, total }));
  };
  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
        <View style={styles.footerContainer}>
          <TouchableOpacity
            disabled={isCartEmpty}
            style={isCartEmpty ? styles.buttonDisabled : styles.buttonConfirm}
            onPress={onConfirmOrder}>
            <View style={styles.totalContainer}>
              <Text style={styles.buttonConfirmText}>Confirm</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.totalText}>Total: </Text>
                <Text style={styles.totalPrice}> USD {total}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Cart;
