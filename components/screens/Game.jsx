import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Layout, Button } from "@ui-kitten/components";

import Header from "../Header";
import AddPoints from "./AddPoints";
import AddPlayer from "./AddPlayer";
import Leaderboard from "./Leaderboard";
import ButtonWithConfirmationModal from "../../utils/ButtonWithConfirmationModal";

const Stack = createStackNavigator();

const GameContext = React.createContext({
    players: []
})

const Game = () => {
    const navigation = useNavigation();
    const [players, setPlayers] = React.useState([])

    const context = {
        players,
        addNewPlayer: name => new Promise((resolve, reject) => {
            const foundPlayer = players.find(_ => _.name === name);
            if (foundPlayer) {
                return reject("exists");
            } else {
                const newPlayers = [...players];
                newPlayers.push({ name, points: 0 });
                setPlayers(newPlayers);
                return resolve()
            }
        }),
        removePlayer: name => {
            const index = players.findIndex(_ => _.name === name);
            const newPlayers = [...players];
            newPlayers.splice(index, 1);
            setPlayers(newPlayers);
        },
        addPlayerPoints: (name, points) => {
            const newPlayers = [...players];
            const playerIndex = newPlayers.findIndex(_ => _.name === name);
            newPlayers[playerIndex].points += points;
            newPlayers.sort((a, b) => b.points - a.points)
            setPlayers(newPlayers);
        },
        reset: () => {
            const newPlayers = players.map(_ => ({ ..._, points: 0 }));
            setPlayers(newPlayers);
        },
        getSettings: () => {
            return ({
                points: [
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
            })
        }
    }

    const handleNavigationButton = route => e => {
        navigation.navigate(route);
    }

    return (
        <GameContext.Provider value={context}>
            <Stack.Navigator screenOptions={{ header: Header }}>
                <Stack.Screen name="Leaderboard" component={Leaderboard} />
                <Stack.Screen name="AddPoints" component={AddPoints} />
                <Stack.Screen name="AddPlayer" component={AddPlayer} />
            </Stack.Navigator>

            <Layout style={styles.gameActions}>
                <Button disabled={context.players.length === 0 ? true : false} onPress={handleNavigationButton("AddPoints")}>Add Points</Button>
                <Button onPress={handleNavigationButton("AddPlayer")}>Add Player</Button>

                <ButtonWithConfirmationModal
                    buttonText="Reset"
                    headerText="Are you sure you want to reset all points?"
                    acceptText="Reset"
                    onAccept={context.reset}
                    status="danger"
                />

            </Layout>

        </GameContext.Provider>
    )
}

const styles = StyleSheet.create({
    gameActions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})

export default Game;
export { GameContext };