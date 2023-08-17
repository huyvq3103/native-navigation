import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';
import {RootStackParams} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;
const Explore = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurant</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Ahaha restaurants"
          onPress={() => {
            // navigation.push('Restaurant', {name: 'SuShi restaurants'});
            navigation.navigate('Restaurants', {
              screen: 'Restaurant',
              params: {name: 'Hello from explore'},
            });
          }}
        />
        <RestaurantCard
          name="Buggi restaurants"
          onPress={() => {
            navigation.push('Restaurant', {name: 'SuShi restaurants'});
          }}
        />
        <RestaurantCard
          name="Ala restaurants"
          onPress={() => {
            navigation.push('Restaurant', {name: 'SuShi restaurants'});
          }}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="Ahaha restaurants"
          onPress={() => {
            navigation.push('Restaurant', {name: 'SuShi restaurants'});
          }}
        />
        <RestaurantCard
          name="Buggi restaurants"
          onPress={() => {
            navigation.push('Restaurant', {name: 'SuShi restaurants'});
          }}
        />
        <RestaurantCard
          name="Ala restaurants"
          onPress={() => {
            navigation.push('Restaurant', {name: 'SuShi restaurants'});
          }}
        />
      </View>
      <Menu />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
