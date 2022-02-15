// Realtime Database 用 SDK貼り付け
import {
    getDatabase, ref, onChildAdded, onValue, child,
} from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.6/firebase-database.min.js';
// firebase の設定情報読み込み
import app from './firebase.js';

const db = getDatabase(app); // Realtime Database の設定を

// 情報基礎 の 講義情報 & 出席予定の学生一覧 をそれぞれ取得する
const lessonKey = 'it_basic';

// 解その1
const lessonRef = ref(db, `lessons/${lessonKey}`);
const attendeesRef = ref(db, `lessonAttendees/${lessonKey}`);

onValue(lessonRef, (snap) => {
    console.log(snap.val());
});

onChildAdded(attendeesRef, (snap) => {
    console.log(snap.val());
});

// 解その2
const lessonsRef = ref(db, 'lessons');
const lessonAttendeesRef = ref(db, 'lessonAttendees');

// child(参照先, 参照先のキー) ... 子要素の参照を返す
onValue(child(lessonsRef, lessonKey), (snap) => {
    console.log(snap.val());
});

onChildAdded(child(lessonAttendeesRef, lessonKey), (snap) => {
    console.log(snap.val());
});
