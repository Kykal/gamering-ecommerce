export const parseUrl = (preUrl) => {
	const postUrl = preUrl.replace(' ', '+');

	return postUrl;
};