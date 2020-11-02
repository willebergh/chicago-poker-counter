import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Layout, Text, Divider, Button } from "@ui-kitten/components";
import Player from "./Player";
import AddPoints from "./AddPoints";

const _players = [
    { name: "Elis", icon: "none", points: 0 },
    { name: "Wille", icon: "none", points: 0 },
    { name: "Olle", icon: "none", points: 0 },
]

const Stack = createStackNavigator();

const Game = function (props) {

    const [players, setPlayers] = React.useState(_players);

    const handlePress = e => {
        props.navigation.navigate("AddPoints")
    }

    return (
        <Layout style={styles.root}>

            {
                players.map(x => (
                    <React.Fragment>
                        <Player {...x} />
                        <Divider />
                    </React.Fragment>
                ))
            }

            <Button onPress={handlePress}>Add Points</Button>

        </Layout>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: 16,
        marginTop: 64,
    }
})

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="AddPoints" component={AddPoints} />
    </Stack.Navigator>
)