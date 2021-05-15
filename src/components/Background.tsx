import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/background';

const Background = ({children}) => {
  return (
    <LinearGradient
      colors={['#4747ff', '#c72222']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0.5}}
      style={styles.backgroundGradient}>
      {children}
    </LinearGradient>
  );
};

export default Background;
