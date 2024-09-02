let div = document.getElementsByClassName("genre-container")[0]

function fetchAndDisplayGenre(endpoint) {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        data.map(element => {
            let divCard = document.createElement("div")
            divCard.classList.add("card")
        })
    })
}