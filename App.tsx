import React from 'react';
import { StyleSheet, View } from 'react-native';
import {colors} from './src/config/colors.ts';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

import HomeScreen from './src/screens/Slider';
import ProfileScreen from './src/screens/Profile';
import WishlistScreen from './src/screens/Wishlist';
import SearchScreen from './src/screens/Search';

const Tab = createBottomTabNavigator();

const iconMap : any = {
  Home: 'house-user',
  Profile: 'id-badge',
  Wishlist: 'stream',
  Search: 'search',
};

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route } : any) => ({
            tabBarIcon: ({ color, size }) => {
              const iconName = iconMap[route.name];
              return <FontAwesome6
                name={iconName}
                size={size}
                color={color}
                iconStyle="solid"
              />;
            },
            tabBarActiveTintColor: '#F2C94C',
            tabBarInactiveTintColor: '#FFFFFF',
            tabBarActiveBackgroundColor: '#000000',
            tabBarInactiveBackgroundColor: '#000000',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Wishlist" component={WishlistScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.darkMode,
  },
});

export default App;
