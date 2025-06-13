import React, { useEffect, useState } from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import { getPopularMovies } from '../utils/services/TMDBService';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { TMDB_S3_URL } from '@env';
import { colors } from '../config/colors';
import ACButton from '../components/ACButton.tsx';
import ACText from '../components/ACText.tsx';

const { width, height } = Dimensions.get('window');

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
  carouselSection: {
    position: 'relative',
  },
  overlayContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 5,
  },
  titleButtonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
  },
  dotStyle: {
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  containerStyle: {
    gap: 7,
    marginTop: 12,
  },
  activeDotStyle: {
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
});

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Slider = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.carouselSection}>
        <Carousel
            ref={ref}
            width={width}
            height={height / 1.8}
            data={popularMovies.slice(0, 6)}
            onProgressChange={progress}
            renderItem={({ item }) => (
                <Image
                    source={{
                      uri: `${TMDB_S3_URL}${item.poster_path}`,
                    }}
                    style={styles.sliderImage}
                />
            )}
        />
        <View style={styles.overlayContainer}>
          <View style={styles.titleButtonSection}>
            <ACText
                text={'My List'}
                color={colors.white}
                fontSize={16}
                fontWeight={600}
            />
            <ACText
                text={'Discover'}
                color={colors.white}
                fontSize={16}
                fontWeight={600}
            />
          </View>
          <View style={styles.titleButtonSection}>
            <ACButton
              color={colors.darkLight}
              text="+ Whislist"
              textColor={colors.white}
              onPress={() => {console.log('Whislist');}}
            />
            <ACButton
                color={colors.primary}
                text="Details"
                textColor={colors.darkLight}
                onPress={() => {console.log('Details');}}
            />
          </View>
        </View>
      </View>

      <Pagination.Basic
        progress={progress}
        data={popularMovies.slice(0, 6)}
        dotStyle={styles.dotStyle}
        containerStyle={styles.containerStyle}
        activeDotStyle={styles.activeDotStyle}
        size={10}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default Slider;
