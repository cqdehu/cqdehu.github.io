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

//preloader
var loader = document.querySelector('#preloader')
window.addEventListener('load', function () {
    loader.style.display = "none"
})


const settingsBtn = document.querySelector("#settingsBtn")
const addBtn = document.querySelector('#addBtn')
const otherBtn = document.querySelector('#otherBtn')

const enterItemName = document.querySelector("#enterItemName")
const enterItemStatus = document.querySelector("#enterItemStatus")
const enterItemUsername = document.querySelector("#enterItemUsername")
//

//createNewCard [button]
const createNewCard = document.querySelector('#createNewCard')


//listItems [section]
const listItems = document.querySelector('#listItems')

//**********************************************
createNewCard.addEventListener("click", addData)

function addData() {
    if (enterItemName.value != "") {
        var item = enterItemName.value
        var status = enterItemStatus.value
        //var username = enterItemUsername.value

        database.ref('users').child("Ábel").child(item).set({
            username: "Ábel",
            item: item,
            status: status,
        })

        location.reload(getData)


    }

}
//************************************************


function getData() {
    firebase.database().ref('active').once('value',function(snap){
        var user = snap.val().user
        firebase.database().ref('users').child(user).once('value', function (snapshot) {
            snapshot.forEach(function (element) {
                var item = element.val().item
                var status = element.val().status
                const newCardDiv = document.createElement("div")
                newCardDiv.className = "row bg-white ms-4 mb-3 rounded-start-4 align-items-center item-card";
    
                const newItemNameDiv = document.createElement("div")
                newItemNameDiv.className = "col p-0"
    
                const newItemName = document.createElement("h5")
                newItemName.className = "TiltWrap m-3"
                newItemName.innerHTML = item
    
                const newItemStatusDiv = document.createElement("div")
                newItemStatusDiv.className = "col-2 text-end me-4"
    
    
                const newItemStatus = document.createElement("img")
                newItemStatus.className = "icon_status"
    
                if (status == 3) {
                    newItemStatus.src = "surce/3.svg"
                }
                if (status == 2) {
                    newItemStatus.src = "surce/2.svg"
                }
                if (status == 1) {
                    newItemStatus.src = "surce/1.svg"
                }
                if (status == 0) {
                    newItemStatus.src = ""
                }
    
    
                listItems.appendChild(newCardDiv)
                newCardDiv.appendChild(newItemNameDiv)
                newItemNameDiv.appendChild(newItemName)
                newCardDiv.appendChild(newItemStatusDiv)
                newItemStatusDiv.appendChild(newItemStatus)
            })
        })
    })


    
}

getData()



function removeData() {
    database.ref('users/' + enterItemName.value).remove()
}
