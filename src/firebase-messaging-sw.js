importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBIUScMXs-AiFGMWFMYVfS7Dbffkk4hZpg",
    authDomain: "mlgpartner.firebaseapp.com",
    databaseURL: "https://mlgpartner.firebaseio.com",
    projectId: "mlgpartner",
    storageBucket: "mlgpartner.appspot.com",
    messagingSenderId: "729016535247",
    appId: "1:729016535247:web:0a3c579fb136f8559bcfba",
    measurementId: "G-J137H9JZ9V"
});
const messaging = firebase.messaging();