import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  titleContainer: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
