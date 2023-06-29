import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import BookListPage from './src/screens/bookListPage';
import BookDetailPage from './src/screens/bookDetailPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar animated={true} backgroundColor="#D6EAF8" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="BookListPage" component={BookListPage} />
          <Stack.Screen name="BookDetailPage" component={BookDetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
