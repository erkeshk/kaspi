// Footer.js
import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Button title="Предъявить документ" icon={<Image source={require('./img/qr.png')} />} />
      <Button title="Отправить документ" icon={<Image source={require('./img/upload.png')} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default Footer;

