window.onload = function () {
  let body = document.querySelector("body");
  let moviesListTitulo = document.querySelector(".moviesListTitulo");

  /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    */
  moviesListTitulo.innerHTML = "LISTADO DE PELÍCULAS";
  moviesListTitulo.style.color = "white";
  moviesListTitulo.style.backgroundColor = "teal";
  moviesListTitulo.style.padding = "20px";

  document.querySelector(".logoDH").addEventListener("mouseover", () => {
    body.classList.add("fondoMoviesList");
  });
};
