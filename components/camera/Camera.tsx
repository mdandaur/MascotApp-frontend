import React, { useState, useRef, useCallback } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import CameraButtons from './CameraButtons'; // Adjust the path as necessary

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  const toggleCameraFacing = useCallback(() => {
    console.log('Toggling camera facing');
    console.log('Current facing:', facing);
    setFacing(current => (current === 'back' ? 'front' : 'back'));
    console.log('Camera facing:', facing);
  }, [facing]);

  const takePicture = useCallback(async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      setPhoto(data.base64);
      if (data.base64) {
        console.log('Photo taken:', data.base64.substr(0, 100));
  
      }
    }

  }, [cameraRef]);

  const selectImage = useCallback(() => {
    // Your select image logic here
  }, []);

  const sendPhoto = () => {
    // Your send photo logic here
  }

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (photo) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: `${photo}` }}
          style={styles.photo}
        />
        <Button onPress={() => setPhoto(null)} title="Take another photo" />
        <Button onPress={sendPhoto} title="Send photo" />
      </View>
    );
  }

  return (
    <>
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <CameraButtons
            onSelectImage={selectImage}
            onTakePicture={takePicture}
            onFacingCamera={toggleCameraFacing}
          />
        </View>
      </CameraView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  photo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});