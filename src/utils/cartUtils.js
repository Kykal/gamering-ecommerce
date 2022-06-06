export const checkCart = () => {

	const cart = readCart();

	//If localStorage has no cart item...
	if(cart===null){
		createCart(); //Create it
		return checkCart(); //Call this function again
	}

	return JSON.parse(cart);
}

//
const addItem = (newItem) => {
	return;
};

const deleteItem = (deleteItem) => {
	return;
};

//Get cart items length
export const getCartLength = () => {
	return JSON.parse(readCart()).length;
};



//LOCAL USE
//Create cart
const createCart = () => {
	localStorage.setItem('cart', '[]');
};


const readCart = () => {
	return localStorage.getItem('cart');
}
