import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        title:"Movies",
        headerStyle:{
          backgroundColor: "#15B097"
        },
        headerTintColor: "white"
      }}/>
     
    </Stack.Navigator>
  )
}

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});



export default function App() {
  return (
    <ApolloProvider client={client}>
     <NavigationContainer>{MyStack()}</NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
