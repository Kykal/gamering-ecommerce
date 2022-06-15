import React from 'react';


//Custom components
import Product from './Product';


//Main component content
const Products = ({products, language}) => {

	//Component render
	return (
		<>
			{products && products.map( product => (
				<Product key={product.id} product={product} language={language} />
			) )}
		</>
	);
};


export default Products; //Export main component