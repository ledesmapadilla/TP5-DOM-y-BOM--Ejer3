const cargarTarea = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(`aqui cargartarea`);

  const tarea = formulario[0].value;
  console.log(tarea);

  /* crear card */
  const card = document.createElement("div");
  card.className = "col-md-4 col-lg-3";
  card.innerHTML = `<div class="card"><div class="card-body text-center"><h5 class="card-title">Tarea</h5><p class="card-text">${tarea}</p><button class="btn btn-primary">Eliminar</button></div></div>`;


  /* borrar card (esto va inmediatamente despues de crear la card) */
  const tareaBorrada = card.querySelector(".btn-primary");
  console.log(tareaBorrada);

  tareaBorrada.addEventListener("click", () => {
    card.remove();
  });

  nuevaCard.appendChild(card);

  formulario.reset();

  /* const tareaFuera = tareaBorrada.addEventListener("click", () => {
    nuevaCard.remove();
    console.log(tareaFuera);
  }); */
};



const formulario = document.querySelector(".w-50");
console.log(formulario);

const nuevaCard = document.querySelector(".row");
console.log(nuevaCard);

formulario.addEventListener("submit", cargarTarea);
