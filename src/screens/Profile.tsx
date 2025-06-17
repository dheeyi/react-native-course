import React from 'react';
import { Text, View } from 'react-native';
import {colors} from '../config/colors.ts';
import ACText from '../components/ACText.tsx';

const Profile = () => {
  return (
    <View>
      <ACText
        text={'Profile Component'}
        color={colors.info}
        fontSize={16}
        fontWeight={600}
      />
    </View>
  );
};

export default Profile;
