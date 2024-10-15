import { AutoFocus } from "expo-camera/build/legacy/Camera.types";
import {Text,  TouchableOpacity, StyleSheet, View} from "react-native";

export default function CameraButtons({
    onFacingCamera, onTakePicture, onSelectImage
}) {
    return(
    <>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onSelectImage}>
                <Text style={styles.text}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onTakePicture}>
                <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onFacingCamera}>
                <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'flex-end',
        alignContent: 'center',
        
    },
    button: {
        height: 50,
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,

    },
    text: {
        color: 'black',
    },
});

