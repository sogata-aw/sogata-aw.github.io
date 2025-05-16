import { view } from "./view/menu-view.js";

const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

let getDoubleNumberMonth = function(month){
    if(month < 10){
        return "0" + month;
    }

    return month;
}

let currentDate = new Date();

view.dateText.textContent = days[currentDate.getDay()] + " " + currentDate.getDate() + "/" + getDoubleNumberMonth(currentDate.getMonth());