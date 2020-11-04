import React from "react";
import { StyleSheet } from "react-native";
import { Modal, Card, Text, Button, Layout } from "@ui-kitten/components";
import PropTypes from "prop-types";

/**
 * @param {}
 */

const ButtonWithConfirmationModal = props => {
    const [visible, setVisible] = React.useState(false);

    const handleAccept = () => {
        setVisible(false);
        props.onAccept();
    }

    return (
        <React.Fragment>
            <Modal
                visible={visible}
                backdropStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                onBackdropPress={() => setVisible(false)}
            >
                <Card status={props.status} style={styles.card} header={() => <Text style={styles.headerText} category="h4">{props.headerText}</Text>}>
                    <Layout style={styles.cardLayout}>
                        <Button style={styles.cardButton} onPress={handleAccept} status={props.status}>{props.acceptText}</Button>
                        <Button style={styles.cardButton} onPress={() => setVisible(false)}>Cancel</Button>
                    </Layout>
                </Card>
            </Modal>
            <Button onPress={() => setVisible(true)}>{props.buttonText}</Button>
        </React.Fragment>
    )
}

ButtonWithConfirmationModal.propTypes = {
    status: PropTypes.oneOf(["primary", "success", "info", "warning", "danger", "basic"]),
    headerText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    acceptText: PropTypes.string,
    onAccept: PropTypes.func.isRequired,
}

ButtonWithConfirmationModal.defaultProps = {
    status: "primary",
    acceptText: "Continue"
}

const styles = StyleSheet.create({
    headerText: {
        padding: 16
    },
    cardLayout: {
        display: "flex",
        flexDirection: "row"
    },
    cardButton: {
        flexGrow: 1,
        margin: 1
    }
})

export default ButtonWithConfirmationModal;