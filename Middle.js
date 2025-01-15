// Middle.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Middle = () => {
  return (
    <View style={styles.middle}>
      <View style={styles.imgUpload}>
        <input type="file" name="img-upl" id="idupload" className="input-file" />
        <label htmlFor="idupload">
          <Text>Загрузить</Text>
        </label>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgUpload: {
    height: '50vh',
  },
});

export default Middle;

