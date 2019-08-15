const petsData =[
    {
        nombre: "Malvavisco",
        especie: "Gato",
        comidasFavoritas: ["Comida Mojada","Comida Seca","<strong>Cualquier</strong> Comida"],
        añoNacimiento: 2019,
        foto:"https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
  {
    nombre: "Barksalot",
    especie: "Dog",
   añoNacimiento: 2008,
    foto: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
   
  {
    nombre: "Meowsalot",
    especie: "Cat",
    comidasFavoritas: ["tuna", "catnip", "celery"],
    añoNacimiento: 2012,
    foto: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];
function age(añoNacimiento){
    let calculoEdad = new Date().getFullYear() - añoNacimiento
    if (calculoEdad == 0) {
        return 'Cachorro'
    }
    else{
        return `${calculoEdad} años`
    }
    
}
function comidas(comidas){
    return`
<h4> Comida Favorita</h4>
<ul class="food-list">
    ${comidas.map((comida) =>`<li>${comida} </li>`).join("")}
</ul>
`
}

function petTemplate(pet){
     return `
<div class="animal">
<img class="pet-photo" src="${pet.foto}" alt="">
<h2 class="pet-name">${pet.nombre} <span class="species">(${pet.especie})</span></h2>
<p><strong>Age: </strong>${age(pet.añoNacimiento)}</p>
${pet.comidasFavoritas ? comidas(pet.comidasFavoritas): '' }
</div>
`
}

document.getElementById("app").innerHTML = `
<h1 class="app-tittle">Mascotas (${petsData.length}) resultados</h1>
${petsData.map(petTemplate).join('')}
<p class="footer">Estas ${petsData.length} fueron añadidas recientemente</p>
`
