import React from 'react';
import { View } from 'react-native';
import ACText from '../components/ACText.tsx';
import {colors} from '../config/colors.ts';

const Search = () => {
  return (
    <View>
      <ACText
        text={'Search Component'}
        color={colors.info}
        fontSize={16}
        fontWeight={600}
      />
    </View>
  );
};

export default Search;
