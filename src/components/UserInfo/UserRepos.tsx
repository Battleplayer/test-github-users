import SearchField from 'components/common/SearchField';
import { FC, useCallback, useMemo, useState } from 'react';
import { useQueryGetUserRepos } from './hooks/use-query-get-user-repos';
import UserRepoItem from './partial/UserRepoItem';

const UserRepos: FC<{ id: string }> = ({ id }) => {
	const [searchRepo, setSearchRepo] = useState('');
	const { isLoading: isReposLoading, error: reposError, data: userRepos } = useQueryGetUserRepos(id);

	const filteredRepos = useMemo(() => {
		if (userRepos) {
			if (!searchRepo.length) return userRepos;
			return userRepos.filter((repo) => repo.name.includes(searchRepo));
		}
		return [];
	}, [userRepos, searchRepo]);

	const handleSearch = useCallback((value) => {
		setSearchRepo(value);
	}, []);

	if (isReposLoading) {
		return <h2>loading...</h2>;
	}
	if (reposError) {
		return <h2>oops error</h2>;
	}

	return (
		<div className="user-repos">
			<SearchField value={searchRepo} onSearch={handleSearch} />
			<ul>
				{filteredRepos.length > 0 &&
					filteredRepos.map(({ stargazers_count, html_url, name, forks_count }) => (
						<UserRepoItem
							key={name}
							stargazers_count={stargazers_count}
							html_url={html_url}
							name={name}
							forks_count={forks_count}
						/>
					))}
			</ul>
		</div>
	);
};

export default UserRepos;
