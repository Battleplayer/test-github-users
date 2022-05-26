export const getUsers = async (name: string) => {
	if (!name) return null;
	const response = await fetch(`${process.env.REACT_APP_REQUEST_URL}/search/users?q=${name}`);
	return response.json();
};
