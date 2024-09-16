import { StyleSheet } from "react-native"
import { Video, ResizeMode, onPlaybackStatusUpdate } from "expo-av"

export function Splash() {
    return (
        <Video
        style={ StyleSheet.absoluteFill }
        resizeMode={ResizeMode.CONTAIN} 
        source={require('../../assets/img/Nagnamita.mp4')}
        isLooping={true}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
        />
    )
}
