const root = document.querySelector(':root');
const btnChangeTheme = document.querySelector('.btn-change-theme');
const rootStyle = root.style;
const state = {
    theme: "dark"
}

let boxShadowColor = "lite";  
function setBoxShadow(boxShadowLite, boxShadowDark) {      
    if (boxShadowColor === "lite") {             
        boxShadowColor = "dark";
        rootStyle.setProperty('--box-shadow', boxShadowDark);
    }  else {       
        boxShadowColor = "lite";
        rootStyle.setProperty('--box-shadow', boxShadowLite) 
    }   
}

setInterval(() => {
    setBoxShadow('0 0 10px 0 beige', '0 0 10px 0 #000')
}, 1000);

btnChangeTheme.addEventListener('click', () => {
    if (state.theme === "dark") {
        rootStyle.setProperty('--headerBackground', '#92bcf5');
        rootStyle.setProperty('--bodyBackground', '#d1e1ef');
        rootStyle.setProperty('--sidebarBackground', '#ad8bb5');
        rootStyle.setProperty('--footerBackground', '#2757c3');
        state.theme = "lite";
    } else if (state.theme === "lite") {
        rootStyle.setProperty('--headerBackground', '#794f45');
        rootStyle.setProperty('--bodyBackground', '#333');
        rootStyle.setProperty('--sidebarBackground', '#7a956b');
        rootStyle.setProperty('--footerBackground', '#77608d');
        state.theme = "dark";
    }
})