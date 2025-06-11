import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: '#1d49e8',
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
    </View>
  );
};

export default Home;
