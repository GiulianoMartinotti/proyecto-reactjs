const products = [
    {
        id: 1,
        name: 'Anteojos de sol Rusty ANT GENUS',
        category: 'Rusty',
        description: 'Género: Unisex, Color del Armazón: Negro y Rojo, Color y Tipo del Lente: Rojo espejado, Material: Acetato, Estilo: Envolvente deportivo',
        price: '123.000',
        image: '../src/assets/img/LentesDeSol.png',
    },
    {
        id: 2,
        name: 'Anteojos de sol Rusty PLAINZ',
        category: 'Rusty',
        description: 'Género: Unisex, Color del Armazón: Negro Brillante, Color y Tipo del Lente: Negro Polarizado, Material: Acetato, Estilo: Cuadrado',
        price: '89.000',
        image: '../src//assets/img/LentesDeSol2.png',
    },
    {
        id: 3,
        name: 'Anteojos de sol Vulk Marky Ramone',
        category: 'Vulk',
        description: 'Género: Hombre, Color del Armazón: Negro brillante, Color y Tipo del Lente: Negro Polarizado, Material: Acetato, Estilo: Cuadrado, Medida del Lente: 148 mm',
        price: '112.000',
        image: '../src/assets/img/LentesDeSol3.png',
    },
    {
        id: 4,
        name: 'Anteojos de sol Rusty MVB REVO RED',
        category: 'Rusty',
        description: 'Género: Unisex, Color del Armazón: Negro mate, Color y Tipo del Lente: Rojo espejado, Material: Acetato, Estilo: Cuadrado',
        price: '40.000',
        image: "../src/assets/img/LentesDeSol4.png",
    },
    {
        id: 5,
        name: 'Anteojos de sol Rusty Yau Mdblu Revo Green ',
        category: 'Rusty',
        description: 'Género: Unisex, Color del Armazón: Negro, Color y Tipo del Lente: Azul y purpura Polarizado, Material: Acetato, Estilo: Envolvente deportivo',
        price: '132.000',
        image: "../src/assets/img/LentesDeSol5.png",
    },
    {
        id: 6,
        name: 'Anteojos de Sol Vulk Levol S-Black ',
        category: 'Vulk',
        description: 'Género: Unisex, Color del Armazón: Plateado, Color y Tipo del Lente: Negro Polarizado, Material: Metal, Estilo: Cuadrado',
        price: '84.000',
        image: "../src/assets/img/LentesDeSol6.png",
    },
    {
        id: 7,
        name: 'Anteojos de Sol Vulk 53&3 Mblk 03 Edición Mary Ramone',
        category: 'Vulk',
        description: 'Género: Hombre, Color del Armazón: Negro Mate, Color y Tipo del Lente: Negro Polarizado, Material: Metal, Estilo: Aviador',
        price: '84.000',
        image: "../src/assets/img/LentesDeSol7.png",
    },
    {
        id: 8,
        name: 'Anteojos de Sol Vulk Deserve Mblk/G3262 Emerald',
        category: 'Vulk',
        description: 'Género: Unisex, Color del Armazón: Negro, Color y Tipo del Lente: Verde esmeralda Uniforme,  Material: Acetato, Estilo: Cuadrado',
        price: '120.000',
        image: "../src/assets/img/LentesDeSol8.png",
    },
    {
        id: 9,
        name: 'Anteojos de Sol Ray-Ban New Aviator',
        category: 'Ray-Ban',
        description: 'Género: Unisex, Color del Armazón: Dorado, Color y Tipo del Lente: Azul Degrades, Material: Metal, Estilo: Aviador',
        price: '362.000',
        image: "../src/assets/img/LentesDeSol9.png",
    },
    {
        id: 10,
        name: 'Anteojos de sol Kipling KP4070',
        category: 'Kipling',
        description: 'Género: Mujer, Color del Armazón: Negro, Color y Tipo del Lente: Gris degrade, Material: Acetato y Metal, Estilo: Hexagonal',
        price: '163.000',
        image: "../src/assets/img/LentesDeSol10.png",
    },
    {
        id: 11,
        name: 'Anteojos de Sol Ray-Ban Aviator Large Metal',
        category: 'Ray-Ban',
        description: 'Género: Unisex, Color del Armazón: Dorado, Color y Tipo del Lente: Verde Oscuro Uniforme, Material: Metal, Estilo: Aviador',
        price: '300.000',
        image: "../src/assets/img/LentesDeSol11.png",
    },
    {
        id: 12,
        name: 'Anteojos de sol Kipling KP4069',
        category: 'Kipling',
        description: 'Género: Mujer, Color del Armazón: Negro, Color y Tipo del Lente: Purpura, Material: Acetato, Estilo: Cat eye',
        price: '128.000',
        image: "../src/assets/img/LentesDeSol12.png",
    },
    {
        id: 13,
        name: 'Anteojos de Sol Ray-Ban 3671CH/60 Polarizado',
        category: 'Ray-Ban',
        description: 'Género: Unisex, Color del Armazón: Negro, Color y Tipo del Lente: Verde, Material: Acetato, Estilo: Cuadrado',
        price: '441.000',
        image: "../src/assets/img/LentesDeSol13.png",
    },
    {
        id: 14,
        name: 'Anteojos de Sol Kipling KP4071',
        category: 'Kipling',
        description: 'Género: Mujer, Color del Armazón: Havana , Color y Tipo del Lente: Marrón degrade, Material: Acetato y Metal, Estilo: Mariposa',
        price: '163.000',
        image: "../src/assets/img/LentesDeSol14.png",
    },
    {
        id: 15,
        name: 'Anteojos de Sol Kipling KP4073',
        category: 'Kipling',
        description: 'Género: Mujer, Color del Armazón: Marrón brillante, Color y Tipo del Lente: Marrón uniforme, Material: Acetato, Estilo: Cuadrado',
        price: '148.000',
        image: "../src/assets/img/LentesDeSol15.png",
    },
    {
        id: 16,
        name: 'Anteojos de Sol Ray-Ban Round Metal 3447',
        category: 'Ray-Ban',
        description: 'Género: Mujer , Color del Armazón: Dorado, Color y Tipo del Lente: Celeste Polarizado, Material: Metal, Estilo: Redondo',
        price: '342.000',
        image: "../src/assets/img/LentesDeSol16.png",
    },
];



/* 
    {
        id: ,
        name: '',
        category: '',
        description: '',
        price: '',
        image: "../src/assets/img/LentesDeSol.png",
    },
*/


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
            resolve(products.filter((product) => product.category === category));
        }, 1500);
    });
};

