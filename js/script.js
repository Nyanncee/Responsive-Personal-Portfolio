//=====DARK THEME=====
const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const iconTheme = 'uil uil-sun'

//PREVIOUSLY SELECTED TOPIC(checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedTheme = localStorage.getItem('selected-icon')

//Obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'util-moon':'util-sun'

//Need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}
//Activate/deactivate the theme manually with button
themeButton.addEventListener('click',()=>{
    //ADD or REMOVE the dark/light icon --icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //Save the theme and current icon that the user has chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})
console.log("THEME SETTING IS WORKING!")

//==========MENU SHOW Y HIDDEN========
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//=======SHOWING MENU ========
/* Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
//====HIDING MENU=====
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

console.log("MENU Y SETTING WORKING!")
//========REMOVE MENU PROFILE=========
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on nav_links, we remove the 'show-menu' class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
console.log("Remove menu profile is working!")

//===========Typewriter Effect========
new Typewriter('#typewriter', {
  strings: ['Nancy Pandey', 'Fresh Graduate','Software-developer','Aspiring Software Engineer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working!")