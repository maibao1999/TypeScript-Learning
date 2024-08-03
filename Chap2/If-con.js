var listProduct = [
    { name: 'Bao 1', price: 1000, discount: 5 },
    { name: 'Bao 2', price: 2000, discount: 10 }
];
console.log(listProduct);
var item = listProduct[0];
var totalPrice;
switch (item.name) {
    case 'Bao 1':
        totalPrice = item.discount && item.discount !== 0 ? item.price - (item.price * (item.discount / 100)) : item.price;
        console.log(totalPrice);
        break;
    default:
        break;
}
