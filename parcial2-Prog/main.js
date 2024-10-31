import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css'

// ---APLICACION---
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let prodictoActivo = null;
export const setProductoActivo = (productoIn) => {
    prodictoActivo = productoIn;
};


handleGetProductToStore();
renderCategories();

//---HEATHER---
//abrir modal
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
    openModal();
});

//buscar
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
});