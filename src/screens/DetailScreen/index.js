import React from 'react';
import {Text, View, StatusBar, ScrollView, Image} from 'react-native';
import styles from './styles';

const DetailScreen = ({route, navigation}) => {
  const {character} = route?.params;
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.header}>
        <Text style={styles.headerText}>{character?.name}</Text>
      </View>
    ),
  });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <Image
          source={{
            uri: character?.image,
          }}
          style={styles.image}
        />

        <Text style={styles.text}>{character?.name}</Text>

        <Text style={[styles.text, styles.species]}>@{character?.species}</Text>

        <Text style={[styles.text, styles.details]}>
          @{character?.status} in {character?.location?.name} from{' '}
          {character?.origin?.name}
        </Text>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
