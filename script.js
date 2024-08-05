// Light Dark Theme 
const themeToggle = document.querySelector(".themes__toggle");

const toggleDarkTheme =()=>themeToggle.classList.toggle("themes__toggle--isActive");
const toggleDarkThemeWithEnter = (event)=>{
    if(event.key ==="Enter"){
        toggleDarkTheme();
    }
}

themeToggle.addEventListener("click",toggleDarkTheme)
themeToggle.addEventListener("keypress",toggleDarkThemeWithEnter)


// Logic for calculator
let currentNumber = "";
let storedNumber = "";
let operation ="";

const result = document.querySelector(".calc__result")
const keyElements = document.querySelectorAll("[data-type]")

const updateUI =(value)=>{
    result.innerText = value ? value :"0";
}

const numberClickHandler = (value)=>{
        if(value === 0 && !currentNumber )return;
        if(value === "." && currentNumber.includes("."))return;
        currentNumber += value
        updateUI(currentNumber)
}

const keyElementHandler = (el)=>{
    el.addEventListener("click",()=>{
        el.dataset.type === "number"&& numberClickHandler(el.dataset.value);
    })
}

keyElements.forEach(keyElementHandler)

