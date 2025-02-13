const products = [
    {
        id: '01',
        nombre: 'Anteojos de sol Rusty ANT GENUS',
        category: 'verano',
        precio: '123.000$',
        details: 'Género: Unisex Color del Armazón: Negro y Rojo Color y Tipo del Lente: Rojo espejado Material: Acetato Estilo: Envolvente deportivo',
        image: './src/assets/img/LentesDeSol.png',
    },
    {
        id: '02',
        nombre: 'Anteojos de sol Rusty PLAINZ',
        category: 'verano',
        precio: '89.000$',
        details: '',
        image: './src//assets/img/LentesDeSol2.png',
    },
    {
        id: '03',
        nombre: 'Anteojos de sol Vulk Mary Ramon',
        category: 'Todos',
        precio: '112.000$',
        details: '',
        image: './src/assets/img/LentesDeSol3.png',
    },
    {
        id: '04',
        nombre: 'Anteojos de sol Rusty MVB REVO RED',
        category: 'Todos',
        precio: '40.000$',
        details: '',
        image: "./src/assets/img/LentesDeSol4.png",
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500)
    })
}
export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category))
        }, 1500);
    });
};
