import { StyleSheet, View } from "react-native"
import { Video, ResizeMode, onPlaybackStatusUpdate } from "expo-av"

export function Splash() {
    return (
            <Video
                style={[StyleSheet.absoluteFill, {backgroundColor: "#102736"}]}
                resizeMode={ResizeMode.CONTAIN}
                source={require('../../assets/img/Nagnamita.mp4')}
                isLooping={true}
                onPlaybackStatusUpdate={onPlaybackStatusUpdate}
                shouldPlay={true}
            />
    )
}
