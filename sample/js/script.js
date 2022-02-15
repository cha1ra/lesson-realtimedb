// Firebase 設定スクリプト貼り付け開始
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
// Firebase 設定スクリプト貼り付け終了

// Realtime Database 用 SDK貼り付け
import {
    getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved, onValue, query, get, child, orderByChild, equalTo,
}
    from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.6/firebase-database.min.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA3Lrfv1RSKWpeqcIrTU7_ldu4UMv7qYYg',
    authDomain: 'baas-pre-invest.firebaseapp.com',
    projectId: 'baas-pre-invest',
    storageBucket: 'baas-pre-invest.appspot.com',
    messagingSenderId: '183606325095',
    appId: '1:183606325095:web:f12a54f4a30675b76689c2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const lessonKey = 'it_basic';
// const usersRef = ref(db, `users/${lessonKey}`);
const lessonRef = ref(db, `lessons/${lessonKey}`);
const lessonStudentsRef = ref(db, `lessonStudents/${lessonKey}`);

const lessonsRef = ref(db, `lessons/${lessonKey}`);
// onChildAdded(lessonsRef, (data) => {
//   console.log('data!');
//   console.log(data.val());
// });
//
// // 単一イベントに最適
// // valueイベント
// onValue(lessonRef, (snapshot) => {
//   console.log('lessons');
//   console.log(snapshot.val());
// });
//
// 参加者はリストだから
onChildAdded(lessonStudentsRef, (snapshot) => {
    console.log('data!');
    console.log(snapshot.key);
    console.log(snapshot.val());
    const userRef = ref(db, `users/${snapshot.key}`);
    userRef.once('value').then((userSnap) => {
        console.log('userSnap');
        console.log(userSnap.val());
    });
});

// なんでバリューじゃないんだ？
// onChildAdded(lessonStudentsRef, (data) => {
//   console.log('data!');
//   console.log(data.val());
// });

// onValue(lessonStudentsRef, (data) => {
//   console.log('onValue');
//   console.log(data.val());
// });

// const usersRef = ref(db, 'users');
//
// get(child(usersRef, '1')).then((snapshot) => {
//   console.log(snapshot.val());
// });

// SELECT * FROM users WHERE id = 1;
// const sample1Ref = query(ref(db, 'users/1'));
// get(sample1Ref).then((snapshot) => {
//   console.log(snapshot.val());
// });

// const sample = query(ref(db, 'users'), orderByChild('grade'), equalTo(1));
// console.log(sample);
// get(sample).then((snapshot) => {
//   console.log(snapshot.val());
// });
