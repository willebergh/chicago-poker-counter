import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button, Divider, useTheme } from "@ui-kitten/components";
import { GameContext } from "./Game";
import Swipeout from "react-native-swipeout";

import ListRow from "../ListRow";

const Row = function (props) {
    const game = React.useContext(GameContext);
    const theme = useTheme();

    const swipeRightButtons = [
        {
            text: "Remove",
            backgroundColor: theme["color-danger-500"],
            overlayColor: "black",
            type: "delete",
            underlayColor: "black",
            onPress: () => {
                game.removePlayer(props.name);
            }
        }
    ]

    return (
        <Swipeout autoClose={true} close={true} right={swipeRightButtons}>
            <Layout style={styles.row}>
                <Text category="h3" style={styles.rowName}>
                    {props.name}
                </Text>
                <Text category="h3" style={styles.rowPoints}>
                    {props.points} p
            </Text>
            </Layout>
        </Swipeout>
    )
}

const Leaderboard = function (props) {

    const game = React.useContext(GameContext);


    return (
        <Layout style={styles.leaderboard}>

            {
                game.players.map((x, key) => (
                    <React.Fragment key={key}>
                        <ListRow name={{ first: x.name, last: x.points }} email="helloworld@dampgang.com" />
                        <Divider />
                    </React.Fragment>
                ))
            }



        </Layout>
    )
}

const styles = StyleSheet.create({
    leaderboard: {
        flexGrow: 1,
        padding: 32
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8
    }, rowName: {

    }, rowPoints: {
        fontWeight: "normal"
    },

})

export default Leaderboard;