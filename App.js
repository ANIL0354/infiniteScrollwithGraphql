/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
const App: () => Node = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerBackTitleVisible: false}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
