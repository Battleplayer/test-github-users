export const getUserInfo = async (id: string) => {
	const response = await fetch(`${process.env.REACT_APP_REQUEST_URL}/users/${id}`);
	return response.json();
};

export const getUserRepos = async (id: string) => {
	const response = await fetch(`${process.env.REACT_APP_REQUEST_URL}/users/${id}/repos`);
	return response.json();
};
