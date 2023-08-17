import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text>Name :John Doe</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    padding: 16,
    marginTop: 24,
  },
});
