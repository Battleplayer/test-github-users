import './styles.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDetails from './partial/UserDetails';
import UserRepos from './partial/UserRepos';

const UserInfo: FC<{ id: string }> = ({ id }) => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<div className="user-info">
			<button type="button" onClick={handleBack}>
				Go back
			</button>
			<UserDetails id={id} />
			<UserRepos id={id} />
		</div>
	);
};

export default UserInfo;
