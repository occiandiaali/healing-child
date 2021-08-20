import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

//import Slider from '@react-native-community/slider';

//import SoundPlayer from 'react-native-sound-player';
//import speaker from '../assets/images/speaker_img.png';

const styles = StyleSheet.create({
  speakerImage: {
    height: 200,
    width: 200,
    marginTop: 10,
    borderRadius: 14,
  },
  info: {
    fontSize: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const play = () => {
  try {
    SoundPlayer.playSoundFile('heart_sfx', 'mp3');
  } catch (e) {
    console.log(`Cannot play sound ${e}`);
  }
};

const HomeScreen = () => {
  // const [sound, setSound] = useState('');
  let [rad, setRad] = useState(44);

  const reduceBlur = () => (rad > 0 ? setRad(rad - 4) : 0);
  const renew = () => setRad((rad = 44));

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={play}>
        <Image source={speaker} style={styles.speakerImage} />
      </TouchableOpacity> */}
      <Text style={styles.info}>Tap image to reveal...</Text>
      <TouchableOpacity onPress={reduceBlur}>
        <Image
          blurRadius={rad}
          source={{
            uri: 'https://images.pexels.com/photos/41176/africa-animal-big-brown-41176.jpeg',
          }}
          alt="Brown lioness"
          style={styles.speakerImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={renew}>
        <Text style={styles.info}>Refresh</Text>
      </TouchableOpacity>

      {/* <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={44}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={reduceBlur}
      /> */}
    </View>
  );
};

export default HomeScreen;
