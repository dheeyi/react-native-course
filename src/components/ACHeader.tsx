import React, {FC} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {colors} from '../config/colors.ts';

interface ACHeaderProps {
  title: string;
  titleNav: string;
  handleNav: () => void;
}

const ACHeader: FC<ACHeaderProps> = ({ title, titleNav, handleNav } ) => {
  return (
    <View style={styles.ACHeaderContainer}>
      <View style={styles.ACHeaderTitleContainer}>
        <View>
          <Text style={styles.titleStyles}>{title}</Text>
        </View>
        <TouchableOpacity onPress={handleNav}>
          <Text style={styles.titleNavStyles}>{titleNav}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ACHeaderContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    marginTop: 10,
    backgroundColor: colors.darkMode,
    paddingBottom: 12,
  },
  ACHeaderTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleNavStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default ACHeader;
