import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
        <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
