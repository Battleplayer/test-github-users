import { FC, useMemo } from 'react';
import { ISearchedUser } from 'interfaces';

interface IUserDetailsProps {
	user: Partial<ISearchedUser>;
}

const UserDetails: FC<IUserDetailsProps> = ({ user }) => {
	const { avatar_url, name, email, location, created_at, followers, following } = user;
	const date = useMemo(() => new Date(Date.parse(created_at)).toLocaleDateString(), [created_at]);

	return (
		<div className="about">
			<img src={avatar_url} alt="user avatar" />
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
