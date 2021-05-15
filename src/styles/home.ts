import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    marginTop: 280,
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '90%',
    color: '#FF9500',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
  },
  buttonInner: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    color: 'silver',
    fontWeight: 'bold',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 25,
  },
});
