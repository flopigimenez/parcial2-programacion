//---STORE---
import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal";

//funcion que se encarga de traer elementos y llamar al render
export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

//se encarga de filtrar y de rendererizar la seccion con todos sus respectivos elementos
export const handleRenderList = (prouctosIn) => {
    //filtrado de arrays por categoria
    const hamburguesas = prouctosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = prouctosIn.filter((el) => el.categoria === "Papas");
    const gaseosas = prouctosIn.filter((el) => el.categoria === "Gaseosas");

    //reenderiza los elementos de la seccion
    const renderProductGroup = (productos, titulo) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class='container-target-item' id='product-${producto.categoria}-${index}'>
                    <div>
                        <img src='${producto.imagen}'/> 
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class="target-props">
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            });

            //retorna la seccion con todos los elementos dentro
            return `<section class='section-store'>
                    <div class='container-title-section'>
                        <h3>${titulo}<h3/>
                    </div>
                <div class='container-product-store'>
                    ${productosHTML.join("")}
                </div>
            <section/>`;
        } else {
            return "";
        }
    };

    //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storageContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(hamburguesas, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    //se añaden los eventos de manera dinamica
    const addEvents = (prouctosIn) => {
        if (prouctosIn) {
            prouctosIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categoria}-${index}`
                );

                productContainer.addEventListener('click', () => {
                    setProductoActivo(element);
                    openModal();
                });
            });
        }

    };

    addEvents(hamburguesas);
    addEvents(papas);
    addEvents(gaseosas);
};