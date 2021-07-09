  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBgP0gGsau7KEYlBw5YCU8XRByde8AIr8s",
    authDomain: "proyecto-td-328ba.firebaseapp.com",
    projectId: "proyecto-td-328ba",
    storageBucket: "proyecto-td-328ba.appspot.com",
    messagingSenderId: "264661641686",
    appId: "1:264661641686:web:31e3029333bf0ee48a5c77",
    measurementId: "G-JHT7E23EWK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const btnRegistrar = document.getElementById('btnRegistrar');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignOut = document.getElementById('btnSignOut');
  const formulario = document.getElementById('formulario');
  const mimuro = document.getElementById('mimuro')


  // BOTÓN REGISTRAR USUARIO:   
  btnRegistrar.addEventListener('click',()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        // console.log(user);
        console.log('Su Registro fue exitoso ' + email);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
  })

//   BOTÓN LOGIN O INICIAR SESIÓN
btnLogin.addEventListener('click',()=>{
    const email  = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log("Has iniciado sesión correctamente");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });

})

// BOTÓN CERRAR SESIÓN
btnSignOut.addEventListener('click',()=>{
    firebase.auth().signOut();
    alert("Cerrado de sesión exitoso");
})

// Estado actual del usuario
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    console.log('Usuario activo');
    formulario.classList.remove('show');
    formulario.classList.add('hide');
    mimuro.classList.remove('hide');
    mimuro.classList.add('show');

  }else{
    console.log('Usuario No activo')
    formulario.classList.remove('hide');
    formulario.classList.add('show');
    mimuro.classList.remove('show');
    mimuro.classList.add('hide');
  }
  
})

// LOGIN CON GOOGLE
const btnGoogle = document.getElementById('btnGoogle');
btnGoogle.addEventListener('click',()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("Logueado con Google");

    }).catch((error) => {
      console.log(error);
    });
})



// LOGIN CON FACEBOOK
const btnFacebook = document.getElementById('btnFacebook');
btnFacebook.addEventListener('click',()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("Logueado con Facebook");

    }).catch((error) => {
      console.log(error);
    });
})
