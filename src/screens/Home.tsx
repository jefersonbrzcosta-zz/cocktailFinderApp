import React from 'react';
import Background from '../components/Background';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../styles/home';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Background>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Search')}>
          <View style={styles.buttonInner}>
            <Image
              source={require('../assets/search.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Search your favorite cocktail</Text>
          </View>
        </TouchableOpacity>
      </Background>
    </View>
  );
};

export default Home;
