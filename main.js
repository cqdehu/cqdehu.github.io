const settingsBtn = document.querySelector("#settingsBtn")
const addBtn = document.querySelector('#addBtn')
const otherBtn = document.querySelector('#otherBtn')

//preloader
var loader = document.querySelector('#preloader')
window.addEventListener('load',function(){
    loader.style.display = "none"
})



settingsBtn.addEventListener("click",testf)


Ne_nyomogasd = 0

function testf() {
Ne_nyomogasd+=1
if(Ne_nyomogasd==3){
    alert("Ne nyomogasd!")
    Ne_nyomogasd=0
}
}
    
