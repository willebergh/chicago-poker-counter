import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Card, Text } from "@ui-kitten/components";


const Header = props => <Text category="h2">{props.text}</Text>


const Player = function (props) {

    return (
        <Layout style={styles.root}>
            <Text category="h1" style={styles.name}>
                {props.name}
            </Text>
            <Text category="h1" style={styles.points}>
                {props.points} p
            </Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }, name: {

    }, points: {
        fontWeight: "normal"
    }

})

export default Player;
