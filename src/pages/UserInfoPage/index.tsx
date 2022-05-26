import { FC } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from 'components/UserInfo';

const UserInfoPage: FC = () => {
	const { id } = useParams();

	return <UserInfo id={id} />;
};

export default UserInfoPage;
