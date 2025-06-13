import React, { FC } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface ACTextProps {
  text: string;
  color: string;
  fontSize: number;
  fontWeight: TextStyle['fontWeight'];
  style?: object;
}

const ACText: FC<ACTextProps> = ({ text, color, fontSize, fontWeight, style }) => {
  return (
    <Text
      style={[
        styles.text,
        { color, fontSize, fontWeight },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
  },
});

export default ACText;