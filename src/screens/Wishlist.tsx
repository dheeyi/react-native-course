import React from 'react';
import { Text, View } from 'react-native';
import {colors} from '../config/colors.ts';
import ACText from '../components/ACText.tsx';

const Wishlist = () => {
  return (
    <View>
      <ACText
        text={'Wishlist Component'}
        color={colors.info}
        fontSize={16}
        fontWeight={600}
      />
    </View>
  );
};

export default Wishlist;
