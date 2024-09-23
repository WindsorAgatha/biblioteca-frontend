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

function submitForm(event) {
    event.preventDefault()

    var nome = document.getElementById("nome-formulario").value
    var senha = document.getElementById("senha-formulario").value
    var confirmar = document.getElementById("confirmar-senha").value
    var telefone = document.getElementById("telefone-formulario").value
    var email = document.getElementById("email-formulario").value
    var endereco = document.getElementById("endereco-formulario").value

    console.log(nome)
    // console.log(event.target.value)
}

