import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { useSelector } from 'react-redux';

import { theme } from '../../constants';
import CartNavigator from '../cart';
import OrdersNavigator from '../orders';
import ShopNavigator from '../shop';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const cart = useSelector((state) => state.cart.data);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const tabIconAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    tabIconAnimation();
  }, [tabIconAnimation]);
  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Rubik-Regular',
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="Menu"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ focused, color, size }) => (
            <Animated.View style={{ opacity: animatedValue }}>
              <Ionicons name={focused ? 'menu' : 'menu-outline'} size={size} color={color} />
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.text,
            fontFamily: 'Rubik-Bold',
            fontSize: 11,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
