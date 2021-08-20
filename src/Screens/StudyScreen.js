import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import speaker from '../assets/images/speaker_img.png';

const styles = StyleSheet.create({
  speakerImage: {
    height: 200,
    width: 200,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const StudyScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Study Screen</Text>
    </View>
  );
};

export default StudyScreen;
