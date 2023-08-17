import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import Restaurants from './screens/Restaurants';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Restaurant from './screens/Restaurant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParams = {
  ExploreStack: undefined;
  Restaurants: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};
const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator initialRouteName="Restaurants">
      <RestaurantsStack.Screen name="Restaurants" component={Restaurants} />
      <RestaurantsStack.Screen name="Restaurant" component={Restaurant} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: string;
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Restaurant" component={Restaurant} />
    </ExploreStack.Navigator>
  );
};
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // return <Explore />;
  // return <Restaurants />;

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
        />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    alignItems: 'center',
  },
});

export default App;
