## Firebase Realtime Database 講義用資料
- 動かす場合, `./js/firebase.js` を作成し、以下のように記述してください
```
// Firebase RealtimeDB 初期情報の貼り付け Start

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'XXXXXX',
    authDomain: 'XXXXXX.firebaseapp.com',
    databaseURL: 'https://XXXXXX.firebaseio.com',
    projectId: 'XXXXXX',
    storageBucket: 'XXXXXX.appspot.com',
    messagingSenderId: 'XXXXXX',
    appId: 'XXXXXX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase RealtimeDB 初期情報の貼り付け End
export default app;
```