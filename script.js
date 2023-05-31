function selectCategory(category) {
  document.getElementById('categoria').value = category;
}

function showSelectedCategory() {
  var selectedCategory = document.getElementById('categoria').value;
  
}
function convertir(Cantidad, Categoria) {
   
  let resultadoConversion = 0

  if (Categoria == "Estudiante") {
      resultadoConversion = Cantidad*0.2*200
  } else if (Categoria == "Trainee"){
      resultadoConversion = Cantidad*0.5*200
  }
  else if (Categoria == "Junior"){
      resultadoConversion = Cantidad*0.15*200
  }

  return resultadoConversion
}

let formulario = document.getElementById("form_conversor");
let divResultado = document.getElementById("resultado");

let cant = document.getElementById("cantidad")

let cat = document.getElementById("categoria")

formulario.addEventListener("submit",(evento) => {
  evento.preventDefault(); 

  let montoTotal = convertir(cant.value , cat.value);
  divResultado.textContent = "$" + montoTotal;
 
});








