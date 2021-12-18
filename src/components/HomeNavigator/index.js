import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import HomeScreen from '../HomeScreen';
import { Divider, Text, Title } from 'react-native-paper';
import RegisterComplaintScreen from '../RegisterComplaintScreen';
import BrowseComplaintsScreen from '../BrowseComplaintsScreen';
import MyComplaintsScreen from '../MyComplaintsScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={() => <Title>Citizens Portal</Title>}
            />
            <DrawerItemList {...props} />
            <Divider />
            <DrawerItem
                label={() => <Text
                    onPress={() => props.navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: SCREEN_NAMES.LOGIN,
                            },
                        ],
                    })}
                    style={{ color: 'red' }}>Logout</Text>}
            />
        </DrawerContentScrollView>
    )
}

export default function HomeNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName={SCREEN_NAMES.HOME}
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen
                name={SCREEN_NAMES.HOME}
                component={HomeScreen}
            />
            <Drawer.Screen
                name={SCREEN_NAMES.REGISTER_COMPLAINT}
                component={RegisterComplaintScreen}
            />
            <Drawer.Screen
                name={SCREEN_NAMES.BROWSE_COMPLAINTS}
                component={BrowseComplaintsScreen}
            />
            <Drawer.Screen
                name={SCREEN_NAMES.MY_COMPLAINTS}
                component={MyComplaintsScreen}
            />
        </Drawer.Navigator>
    );
}