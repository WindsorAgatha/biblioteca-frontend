
let url = "http://localhost:5029/api/Livro"
let div = document.getElementsByClassName("container")[0]

function fetchAndDisplayLivros(endpoint) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            data.map(element => {
                let divCard = document.createElement("div")
                divCard.classList.add("card")
                let divCover = document.createElement("div")
                divCover.classList.add("div-cover")
                let a = document.createElement("a")
                a.classList.add("detalhes")
                a.textContent = "Detalhes"
                let img = document.createElement("img")
                img.src = element.imgUrl
                divCover.appendChild(a)
                divCard.appendChild(divCover)
                divCard.appendChild(img)
                div.appendChild(divCard)
            })
        })
}
fetchAndDisplayLivros(url)

function toggleTheme() {
    var body = document.getElementsByTagName("body")
    var button = document.getElementById("btn")
    body.classList.toggle("night-mode")

    if (body.classList.contains("night-mode")){
        button.style.transform = "translateX(30px)"
    }
    else{
        button.style.transform = "translate(0)"
    }
}
