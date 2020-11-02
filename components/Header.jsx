import React from "react";
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


const Header = ({ scene, previous, navigation }) => {

    const handlePress = () => {
        navigation.goBack();
    }

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={handlePress} />
    );


    const { options } = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
                ? options.title
                : scene.route.name;

    React.useEffect(() => {
        console.warn(scene)
    }, [scene])


    return (
        <TopNavigation
            alignment='center'
            accessoryLeft={previous ? BackAction : null}
            title={title}
        />
    )
};

export default Header;