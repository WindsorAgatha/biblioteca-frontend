document.getElementById("book-form").addEventListener('submit', function (e) {
    e.preventDefault()
    
const livro = {
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        imgUrl: document.getElementById("imgUrl").value || null,
        avaliacao: parseInt(document.getElementById("avaliacao").value || null),
        descricao: document.getElementById("descricao").value || null,
        quantidade: document.getElementById("quantidade").value,
        isbn: document.getElementById("isbn").value,
        anoDePublicacao: document.getElementById("anoPublicacao").value,
        editora: document.getElementById("editora").value,
    }

    console.log(livro)

    fetch('http://localhost:5029/api/livro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro),
    })
        .then(response => response.json())
        .then(data => {
            alert("livro cadastrado com sucesso!")
            console.log(data)
        })
        .catch((error) => {
            alert("não foi possível cadastrar o livro" + error)
        })


})