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

