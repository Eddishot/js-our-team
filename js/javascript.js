

const cardContainer = document.querySelector(".team-container");

const buttonAdd = document.getElementById("addMemberButton");



const utenti = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Croll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: " walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social MEdia Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]


console.log(utenti)




// aggiungo add events listeners

buttonAdd.addEventListener("click", function(){
    const name = document.getElementById("name").value
    const role = document.getElementById("role").value
    const image = document.getElementById("image").value

    
    const user ={
        name: name,
        role: role,
        image: image
    }
    
    utenti.push(user)
    
    cardPrint(user)
    
})



function arrayprint(){
    // resetto il container

    cardContainer.innerHTML = ""

    //  creo un ciclo for estrarre ogni utente

    for ( i = 0; i < utenti.length; i++) {
        const singoloUtente = utenti[i];
        cardPrint(singoloUtente)
    }
}


function cardPrint(singoloUtente){
    cardContainer.innerHTML += 
        `   <div class="team-card">
                <div class="card-image">
                    <img src="img/${singoloUtente.image} alt="${singoloUtente.name}">
                
                </div> 
                <div class="card-text">
                    <h2>${singoloUtente.name}</h2>
                    <p>${singoloUtente.role}</p>
                </div>

            </div>`
        
    
}