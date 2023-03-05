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


const settingsBtn = document.querySelector("#settingsBtn")
const addBtn = document.querySelector('#addBtn')
const otherBtn = document.querySelector('#otherBtn')

//
const enterItemName = document.querySelector("#enterItemName")
const enterItemStatus = document.querySelector("#enterItemStatus")
//createNewCard [button]
const createNewCard = document.querySelector('#createNewCard')


//listItems [section]
const listItems = document.querySelector('#listItems')

createNewCard.addEventListener("click", function () {
    if (enterItemName.value != "") {

        //Upload
        var ref = database.ref('items')

        var data = {
            item: enterItemName.value,
            status: enterItemStatus.value,
        }

        ref.push(data)
    }
})

//preloader
var loader = document.querySelector('#preloader')
window.addEventListener('load', function () {
    loader.style.display = "none"
})

var ref = database.ref('items')
ref.on('value', function (snapshot) {
    snapshot.forEach(function (get_item) {
        item_data = get_item.val()

        var item = item_data["item"]
        var status = item_data["status"]

       

        

        const newCardDiv = document.createElement("div")
        newCardDiv.className = "row bg-white ms-4 mb-3 rounded-start-4 align-items-center";

        const newItemNameDiv = document.createElement("div")
        newItemNameDiv.className = "col p-0"

        const newItemName = document.createElement("h5")
        newItemName.className = "TiltWrap m-3"
        newItemName.innerHTML = item

        const newItemStatusDiv = document.createElement("div")
        newItemStatusDiv.className = "col-2 text-end me-4"

        const newItemStatus = document.createElement("img")
        newItemStatus.className = "icon_status"


        listItems.appendChild(newCardDiv)
        newCardDiv.appendChild(newItemNameDiv)
        newItemNameDiv.appendChild(newItemName)
        newCardDiv.appendChild(newItemStatusDiv)
        newItemStatusDiv.appendChild(newItemStatus)
        
        
        
    })
    
})

// "surce/3.svg"






