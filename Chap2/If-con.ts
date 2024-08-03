interface product {
    name: string,
    price: number,
    discount?: number
}

let listProduct: product[] = [
    { name: 'Bao 1', price: 1000, discount: 5 },
    { name: 'Bao 2', price: 2000, discount: 10 }
]
console.log(listProduct);

let item = listProduct[0];
let totalPrice: number;
switch (item.name) {
    case 'Bao 1':
        totalPrice = item.discount && item.discount !== 0 ? item.price - (item.price * (item.discount / 100)) : item.price;
        console.log(totalPrice);

        break;

    default:
        break;
}
