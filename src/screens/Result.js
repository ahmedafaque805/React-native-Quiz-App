import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Result = ({navigation, route}) => {
  const {Result} = route.params;
  return (
    <View style={styles.container}>
      <Title title={'Result'} />
      <Text style={styles.result}>Correct Answers : {Result}</Text>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={require('../assets/banner.jpg')}
          resizeMode={'contain'}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.text, styles.button]}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 12,
    height: '100%',
  },
  banner: {
    height: 320,
    width: 320,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#5FA8D3',
  },
  button: {
    fontSize: 20,
    width: '100%',
    backgroundColor: '#5FA8D3',
    padding: 16,
    textAlign: 'center',
    borderRadius: 20,
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
  },
  result: {
    color: '#5FA8D3',
    textAlign: 'center',
    fontSize: 20,
  },
});
