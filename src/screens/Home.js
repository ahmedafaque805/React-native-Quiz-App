import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title title={'quizzler'} />
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={require('../assets/banner.jpg')}
          resizeMode={'contain'}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Text style={[styles.text, styles.button]}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

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
    color: 'black',
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
});
