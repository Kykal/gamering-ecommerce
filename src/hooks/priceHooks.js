export const transformPrice = (oldPrice) => {

	let newPrice = parseFloat(oldPrice.toFixed(2));

	if( newPrice > 9999 ){
		newPrice = newPrice.toLocaleString('en').replace(',', ' ');
	}

	return newPrice;
};
