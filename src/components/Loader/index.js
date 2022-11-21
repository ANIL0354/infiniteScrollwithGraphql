import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {PINK} from '../../theme/color';
import styles from './styles';

const Loader = ({size = 'large', color = PINK}) => (
  <View style={styles.centered}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

export default Loader;
