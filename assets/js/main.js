//Crea un array di oggetti
const team = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        urlFoto : "./assets/img/wayne-barnett-founder-ceo.jpg",
    },
    {
    
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        urlFoto : "./assets/img/angela-caroll-chief-editor.jpg",
    
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        urlFoto : "./assets/img/walter-gordon-office-manager.jpg",
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        urlFoto : "./assets/img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        urlFoto : "./assets/img/scott-estrada-developer.jpg",
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        urlFoto : "./assets/img/barbara-ramos-graphic-designer.jpg",
    },
]

const container = document.getElementById("container");

//ciclo 1 volta per ogni elemento 
team.forEach((team) => {
    creaCard(team);
})

function creaCard(team){
    //Creo la Card
    const card = document.createElement("div");
    card.classList.add("card");
    card.style = "width: 13rem";

    //Creo e aggiungo l' immagine con le classi
    const immagine = document.createElement("img");
    immagine.src = team.urlFoto;
    immagine.classList.add("card-img-top")
    card.append(immagine);

    //Creo e aggiungo un contenitore per i dati
    const textContainer = document.createElement("div");
    textContainer.classList.add("card-body");
    card.append(textContainer);

    //Creo e aggiungo un titolo alla carta(nome)
    const namePerson = document.createElement("h4");
    namePerson.classList.add("card-title");
    namePerson.append(document.createTextNode(team.nome));
    textContainer.append(namePerson);

    //Creo e aggiungo una descrizione alla carta(lavoro)
    const lavoro = document.createElement("p");
    lavoro.classList.add("card-text");
    lavoro.append(document.createTextNode(team.ruolo));
    textContainer.append(lavoro);

    container.appendChild(card);
}


