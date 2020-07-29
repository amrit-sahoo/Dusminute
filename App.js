import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Products from './src/components/product/Products';
import Cart from './src/components/cart/Cart';
import store from './src/store';
import Icons from 'react-native-vector-icons/MaterialIcons';
import SendOtp from './src/components/auth/SendOtp';
import VerifyOtp from './src/components/auth/VerifyOtp';
import CartIconWithBadge from './src/components/cart/CartIconWithBadge'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'store') {
            iconName = 'store';
            return <Icons name={iconName} size={size} color={color} />;
          } else if (route.name === 'cart') {
            iconName = 'shopping-cart';
            return <CartIconWithBadge name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="store" component={Products}  options={{ title: 'Store' }} />
      <Tab.Screen name="cart" component={Cart} options={{ title: 'Cart' }}/>
    </Tab.Navigator>
  )
}


function App() {
  const [isSignedIn, setSignedIn] = React.useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ?
            <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
            :
            <>
              <Stack.Screen name="sendOtp" component={SendOtp} options={{ headerShown: false }} />
              <Stack.Screen name="verifyOtp" options={{ title: 'Verify Otp' }}>
                {props => <VerifyOtp {...props} setSignedIn={setSignedIn} />}
              </Stack.Screen>
            </>
          }
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  );
}

export default App;