import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  noResultsText: {
    padding: 20,
  },
  noResultsBox: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  drinkBox: {
    height: 130,
    width: 320,
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  drinkPhoto: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    borderRadius: 80,
    alignSelf: 'center',
    marginLeft: 20,
  },
  drinkName: {
    width: 150,
    alignSelf: 'center',
    color: 'silver',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
});
