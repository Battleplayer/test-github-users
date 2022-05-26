import './styles.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryGetUserInfo } from './hooks/use-query-get-user-info';
import UserDetails from './partial/UserDetails';
import { useQueryGetUserRepos } from './hooks/use-query-get-user-repos';
import UserRepos from './partial/UserRepos';

const UserInfo: FC<{ id: string }> = ({ id }) => {
	const { isLoading: isDetailsLoading, error: detailsError, data: userDetails } = useQueryGetUserInfo(id);
	const { isLoading: isReposLoading, error: reposError, data: userRepos } = useQueryGetUserRepos(id);
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	if (isDetailsLoading && isReposLoading) {
		return <h2>loading...</h2>;
	}
	if (detailsError || reposError) {
		return <h2>oops error</h2>;
	}

	return (
		<div className="user-info">
			<button type="button" onClick={handleBack}>
				Go back
			</button>
			<UserDetails user={userDetails} />
			<UserRepos userRepos={userRepos || []} />
		</div>
	);
};

export default UserInfo;
