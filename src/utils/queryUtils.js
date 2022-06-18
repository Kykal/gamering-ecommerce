export const validateURL = (preURL) => {
	let postURL = preURL.split(' ').join('+');

	return postURL;
};

export const decodeURL = (preURL) => {
	let postURL = preURL.split('+').join(' ');

	return postURL;
};
