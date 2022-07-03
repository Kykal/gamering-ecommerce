export const parseURL = (oldURL) => {
	const newUrl = oldURL.split(' ').join('+');

	return newUrl;
};
