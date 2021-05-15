import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  backIcon: {
    width: 35,
    height: 35,
    margin: 5,
  },
  input: {
    alignSelf: 'center',
    height: 35,
    backgroundColor: '#bababa',
    borderRadius: 5,
    paddingLeft: 10,
  },
  cancelButton: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  cancelText: {
    color: 'red',
    fontSize: 16,
  },
});
