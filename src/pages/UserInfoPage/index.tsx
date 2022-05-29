import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import UserDetails from 'components/UserInfo/UserDetails';
import UserRepos from 'components/UserInfo/UserRepos';
import './styles.scss';

const UserInfoPage: FC = () => {
	const { id } = useParams();

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

export default UserInfoPage;
