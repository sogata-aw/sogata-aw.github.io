import { view } from './view_projects.js';

const more_info_text = {
    "p1": `<div>
                <p>Objectif : développer une méthode de tri automatique pour des dépêches</p>
                <p>Nous avons fait un programme permettant de déterminer pour chaque dépêche la catégorie associé d'abord à partir de lexique crée par nous-même puis généré automatiquement. Nous avons ensuite optimisé le programme de manière à diminuer le temps de classement des dépêches.</p>
                <p>J'ai travaillé sur la partie du tri manuelle et j'ai également fait le compte rendu en anglais.</p>
                <p>Liens :<br></p>
                <ul>
                    <li><a href="../pdf/SAE 1.012 report.pdf">Rapport</a></li>
                </ul>
            </div>`,
    "p2": `<div>
            <p>Objectif : Installation d'un poste de travail avec configuration d'un IDE</p>
            <p>J'ai installé un poste de travail sous la distribution Linux Debian 12 et installé plusieurs logiciels tels que NetBrains pour le développement et l'environnement virtuel Java. J'ai également réalisé une carte mentale expliquant comment le faire.</p>
        </div>`,

    "p3": `<div>
            <p>Objectif : création et gestion d'une base de données sur le Titanic</p>
            <p>Nous avons créé une base de données sur le Titanic en SQL en commençant par récolter des informations utiles pour établir les relations, puis un schéma, et enfin en la réalisant sur un poste de travail. Nous avons aussi créé des tests pour vérifier si la base fonctionnait, ainsi que des requêtes spécifiques et un bilan.</p>
            <p>J'ai fait la partie création de la base de données et une partie des tests pour vérifier son bon fonctionnement.</p>
            <p>Liens :<br></p>
                <ul>
                    <li><a href="../pdf/etape1_francoue.pdf">Etape 1</a></li>
                    <li><a href="../pdf/etape2_francoue.pdf">Etape 2</a></li>
                    <li><a href="../pdf/etape3_francoue.pdf">Etape 3</a></li>
                    <li><a href="../pdf/bilan_S1_04_francoue.pdf">Bilan</a></li>
                </ul>
        </div>`,

    "p4": `<div>
            <p>Objectif : réaliser un site web qui convient aux 3ème en recherche de stage</p>
            <p>Nous avons récolté des informations sur IBM et compilé cela dans un recueil de besoins. Ensuite, nous avons développé une maquette d’un site web institutionnel, puis l’avons réalisé en HTML et CSS de manière à ce qu’il soit compréhensible pour des élèves de 3ème en recherche de stage. Nous avons également procédé à une auto-évaluation selon certains critères.</p>
            <p>J'ai collecté la plupart des informations sur leur secteur économique, réalisé une partie des pages de la maquette et fait la majorité du code HTML du site final.</p>
        </div>`,

    "p5": `<div>
            <p>Objectif : Nettoyer et analyser une base de données</p>
            <p>Nous avons créé un code SQL pour extraire de la base de données des produits alimentaires ceux ayant le tag "biscuit-and-cakes" et vendus aux États-Unis. Un rapport en anglais a été rédigé pour analyser le nutriscore avec plusieurs graphiques réalisés en R Markdown.</p>
            <p>Je me suis occupé de faire les graphiques et le code SQL pour extraire les données.</p>
        </div>`,
    "p6": `<div>
            <p> Objectif : Créer un guide d'installation de Debian en anglais</p>
            <p>J'ai réalisé un guide en anglais sur comment installer Debian 12 avec un serveur PHP et PostgreSQL ainsi que la mise en place de phppgmyadmin</p>
            <p>Liens :<br></p>
                <ul>
                    <li><a href="../pdf/Rapport.pdf">Guide</a></li>
                </ul>
            </div>`,
    "p7": `<div>
            <p> Objectif : Développer un logiciel pour des gérants de club de ski</p>
            <p>Nous avons réalisé un logiciel en Java et JavaFX à destination des clubs de ski leur permettant de gérer les membres, les trajets, le prêt de matériels ainsi que les cours de ski. </p>
            <p>Je me suis occupé de la partie algorithmique et du backend en Java</p>
            <p>Liens :<br></p>
                <ul>
                    <li><a href="../pdf/Rapport Gestion de projet.pdf">Gestion de projet</a></li>
                    <li><a href="../pdf/Dossier conception IHM.pdf">Dossier de conception</a></li>
                    <li><a href="../pdf/Dossier d'analyse et de conception.pdf">Dossier d'analyse</a></li>
                </ul>
        </div>`,
    "p8" : `<div>
        <p>Objectif : Développer et déployer une application web valorisant le patrimoine culturel</p>
        <p>Nous avons réalisé une application web en PHP mettant en valeur les maisons d'llustres faisant partie du patrimoine culturel. Notre site permet de les rechercher sur une carte interractive ainsi que de le noter et voir diverses informations à leur propos. </p>
            <p>Je me suis occupé de la partie algorithmique et du backend en PHP ainsi que des contrôleurs</p>
            <p>Liens :<br></p>
            <ul>
                <li><a href="../pdf/Doc Final GP.pdf">Phase de cadrage</a></li>
                <li><a href="../pdf/Document_final_phase2.pdf">Dossier de conception</a></li>
                <li><a href="../pdf/equipe16-rendu-phase3.pdf">Bilan de projet</a></li>
            </ul>
    </div>`,
    "p9" : `<div>
                <p>Objectif : Réaliser un site web utilisant une API publique</p>
                <p>Nous avons réalisé un site web permettant de rechercher des amiibos par nom, séries, et personnage à l'aide de l'API AmiiboAPI. Lors de la recherche nous pouvons également filtrer le résultat. NOus avons également ajouté la possibilité de les ajouter aux favoris ou dans notre collection</p>
                <p>Je me suis occupé de la réalisation des filtres et de la communication avec l'API.</p>
                <p>Lien du site :</p>
                <p><a href="https://maxime-rastelli.github.io/html/">MyAmiiboList</a></p>
            </div>`,
    "p10" : `<div>
                <p>Objectif : Réaliser un bot permettant d'automatiser des tâches répétitives</p>
                <p>J'ai réalisé un bot permettant de faire des captcha, de créer des salons ou des rôles temporaires sur Discord en Python. Je me suis aidé de différentes tels que discorp.py permettant de faire le lien avec l'API officiel de Discord, pour les captchas, j'ai utilisé la librairie captcha.</p>
                <p>Liens : <a href="https://github.com/sogata-aw/MultiSpoon"> MultiSpoon</a></p>
            </div>`

};

let last_click = null;

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
            view.articleMoreInfo.innerHTML = more_info_text[article.id];
            last_click = article.id;
            view.articleMoreInfo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    })
});
