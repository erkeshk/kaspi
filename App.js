// App.js - React Native code combining index.html and back.html functionality
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('doc');
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const renderTabContent = () => {
    if (selectedTab === 'doc') {
      return (
        <View style={styles.imgUploadContainer}>
          <TouchableOpacity style={styles.imgUploadButton} onPress={pickImage}>
            <Text style={styles.uploadText}>Загрузить</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
          )}
        </View>
      );
    } else {
      return (
        <View style={styles.detailsContainer}>
          <Text>Реквизиты документа...</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Удостоверение личности</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'doc' && styles.activeTab]}
            onPress={() => setSelectedTab('doc')}
          >
            <Text style={styles.tabText}>Документ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'req' && styles.activeTab]}
            onPress={() => setSelectedTab('req')}
          >
            <Text style={styles.tabText}>Реквизиты</Text>
          </TouchableOpacity>
        </View>
      </View>

      {renderTabContent()}

      <View style={styles.footer}>
        <Button title="Предъявить документ" onPress={() => alert('Документ предъявлен')} />
        <Button title="Отправить документ" onPress={() => alert('Документ отправлен')} />
      </View>

      <View style={styles.documentList}>
        <Text style={styles.headerText}>Цифровые документы</Text>
        {['Удостоверение личности', 'Водительские права', 'Паспорт вакцинации', 'Паспорт гражданина РК', 'Справки'].map((doc, index) => (
          <TouchableOpacity key={index} style={styles.documentItem}>
            <Text>{doc}</Text>
          </TouchableOpacity>
        ))}
        <Button title="Обновить список документов" onPress={() => alert('Список обновлен')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f8f8f8' },
  header: { padding: 10, backgroundColor: '#fff', marginBottom: 10, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  tabButton: { padding: 10, marginHorizontal: 5, borderRadius: 5, backgroundColor: '#e0e0e0' },
  activeTab: { backgroundColor: '#008cba' },
  tabText: { color: '#fff' },
  imgUploadContainer: { alignItems: 'center', marginVertical: 20 },
  imgUploadButton: { padding: 10, backgroundColor: '#008cba', borderRadius: 5 },
  uploadText: { color: '#fff' },
  uploadedImage: { width: 200, height: 200, marginTop: 10 },
  footer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  documentList: { padding: 10, backgroundColor: '#fff', borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  headerText: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  documentItem: { padding: 10, backgroundColor: '#fff', marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
});

