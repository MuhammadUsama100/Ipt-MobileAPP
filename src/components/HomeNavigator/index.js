import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import HomeScreen from '../HomeScreen';
import { Divider, Paragraph, Text, Title } from 'react-native-paper';
import RegisterComplaintScreen from '../RegisterComplaintScreen';
import BrowseComplaintsScreen from '../BrowseComplaintsScreen';
import MyComplaintsScreen from '../MyComplaintsScreen';
import Logo from '../../shared/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../sources';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={() => {
                    return (
                        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{width: 50, marginRight: 10}}>
                                <Logo />
                            </View>
                            <Title>Citizens Portal</Title>
                        </View>
                    )
                }}
            />
            <Divider />
            <DrawerItemList {...props} />
            <Divider />
            <DrawerItem
                label={() => <Text
                    onPress={() => {
                        props.dispatch(logoutUser());
                        props.navigation.reset({
                            index: 0,
                            routes: [
                                {
                                    name: SCREEN_NAMES.LOGIN,
                                },
                            ],
                        })
                    }}
                    style={{ color: 'red' }}>Logout</Text>}
            />
        </DrawerContentScrollView>
    )
}

export default function HomeNavigator() {
    const dispatch = useDispatch();

    return (
        <Drawer.Navigator
            initialRouteName={SCREEN_NAMES.HOME}
            drawerContent={(props) => <CustomDrawerContent dispatch={dispatch} {...props} />}
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