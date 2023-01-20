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
room_name = localStorage.getItem("room_name");

function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }