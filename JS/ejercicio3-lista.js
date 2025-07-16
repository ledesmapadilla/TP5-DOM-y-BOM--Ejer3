const cargarTarea = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(`aqui cargartarea`);

  const tarea = formulario[0].value;
  console.log(tarea);

  /* crear lista */

  const tareaLista = document.createElement("div");
  tareaLista.innerHTML = `<ul>
      <li class="border-bottom list-unstyled  ">
        💥<b>Tarea:</b> <p class="d-inline">${tarea}</p><button class="btn btn-primary mx-2">Eliminar</button>
      </li>
    </ul>`;

  /* borrar una tarea de la lista */

  const tareaBorrada = tareaLista.querySelector(".border-bottom");
  console.log(tareaBorrada)
  tareaLista.addEventListener("click", () => {
    tareaBorrada.remove();
  });

  console.log(tareaBorrada);

  nuevaLista.appendChild(tareaLista);

  formulario.reset();
};

const formulario = document.querySelector(".w-50");
console.log(formulario);

formulario.addEventListener("submit", cargarTarea);

const nuevaLista = document.getElementById("tareaLista");
