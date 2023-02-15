// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk-jNnqJXgPViIYUV6XEyQJYPx0ycgCiQ",
  authDomain: "cqdebase.firebaseapp.com",
  databaseURL:
    "https://cqdebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cqdebase",
  storageBucket: "cqdebase.appspot.com",
  messagingSenderId: "76552844485",
  appId: "1:76552844485:web:456267bce18d1ae84becac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const db = getDatabase();

var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterPassword = document.querySelector("#enterPassword");
var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findPassword = document.querySelector("#findPassword");
var findAge = document.querySelector("#findAge");

var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
  set(ref(db, "People/" + enterID.value), {
    Name: enterName.value,
    Password: enterPassword.value,
    ID: enterID.value,
    Age: enterAge.value,
  })
    .then(() => {
      alert("Data added successfully!");
    })
    .catch(() => {
      alert(error);
    });
}

function FindData() {
  const dbref = ref(db);

  get(child(dbref, "People/" + findID.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        findName.innerHTML = "Name: " + snapshot.val().Name;
        findPassword.innerHTML = "Password: " + snapshot.val().Password;
        findAge.innerHTML = "Age: " + snapshot.val().Age;
      } else {
        alert("No data found!");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function UpdateData() {
  update(ref(db, "People/" + enterID.value), {
    Name: enterName.value,
    Password: enterPassword.value,
    Age: enterAge.value,
  })
    .then(() => {
      alert("Data updated successfuly!");
    })
    .catch((error) => {
      alert(error);
    });
}

function RemoveData() {
  remove(ref(db, "People/" + enterID.value))
    .then(() => {
      alert("Data removed successfully!");
    })
    .catch((error) => {
      alert(error);
    });
}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateData);
removeBtn.addEventListener("click", RemoveData);
findBtn.addEventListener("click", FindData);
