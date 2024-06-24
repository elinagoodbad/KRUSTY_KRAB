// функция для получения данных из хранилища под ключем cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
// функуция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};

export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => {
    if (curr.subPrice === 0) {
      return acc + curr.item.price;
    } else {
      return acc + curr.subPrice;
    }
  }, 0);
  return totalPrice;
};
//функция для вывода кол-ва товаров в корзине
export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.products.lenght : 0;
};
