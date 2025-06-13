import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from './src/screens/Slider.tsx';
import {colors} from './src/config/colors.ts';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Slider />
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
