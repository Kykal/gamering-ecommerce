export const getLocalStorageItems = () => {
	//Fetch cart key from localStorage and turn from string to an object array
	const items = fetchItems();

	//If there is no cart key, create it and recall this function
	if( !items ){
		localStorage.setItem('cart', '[]');
		return getLocalStorageItems();
	}

	return items;
}

export const addItemToCart = (newItem) => {

	let items = fetchItems();

	items.push(newItem);

	items = JSON.stringify(items);

	localStorage.setItem('cart', items);
};




//LOCAL USE ONLY
const fetchItems = () => {
	return JSON.parse(localStorage.getItem('cart'));
}