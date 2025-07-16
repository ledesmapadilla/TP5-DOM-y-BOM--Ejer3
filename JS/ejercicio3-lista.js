const cargarTarea = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(`aqui cargartarea`);

  const tarea = formulario[0].value;
  console.log(tarea);

  /* crear lista */

  document.createElement("ul")

  formulario.reset();
};

/* borrar tarea */

const formulario = document.querySelector(".w-50");
console.log(formulario);


formulario.addEventListener("submit", cargarTarea);
