import { View, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import Stack Navigator
import Home from './src/components/screens/Home';
import Widget from './src/components/screens/Widget';
import Notification from './src/components/screens/Notification';
import Viewall from './src/components/screens/Viewall'; // Import Viewall

import HomeLight from "./src/assets/icons/home-light.svg";
import HomeDark from "./src/assets/icons/home-dark.svg";
import WidgetLight from "./src/assets/icons/widget-light.svg";
import WidgetDark from "./src/assets/icons/widget-dark.svg";
import NotificationsLight from "./src/assets/icons/notifications-light.svg";
import NotificationsDark from "./src/assets/icons/notifications-dark.svg";

// Create Stack and Tab navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="Viewall" 
            component={Viewall} 
            options={{ headerShown: false }} // Optional: set title for Viewall
        />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'green',
                    tabBarLabel: () => null, // Hide labels
                    tabBarStyle: {
                        backgroundColor: '#1E3A78', // Match with the cloudy blue background
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 60,
                        borderTopWidth: 0,
                    },
                    tabBarIcon: ({ focused }) => {
                        let iconPath;
                        if (route.name === 'HomeStack') {
                            iconPath = focused ? HomeLight : HomeDark;
                        } else if (route.name === 'Widget') {
                            iconPath = focused ? WidgetLight : WidgetDark;
                        } else {
                            iconPath = focused ? NotificationsLight : NotificationsDark;
                        }

                        const IconComponent = iconPath;
                        return <IconComponent width={22} height={22} />;
                    },
                })}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack} // Use the HomeStack component
                    options={{ headerShown: false }} // Hide header for Home
                />
                <Tab.Screen
                    name="Widget"
                    component={Widget}
                    options={{ headerShown: false }} // Hide header for Widget
                />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{ headerShown: false }} // Hide header for Notification
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 22,
        width: 22,
    },
});
