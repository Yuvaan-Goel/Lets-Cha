var firebaseConfig = {
  apiKey: "AIzaSyCSGbeusGo0wpIutNUkzLIRotonGziR75M",
  authDomain: "letschat-bd9b0.firebaseapp.com",
  databaseURL: "https://letschat-bd9b0-default-rtdb.firebaseio.com",
  projectId: "letschat-bd9b0",
  storageBucket: "letschat-bd9b0.appspot.com",
  messagingSenderId: "830443938991",
  appId: "1:830443938991:web:a5ef76c311bd29a43da05a",
  measurementId: "G-7KNHGVL3M2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  username = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room name: " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
 
        document.getElementById("output").innerHTML += row;
       });});}
 getData();
 
 function add_room() 
 {
   room_name = document.getElementById("addroom").value;
   firebase.database().ref("/").child(room_name).update({
 
     purpose: "Adding Room Name"
   });
 
   localStorage.setItem("room_name", room_name);
 
   window.location = "lets_chat_page.html";
 }
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("Room_name", name);
   window.location = "lets_chat_page.html";
 }

  function logout()
  {
    window.location = "index.html";
  }
