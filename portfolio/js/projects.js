import { view } from './view_projects.js';

let last_click = null;

window.onload = async function(){
    const more_info_text = await fetch("../projects_info.json").then(data => data.json());
    const projects = await fetch("../projects.json").then(data => data.json());

    const projectTemplate = document.getElementById("project");
    const infoTemplate = document.getElementById("info");

    projects.forEach(project => {
        const clone = document.importNode(projectTemplate.content, true);

        const article = clone.querySelector("article");
        article.id = "p" + project.id;

        const p = clone.querySelector("article p");
        p.innerHTML = project.nom;

        const img = clone.querySelector("article img");
        img.setAttribute("src", project.img);
        img.setAttribute("alt", "p" + project.id);

        view.projects.appendChild(clone);
    });

    view.articles = document.querySelectorAll(".project_table")

    view.articles.forEach((article) => {
    article.addEventListener("click", function () {
        if(last_click == article.id){
            view.articleMoreInfo.classList.remove("visible");
            view.articleMoreInfo.classList.add("hidden");
        }else{
            if(!view.articleMoreInfo.classList.contains("visible")){
                view.articleMoreInfo.classList.remove("hidden");
                view.articleMoreInfo.classList.add("visible");
            };

            while(view.articleMoreInfo.firstChild){
            view.articleMoreInfo.removeChild(view.articleMoreInfo.firstChild);
        }

            const clone = document.importNode(infoTemplate.content, true);

            const objectif = clone.querySelector("#objectif");
            objectif.innerHTML = more_info_text[article.id].objectif;

            const texte1 = clone.querySelector("#texte1");
            texte1.innerHTML = more_info_text[article.id].texte1;

            if(more_info_text[article.id].texte2){
                const p = clone.querySelector("#texte2");
                p.innerHTML = more_info_text[article.id].texte2
            }

            const ul = clone.querySelector("#links_list");

            if(more_info_text[article.id].liens.length == 0){
                const links = clone.querySelector("#links");
                links.remove();
                ul.remove();
            }else{
                more_info_text[article.id].liens.forEach(lien => {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = lien.url;
                    a.innerHTML = lien.nom;
                    li.appendChild(a);
                    ul.appendChild(li);
                });
            }

            

            view.articleMoreInfo.appendChild(clone);

            last_click = article.id;
            view.articleMoreInfo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    })
});
}
