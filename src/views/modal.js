// ---POPUP---
import { prodictoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/products";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    closeModal();
});

//funciones abrir/cerrar modal
export const openModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton")
    if(prodictoActivo){
        buttonDelete.style.display = "block";
    }else {
        buttonDelete.style.display = "none";
    }
    if(prodictoActivo){
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categoria = document.getElementById("categoria");

        nombre.value = prodictoActivo.nombre;
        imagen.value = prodictoActivo.imagen;
        precio.value = prodictoActivo.precio;
        categoria.value = prodictoActivo.categoria;
    }
};


export const closeModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
    
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoria";
}

//eliminar producto
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    handleButtonDelete();
});
const handleButtonDelete = () => {
    handleDeleteProduct();
    
}