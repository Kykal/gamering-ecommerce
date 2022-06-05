export const checkCart = () => {

	const cart = readCart();

	if(cart===null){
		createCart();
		return readCart();
	}

	return cart
}

//
const addItem = (newItem) => {

};

const deleteItem = (deleteItem) => {

};




//LOCAL USE
//Create cart
const createCart = () => {
	localStorage.setItem('cart', '');
};

//Get cart items
const readCart = () => {
	const items = localStorage.getItem('cart');

	if(items.length === 0){
		return 0;
	}

	return JSON.parse(items);
};
