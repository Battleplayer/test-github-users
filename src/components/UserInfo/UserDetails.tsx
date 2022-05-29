import { FC } from 'react';

import { useQueryGetUserInfo } from './hooks/use-query-get-user-info';

import './styles.scss';

const UserDetails: FC<{ id: string }> = ({ id }) => {
	const { isLoading: isDetailsLoading, error: detailsError, data: userDetails } = useQueryGetUserInfo(id);

	if (isDetailsLoading) {
		return <h2>loading...</h2>;
	}
	if (detailsError) {
		return <h2>oops error</h2>;
	}
	const { avatar_url, name, email, location, created_at, followers, following } = userDetails;

	const date = created_at ? new Date(Date.parse(created_at)).toLocaleDateString() : '';

	return (
		<div className="about">
			{avatar_url ? <img src={avatar_url} alt="user avatar" /> : <span>No avatar</span>}
			<div>
				<p>Name: {name}</p>
				<p>Email: {email}</p>
				<p>Location: {location}</p>
				<p>Join date: {date}</p>
				<p>Followers: {followers}</p>
				<p>Following: {following}</p>
			</div>
		</div>
	);
};

export default UserDetails;
