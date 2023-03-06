var config = {
    apiKey: "AIzaSyD3AiFRHIGJnvmEqOFCntiG2gYzIPtqi8Q",
    authDomain: "giftlist-database.firebaseapp.com",
    databaseURL: "https://giftlist-database-default-rtdb.firebaseio.com",
    projectId: "giftlist-database",
    storageBucket: "giftlist-database.appspot.com",
    messagingSenderId: "695346502848",
    appId: "1:695346502848:web:52cb0f5e660e6ba6302125",
    measurementId: "G-YCT13RTLMC"
};

firebase.initializeApp(config)
var database = firebase.database()

const enterName = document.querySelector('#enterName')
const enterPassword = document.querySelector('#enterPassword')

const loginBtn = document.querySelector('#loginBtn')

loginBtn.addEventListener('click',login)

function login(){
    firebase.database().ref('accounts').once('value', function (snapshot) {
        snapshot.forEach(function (element) {
            if(enterName.value == element.val().username && enterPassword.value == element.val().password){
                window.open("/mylist.html","_self")
            }
        })
    })
    
    
}



//preloader
var loader = document.querySelector('#preloader')
window.addEventListener('load', function () {
    loader.style.display = "none"
})

//
database.ref('urls').child("mylist").set({
    url: ""
})