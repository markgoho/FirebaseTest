const config = {
    apiKey: "AIzaSyBaCnPFqjJ9fRobOmWbT-10DSyQ9xakWw8",
    authDomain: "fir-test-3d4fc.firebaseapp.com",
    databaseURL: "https://fir-test-3d4fc.firebaseio.com",
    storageBucket: "fir-test-3d4fc.appspot.com",
    messagingSenderId: "1070702292556"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById('object');
  const dbRefObject = firebase.database().ref().child('object');

  // Sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });