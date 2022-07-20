function checkZipCode() {
    let zipCode = document.getElementById("zipCode").value

    if (zipCode.length !== 8) {
        alert(`This Zip Code is invalid. Please try again.`)
        return
    }

    let URL = `https://viacep.com.br/ws/${zipCode}/json/`

    fetch(URL).then(function(response) {
        response.json().then(function(data) {
            console.log(data)
            showAdress(data)
        })
    })
}

function showAdress(dados) {
    let resultado = document.querySelector("#showAdress")
    if (dados.erro) {
        resultado.innerHTML = `<p>The address could not be found. Please try again.</p>`
    } else {
        resultado.innerHTML = `<p>Adress: ${dados.logradouro}</p>
                               <p>Complement: ${dados.complemento}</p>
                               <p>Zone: ${dados.bairro}</p>
                               <p>Location: ${dados.localidade} - ${dados.uf}</p>`
    }
}