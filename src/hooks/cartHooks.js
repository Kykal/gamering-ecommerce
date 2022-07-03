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

	//Fetch items from localStorage
	let items = fetchItems();

	//Push in the array new item
	items.push(newItem);

	//Stringify the array
	items = JSON.stringify(items);

	//Save in localStorage as string
	localStorage.setItem('cart', items);
};




//LOCAL USE ONLY
const fetchItems = () => {
	return JSON.parse(localStorage.getItem('cart'));
}