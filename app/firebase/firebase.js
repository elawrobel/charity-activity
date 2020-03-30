import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
database.ref('events').push({
  name: 'name',
  link: 'https',
  goal: 'goal',
  description: 'description',
  date: Date.now(),
});

database.ref('cities').set(['warsaw', 'cracov', 'silesia']);
database.ref('distance').set([3, 5, 6, 10, 40]);
database.ref('type').set(['run', 'bike', 'nordic walking']);

// {
//   "events": {
//     name: "name",
//     link: "http",
//     goal: "goal",
//     city:"warsaw,
//     date: "2020-12-02 15:00", timestamp
//     distance: 3,
//     type: "run",
//     description: "description",
//   }
// }

// {
//   cities: ['warsaw', 'cracov'];
// }

// {
//   distance: [3, 5, 6, 10, 40];
// }

// {
//   type: ['run', 'bicycle', 'nordicwalking'];
// }
