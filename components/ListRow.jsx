import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { GameContext } from "./screens/Game";

const ANIMATION_DURATION = 250;
const ROW_HEIGHT = 70;

class ListRow extends Component {
    constructor(props) {
        super(props);
        this._animated = new Animated.Value(0);
    }

    static contextType = GameContext;

    componentDidMount() {
        Animated.timing(this._animated, {
            toValue: 1,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start();
    }

    onRemove = () => {
        Animated.timing(this._animated, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true
        }).start(() => this.context.removePlayer(this.props.name.first));
    };

    render() {
        const { name, picture, email } = this.props;

        const rowStyles = [
            styles.row,
            {
                opacity: this._animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                })
            },

        ];

        return (
            <TouchableOpacity onPress={this.onRemove}>
                <Animated.View style={rowStyles}>
                    <View>
                        <Text style={styles.name}>{name.first} {name.last}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        height: ROW_HEIGHT,
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
    },
    email: {
        fontSize: 14,
    },
});

export default ListRow;