// -------------------------- PEGANDO A DATA ------------------------------

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').innerText = today

// -------------------------- SELECIONANDO DADOS E GUARDANDO EM ARRAY ------------------------------

// document.querySelector('#km').value
// document.querySelector('#kcal').value



function colectValues() {
    // definindo divs na ordem de criação

    var divInput = document.getElementById('input')
    var divContainer = document.getElementById('container')
    var divSubsection = document.getElementById('subsection')
    var divplaceValues = document.getElementById('placeValues')

    var valueKm = document.getElementById('km').value
    var valueKcal = document.getElementById('kcal').value
    var placeValues = document.getElementById('placeValues') 

    var divplaceValues = document.createElement('div');
    divplaceValues.className = "kmClass";
    divplaceValues.id = "km_" + Math.floor(Math.random() * 90000) + 10000;
    divplaceValues.innerText = valueKm

    divInput.appendChild(divContainer)
    divContainer.appendChild(divSubsection)
    divSubsection.appendChild(divplaceValues)
}

    