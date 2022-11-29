export const getCartFromLS = () => {

    const data = JSON.parse(localStorage.getItem('persist:root'));
    const temp = JSON.parse(data.cart)
    return temp.cart ? temp.cart : [];
};