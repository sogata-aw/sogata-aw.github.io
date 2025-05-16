import { view } from "./view/launchScreenView.js";

view.principale.addEventListener("animationend", () =>{
    view.body.style.pointerEvents = "all";
    view.body.addEventListener("click", () => {
    view.clickAudio.play();
    view.principale.style.animation = "blackout 2s ease-out";
    setTimeout(() =>{
        view.principale.style.opacity = 0;
        window.location.href = "./menu.html";
    }, 2000);
    
});
});

