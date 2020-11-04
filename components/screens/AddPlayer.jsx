import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Input, Button } from "@ui-kitten/components";
import { GameContext } from "./Game";
import usePrevious from "../../utils/usePrevious";

const AddPlayer = props => {
    const game = React.useContext(GameContext);
    const [value, setValue] = React.useState("");
    const [caption, setCaption] = React.useState("");

    const handlePress = () => {
        game.addNewPlayer(value)
            .then(() => {
                props.navigation.goBack();
            })
            .catch(err => {
                if (err === "exists") {
                    setCaption("That player already exists!")
                } else {
                    console.error(err);
                }
            })
    }

    const prevValue = usePrevious(value)
    React.useEffect(() => {
        if (caption && prevValue.length !== value.length) {
            setCaption("");
        }
    }, [value])


    return (
        <Layout style={styles.root}>
            <Text category="h4">Add a new player.</Text>
            <Input
                autoFocus
                caption={caption}
                status={caption ? "danger" : "primary"}
                value={value}
                placeholder="Name"
                onChangeText={newValue => setValue(newValue)}
            />
            <Button onPress={handlePress}>Add</Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
        padding: 32
    }
})

export default AddPlayer;