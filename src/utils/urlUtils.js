export const parseUrl = (preUrl) => {
	let postUrl = preUrl
	
	//Removes space before and after string
	postUrl = postUrl.trim();

	//Split words separated by spaces. then join them with plus signs
	postUrl = postUrl.split(' ').join('+');

	return postUrl;
};