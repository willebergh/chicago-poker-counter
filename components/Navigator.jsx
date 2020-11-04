import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar, Tab } from "@ui-kitten/components";

import Game from "./screens/Game";
import Settings from "./screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

const TopTabBar = ({ navigation, state }) => (
    <TabBar
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <Tab title="Game" />
        <Tab title="Settings" />
    </TabBar>
);

const Nav = () => {


    return (
        <NavigationContainer>

            <Navigator tabBar={props => <TopTabBar {...props} />}>
                <Screen name="Game" component={Game} />
                <Screen name="Settings" component={Settings} />
            </Navigator>

        </NavigationContainer>
    )
}

export default Nav;
