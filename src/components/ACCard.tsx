import React, { FC } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ACText from './ACText.tsx';
import { colors } from '../config/colors';
import ACButton from './ACButton.tsx';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 195,
    marginTop: 32,
    marginBottom: 13,
  },
  button: {
    width: '100%',
  },
  description: {
    paddingBottom: 20,
  },
});

interface ACCardProps {
  imageUrl: string;
  title: string;
  description: string;
  textButton: string;
  onPress?: () => void;
}

const ACCard: FC<ACCardProps> = ({
  imageUrl,
  title,
  description,
  textButton,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/black-friday.png')}
        style={styles.image}
      />
      <ACText
        text={title}
        color={colors.white}
        fontSize={16}
        fontWeight={700}
      />
      <ACText
        text={description}
        color={colors.white}
        fontSize={12}
        fontWeight={400}
        style={styles.description}
      />
      <ACButton
        style={styles.button}
        color={colors.primary}
        text={textButton}
        textColor={colors.darkLight}
        onPress={onPress}
        />
    </View>
  );
};

export default ACCard;
