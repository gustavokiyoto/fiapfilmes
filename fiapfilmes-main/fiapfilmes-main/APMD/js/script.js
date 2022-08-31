function Card(filme){
    let card = document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "poster do filme topgear"
    
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.innerText = filme.titulo
    
    card.appendChild(poster)
    card.appendChild(titulo)

    return card
}

const dados = 
[{
    poster: "./images/topgear.jpg",
    titulo: "Topgear"
},
 {
    poster: "./images/topgear.jpg",
    titulo: "Topgear"
 }
]

let filmes = document.querySelector("#filmess")

dados.forEach((filme)=>{filmes.appendChild(Card(filme))})
