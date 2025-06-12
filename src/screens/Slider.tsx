import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getPopularMovies } from '../utils/services/TMDBService';

const Slider = () => {
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
    <View>
      <Text>Slider Component</Text>
    </View>
  );
};

export default Slider;
