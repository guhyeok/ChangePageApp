import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName= "MAIN">
          <Stack.Screen name = "FIRST" component={FirstScreen}
            options= {{
              headerTitle: (props) => <LogoTitle {...props} />
            }}/>

            <Stack.Screen name = "SECOND" component={SecondScreen}
            options= {{
              title: '두번째 화면'
            }}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

function LogoTitle() {
  return(
    <Image
      style = {{ width: 50, height: 50}}
      source = {require('./image/MK_logo.png')}
      />
  );
}

export default App;