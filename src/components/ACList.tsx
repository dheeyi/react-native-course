import React, { FC } from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { TMDB_S3_URL } from '@env';
import { Movie } from '../screens/Slider.tsx';

const {width} = Dimensions.get('window');

interface ACListProps {
    movies?: Movie[];
}

const ACList: FC<ACListProps> = ({movies = []}) => {
  const progress = useSharedValue<number>(0);

  return (
    <View>
      <Carousel
        data={movies}
        height={200}
        pagingEnabled={false}
        snapEnabled={false}
        width={width}
        style={{
          width: width,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 220,
        }}
        onProgressChange={progress}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              width: '40%',
            }}>
            <Image
              source={{
                uri: `${TMDB_S3_URL}${item.poster_path}`,
              }}
              style={styles.imagePoster}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePoster: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

export default ACList;
