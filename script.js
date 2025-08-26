const hamburgermenu=document.getElementById("ham");

const headercontentMobile=document.getElementById("header-contentmobile");

hamburgermenu.addEventListener("click",()=>{
headercontentMobile.classList.toggle("hidden")

})


const close=document.getElementById("close");
close.addEventListener("click",()=>{
headercontentMobile.classList.remove("hidden")
console.log("test")
})

