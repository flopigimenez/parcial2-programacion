//---CATEGORIA---
import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoriaIn) => {
    const products = handleGetProductLocalStorage();
    switch (categoriaIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria == categoriaIn)
            handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const resultMayorPrecio = products.sort((a,b) => b.precio - a.precio)
            handleRenderList(resultMayorPrecio);
            break;
        case "menorPrecio":
            const resultMenorPrecio = products.sort((a,b) => a.precio - b.precio)
            handleRenderList(resultMenorPrecio);
            break;
    }
}

//render de la vista categorias
export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulList = document.getElementById('listFilter');
    //creamos esos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    //añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement);
        });
    });

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (element) => {
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el) => {
            if (el.classList.contains('li-active')) {
                el.classList.remove('li-active');
            } else {
                if (element === el) {
                    el.classList.add('li-active');
                }
            }
        });
    };
};