import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from './screen/Splash'
import SignUp from './screen/SignUp'
import SignIn from './screen/SignIn'

// import HomeScreen from "./containers/Home";
// import MatchesScreen from "./containers/Matches";
// import MessagesScreen from "./containers/Messages";
// import ProfileScreen from "./containers/Profile";


const Stack = createStackNavigator();

const App = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Matches" component={MatchesScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}

      </Stack.Navigator>

    </NavigationContainer >

  );
};

export default App;