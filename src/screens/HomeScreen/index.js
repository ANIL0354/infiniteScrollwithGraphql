import React, {useCallback} from 'react';
import {
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  Image,
  View,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Loader from '../../components/Loader';
import styles from './styles';
import {normalize} from '../../theme/responsive';

const CHAPTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          dimension
        }
        location {
          name
          dimension
        }
        image
      }
    }
  }
`;

function CharactersItem({item, onPress}) {
  const {image, name, species} = item;

  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View style={styles.list}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.name}>
          <Text
            style={styles.nameText}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {name}
          </Text>
          <View style={styles.species}>
            <Text
              style={styles.speciesText}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {species}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
const HomeScreen = ({navigation}) => {
  const page = 1;
  const {
    data,
    loading,
    error,
    fetchMore,
    networkStatus,
    refetch,
  } = useQuery(CHAPTERS_QUERY, {variables: {page: page}});

  function onEndReached() {
    if (data?.characters?.info?.next) {
      fetchMore({
        variables: {
          page: data?.characters?.info?.next,
        },
        updateQuery: (prev, {fetchMoreResult}) => {
          if (!fetchMoreResult) return prev;
          // Concatenate the new feed results after the old ones
          return {
            ...prev,
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...prev.characters.results,
                ...fetchMoreResult.characters.results,
              ],
            },
          };
        },
      });
    }
  }

  function onPress(item) {
    navigation.navigate('Detail', {character: item});
  }

  function onRefresh() {
    refetch();
  }

  if (loading && !(networkStatus === 4)) return <Loader />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={data?.characters?.results || []}
        contentContainerStyle={styles.contentContainer}
        onEndReachedThreshold={0.2}
        refreshing={!loading && networkStatus === 4}
        ListFooterComponent={() => {
          return data?.characters?.info?.next ? (
            <Loader size="small" color="#13988E" />
          ) : null;
        }}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={({item}) => {
          return <CharactersItem item={item} onPress={() => onPress(item)} />;
        }}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContainerStyle}>
              <Text style={styles.emptyText}>
                {!error ? `No data found` : `Something went wrong`}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
