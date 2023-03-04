const settingsBtn = document.querySelector("#settingsBtn")
const addBtn = document.querySelector('#addBtn')
const otherBtn = document.querySelector('#otherBtn')

//createNewCard [button]
const createNewCard = document.querySelector('#createNewCard')

//enterItemName [input]
const enterItemName = document.querySelector('#enterItemName')

//listItems [section]
const listItems = document.querySelector('#listItems')


createNewCard.addEventListener("click", function () {
    if (enterItemName.value != "") {
        const newCardDiv = document.createElement("div")
        newCardDiv.className = "row bg-white ms-4 mb-3 rounded-start-4 align-items-center";

        const newItemNameDiv = document.createElement("div")
        newItemNameDiv.className = "col p-0"

        const newItemName = document.createElement("h5")
        newItemName.className = "TiltWrap m-3"
        newItemName.innerHTML = enterItemName.value

        const newItemStatusDiv = document.createElement("div")
        newItemStatusDiv.className = "col-2 text-end me-4"

        const newItemStatus = document.createElement("img")
        newItemStatus.className = "icon_status"
        newItemStatus.src = "surce/3.svg"

        listItems.appendChild(newCardDiv)
        newCardDiv.appendChild(newItemNameDiv)
        newItemNameDiv.appendChild(newItemName)
        newCardDiv.appendChild(newItemStatusDiv)
        newItemStatusDiv.appendChild(newItemStatus)
    }
})








//preloader
var loader = document.querySelector('#preloader')
window.addEventListener('load', function () {
    loader.style.display = "none"
})

