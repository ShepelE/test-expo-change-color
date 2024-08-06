import React, {
    useCallback,
    useState,
} from "react";

import {
    StyleSheet,
    Text,
    TextStyle,
    Pressable,
    ViewStyle,
} from 'react-native';
import { getRandomColor } from "./utils/get-random-color";

export default function App() {
    const [viewStyle, setViewStyle] = useState<ViewStyle>(styles.container);
    const [textStyle, setTextStyle] = useState<TextStyle>(styles.text);

    const handlePress = useCallback(
        () => {
            const red = getRandomColor();
            const green = getRandomColor();
            const blue = getRandomColor();
            setViewStyle({
                ...styles.container,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            });
            setTextStyle({
                ...styles.text,
                color: `rgb(${255 - red}, ${255 - green}, ${255 - blue})`,
            });
        },
        [],
    );

    return (
        <Pressable
            style={viewStyle}
            onPress={handlePress}
        >
            <Text style={textStyle}>Hello there</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 32,
        lineHeight: 40,
        color: '#000000',
    },
});
