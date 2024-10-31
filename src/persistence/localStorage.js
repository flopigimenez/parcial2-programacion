//---LOCALSTORAGE---
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    }else{
        return [];
    }
};

//guardar en local storage

//recibir un producto
export const setInLocalStorage = (productIn) => {
    //traer los elementos
    let productInLocal = handleGetProductLocalStorage();
    const exixtingIndex = productInLocal.findIndex((productLocal) =>
        productLocal.id == productIn.id
    )

    //verificar si el elemento exixte
    if(exixtingIndex !== -1){
        //si existe debe reemplazarse
        productInLocal[exixtingIndex] = productIn;
    }else{
        //si no agregarse
        productInLocal.push(productIn);
    }
    
    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productInLocal));
};