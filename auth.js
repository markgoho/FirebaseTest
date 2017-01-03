const config = {
    apiKey: "AIzaSyBaCnPFqjJ9fRobOmWbT-10DSyQ9xakWw8",
    authDomain: "fir-test-3d4fc.firebaseapp.com",
    databaseURL: "https://fir-test-3d4fc.firebaseio.com",
    storageBucket: "fir-test-3d4fc.appspot.com",
    messagingSenderId: "1070702292556"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.error(e.message));
  });

  // Add signup event
  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // TODO: Check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
      .catch(e => console.error(e.message));
  });

  // Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('No user logged in');
      btnLogout.classList.add('hide');
    }
  });