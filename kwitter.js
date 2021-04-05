function addUser()
{
user_name = document.getElementById ("user_name").value;
localStorage.setItem ("user_name", user_name);
window.location = "room.html"
}


function addRoom() {
    room_name = document.getElementById ("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({});
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "room.html";
    }