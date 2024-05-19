import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import AddNewCardScreen from './screens/AddNewCardScreen';
import BusRecommendationScreen from './screens/BusRecommendationScreen';
import CardsScreen from './screens/CardsScreen';
import ComplainsScreen from './screens/ComplainsScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFCFD',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        })}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            title: 'Home Screen',
          })}
        />
        <Stack.Screen
          name="BusRecommendationScreen"
          component={BusRecommendationScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            title: 'Bus Recommendation',
          })}
        />
        <Stack.Screen
          name="ComplainsScreen"
          component={ComplainsScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            title: 'Complains',
          })}
        />
        <Stack.Screen
          name="AddNewCardScreen"
          component={AddNewCardScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            title: 'Add New Card',
          })}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            title: 'Payment',
          })}
        />
        <Stack.Screen
          name="CardsScreen"
          component={CardsScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            title: 'Cards',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
