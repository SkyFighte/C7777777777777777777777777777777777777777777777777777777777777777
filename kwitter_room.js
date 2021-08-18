
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCN8MFvK5pj46G-4lXUzWT0sTmdq9PtzmU",
      authDomain: "kwitter-36290.firebaseapp.com",
      projectId: "kwitter-36290",
      storageBucket: "kwitter-36290.appspot.com",
      messagingSenderId: "238572404536",
      appId: "1:238572404536:web:4e0c56f30835376ee2cbcd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
