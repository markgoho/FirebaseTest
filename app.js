const config = {
    apiKey: "AIzaSyBaCnPFqjJ9fRobOmWbT-10DSyQ9xakWw8",
    authDomain: "fir-test-3d4fc.firebaseapp.com",
    databaseURL: "https://fir-test-3d4fc.firebaseio.com",
    storageBucket: "fir-test-3d4fc.appspot.com",
    messagingSenderId: "1070702292556"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');

  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('hobbies');

  // Sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  // Sync list changes
  // child_added is list synchronization
  dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key; // key name for each item
    ulList.appendChild(li);
  });

  // Update items when they are changed
  dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  });

  // Update items when they are removed
  dbRefList.on('child_removed', snap => {
    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
  });