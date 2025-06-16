import React, { FC } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import ACText from './ACText';

interface ButtonProps {
  color: string;
  text: string;
  textColor: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  isOutline?: boolean
}

const ACButton: FC<ButtonProps> = ({ color, text, textColor, onPress, style, isOutline }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        !isOutline && { backgroundColor: color },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <ACText
        text={text}
        color={textColor}
        fontSize={16}
        fontWeight={600}
        style={styles.textStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    width: 155,
    height: 48,
  },
  textStyle: {
    paddingTop: 2,
  },
});

export default ACButton;
