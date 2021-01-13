
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDzZbdXOw5pv5-LvMpX9dsQMrapm7wGMeA",
      authDomain: "switter-576b5.firebaseapp.com",
      databaseURL: "https://switter-576b5-default-rtdb.firebaseio.com",
      projectId: "switter-576b5",
      storageBucket: "switter-576b5.appspot.com",
      messagingSenderId: "780453529077",
      appId: "1:780453529077:web:cce8b0b16ee1032e040cbc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
