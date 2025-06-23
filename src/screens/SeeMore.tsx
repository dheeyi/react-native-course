import React from 'react';
import { View } from 'react-native';
import {colors} from '../config/colors.ts';
import ACText from '../components/ACText.tsx';
import { useRoute } from '@react-navigation/native';

const SeeMore = () => {
  const route = useRoute<any>();

  return (
    <View>
      <ACText
        text={route.params?.title}
        color={colors.info}
        fontSize={16}
        fontWeight={600}
      />
      <ACText
        text={'SeeMore Component'}
        color={colors.info}
        fontSize={16}
        fontWeight={600}
      />
    </View>
  );
};

export default SeeMore;
