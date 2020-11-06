import React from "react";
import { Pressable } from "react-native"
import { StyleSheet, ScrollView } from "react-native";
import { Layout, List, ListItem, Button, Text, Divider } from "@ui-kitten/components";
import { GameContext } from "./Game";


const points = [
    { name: "One pair", points: 1 },
    { name: "Two pair", points: 2 },
    { name: "Three of a kind", points: 3 },
    { name: "Straight", points: 4 },
    { name: "Flush", points: 5 },
    { name: "Full house", points: 6 },
    { name: "Four of a kind", points: 7 },
    { name: "Straight flush", points: 8 },
    { name: "Royal flush", points: 20 },
    // { name: "Royal straight flush", points: "Win" },
]


const AddPoints = props => {
    const game = React.useContext(GameContext);
    const [chosenPoints, setChosenPoints] = React.useState(null);

    const handlePress__points = points => e => {
        setChosenPoints(points);

    }

    const handlePress__player = player => e => {
        game.addPlayerPoints(player, chosenPoints);
        props.navigation.navigate("Leaderboard")
    }

    return (
        <Layout style={styles.root}>
            <ScrollView>

                {chosenPoints ? game.players.map(_ => (
                    <React.Fragment>
                        <Pressable onPress={handlePress__player(_.name)}>
                            <Layout style={styles.row}>
                                <Text category="h5">{_.name}</Text>
                                <Text category="h5">{_.points}p</Text>
                            </Layout>
                        </Pressable>
                        <Divider />
                    </React.Fragment>
                )) : game.getSettings().points.map(_ => (
                    <React.Fragment>
                        <Pressable onPress={handlePress__points(_.points)}>
                            <Layout style={styles.row}>
                                <Text category="h5">{_.name}</Text>
                                <Text category="h5">(+{_.points})</Text>
                            </Layout>
                        </Pressable>
                        <Divider />
                    </React.Fragment>
                ))}

            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    root: {
        flexGrow: 1
    }, row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 16,

    }
})

export default AddPoints;