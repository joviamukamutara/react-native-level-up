import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen';
import CustomHeader from './components/customHeader'; // Import CustomHeader
import CalendarContainer from './components/CalendarContainer'; // Import CalendarContainer

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentHistory">
        <Stack.Screen
          name="PaymentHistory"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Payment History',
            headerLeft: () => (
              <CustomHeader navigation={navigation} /> // Use CustomHeader as the headerLeft
            ),
          })}
        />

        <Stack.Screen
          name="Calendar"
          component={CalendarContainer}
          options={{ title: 'Calendar' }}
        />

        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
