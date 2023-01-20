// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



