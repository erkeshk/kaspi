import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Hide the Status Bar */}
      <StatusBar barStyle="light-content" hidden={true} />

      <ScrollView style={styles.scrollView}>
        <Header />
        <Middle />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;

