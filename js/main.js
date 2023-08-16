let bars = document.querySelector(".menu");
let list = document.querySelector(".list");
let navBar = document.querySelector("header nav");
let pages = document.querySelector("#pages");
let miniMenu = document.querySelector("#pages ul");

pages.addEventListener("click", function () {
    miniMenu.classList.toggle("active");
})
bars.addEventListener("click", function () {
    navBar.classList.toggle("active");
})

let slidesCounter = 1;
    function imgSlider() {
        document.getElementById("radio" + slidesCounter).checked = true;
        slidesCounter++;
        if (slidesCounter > 4) {
            slidesCounter = 1;
        }
    }
    imgSlider();
    setInterval(imgSlider, 5000);

let landText = document.querySelector(".landing-text h1");
console.log(landText)
let i = 0;
function changeText(){
    let textArr = ["Highly Professional Team Members","Creative Services For Brands Grow","Happy Clients & Positive Reviews"]
    if (i < textArr.length){
        landText.innerHTML = `${textArr[i]}`;
        i += 1;
    } else if(i = textArr.length){
        i = 1;
    }
    }

setInterval(changeText,5000)