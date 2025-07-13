const cargarTarea = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(`aqui cargartarea`);

  const tarea = formulario[0].value;
  console.log(tarea);

  const card = document.createElement("div");
  card.className = "col-md-4 col-lg-3";
  card.innerHTML = `<div class="card"><div class="card-body text-center"><h5 class="card-title">Tarea</h5><p class="card-text">${tarea}</p></div></div>`;
  nuevaCard.appendChild(card);

  formulario.reset();
};

const formulario = document.querySelector(".w-50");
console.log(formulario);

const nuevaCard = document.querySelector(".row");
console.log(nuevaCard);

/* const tareaCard = document.querySelector(".card-text");
console.log(tareaCard); */

formulario.addEventListener("submit", cargarTarea);
