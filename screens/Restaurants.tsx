import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/Menu';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurants'>;
const Restaurants = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants Screen</Text>
      <ScrollView>
        <RestaurantCard
          name="Fice dining restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name: name});
          }}
        />
        <RestaurantCard
          name="ABC restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name: name});
          }}
        />
        <RestaurantCard
          name="LALA restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name: name});
          }}
        />
        <RestaurantCard
          name="Quang Huy restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name: name});
          }}
        />
        <RestaurantCard
          name="King restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name: name});
          }}
        />
        <RestaurantCard
          name="CUA restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name: name});
          }}
        />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 24,
  },
});
