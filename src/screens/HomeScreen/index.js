import React, { useState } from 'react';
import { Text, FlatList, Pressable, SafeAreaView, Image,View } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import Loader from '../../components/Loader'
import styles from './styles';

const CHAPTERS_QUERY = gql`
  query Characters($page:Int){
     characters(page:$page) {
        info {
        count
        pages
        next
        prev
        }
        results {
        name
        id
        status
        species
        type
        gender
        image
        }
    }
}`


const CharactersItem = ({ item, onPress }) => {
  const { gender,id,image,name,species,status,type} = item

    return (
        <Pressable style={styles.item} onPress={onPress}>
        <View style={styles.chatList}>
          <Image
            source={{ uri: image }}
            style={styles.chatImage}
          />
          <View style={styles.textArea}>
            <View>
              <Text style={styles.chatName}>
                {name}
              </Text>
              {/* {lastMessage ? (
                <Text
                  style={[
                    styles.chatLastMsg,
                    item.unreadCount
                      ? { fontFamily: "bold", color: "#6a6a6a" }
                      : null,
                  ]}
                >
                  {addEllipseToLongTitleMsg(lastMessage)}
                </Text>
              ) : null} */}
            </View>
              <View style={styles.unreadContainer}>
                <Text style={styles.unreadNumber}>{type}</Text>
              </View>
          </View>
        </View>
      </Pressable>
  )
}
const HomeScreen = ({
    navigation,
}) => {
    const [meta, setMeta] = useState({ page: 1 })
    const { data, loading, error,fetchMore,networkStatus,refetch } = useQuery(CHAPTERS_QUERY, { variables: { page: meta.page } })

    console.log("data", data,error,loading);

    if (loading && !networkStatus === 4)
        return (<Loader />)
    const onEndReached = () => {
                if (data?.characters?.info?.next) {
                    fetchMore({
                        variables: {
                            page:data?.characters?.info?.next
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                        // Concatenate the new feed results after the old ones
                            return {
                            ...prev,
                            characters: {
                                ...fetchMoreResult.characters,
                                results:[...prev.characters.results,...fetchMoreResult.characters.results]
                                }
                            };
                        }
                    })
                }

    }

    return (
    <SafeAreaView style={styles.safeAreaView}>
        <FlatList
            data={data?.characters?.results || []}
            contentContainerStyle={{flexGrow: 1}}
            onEndReachedThreshold={0.2}
            refreshing={!loading&&networkStatus === 4}
            ListFooterComponent={() => {
                return (
                data?.characters?.info?.next ? <Loader size='small'/>:null
                )
            }}
            onRefresh={() => refetch()}
            onEndReached={onEndReached}
            renderItem={({ item }) => {
            return(
                <CharactersItem
                item={item}
                onPress={() => navigation.navigate('Detail', { chapter: item })}
                />
            )}}
            keyExtractor={(item) => item.id.toString()}
        />
    </SafeAreaView>
)};

export default HomeScreen;
