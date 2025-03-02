const products = [
    {
        id: 1,
        name: 'Anteojos de sol Rusty ANT GENUS',
        category: 'verano',
        price: '123.000$',
        img: './src/assets/img/LentesDeSol.png',
    },
    {
        id: 2,
        name: 'Anteojos de sol Rusty PLAINZ',
        category: 'verano',
        price: '89.000$',
        img: './src//assets/img/LentesDeSol2.png',
    },
    {
        id: 3,
        name: 'Anteojos de sol Vulk Mary Ramon',
        category: 'Todos',
        price: '112.000$',
        img: './src/assets/img/LentesDeSol3.png',
    },
    {
        id: 4,
        name: 'Anteojos de sol Rusty MVB REVO RED',
        category: 'Todos',
        price: '40.000$',
        img: "./src/assets/img/LentesDeSol4.png",
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500)
    });
};

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
