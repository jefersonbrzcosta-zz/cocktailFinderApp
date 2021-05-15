import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {styles} from '../styles/header';

interface HeaderProps {
  navigation: any;
  getData: Function;
  searchText: string;
  cancelData: Function;
}

const Header = ({navigation, getData, searchText, cancelData}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/left.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <TextInput
        style={{
          width: searchText.length === 0 ? '87%' : '70%',
          alignSelf: 'center',
          height: 35,
          backgroundColor: '#f2f2f2',
          borderRadius: 5,
          paddingLeft: 10,
          color: 'silver',
        }}
        placeholder="Search"
        placeholderTextColor="silver"
        onChangeText={getData}
        value={searchText}
      />
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => cancelData()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
