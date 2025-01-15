// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Удостоверение личности</Text>
      </View>
      <View style={styles.tab}>
        <View style={styles.btntab}>
          <input type="radio" name="tab-btn" id="tab-btn-1" value="doc" checked />
          <label htmlFor="tab-btn-1"><Text>Документ</Text></label>
          <input type="radio" name="tab-btn" id="tab-btn-2" value="req" />
          <label htmlFor="tab-btn-2"><Text>Реквизиты</Text></label>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btntab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;

