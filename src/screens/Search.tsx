import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCocktails, setCocktails} from '../store/cocktails/actions';
import Background from '../components/Background';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import {styles} from '../styles/search';

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const {cocktailList, isLoading} = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText?.length > 2) {
      dispatch(getCocktails(searchText));
    }
    dispatch(setCocktails([]));
  }, [searchText]);

  const renderItem = item => {
    return (
      <View key={item.item.id} style={styles.drinkBox}>
        <Image source={{uri: item.item.drinkPhoto}} style={styles.drinkPhoto} />
        <Text style={styles.drinkName}>{item.item.drinkName}</Text>
      </View>
    );
  };

  const cancelData = () => {
    dispatch(setCocktails([]));
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        getData={setSearchText}
        searchText={searchText}
        cancelData={cancelData}
      />
      <Background>
        {cocktailList.length > 0 ? (
          <FlatList
            data={cocktailList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <TouchableOpacity style={styles.noResultsBox}>
            <Text style={styles.noResultsText}>
              {isLoading ? 'Loading...' : 'No results...'}
            </Text>
          </TouchableOpacity>
        )}
      </Background>
    </View>
  );
};

export default Search;
