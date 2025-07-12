//---PRODUCTOS---
import Swal from "sweetalert2";
import { prodictoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";

//guardar
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
});

//funcion de guardar
export const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categoria").value;

    let object = null;

    if (prodictoActivo) {
        object = {
            ...prodictoActivo,
            nombre,
            imagen,
            precio,
            categoria
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        };
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado con exito!",
        icon: "success"
    });

    setInLocalStorage(object);
    handleGetProductToStore();
    closeModal();
};

//eliminar elemento
export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Desea eliminar el elemento?",
        text: "Si lo eliminas no podrás recuperarlo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== prodictoActivo.id);
            //setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }
    });
};