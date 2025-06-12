import React, { useEffect } from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { getPopularMovies } from '../utils/services/TMDBService';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
} from 'react-native-reanimated-carousel';

const dataCarousel = [...new Array(6).keys()];
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numberText: {
    textAlign: 'center',
    fontSize: 30,
  },
  renderContainer: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
  },
});

const Slider = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        console.log('data', data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  });

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={dataCarousel}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View style={styles.renderContainer}>
            <Text style={styles.numberText}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
