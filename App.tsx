import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  // Static HTML content
  const htmlContent = `
    <!doctype html>
    <html lang="ru">
    <head>
      <meta charset="utf-8"/>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,maximum-scale=1,shrink-to-fit=no"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="robots" content="none"/>
      <link rel="apple-touch-icon" href="/icon-192x192.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <title>Kaspi.kz</title>
      <link href="static/css/stylesheet.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">
        <div class="container">
          <div class="header">
            <div class="title">
              <h1 class="text-title">Удостоверение личности</h1>
            </div>
            <div class="tab">
              <div class="btntab">
                <input type="radio" name="tab-btn" id="tab-btn-1" value="doc" checked>
                <label for="tab-btn-1"><p>Документ</p></label>
                <input type="radio" name="tab-btn" id="tab-btn-2" value="req">
                <label for="tab-btn-2"><p>Реквизиты</p></label>
              </div>
            </div>
          </div>
          <div class="middle">
            <div class="img-upload" style="height: 50vh;">
              <div class="input-img">
                <input type="file" name="img-upl" id="idupload" class="input-file">
                <label for="idupload"><span>Загрузить</span></label>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="btnfooter" id="docbtn">
              <button id="btnftr1">
                <img src="img/qr.png" alt="">Предъявить документ
              </button>
              <button id="btnftr2" class="share">
                <img src="img/upload.png" alt="">Отправить документ
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;

