import React from "react";
import { Pressable } from "react-native"
import { StyleSheet, ScrollView } from "react-native";
import { Layout, List, ListItem, Button, Text, Divider } from "@ui-kitten/components";


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
    { name: "Royal straight flush", points: "Win" },
]

const AddPoints = props => {

    const renderButton = () => (
        <Button size="tiny">Choose</Button>
    )

    const renderListItems = ({ index, item }) => (
        <ListItem
            title={item.name}
            description={item.points}
            accessoryRight={renderButton}
        />
    )

    const handlePress = points => e => {
        props.navigation.navigate("Game")
    }

    return (
        <Layout>

            <ScrollView>

                {points.map(_ => (
                    <React.Fragment>
                        <Pressable onPress={handlePress(_.points)}>
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
    container: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column"
    }, row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 16,

    }
})

export default AddPoints;