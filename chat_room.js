var firebaseConfig = {
  apiKey: "AIzaSyA_NYOxIN4rA6SmZ45fqrKIONgmAC6zg5c",
  authDomain: "chat-app-fe5fa.firebaseapp.com",
  databaseURL: "https://chat-app-fe5fa-default-rtdb.firebaseio.com",
  projectId: "chat-app-fe5fa",
  storageBucket: "chat-app-fe5fa.appspot.com",
  messagingSenderId: "595975089970",
  appId: "1:595975089970:web:5079b4ef90ced332bff12b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html";
    }

    function getData()
    {
        firebase.database().ref("/").on('value', function (snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        
          Room_names = childKey;
          //Start Code
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End Code
    });});}
    getData();

    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
    }

    function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }


    
