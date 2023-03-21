
export const fetchCats = async () => {
	const res = await fetch('https://api.thecatapi.com/v1/breeds');
	return res.json();
};
