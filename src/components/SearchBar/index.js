import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const SearchBar = ({searchPhrase, onSearch}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'#000'}
          value={searchPhrase}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};
export default SearchBar;
